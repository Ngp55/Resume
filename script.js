
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var intervalScroll;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        intervalScroll = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(intervalScroll);
        return;
    }
    window.scrollBy(0, 50);
}


// var navBar = document.querySelectorAll(".nav-menu a");
// var interval;

// for(var i = 0;i<navBar.length;i++){
//     navBar[i].addEventListener('click', function(event){
//         event.preventDefault();
//         var targetSectionID = this.textContent.trim().toLowerCase();
//         console.log("target section id = "+ targetSectionID)
//         var targetSection = document.getElementById(targetSectionID);
//         console.log("Id of target ="+ targetSection);
//         // interval = setInterval(outerTargetSection,50,targetSection); // 1st method
//         interval = setInterval(function(){
//             outerTargetSection(targetSection)
//         }, 30);
//     })

// }

// function outerTargetSection(targetSection){
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     //console.log(" target cord"+ targetSectionCoordinates);
//     //console.log(" target location ="+ targetSectionCoordinates.top);
//     if(targetSectionCoordinates.top <= 0){
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0,50);
// }




// document.onscroll = (event) =>{
//     console.log("Document scroll event fired");
// }
var bar = document.querySelectorAll(".skill-progress > div");
var skillSection = document.getElementById("skills-container");
// var progressBar = document.querySelector('skill-progress span');
// console.log(progressBar[0]);

window.addEventListener('scroll',checkScroll);
var animateDone = false;
function checkScroll(){
    var getCoordinates = skillSection.getBoundingClientRect();
    if(!animateDone && getCoordinates.top < window.innerHeight){
        animateDone= true;
        console.log('Skill section is visible');
        fillBars();
        
    }
    else if (getCoordinates.top > window.innerHeight){
        animateDone = false;
        restValueBar();
    }
}
function fillBars(){
    for(let i = 0 ;i<bar.length;i++){
        let localtarget = bar[i].getAttribute('data-bar-width');
        console.log(localtarget);
        let currentWidth = 0;
        let locatInterval = setInterval(function(){
            if(currentWidth > localtarget){
                clearInterval(locatInterval);
                return;
            }
            currentWidth++;
            bar[i].style.width= currentWidth + "%";
        },40);
    }
}

// function fillBars(){
//     for(let localfillbar of bar){
//         let targetBar = localfillbar.getAttribute('data-bar-width');
//         // localfillbar.style.width = 50  + "%";
//         console.log('targetBar--'+targetBar);
//         let currentWidth = 0;
//         let interval = setInterval(function(){
//             if(currentWidth > targetBar){
//                  console.log("chalbhaag");
//                  console.log("INside if currentWidth value:-->"+currentWidth);
//                  console.log("inSIDe if targetBar:==>->"+targetBar);
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             console.log('curretnwidh--'+currentWidth);
//             localfillbar.style.width = currentWidth + "%";
//         },60);
//     }

// }
function restValueBar(){
    for(var localbar of bar){
        localbar.style.width = 0 + "%";
    }
}
