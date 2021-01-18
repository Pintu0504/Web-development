window.onload=function(){
    let btnAdd=document.getElementById('btnAdd');
    let inpvalue=document.getElementById('inpvalue');
    let list=document.getElementById('list');

    btnAdd.onclick=function(){
        let li=document.createElement('li')

        let crossbtn=document.createElement('button');
        crossbtn.innerHTML= '<b>Remove</b>';

        crossbtn.onclick=function(event){
            event.target.parentElement.remove();
        }

        let txtspan=document.createElement('span');
        txtspan.innerText=inpvalue.value
    
        li.appendChild(crossbtn)
        li.appendChild(txtspan)
        list.appendChild(li)
    }
}