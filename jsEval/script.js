let inpcode = document.getElementById('inpcode');
let btnEncode = document.getElementById('encode')
let btnEncrypt = document.getElementById('encrypt')
let code = document.getElementById('code')

btnEncode.onclick = function(){
    let data = inpcode.value
    data = btoa(data)
    code.value = data
}

// btnEncrypt.onclick = function(){
//     let data = code.value
//     data = encryptData(data)
//     code.value = data
// }

function encryptData(data){
    // let ans=""
    // for(let i=0;i<length(data);i++){
    //     if(data[i]>=65 && data<=90){
    //         ans+=(data[i]+32)
    //     }else{
    //         ans+=(data[i]-32)
    //     }
    // }
    // return ans;
    return "ABCD"
}
