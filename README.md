## API Test Practice

### How do I get set up?

4. Install NodeJS if you don't already have it installed - https://nodejs.org/en/

* To check if you have NodeJs installed run:

```sh
node -v
```

#### Cloning and running the code in the Repository

1. To clone this repository

```sh
git clone https://github.com/wonmaungthein/api-automation-test-practice
```

#### How to run tests

To Run tests locally, you can use the following command format:

- To Run the test

```sh
npm test
```

```sh
I have create a backend automation framework with ‘MOCHA’

- I started to look at the country endpoint at : https://covid-193.p.rapidapi.com/countries but those countries didn’t have the statics. 

- So I used the statistics endpoint to get the most total Covid 19 deaths and tests performed at : https://covid-193.p.rapidapi.com/statistics


Features: Create test/s that will print out the following information 

For the following continents 

Country = USA / North-America, 
Country = Africa / Africa  = South-Africa
Country = Europe / Europe

Top 5 countries with the most total Covid 19 deaths 

Top 5 countries with the most Convid 19 tests performed 

I couldn’t manage to do CI/CD pipeline.

- Bonus points - Create CI/CD pipeline (e.g. Github actions) that would Once finished, 

```
