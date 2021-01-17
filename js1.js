let btnWait = document.getElementById('btnWait')
let btnCount = document.getElementById('btnCount')
let divStatus = document.getElementById('divStatus')
let divVal = document.getElementById('divVal')


let count=0;

btnCount.onclick = function(){
    count++;
    divVal.textContent=count
}

btnWait.onclick=function(){
    // var start=Date.now()
    // var limit = start+5000
    // while(Date.now()<limit){
        
    // }
    divStatus.textContent="WAITING"
    setTimeout(function(){
        divStatus.textContent="DONE"
    }, 5000)
    
}


