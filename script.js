const h1 = document.getElementById(dados);
const body = document.querySelector('body');

function dado01() {
    return Math.floor(Math.random() * 6 + 1)
};

function dado02() {
    return Math.floor(Math.random() * 6 + 1)
};

const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

let rollOfDice = 0;

for (let j = 0; j <1000; j++) {
    let rollOfDice = dado01() + dado02();
    count[rollOfDice -2]++
};


for (i = 2; i<=12; i++){
    const paragraph = document.createElement('p');
    body.appendChild(paragraph);
    paragraph.innerText = " O número " +i+ " saiu " + count[i -2] + " vezes"
}

for (j = 2; j<=12; j++){
    const div = document.createElement('div');
    body.appendChild(div);
    div.style.width = `${count [j -2]}px`;
    div.style.height = "15px";
    div.style.backgroundColor = 'black';
    div.style.margin = "2px"

}