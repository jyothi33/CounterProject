const countValue = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//initial count value
let count = 0;

//Looping through the buttons and adding click event listener to increase and decrease the count.
btns.forEach(function(btn){
    btn.addEventListener('click', function () {

        //Based on classes on buttons decide which button has been clicked and increment or decrement the count.
        const btnClass = btn.classList;
        
        if(btnClass.contains("decrease")){
            count--;
        }
        else if(btnClass.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        countValue.textContent = count;
        if(count > 0){
            countValue.style.color = "green";
        }
        else if(count < 0){
            countValue.style.color = "red";
        }
        else{
            countValue.style.color = "#000";
        }
    });
})