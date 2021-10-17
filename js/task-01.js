const elementList = document.querySelector("#categories");
console.log(elementList);
const childrenList = `Number of categories : ${elementList.children.length}`;
console.log(childrenList);


const elementLiItem = document.querySelectorAll(".item");

// console.log(elementLiItem);

const findElementH = document.querySelector("h2");
// console.log(findElementH);
const elementTextContent = elementLiItem.forEach((element) => {
    const findFirstChild = element.firstElementChild.textContent;
    console.log(`Category : ${findFirstChild }`);
    const findLastChild = element.lastElementChild;
    const findElementList = findLastChild.querySelectorAll("li").length
    console.log(`Elements : ${findElementList}`);
});

