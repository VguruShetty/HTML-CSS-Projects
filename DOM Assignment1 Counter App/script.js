// getting html elements
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const num=document.getElementById("num");

// btn1 decrement button
btn1.addEventListener("click",()=>{
    const value=Number(num.innerText);
    if(value>0){
        num.innerText=value -1;
    }else{
        alert("Negative value not allowed");
    }
});

//btn2 increment button
btn2.addEventListener("click",()=>{
    const value=Number(num.innerText);
    if (value>=10){
        alert("Not more than 10 values are allowed");
    }else{
        num.innerText=value + 1;
    }
});

//btn3 rest button
btn3.addEventListener("click",()=>{
    num.innerText=0;
});
