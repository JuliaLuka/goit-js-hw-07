const categoriesList = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemElements = category.querySelectorAll("ul>li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemElements}`);
});
