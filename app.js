const alphabets = "abcdefghijklmnopqrstuvxyz";
const Lalphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "1234567890"
const spl ="$@&!#";
const btn = document.querySelector("#gen");
const btn2 = document.querySelector("#copyBtn");

const passBox = document.querySelector("#input");
let length = 12;

const allChars = alphabets + Lalphabets + num + spl;
function passGen(){
    let password= "";
    password += alphabets[Math.floor(Math.random() * alphabets.length)];
    password += Lalphabets[Math.floor(Math.random() * Lalphabets.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += spl[Math.floor(Math.random() * spl.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passBox.value = password;
    // passBox.innerText = password;
}

btn.addEventListener("click", passGen);

let copyPassword = () => {
    passBox.select();
    document.execCommand("copy");
}
btn2.addEventListener("click", copyPassword);