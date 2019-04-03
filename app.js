//Get input element
let filterInput = document.querySelector('#filterInput');

//Add event listener for the keyup event
filterInput.addEventListener('keyup', filterNames);

//Makeing the filterNames function
function filterNames(){
    
    //Get the value of the search
    let filterValue = document.querySelector('#filterInput').value.toUpperCase();
    
    //Get names ul
    let ul = document.querySelector('#names');

    //Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop through colection-item li's
    for(let i = 0; i < li.length; i++){
        //get all the a tags
        let a = li[i].getElementsByTagName('a')[0];
        
        //if matched
        if (a.innerText.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display ='';
        }else{
            li[i].style.display ='none';
        }
    }
}
