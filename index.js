import menuArray from "./data.js";

const menuUlEl = document.querySelector("#menu");

const getItemsFromMenuArray = () => {
  return menuArray
    .map((item) => {
      return `
      <li class="item">
         <img
            class="item--graphic"
            src="./images/${item.imageFile}"
            alt="${item.imageAlt}"
         />
         <div class="item--info">
            <h3 class="item--info--name">${item.name}</h3>
            <p class="item--info--components">${item.components}</p>
            <h4 class="item--info--price">₱${item.price}</h4>
         </div>
         <i class="add-icon fa-solid fa-plus"></i>
      </li>
   `;
    })
    .join("");
};

menuUlEl.innerHTML = getItemsFromMenuArray();
