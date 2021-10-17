function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
 widgetElement : document.querySelector(".widget"),
 colorElement : document.querySelector(".color"),
 changeBtn : document.querySelector(".change-color"),
};

refs.widgetElement.addEventListener('click', handleBtnChange);

function handleBtnChange (event) {
refs.colorElement.textContent = getRandomHexColor();
 if(!event.target.classList.contains('change-color')) {
   return;
 }
 return (document.body.style.backgroundColor = getRandomHexColor());
};
