//Declare global variables
//initialise myNavBar variable and assign document.getElementByID method to access HTML
const myNavBar = document.getElementById("navbar__list");
/*initialise mySections variable and assign it to document.querySelectorAll method. 
This will return the list of 'section' elements*/
const mySections = document.querySelectorAll("section");

//create a function called newNav this will create the dynamic navigation
function  newNav (){
    //Create a variable section and loop over the mySections
    for (section of mySections){
        //create a variable and assign it to document.createElement. This will create the li markup tag.
        let lItem = document.createElement("li");
        //create a variable that holds the 'id'
        let secL = section.getAttribute("id");
        //create a variable that hold the data-nav
        let secN = section.getAttribute("data-nav");
        //output
        lItem.innerHTML = "<a class=\"menu__link\" href=#" + secL + ">" + secN + "</a>";
        //append the lItem to myNavBar
        myNavBar.appendChild(lItem);
    }
};
// function invoke newNav()
newNav();

function activeClass (){
    //create a loop with a local function passing section parameter
    mySections.forEach(function (section) {
        //Create a variable and Get Bounding Client Rect
        const clientRect = section.getBoundingClientRect();
        //Check if clientRect is in viewport range (both true) if yes add it
        if (clientRect.top <= 200 && clientRect.bottom >= 250) {
            section.classList.add("your-active-class");
            // if no remove
        } else {
            section.classList.remove("your-active-class");
        }
    })
};
//create a function makeActive()
function makeActive(){
    //create a variable and assign it to document.getElementbyId
    const btnContainer = document.getElementById("navbar__list");
    // Get all buttons with class="menu__link" inside the container
    const btns = btnContainer.getElementsByClassName("menu__link");
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click',function() {
        //create a variable and assign it to document.getElementsByClassName    
        const current = document.getElementsByClassName("active");
        // If there's no active class
        if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
    });
    }
}
makeActive();

//appends an event listener for events
window.addEventListener('scroll',function(){
    //function invoke activeClass()
    activeClass();
});

//create a variable navLi This will return the list of .navBar__menu and .menu__link elements*/
const navLi = document.querySelectorAll(".navbar__menu .menu__link");
//set window.onscroll to empty
window.onscroll = () => {
  //set current variable to empty string  
  let current = "";
  //loop over section from mySection  
  mySections.forEach(function (section)  {
    //create a variable sectionTop and assign it to section.offsetTop
    const sectionTop = section.offsetTop;
    //if true get attribute id
    if (scrollY >= sectionTop -100) {
      current = section.getAttribute("id"); }
  });
  //loop of li
  navLi.forEach((li) => {
    //remove active
    li.classList.remove("active");
    //if true add active
    if (li.href.includes(current)) {
        li.classList.add('active');
    }
    //if false remove active
    else{
        li.classList.remove('active');
    }
  });
};
