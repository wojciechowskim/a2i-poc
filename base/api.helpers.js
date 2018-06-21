const axios = require('axios');

const APIHelpersObject = function () {
  this.getLineChartData = async (url) => {
    return await axios.get(url).then(res => res.data);
  };

  this.getDataByYear = (dataSet, year) => dataSet.filter(item => item.year === year);

  this.getChartData = (dataSet) => {
    const data = dataSet[0];

    return {
      value: data.value,
      weight: data.weight,
      valuePerWeight: data.value_per_weight
    }
  }
};

module.exports = APIHelpersObject;
