/* Developer Name: Ralph Eimerson Ompoc
 * File Name: script.js
 * Date: December 28, 2023
 */

//Hamburger Menu Function
function hamburger(){
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none"){
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}