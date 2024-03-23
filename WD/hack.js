const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const b4 = document.querySelector("#b4");
const StartEx = document.querySelector("#StartEx");

let ExN;
const ExName = [
    {
        name: "Meditation",
        time: 60,
        text: "Close your Eyes and calm your mind for 1 Minute"
    },
    {
        name: "Breathing",
        time: 60,
        text: "Breathe in as the Circle expands and Breathe out as the Circle Contracts"
    },
    {
        name: "Anlom Vilom",
        time: 60,
        text: "Mukku musko"
    },
    {
        name: "Meditation",
        time: 60,
        text: "Close your Eyes and calm your mind for 3 Minutes"
    }
];

b1.onclick = Meditate;
b2.onclick = Breathing;
b3.onclick = Anlom_Vilom;
b4.onclick = Meditate2;

function Meditate() {
    ExN = 0;
    DisplayEx(ExN)
}

function Breathing() {
    ExN = 1;
    DisplayEx(ExN)
}

function Anlom_Vilom() {
    ExN = 2;
    DisplayEx(ExN)
}

function Meditate2() {
    ExN = 3;
    DisplayEx(ExN)
}

function DisplayEx(ExN){
    StartEx.style.display = "block";
    ExNameText = document.querySelector("#ExName");  // Get reference dynamically
    ExText = document.querySelector("#ExText");      // Get reference dynamically
    ExTime = document.querySelector("#ExTime");      // Get reference dynamically
    ExNameText.innerText = ExName[ExN].name;
    ExText.innerText = ExName[ExN].text;
    console.log(ExN);
    
  }