// sync method .. is method mein her kam uper sy nichy ki trf chlta hain or jb tk phla kam na hu jay tb tk agla kam ni huta... 
// javascript b by defalt is format mein kam krti hy
alert("Hello World");
console.log("Aslam e Alakum");


// async method ... is method mein kuch kam phly chlta hain or kch bad mein ... is me koi condition ni hy k phly uper wala chly ga or phr nichy wala

setTimeout (function processAfterSecond() {
    console.log("Hello  World");
}, 2000)
console.log("Pakistan Zindabad");

// callbacks

setTimeout (function processAfter6Second(cb) {
    console.log("Hello");
    cb();
}, 6000);

function toBeExecutedWhenDone() {
 console.log("Yes, Its Done");
};
processAfter6Second(toBeExecutedWhenDone);


