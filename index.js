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

function gen4() {
   document.getElementById('gen-box').innerHTML = makeid(4)
};

function gen5() {
   document.getElementById('gen-box').innerHTML = makeid(5)
};

function gen6() {
   document.getElementById('gen-box').innerHTML = makeid(6)
};

function gen7() {
   document.getElementById('gen-box').innerHTML = makeid(7)
};

function gen8() {
   document.getElementById('gen-box').innerHTML = makeid(8)
};

function gen9() {
   document.getElementById('gen-box').innerHTML = makeid(9)
};

function gen10() {
   document.getElementById('gen-box').innerHTML = makeid(10)
};
