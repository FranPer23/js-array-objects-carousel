const images = [
    {
        image: 'img/img_1.jpg',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/img_2.jpg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/img_3.jpg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/img_4.jpg',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/img_5.jpg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const imgContainer = document.querySelector(".card")

images.forEach((curImg) => {
    // console.log(curImg);
    
    const objCard = `
        <div class = "picture">
            <img src="${curImg.image}" alt="">
            ${curImg.text}
        </div>`;

    imgContainer.innerHTML += objCard;
  
})


const picturesArray = document.getElementsByClassName("picture")
console.log(picturesArray);

let activeItemIndex = 0;
picturesArray[activeItemIndex].classList.add("active");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", automaticForw)

prevBtn.addEventListener("click", backwards)




//FUNCTION

function automaticForw() {
    picturesArray[activeItemIndex].classList.remove("active");
    if (activeItemIndex < (picturesArray.length -1)){
     activeItemIndex++;
     } else {   
      activeItemIndex = 0;      
     }
     picturesArray[activeItemIndex].classList.add("active") 
     
   
}

setInterval(automaticForw, 3000)

function backwards() {
    picturesArray[activeItemIndex].classList.remove("active");
    if (activeItemIndex === 0) {
        activeItemIndex = picturesArray.length - 1;  
    } else {
        activeItemIndex--;
    }
    
    picturesArray[activeItemIndex].classList.add("active");
}