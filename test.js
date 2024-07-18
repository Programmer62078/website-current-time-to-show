// const clock = document.querySelector("#clock");

// setInterval(function () {
//   let date = new Date(); // isme time aa jayega
//   clock.innerHTML = date.toLocaleTimeString(); // isse clock me time ghoos jayega+
// }, 1000); // yah har 1 second me update hogaa

// let date = Date();    ISSE TIME AATA HAI D BARA RAHNA CHAHIYE Date()
// console.log(date.toLocaleTimeString());

// hamesha time run krta rhe iske liye set interval ko use krenge ki kitna time baad ye update hoga

// setInterval( function ()  {}, interval);

// setInterval( function () { yshan par likho}, 1000);

// setInterval(function () {        function likhna mat bhoolna
//   let date = new date();  YAHAN PAT DATE KA D CAPIATAL KRO NEW KE BAAD WAALA D
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

//<<<<<<<< MAIN CODE START HERE >>>>>>>>>>>>>>>>>

const clock = document.querySelector("#clock");

setInterval(function () {
  // yahan par function likhna mt bhoolna
  let date = new Date(); // isme time aa jayega
  clock.innerHTML = date.toLocaleTimeString(); // isse clock me time ghoos jayega+
}, 1000); // yah har 1 second me update hogaa
