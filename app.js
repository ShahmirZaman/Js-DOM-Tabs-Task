const tabsImg = document.querySelector(".tabs-img");
console.log(tabsImg);
const tabButtons = document.querySelector("#tabs-btn");
console.log(tabButtons);
const tabContent = document.querySelector("#tabs-content");
console.log(tabContent);

let buttonArray = ["History","Vision","Goals"];
buttonArray.forEach((btns) => {
    tabButtons.innerHTML += `<button id = ${btns} onclick=tabHandler('${btns}')>${btns}</button>`;
})


const data = [
    {
        img:"https://picsum.photos/200/300",
        title:"History",
        category:"History",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis et libero ducimus minus ab exercitationem, dolore veritatis? Qui minus autem ex, quo sint quia in distinctio. Ab blanditiis consectetur non rerum doloribus ea saepe nulla autem. Earum reprehenderit est, deserunt facere, eveniet nihil suscipit ratione amet sit illum nisi?",
    },
    {
        img:"https://picsum.photos/250/300",
        title:"Vision",
        category:"Vision",
        description:"Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis et libero ducimus minus ab exercitationem, dolore veritatis? Qui minus autem ex, quo sint quia in distinctio. Ab blanditiis consectetur non rerum doloribus ea saepe nulla autem. Earum reprehenderit est, deserunt facere, eveniet nihil suscipit ratione amet sit illum nisi?",
    },
    {
        img:"https://picsum.photos/300/300",
        title:"Goals",
        category:"Goals",
        description:"Lorem ipsum ipsum, dolor sit amet consectetur adipisicing elit. Expedita nobis et libero ducimus minus ab exercitationem, dolore veritatis? Qui minus autem ex, quo sint quia in distinctio. Ab blanditiis consectetur non rerum doloribus ea saepe nulla autem. Earum reprehenderit est, deserunt facere, eveniet nihil suscipit ratione amet sit illum nisi?",
    },
];
function tabHandler(content) {
    data.filter((items) => {
        if(items.category.includes(content)) {
            return true;
        }
        else if(content == "Goals"){
            return true;
        }
    }).forEach((items) => {
        tabsImg.innerHTML = `<img src="${items.img}" alt="${items.title} image"> `;
        tabContent.innerHTML = `<h3>${items.title}</h3>
        <p id="tab-${items.title}">${items.description}</p>`
    });
}
tabHandler("History");



