// sync method .. is method mein her kam uper sy nichy ki trf chlta hain or jb tk phla kam na hu jay tb tk agla kam ni huta... 
// javascript b by defalt is format mein kam krti hy
alert("Hello World");
console.log("Aslam e Alakum");


// async method ... is method mein kuch kam phly chlta hain or kch bad mein ... is me koi condition ni hy k phly uper wala chly ga or phr nichy wala

setTimeout (function processAfterSecond() {
    console.log("Hello  World");
}, 1000)
console.log("Pakistan Zindabad");

// callbacks
function processAfter2Second(cb) {
setTimeout(function(){
let data = 5 + 564;
cb(data);
}, 2000);
}


function toBeExecutedWhenDone(dataToGet) {
 console.log("Yes, Its Done", dataToGet);
};
processAfter2Second(toBeExecutedWhenDone);


/// Promise
function runAfter2Second(val1) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            let data1 = 15 + val1;
            resolve(data1);
        }, 2000);
    })
}

runAfter2Second(15).then(function(data1){
    return runAfter2Second(data1);
}).then(function(data1){
    return runAfter2Second(data1);
}).then(function(data1){
    return runAfter2Second(data1);
}).then(function(data1){
    return runAfter2Second(data1);
}).then(function(data1){
    return runAfter2Second(data1);
}).then(function(data1){
    console.log(data1);
});

/// async await ... is the short term of promise

function runAfter3Second(val2) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            let data2 = 7 + val2;
            resolve(data2);
        }, 3000)
    })
}

async function run () {
    // async functions By defaut return a promise
    const data2 = await runAfter3Second(8);
    const data3 = await runAfter3Second(data2);
    const data4 = await runAfter3Second(data3);
    const data5 = await runAfter3Second(data4);
    const data6 = await runAfter3Second(data5);

    return(data6);
}

run().then(function (data6) {
    console.log(data6);
})
















