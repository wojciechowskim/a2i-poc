const Papa = require('papaparse');
const path = require('path');
const fs = require('fs');

const CSVHelpersObject = function () {
  this.getRawFileContent = fileName => {
    const fileStream = fs.readFileSync(`${path.join(__dirname, '../data')}/${fileName}`, 'utf8');
    const rawData = Papa.parse(fileStream, {
      header: true,
      skipEmptyLines: true
    });

    return rawData.data;
  };

  this.getRowsByCommodityCodes = (data, commodities) => data.filter(item => commodities.includes(parseInt(item['Commodity Code'])));

  this.getRowsByCountry = (data, country) => data.filter(item => item.Partner === country);

  this.getNetweight = item => parseInt(item['Netweight (kg)']);

  this.parseCurrency = moneyString => {
    let currency
    currency = moneyString.replace(/\./g, '');
    currency = currency.replace(/\,/g, '');

    return currency;
  }

  this.getValue = item => parseInt((this.parseCurrency((item['Trade Value (US$)'])) * 3.75));

  this.sum = (prev, next) => prev + next;

  this.getFilteredData = (data, commodities, country) => {
    const rowsFilteredByCommodityCodes = this.getRowsByCommodityCodes(data, commodities);
    const rowsFilteredByCountry = this.getRowsByCountry(rowsFilteredByCommodityCodes, country);

    const csvValue = rowsFilteredByCountry.map(item => this.getValue(item)).reduce(this.sum);
    const csvWeight = rowsFilteredByCountry.map(item => this.getNetweight(item)).reduce(this.sum);

    return {
      value: csvValue,
      weight: csvWeight,
      valuePerWeight: csvValue / csvWeight
    };
  };
};

module.exports = CSVHelpersObject;
