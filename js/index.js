var bckgLeft = document.querySelector("#background-left");
var bckRight = document.querySelector("#background-right");
var claimSoccer = document.querySelector("#claim-soccer");
var claimTennis = document.querySelector("#claim-tennis");

bckgLeft.addEventListener("mouseover", () => {
  bckgLeft.style.width = "59%";
  bckRight.style.width = "56%";
  claimSoccer.style.right = "33%";
});

bckgLeft.addEventListener("mouseout", () => {
  bckgLeft.style.width = "56%";
  bckRight.style.width = "59%";
  claimSoccer.style.right = "25%";
});

bckRight.addEventListener("mouseover", () => {
  bckgLeft.style.width = "56%";
  bckRight.style.width = "59%";
  claimTennis.style.left = "23%";
});

bckRight.addEventListener("mouseout", () => {
  bckgLeft.style.width = "59%";
  bckRight.style.width = "56%";
  claimTennis.style.left = "15%";
});
