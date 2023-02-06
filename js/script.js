// fetch data from api
async function fetchData() {
  const proxyURL = "https://cors-anywhere.herokuapp.com/";
  const url = "http://api.forismatic.com/api/1.0/";

  try {
    const response = await fetch(`${proxyURL} ${url}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("No data available....");
  }
}
