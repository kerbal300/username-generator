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

if(document.getElementById('4').clicked == true)
{
   document.getElementById('gen-box').innerHTML = makeid(4)
}

if(document.getElementById('5').clicked == true)
{
   document.getElementById('gen-box').innerHTML = makeid(5)
}

if(document.getElementById('6').clicked == true)
{
   document.getElementById('gen-box').innerHTML = makeid(6)
}

if(document.getElementById('7').clicked == true)
{
   document.getElementById('gen-box').innerHTML = makeid(7)
}

if(document.getElementById('8').clicked == true)
{
   document.getElementById('gen-box').innerHTML = makeid(8)
}

if(document.getElementById('9').clicked == true)
{ 
   document.getElementById('gen-box').innerHTML = makeid(9)
}

if(document.getElementById('10').clicked == true)
{
   document.getElementById('gen-box').innerHTML = makeid(10)
}