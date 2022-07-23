let getData = async (url) => {
    let res = await fetch(url)
    let data = await res.json();
    return data;
}

let append = (data, container) => {
    // console.log(data.meals)
    container.innerHTML = null;
    data.meals.forEach(({ strMeal, strArea, strMealThumb, strInstructions, strYoutube }) => {
        let box = document.createElement("div")

        let img = document.createElement("img")
        img.src = `${strMealThumb}/preview`

        let p1 = document.createElement('h3');
        p1.innerText = `Tasty Meal :- ${strMeal}`;

        let p2 = document.createElement('h3');
        p2.innerText = `Area :- ${strArea}`;

        let p3 = document.createElement('p');
        p3.innerText = `Recipe :- ${strInstructions}`;


        let anchor = document.createElement('a');

        let link = document.createTextNode("Youtube Link of recipe");
        anchor.appendChild(link);
        anchor.href = strYoutube;


        box.append(img, p1, p2, p3, anchor);
        container.append(box)

    })
}

export { getData, append };
