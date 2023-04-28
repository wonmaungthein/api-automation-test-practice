import { getMaxDeathsValues, getMaxTestsValues } from '../utils/helper.js';

import { data } from '../utils/data.js';

const countries = await data();
const africaArray = countries.africaResults;
const northAmericaArray = countries.usaResults;
const europeArray = countries.europeResults;

const filteredNorthAmericaArrays = [];
const filteredAfricaArrays = [];
const filteredEuropeArrays = [];

filteredNorthAmericaArrays.push(northAmericaArray.map((data) => ({country:data.country, deaths:data.deaths.total, tests:data.tests.total})));
filteredAfricaArrays.push(africaArray.map((data) => ({country:data.country, deaths:data.deaths.total, tests:data.tests.total})));
filteredEuropeArrays.push(europeArray.map((data) => ({country:data.country, deaths:data.deaths.total, tests:data.tests.total})));

describe('Print Top 5 countries with the most Convid 19 tests performed ', async () => {
    it('Should print Top 5 countries with the most Convid 19 tests performed in North America', async () => {
        console.log('Get Top 5 countries with the most Convid 19 tests performed in North America' , getMaxTestsValues(filteredNorthAmericaArrays[0],5))
    })
    it('Should print Top 5 countries with the most Convid 19 tests performed in Africa', async () => {
        console.log('Get Top 5 countries with the most Convid 19 tests performed in Africa' , getMaxTestsValues(filteredAfricaArrays[0],5))
    })
    it('Should print Top 5 countries with the most Convid 19 tests performed in Europe', async () => {
        console.log('Get Top 5 countries with the most Convid 19 tests performed in Europe' , getMaxTestsValues(filteredEuropeArrays[0],5))
    })
});

describe('Print Top 5 countries with the most total Covid 19 deaths', async () => {
    it('Should print Top 5 countries with the most total Covid 19 deaths in North America', async () => {
        console.log('Top 5 countries with the most total Covid 19 deaths in North America', getMaxDeathsValues(filteredNorthAmericaArrays[0],5))
    })
    it('Should print Top 5 countries with the most total Covid 19 deaths in Africa', async () => {
        console.log('Top 5 countries with the most total Covid 19 deaths in Africa', getMaxDeathsValues(filteredAfricaArrays[0],5))
    }) 
    it('Should print Top 5 countries with the most total Covid 19 deaths in Europe', async () => {
        console.log('Top 5 countries with the most total Covid 19 deaths in Europe', getMaxDeathsValues(filteredEuropeArrays[0],5))
    })
});