const axios = require('axios');

class APIHelpersObject {
  async getLineChartData(url) {
    return await axios.get(url).then(res => res.data);
  }

  getDataByYear(dataSet, year) {
    return dataSet.filter(item => item.year === year);
  }

  getChartData(dataSet) {
    const data = dataSet[0];

    return {
      value: data.value,
      weight: data.weight,
      valuePerWeight: data.value_per_weight
    }
  }
}

module.exports = APIHelpersObject;