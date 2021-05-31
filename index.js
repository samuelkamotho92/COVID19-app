function loadata(url) {
    console.log("executed 1");  
return url;

}
function showData(dt) {
    console.log(dt);
}
let dt = loadata(" from index.json");
showData(dt);

//asyn call back
//function as aparameter
function loadTwoData(data,callback) {
    setTimeout(() => {
    callback(data)
    }, 2000);
}
function showDataTwo(data) {
    console.log(data);
}
let data = 
loadTwoData("I AM DATA ONE",
showDataTwo);

const funcy = async()=>{
    const resp = await fetch("/index.json");
    if (resp.status !== 200) {
        throw new Error("Page not FOUND!!");
    }
    const data = await resp.json();
    return data;
}
funcy().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err.message);
})
