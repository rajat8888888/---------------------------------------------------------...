const endDate= "2 october 2023 10:00 AM"

let text=document.getElementById("date")

let input=document.querySelectorAll('input')
text.innerText=endDate

function time(){
    const end=new Date(endDate)
    const now=new Date();
    const diff=(end-now)/1000;

    if(diff<0) return;
    console.log(Math.floor(diff/3600/24));
    input[0].value=Math.floor(diff/3600/24);
    input[1].value=Math.floor(diff/3600)
    input[2].value=Math.floor((diff/60)%60);
    input[3].value=Math.floor((diff)%60);
}

time();

setInterval(()=>{
    time();
},1000)