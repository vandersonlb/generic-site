const buttons = document.querySelectorAll("#favorite");

buttons.forEach(button => {
  button.addEventListener('click', evt => {
    evt.target.innerText = evt.target.innerText === "favorite_border" ? "favorite" : "favorite_border";
  })
})