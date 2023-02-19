//testing the connection of the js file
console.log("test");

let elementsArray = document.querySelectorAll("whatever");

// elementsArray.forEach(function(elem) {
//     elem.addEventListener("input", function() {
//         //this function does stuff
//     });
// });

// nederlands button -- change google background
document.querySelectorAll(".nederlands").forEach(function(N) {
    N.addEventListener("click", function() {
        document.querySelector(".google").style.backgroundImage="url(Flag_of_the_Netherlands.svg.png)";
        document.querySelectorAll(".return").forEach(function(r) {
            r.style.display="inline";
            })
    });
});

// français button -- change google background
document.querySelectorAll(".français").forEach(function(F) {
    F.addEventListener("click", function() {
        document.querySelector(".google").style.backgroundImage="url(Flag_of_France.svg.png)";
        document.querySelector("#e-1").style.color="#FBBC05";
        document.querySelectorAll(".return").forEach(function(r) {
            r.style.display="inline";
            })
    });
})

// deutsch button -- change google background
document.querySelectorAll(".deutsch").forEach(function(D) {
    D.addEventListener("click", function() {
        document.querySelector(".google").style.backgroundImage="url(383px-Flag_of_Germany.svg.png)";
        document.querySelector("#o-1").style.color="#34A853";
        document.querySelector("#e-1").style.color="#FBBC05";
        document.querySelectorAll(".return").forEach(function(r) {
            r.style.display="inline";
            })
    });
})

// return button -- return google background into white
document.querySelectorAll(".return").forEach(function(r) {
    r.addEventListener("click", function() {
        document.querySelector(".google").style.backgroundImage="none";
        document.querySelector(" #g-1, #g-1").style.color="#4285F4";
        document.querySelector("#o-1, #e-1").style.color="#EA4335";
        document.querySelector("#o-2").style.color="#FBBC05";
        document.querySelector("#l-1").style.color="#34A853";    
        document.querySelectorAll(".return").forEach(function(r) {
            r.style.display="none";
            })
    });
    })

// google search button -- change url
document.querySelector(".searchbtn a").addEventListener('click',(event)=>{
    let searchInput = document.querySelector(".searchbar").value;
    // console.log(searchInput);

    if(searchInput !== ""){//if the search bar isn't empty
        //redirect to real google searching page
        let searchUrl = 'https://www.google.com/search?q=' + searchInput;
        window.location.replace(searchUrl);
    }else{
        console.log("empty");
    }
})

// click to open or close the navbar
let navOpen = 0; //navbar close
document.querySelector(".selection-account span:nth-child(2)").addEventListener('click',(event)=>{
    if(navOpen == 0){
        document.querySelector(".navbar-dropdown").style.display="block";
        navOpen = 1;//navbar open
    }else if((navOpen == 1)){
        document.querySelector(".navbar-dropdown").style.display="none";
        navOpen = 0;
    }
})
