import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()



import { getData, append } from "./fetch.js";

let url = (`https://www.themealdb.com/api/json/v1/1/random.php`)
let container = document.getElementById("container");

getData(url).then((res) => {
    append(res, container)
})

