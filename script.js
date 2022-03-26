
function addItem(){

    console.log("hi Log");
    
    document.getElementById("demo").innerHTML = "Working, Please Wait";
  

    setTimeout(myFunction1, 5000);
    function myFunction1() {
        document.getElementById("demo").innerHTML = "Waiting";
    }
}

