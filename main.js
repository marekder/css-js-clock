const secondHand = document.querySelector(`.second-hand`);
const minsHand = document.querySelector(`.min-hand`)
const hourHand = document.querySelector(`.hour-hand`)

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minutesdegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minutesdegrees}deg)`;

    const hours = now.getHours();
    const hoursdegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursdegrees}deg)`;

}

setInterval(setDate, 1000);