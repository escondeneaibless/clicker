let points = document.querySelector('#points');
const clickBtn = document.querySelector('#btn1');
const upgrade1 = document.querySelector('#btn2');
const upgrade10 = document.querySelector('#btn3');
const upgrade30 = document.querySelector('#btn4');
const upgrade50 = document.querySelector('#btn5');

const upgradeS1 = document.querySelector('#btn6');
const upgradeS2 = document.querySelector('#btn7');
const upgradeS3 = document.querySelector('#btn8');
const upgradeS4 = document.querySelector('#btn9');

let speedEl = document.querySelector('#speed');
let floatingContainer = document.querySelector('.floating-numbers');

let pointsNum = 0;
points.value = "Points " + pointsNum;
let ch = 1;
clickBtn.innerHTML = "Клик " + ch;
let speedNum = 1;
speedEl.innerHTML = "Скорость в сек. - " + speedNum;

let floatIdCounter = 0;

// Upgrade levels and base costs
let clickLevel1 = 0; let baseCost1 = 10;
let clickLevel10 = 0; let baseCost10 = 125;
let clickLevel30 = 0; let baseCost30 = 910;
let clickLevel50 = 0; let baseCost50 = 30000;
    
let speedLevel1 = 0; let baseSpeedCost1 = 10;
let speedLevel2 = 0; let baseSpeedCost2 = 150;
let speedLevel3 = 0; let baseSpeedCost3 = 1000;
let speedLevel4 = 0; let baseSpeedCost4 = 30000;

const GROWTH = 1.8;

function updateButtonText(btn, baseCost, level) {
    let cost = Math.floor(baseCost * Math.pow(GROWTH, level));
    let match = btn.innerHTML.match(/(.+?) за \d+ points/);
    if (match) {
        btn.innerHTML = match[1] + ` за ${cost} points`;
    }
}

function updatePointsSize() {
    let text = points.value;
    let numDigits = (pointsNum + "").length;
    
    points.classList.remove('long-number', 'very-long');
    
    if (numDigits >= 8) {
        points.classList.add('very-long');
    } else if (numDigits >= 5) {
        points.classList.add('long-number');
    }
}

function showFloat(value) {
    let floatNum = document.createElement('div');
    floatNum.className = 'float-number';
    floatNum.textContent = '+' + value;
    floatNum.style.left = (Math.random() * 100) + '%';
    floatNum.style.opacity = '1';
    floatNum.style.animationDelay = Math.random() * 0.3 + 's';
    floatingContainer.appendChild(floatNum);
    floatIdCounter++;
    
    setTimeout(() => {
        if (floatNum.parentNode) {
            floatNum.parentNode.removeChild(floatNum);
        }
    }, 1500);
}

setInterval(() => {
    if (speedNum > 0) {
        pointsNum += speedNum;
        points.value = "Points " + pointsNum;
        showFloat(speedNum);
        updatePointsSize();
    }
}, 1000);

// Initialize
updateButtonText(upgrade1, baseCost1, clickLevel1);
updateButtonText(upgrade10, baseCost10, clickLevel10);
updateButtonText(upgrade30, baseCost30, clickLevel30);
updateButtonText(upgrade50, baseCost50, clickLevel50);
updateButtonText(upgradeS1, baseSpeedCost1, speedLevel1);
updateButtonText(upgradeS2, baseSpeedCost2, speedLevel2);
updateButtonText(upgradeS3, baseSpeedCost3, speedLevel3);
updateButtonText(upgradeS4, baseSpeedCost4, speedLevel4);

// Upgrades...
upgrade1.addEventListener('click', () => {
    let cost = Math.floor(baseCost1 * Math.pow(GROWTH, clickLevel1));
    if (pointsNum >= cost) {
        ch += 1;
        clickBtn.innerHTML = "Клик " + ch;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        clickLevel1++;
        updateButtonText(upgrade1, baseCost1, clickLevel1);
    } else {
        alert("Не хватает очков");
    }
});

upgrade10.addEventListener('click', () => {
    let cost = Math.floor(baseCost10 * Math.pow(GROWTH, clickLevel10));
    if (pointsNum >= cost) {
        ch += 11;
        clickBtn.innerHTML = "Клик " + ch;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        clickLevel10++;
        updateButtonText(upgrade10, baseCost10, clickLevel10);
    } else {
        alert("Не хватает очков");
    }
});

upgrade30.addEventListener('click', () => {
    let cost = Math.floor(baseCost30 * Math.pow(GROWTH, clickLevel30));
    if (pointsNum >= cost) {
        ch += 24;
        clickBtn.innerHTML = "Клик " + ch;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        clickLevel30++;
        updateButtonText(upgrade30, baseCost30, clickLevel30);
    } else {
        alert("Не хватает очков");
    }
});

upgrade50.addEventListener('click', () => {
    let cost = Math.floor(baseCost50 * Math.pow(GROWTH, clickLevel50));
    if (pointsNum >= cost) {
        ch += 500;
        clickBtn.innerHTML = "Клик " + ch;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        clickLevel50++;
        updateButtonText(upgrade50, baseCost50, clickLevel50);
    } else {
        alert("Не хватает очков");
    }
});

upgradeS1.addEventListener('click', () => {
    let cost = Math.floor(baseSpeedCost1 * Math.pow(GROWTH, speedLevel1));
    if (pointsNum >= cost) {
        speedNum += 1;
        speedEl.innerHTML = "Скорость в сек. - " + speedNum;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        speedLevel1++;
        updateButtonText(upgradeS1, baseSpeedCost1, speedLevel1);
    } else {
        alert("Не хватает очков");
    }
});

upgradeS2.addEventListener('click', () => {
    let cost = Math.floor(baseSpeedCost2 * Math.pow(GROWTH, speedLevel2));
    if (pointsNum >= cost) {
        speedNum += 10;
        speedEl.innerHTML = "Скорость в сек. - " + speedNum;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        speedLevel2++;
        updateButtonText(upgradeS2, baseSpeedCost2, speedLevel2);
    } else {
        alert("Не хватает очков");
    }
});

upgradeS3.addEventListener('click', () => {
    let cost = Math.floor(baseSpeedCost3 * Math.pow(GROWTH, speedLevel3));
    if (pointsNum >= cost) {
        speedNum += 30;
        speedEl.innerHTML = "Скорость в сек. - " + speedNum;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        speedLevel3++;
        updateButtonText(upgradeS3, baseSpeedCost3, speedLevel3);
    } else {
        alert("Не хватает очков");
    }
});

upgradeS4.addEventListener('click', () => {
    let cost = Math.floor(baseSpeedCost4 * Math.pow(GROWTH, speedLevel4));
    if (pointsNum >= cost) {
        speedNum += 500;
        speedEl.innerHTML = "Скорость в сек. - " + speedNum;
        pointsNum -= cost;
        points.value = "Points " + pointsNum;
        updatePointsSize();
        speedLevel4++;
        updateButtonText(upgradeS4, baseSpeedCost4, speedLevel4);
    } else {
        alert("Не хватает очков");
    }
});

clickBtn.addEventListener('click', () => {
    pointsNum += ch;
    points.value = "Points " + pointsNum;
    showFloat(ch);
    updatePointsSize();
    console.log(pointsNum);
});
