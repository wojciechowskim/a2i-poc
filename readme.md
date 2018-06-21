# A2I tests

## Requirements
1. node
2. npm

## Set up
1. Run `npm install` to install dependencies.

>More info on the tools I used can be found at the end of the readme.

Before running the suites, make sure you download the import data `.csv` files and put them into the `data` directory under the name of, for example, `Import - 2006.csv`.

## Execution
Run `npm test` to run all suites.

The test script can be found in the `package.json` file under the key `test`.

## Adding new tests
1. Create a new report config file in `base/config/economy` or `base/config/product`, depending on the type of the report.
>Add a URL of the API call for each chart.
>
>Add a list  of commodities (can be copied from the URL).

2. Create a test file in either `test/economy/` or `test/product`, depending on the type of the report.
>The test file should be named `[report_name].test.js` as is stated in the `package.json`.

3. Write beautiful testing code.

4. ???

5. PROFIT

## Libraries used

1. [mocha.js](https://mochajs.org/) - test framework using Node.js
2. [chai.js](http://www.chaijs.com/) - assertion library
3. [PapaParse](https://www.papaparse.com/) - library used to parse `.csv` files
4. [axios](https://github.com/axios/axios) - library used for making http requests

## To do
1. Fix comparing value and value_per_weight.
2. Add bar chart tests.
3. Add multi line chart tests.
4. Add map chart tests.