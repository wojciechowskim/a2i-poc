const chai = require('chai');
const expect = chai.expect;
const path = require('path');

const juices = require('../../base/config/product/juices');
const APIHelpersObject = require('../../base/api.helpers');
const CSVHelpersObject = require('../../base/csv.helpers');

let dataHelpers;
let csvHelpers;
let apiData;
let csvData;

describe('Juices report', function () {
  before(function () {
    csvHelpers = new CSVHelpersObject();
    dataHelpers = new APIHelpersObject();
    apiData = dataHelpers.getLineChartData(juices.urls.lineChart);
  });

  describe('Line chart', function () {
    describe('2006', function () {
      it('fetches proper weight data for 2006', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2006.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getChartData(dataHelpers.getDataByYear(data, 2006));

        expect(apiFilteredData.weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2006', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2006.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getChartData(dataHelpers.getDataByYear(data, 2006));

        expect(apiFilteredData.value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2006', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2006.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getChartData(dataHelpers.getDataByYear(data, 2006));

        expect(apiFilteredData.valuePerWeight).to.equal(csvFilteredData.valuePerWeight);
      });
    });

    describe('2007', function () {
      it('fetches proper weight data for 2007', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2007.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2007);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2007', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2007.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2007);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2007', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2007.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2007);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2008', function () {
      it('fetches proper weight data for 2008', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2008.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2008);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2008', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2008.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2008);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2008', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2008.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2008);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2009', function () {
      it('fetches proper weight data for 2009', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2009.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2009);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2009', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2009.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2009);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2009', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2009.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2009);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2010', function () {
      it('fetches proper weight data for 2010', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2010.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2010);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2010', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2010.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2010);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2010', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2010.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2010);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2011', function () {
      it('fetches proper weight data for 2011', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2011.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2011);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2011', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2011.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2011);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2011', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2011.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2011);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2012', function () {
      it('fetches proper weight data for 2012', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2012.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2012);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2012', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2012.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2012);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2012', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2012.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2012);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2013', function () {
      it('fetches proper weight data for 2013', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2013.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2013);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2013', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2013.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2013);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2013', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2013.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2013);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2014', function () {
      it('fetches proper weight data for 2014', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2014.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2014);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2014', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2014.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2014);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2014', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2014.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2014);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2015', function () {
      it('fetches proper weight data for 2015', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2015.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2015);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2015', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2015.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2015);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2015', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2015.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2015);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
    describe('2016', function () {
      it('fetches proper weight data for 2016', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2016.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2016);

        expect(apiFilteredData[0].weight).to.equal(csvFilteredData.weight);
      });
      it('fetches proper value data for 2016', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2016.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2016);

        expect(apiFilteredData[0].value).to.equal(csvFilteredData.value);
      });
      it('fetches proper value/weight data for 2016', async () => {
        csvData = csvHelpers.getRawFileContent('Import - 2016.csv');
        const csvFilteredData = csvHelpers.getFilteredData(csvData, juices.commodities, 'World');

        const data = await apiData;
        const apiFilteredData = dataHelpers.getDataByYear(data, 2016);

        expect(apiFilteredData[0].value / apiFilteredData[0].weight).to.equal(csvFilteredData.valuePerWeight);
      });
    });
  });

  describe('Bar chart', function () {
    // Bar chart tests go here
  });

  describe('Multi line chart', function () {
    // multi line chart tests go here
  });

  describe('Map chart', function () {
    // map chart tests go here
  });
});
