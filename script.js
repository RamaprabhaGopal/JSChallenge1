
function addItem(){

    console.log("hi");
    
    document.getElementById("demo").innerHTML = "Working, Please Wait";
  

    setTimeout(myFunction1, 5000);
    function myFunction1() {
        document.getElementById("demo").innerHTML = "Waiting";
    }
}

