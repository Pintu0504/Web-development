function doSomething (done) {
    console.log('1. doing something')
    // setTimeout(done, 0)    // If we will use setTimeout() in then all the previous calls will get executed then
    done()                    // the fuc within setTimeout() will get executed
}

doSomething(() => {
    console.log('2. it was done')
})

console.log('3. end')
