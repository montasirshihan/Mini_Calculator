function minical(){

    let num1= Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let ops= String(document.getElementById("operations").value);

    let result;

    if(ops=="+"){

        result=num1+num2;

        

    }
    else if(ops=="-"){
        result=num1-num2;

    }
    else if(ops=="*"){
        result=num1*num2;

    }
    else{
        result= num1/num2;
        
    }

     document.getElementById("result").textContent=result;


}





function resetbtn(){

    document.getElementById("num1").value="";
     document.getElementById("num2").value="";

     document.getElementById("result").textContent=0;



}