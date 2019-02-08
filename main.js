var selected = null;
var towerOne = document.querySelector('#towerOne');
var towerTwo = document.querySelector('#towerTwo');
var towerThree = document.querySelector('#towerThree');
var ringOne = document.querySelector('#ringOne');
var ringTwo = document.querySelector('#ringTwo');
var ringThree = document.querySelector('#ringThree');


towerOne.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstRing.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            selected = firstRing;
            selected.classList.add("selected");
        }
});
towerTwo.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstRing.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            selected = firstRing;
            selected.classList.add("selected");
        }
});
towerThree.addEventListener('click', function(event){
    //check if same tower selected
    var tower = event.target;
    var firstRing = event.target.firstElementChild;
        if(selected){
            //two things can happen here:
            //if first child is already selected, then deselect it
            //i.e we are clicking on a tower that has already been clicked
            if(firstRing){
                if(selected.dataset.weight == firstRing.dataset.weight){
                    //they are the same to deselect it
                    selected.classList.remove("selected");
                    selected = null;
                }
                //else if different then try and see if we can place it on top
                //we compare whats selected weight to first ring weight
                else if(selected.dataset.weight  < firstRing.dataset.weight){
                    //we can only place on top if its less than
                    tower.insertBefore(selected,firstRing);
                    selected.classList.remove("selected");
                    selected = null;
                    //check to see if you are done. we only need this for tower 3
                    var weight = '';
                    for(var i = 0; i < tower.children.length; i++){
                        weight += tower.children[i].dataset.weight;
                    }
                    if(weight === '123'){
                        //we harcode this value for our own sanity's sake
                        alert("Thanks a lot for this hard project, Zackk with two k's.");
                        document.querySelector("#winning").classList.remove("hidden");
                        document.querySelector("#winning").classList.add("blink_me");

                    }
                }
            }else{
                tower.appendChild(selected);
                selected.classList.remove("selected");
                selected = null;
            }
        }else{
            selected = firstRing;
            selected.classList.add("selected");
        }
});








// const resetEl = document.querySelector(".reset");
// const move = document.querySelector('.ringOne');
// const where = document.querySelectorall('.towers');


// var blockOne = document.querySelector('.ringOne');
// blockOne.style.display = 'none';


// const cells = document.querySelectorAll('.reset')
// resetEl.addEventListener('click', function(e){
//     e.preventDefault()
//     currentPlayer = 1
//     nextPlayer.innerText = "Red"

//      for (i = 0; i < reset.length; i++){
//          reset[i].style.backgroundColor = "white"
//          reset[i].style.pointerEvents = "auto"
//      }
// })

