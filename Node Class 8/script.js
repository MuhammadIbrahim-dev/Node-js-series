// Asyncronous or Sycrnouse
let a = 5;
let b = 0;


let waitingtime = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve(20) //B value
     },2000)
})

waitingtime.then((data)=>{
    console.log(a + data); //waiting time value data
})
// 20 + 5










