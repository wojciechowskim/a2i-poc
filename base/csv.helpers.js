const Papa = require('papaparse');
const path = require('path');
const fs = require('fs');

class CSVHelpersObject {
  getRawFileContent(fileName) {
    const fileStream = fs.readFileSync(`${path.join(__dirname, '../data')}/${fileName}`, 'utf8');
    const rawData = Papa.parse(fileStream, {
      header: true,
      skipEmptyLines: true
    });

    return rawData.data;
  }

  getRowsByCommodityCodes(data, commodities) {
    return data.filter(item => commodities.includes(parseInt(item['Commodity Code'])));
  }

  getRowsByCountry(data, country) {
    return data.filter(item => item.Partner === country);
  }

  getNetweight(item) {
    return parseInt(item['Netweight (kg)']);
  }

  parseCurrency(moneyString) {
    let currency
    currency = moneyString.replace(/\./g, '');
    currency = currency.replace(/\,/g, '');

    return currency;
  }

  getValue(item) {
    return parseInt((this.parseCurrency((item['Trade Value (US$)'])) * 3.75));
  }

  sum(prev, next) {
    return prev + next;
  }

  getFilteredData(data, commodities, country) {
    const rowsFilteredByCommodityCodes = this.getRowsByCommodityCodes(data, commodities);
    const rowsFilteredByCountry = this.getRowsByCountry(rowsFilteredByCommodityCodes, country);

    const csvValue = rowsFilteredByCountry.map(item => this.getValue(item)).reduce(this.sum);
    const csvWeight = rowsFilteredByCountry.map(item => this.getNetweight(item)).reduce(this.sum);

    return {
      value: csvValue,
      weight: csvWeight,
      valuePerWeight: csvValue / csvWeight
    };
  }

}

module.exports = CSVHelpersObject;