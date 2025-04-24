const PickNumber = document.getElementById("PickNumberButton");
const resultbtn = document.getElementById("result");
const lotterysheetcontainer = document.getElementById("lotterysheetcontainer");
const tick = new Audio("sound.wav");
const gameover = new Audio("Tap.wav");
const Gifts = [
    "₹100 cash",
    "Toy car",
    "Chackelet Box",
    "₹500 Cash",
    "SmartPhone Cover",
    "Book",
    "Headphones",
    "₹50 cash",
    "Gift Vocher",
    "Watch",
    "Teddy Bear",
    "Blutooth Speaker",
    "Movie ticket",
    "₹200cash",
    "Puzzle Game",
    "Perfume",
    "Sunglasses",
    "₹1000 cash",
    "Board Game",
    "Fitnessb Band",
    "Digital Clock",
    "Lamp",
    "Shopping Voucher",
    "Laptop Bag",
    "Wirelwss Mouse",
    "Travel Mug",
    "Notebook Set",
    "GamingMousepad",
    "₹250 Cashback",
    "Goldchain",
    "Keychain",
    "Water Bottle",
    "Portable charger",
    "Smart Watch",
    "Git Hamper",
    "Backpack",
    "Wallet",
    "Mini Backpack",
    "Travel Pillow",
    "₹300 Cash",
]
//Math-Math.floor()/ceil()/random()/round()//
PickNumber.addEventListener("click", function(){
    for(let i =1; i<=40; i++){
        document.getElementById(i).classList.remove("winningbox")
    }
    resultbtn.textContent = "Please Wait...."
    // setTimeout(function(){
    //     let randomnumber = Math.random()*20;
    // let drawnnumber = Math.round(randomnumber)+1;
    // console.log(Gifts[drawnnumber-1]);
    // const gift = Gifts[drawnnumber-1];
    // resultbtn.textContent = `You have Got ${drawnnumber}, and you Won ${gift}`;
    // document.getElementById(drawnnumber).classList.add('winningbox');
    // }, 5000);

    let secondscound = 0;
   const intervalId = setInterval(function(){
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondscound = secondscound +1;
     const randombox = Math.floor(Math.random() * 40) +1;
      console.log(randombox);
    //   document.getElementById(randombox).classList.add("highlightedBox");
for(let i =1; i<=40 ;i++){
     if(i === randombox){
        document.getElementById(i).classList.add("highlightedBox")
    } else{
        document.getElementById(i).classList.remove("highlightedBox");
     }
}
 if(secondscound ===5){
    let randomnumber = Math.random()*40;
    let drawnnumber = Math.floor(randomnumber) +1;
    const gift = Gifts[drawnnumber -1];
    resultbtn.textContent = `You have Got ${drawnnumber}, and you Won ${gift}`;
    document.getElementById(randombox).classList.remove("highlightedBox");
    document.getElementById(drawnnumber).classList.add('winningbox');
    gameover.pause();
    gameover.currentTime = 0;
    gameover.play()
    clearInterval(intervalId);
      }
    },1000);
});

Gifts.forEach(function(value, i){
    // <div class="box">1.100cash</div>
    const boxElement = `<div class="box" id=${i + 1}>${i + 1}.${value}</div>`;
    console.log(boxElement);
    lotterysheetcontainer.insertAdjacentHTML("beforeend",  
    boxElement);

});