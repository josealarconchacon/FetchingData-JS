// fetch data from api
async function fetchData() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url =
    "http://api.forismatic.com/api/1.0/?method=fetchData&lang=en&format=json";

  try {
    const response = await fetch(proxyUrl + url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    fetchData();
    console.log("No data available....", error);
  }
}

// load data
fetchData();
