import axios from "axios";

export async function getData(url){
  const response = await axios.get(`${url}`, {
    headers : {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-key': 'b94fa05180mshf990a8e52b28d28p195d7cjsn60943972bf83',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  })
  .then((res) => {
      const result = {
        usaResults : res.data.response.filter(country => country.continent == 'North-America'),
        africaResults : res.data.response.filter(country => country.continent == 'Africa'),
        europeResults : res.data.response.filter(country => country.continent == 'Europe'),
      }
  
      return result;
  })
  .catch((e) => {
      console.log(`Couldn't receive the data ${e.error}`)
  })

  return response;
};