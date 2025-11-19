function calculateAverage(){
    
    let studentName= document.getElementById("studentName").value;
    let grade1 = parseFloat(document.getElementById("grade1").value);
    let grade2 = parseFloat(document.getElementById("grade2").value);
    let grade3 = parseFloat(document.getElementById("grade3").value);
    

    let average = (grade1 + grade2 + grade3)/3;

    let result = document.getElementById("result");

    if (average >= 70){
         result.textContent = `Congratulations ${studentName}, you passed! ${average}`;
    }
    else{
       result.textContent = `Keep working, ${studentName}! ${average} ` ;
    
    }
}