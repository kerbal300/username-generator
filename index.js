function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

document.getElementById('4').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(4);
});

document.getElementById('5').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(5);
});

document.getElementById('6').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(6);
});

document.getElementById('7').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(7);
});

document.getElementById('8').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(8);
});

document.getElementById('9').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(9);
});

document.getElementById('10').addEventListener("click", ()=>{
   document.getElementById('gen-box').innerHTML = makeid(10);
});
