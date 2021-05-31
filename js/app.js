// /* ---------------------------------------------- */
// /*            CODE EXPLAINED TUTORIALS            */
// /*         www.youtube.com/CodeExplained          */
// /* ---------------------------------------------- */

// SELECT ALL ELEMENTS
//
// console.log(country_name_elemen);

const total_cases_element = document.querySelector(".totalcases .value");
const new_cases_element = document.querySelector(".totalcases .new-value");
const recovered_element = document.querySelector(".recoveredcases .value");
const new_recovered_element = document.querySelector(".recoveredcases .new-value");
const deaths_element = document.querySelector(".deathcases .value");
const new_deaths_element = document.querySelector(".deathcases .new-value");
const ctx = document.getElementById("myCanvas").getContext("2d");
const country_name_element = document.querySelector(".country .val");
// // APP VARIABLES
let app_data = [],
 cases_list = [],
  recovered_list = [],
  deaths_list = [],
  dates = [],
  formatedDates = [];

// // GET USERS COUNTRY CODE
// let country_code = geoplugin_countryCode(()=>{
//   return 'KE';
//   })
let country_code = geoplugin_countryCode();
let user_country;
country_list.forEach((country) => {
  if (country.code == country_code) {
    user_country = country.name;
  }
});
console.log(user_country);
// /* ---------------------------------------------- */
// /*                     FETCH API                  */
function fetchData(country) {
  country_name_element.innerHTML = "loading...";
  user_country = country;
  
  // (cases_list = []),
  //   (recovered_list = []),
  //   (deaths_list = []),
  //   (dates = []),
  //   (formatedDates = []);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const api_fetch = async(country)=>{
    await fetch("https://api.covid19api.com/total/country/" +country + "/status/confirmed",
    requestOptions).then(resp=>{
      return resp.json();
    }).then(data=>{
      console.log(data);
      data.forEach(entry=>{
        dates.push(entry.Date)
        cases_list.push(entry.Cases);
      })
    });
    await fetch( "https://api.covid19api.com/total/country/" +
    country +
    "/status/recovered",
requestOptions).then(resp=>{
  return resp.json();
}).then(data=>{
  console.log(data);
  data.forEach(entry=>{
    recovered_list.push(entry.Cases);
  });
});
await fetch("https://api.covid19api.com/total/country/" + country + "/status/deaths",
requestOptions).then(resp=>
  {
return resp.json();
  }).then(data=>{
    console.log(data);
    data.forEach(entry=>{
      deaths_list.push(entry.Cases);
    });
  });
  updateUI();
  }
  api_fetch(country);
}
fetchData(user_country);

function updateUI() {
  updateStatus();
  axesLinearChart();
}
function updateStatus(){
  const total_cases = cases_list[cases_list.length - 1];
  const prevDay_cases = cases_list[cases_list.length - 2];
  const new_confirmed_cases = total_cases - prevDay_cases;
  console.log(total_cases,prevDay_cases,new_confirmed_cases);
  const total_recovered = recovered_list[recovered_list.length - 1];
  const new_recovered_cases =
    total_recovered - recovered_list[recovered_list.length - 2];
    console.log(new_recovered_cases);
    const total_deaths = deaths_list[deaths_list.length - 1];
    const new_deaths_cases = total_deaths - deaths_list[deaths_list.length - 2];
  console.log(new_deaths_cases);
  total_cases_element.innerHTML = total_cases;
new_cases_element.innerHTML = `+${new_confirmed_cases}`;
recovered_element.innerHTML = total_recovered;
new_recovered_element.innerHTML = `+${new_recovered_cases}`;
deaths_element.innerHTML = total_deaths;
new_deaths_element.innerHTML = `+${new_deaths_cases}`;
country_name_element.innerHTML = user_country;
};
// UPDATE CHART
//coming up soon//
