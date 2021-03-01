
                                        ///Promise Concept

                                        //BASIC IDEA

let downloadPromise=function(){
    return new Promise(function(resolve, reject){
        console.log("Files are downloading..")
        setTimeout(function(){
            console.log("The files are downloaded");
            resolve()
        }, 3000)
    })
}

let downloadedPromise=downloadPromise()

downloadedPromise.then(
    setTimeout(function(){
        console.log("After download")
    }, 5000)
)



                                            //Practical Promises

//Download function

let download=function(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith('http')){
            reject(new Error("url not starts with http"))
        }else{
            console.log("starts download: "+url)
            setTimeout(() => {
                let fileName=url.split('/').pop()
                resolve(fileName)
            }, 3000);
        }
    })
}

//Resize function

let resize=function(fileName){
    return new Promise(function(resolve, reject){
        if(!fileName.endsWith('png')){
            reject(new Error("file name is not png type"))
        }else{
            console.log("starts resize: "+fileName)
            let resizedFile=fileName.split('.')[0]+'-resized'+'.png'
            setTimeout(() => {
                resolve(resizedFile)
            }, 3000);
        }
    })
}

//Upload Function
let upload=function(resizedFile){
    return new Promise(function(resolve, reject){
        console.log("starts upload: "+resizedFile)
        setTimeout(() => {
            let uploadedUrl='http://imageForu/'+resizedFile
            resolve(uploadedUrl)
        }, 3000);
    })
}

//Call the functions for one file..
download('http://CilianMurphy.png')
.then(resize)
.then(upload)
.then(function(uploadedUrl){
    console.log("file is uploaded to "+uploadedUrl)
})


//Call for different files..using Promise.all
Promise.all([
    download("http://lc.log/banner.png"),
    download("http://lc.log/luis.png"),
    download("http://lc.log/poper.png")
]).then(function(fileNames){                       //It returns the array of fileNames
    return Promise.all(fileNames.map(resize))
}).then(function(resizedFiles){                     //It returns the array of resizedFiles
    return Promise.all(resizedFiles.map(upload))
}).then(function(uploadedUrls){                     //It returns the array of uploadedUrls
    console.log(uploadedUrls)
})
