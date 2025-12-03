const productTitle = document.querySelector("h1");
const visualizationImg = document.querySelector("#visualization img");
const sizeOptionsButtons = document.querySelectorAll(".size-options input");
const colorOptionsButtons = document.querySelectorAll("#color-selection input");
const colorListTitle = document.querySelector("#options h2:first-child");
const miniatureImage = document.querySelectorAll("#select-img img");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBackground = document.querySelector(".menu");
const body = document.querySelector("body");


const sizes = ['41 mm', '45 mm'];
const colors = ['Verde-cipreste', 'Azul-inverno', 'Meia-noite', 'Estelar', 'Rosa-claro'];

let numCurrentColor = 1;
let numSelectedImgOption = 1;
let numSelectedSizeOption = 1;



function updateColor(){
    const currentColor = document.querySelector('[name="color-option"]:checked').id.charAt(0);

    numCurrentColor = currentColor;

    const colorName = colors[numCurrentColor].toLowerCase();


    colorListTitle.textContent = "Cor - " + colors[numCurrentColor];

    productTitle.textContent = "Pulseira loop esportiva " + colorName + " para caixa de " + sizes[numSelectedSizeOption];

    visualizationImg.src = "./imagens/opcoes-cores/imagens-" + colorName+ "/imagem-" + numSelectedImgOption + ".jpeg";

    miniatureImage[0].src = "./imagens/opcoes-cores/imagens-"+ colorName +"/imagem-0.jpeg";
    miniatureImage[1].src = "./imagens/opcoes-cores/imagens-"+ colorName + "/imagem-1.jpeg";
    miniatureImage[2].src = "./imagens/opcoes-cores/imagens-"+ colorName + "/imagem-2.jpeg";
};
 

function updateSelectedImg(){
    const selectedImgOption = document.querySelector('[name="image-option"]:checked').id.charAt(0);

    numSelectedImgOption = selectedImgOption;


    visualizationImg.src = "./imagens/opcoes-cores/imagens-" + colors[numCurrentColor].toLowerCase() + "/imagem-" + numSelectedImgOption + ".jpeg"; 
};

function updateSize(){
    visualizationImg.classList.remove('smaller');

    const selectedSizeOption = document.querySelector('[name="size-option"]:checked').id.charAt(0);

    numSelectedSizeOption = selectedSizeOption;

    if(selectedSizeOption == 1){
        visualizationImg.classList.remove('smaller');

    } else{
        visualizationImg.classList.add('smaller');
    }

    productTitle.textContent = "Pulseira loop esportiva "+ colors[numCurrentColor] +" para caixa de " + sizes[numSelectedSizeOption];

}



sizeOptionsButtons.forEach(input => {
    input.addEventListener("click", updateSize)
});

colorOptionsButtons.forEach(input => {
    input.addEventListener("click", updateColor)
});


function openMenu(){
    body.classList.add("open-menu");
};

function closeMenu(){
    body.classList.remove("open-menu");
};

mobileMenu.addEventListener("click", openMenu);
menuBackground.addEventListener("click", closeMenu);