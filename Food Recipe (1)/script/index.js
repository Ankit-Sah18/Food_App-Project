import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()


document.querySelector("#query").addEventListener("input", function () {
    debounce(myRecipe, 5000)
})

import { getData, append } from "./fetch.js";

function myRecipe() {

    let query = document.getElementById("query").value;
    console.log(query)
    let url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    let container = document.getElementById("container");

    getData(url).then((res) => {
        append(res, container)
    })
}

let id;
function debounce(func, delay) {
    if (id) {
        setTimeout(id)
    }
    id = setTimeout(function () {
        func()
    }, delay)
}




let user = JSON.parse(localStorage.getItem("username"))

if (user.name == undefined) {
    document.getElementById("profile").innerHTML = null


}
else {
    document.getElementById("profile").innerHTML = `Hello ${user.name}`
    document.getElementById("login").innerHTML = null
    document.getElementById("signup").innerHTML = null
}


