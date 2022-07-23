let navbar = () => {
    return `
    <img src="https://media2.giphy.com/media/dUNz28Yeu32mgnWriE/200w.webp?cid=ecf05e4700dvrikbcac7m5rgevs2yhyup5z40pymlj562wcj&rid=200w.webp&ct=g">
    
    <h3 id="home"><a href="/">Home</a></h3>
    <div id="option">
   
     <input type="text" id="query" placeholder="Search Receipe"/>
        <h3>
            <a href="/recipe.html">Receipe of the day</a>
        </h3>
        <h3>
            <a href="/random.html">Random Recipies</a>
        </h3>
        <h3 id="login">
            <a href="login.html">Login</a>
        </h3>
        <h3 id="signup">
            <a href="signup.html">SignUp</a>
        </h3>

    </div>
    `
}
export default navbar;