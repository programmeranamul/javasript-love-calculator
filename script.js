const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");
const result = document.getElementById("result");

const enterYourName = prompt("Enter Your Name");
const enterYourPartnerName = prompt("Enter Your Partner Name");

yourName.innerText = enterYourName;
partnerName.innerText = enterYourPartnerName;

const lovePersent = Math.floor(Math.random() * 100) + 1;

if (enterYourName && enterYourPartnerName) {
  result.innerHTML = `<div class="result"><h3>${enterYourName} loves ${enterYourPartnerName} <span class="${
    lovePersent > 70 ? "text-green" : "text-red"
  }">${lovePersent}%</span> </h3></div>`;
} else {
  result.innerHTML =
    "<h3 class='result text-red'>Please Give Your Name And Your Partner Name</h3>";
}
