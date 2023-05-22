import "./style.css";
function changeArea(event) {
  event.preventDefault();
  let input = document.querySelector(".searchBar");

  let area = document.querySelector(".area");
  area.innerHTML = input.value;

  let form = document.querySelector("#search");
  form.addEventListener("submit", changeArea);

  function showSearch(response) {
    let temp = response.data.main.temp;
    let temperature = document.querySelector(".temp");
    console.log(temp);
    temperature.innerHTML = Math.round(temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=7746bdeabca928cfedcad71e52fd9d66`;
  axios.get(url).then(showSearch);
}

let form = document.querySelector("#search");
form.addEventListener("submit", changeArea);
