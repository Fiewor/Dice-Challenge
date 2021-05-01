/*generate a new random image every time the page is refreshed
HOW?
set src attribute to a different image link every time the page refreshes
*/

let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;

    let value1 = "images/dice" + rand1 + ".png";
    let value2 = "images/dice" + rand2 + ".png";

    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", value1);

    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", value2);

        rand1 > rand2   ? document.querySelector("h1").innerHTML = ("Player 1 wins")
    :   rand1 === rand2 ? document.querySelector("h1").innerHTML = ("Draw!")
    :   document.querySelector("h1").innerHTML = ("Player 2 wins");