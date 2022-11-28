
const detailMenuInfPessoais = document.querySelector('#background-infPessoais')
const detailMenuHabilidades = document.querySelector('#background-habilidades')
const detailMenuProjetos = document.querySelector('#background-projetos')
const detailMenuExpProfissionais = document.querySelector('#background-expProfissionais')
const detailMenuContato = document.querySelector('#background-contato')

const pagSobre = document.querySelector('#grid-container')
const pagHabilidades = document.querySelector('#grid-container2')
const pagProjetos = document.querySelector("#grid-container3")
const pagExpProfissionais = document.querySelector("#grid-container4")
const pagContato = document.querySelector("#grid-container5")


const htmlDescription = document.querySelector("#htmlDescription")
const htmlImage = document.querySelector("#htmlPicture")
const cssDescription = document.querySelector("#cssDescription")
const cssImage = document.querySelector("#cssPicture")
const jsDescription = document.querySelector("#jsDescription")
const jsImage = document.querySelector("#jsPicture")
const nodeDescription = document.querySelector("#nodeDescription")
const nodeImage = document.querySelector("#nodePicture")
const reactDescription = document.querySelector("#reactDescription")
const reactImage = document.querySelector("#reactPicture")
const gitDescription = document.querySelector("#gitDescription")
const gitImage = document.querySelector("#gitPicture")

const landingPageDescription = document.querySelector("#LandingPageDescription")
const landingPageImage = document.querySelector("#LandingPagePicture")
const FMSDescription = document.querySelector("#FMSDescription")
const empDescription = document.querySelector("#empDescription")

const landingPageList = document.querySelector("#landingPage")
const FMSList = document.querySelector("#FMS")
const emp1List = document.querySelector("#emp1")
const emp2List = document.querySelector("#emp2")

const sound = document.querySelector("#sound")
const withSound = document.querySelector("#withSound")

const mouseOverSound = document.querySelector("#mouseOverSound")
const selectSound = document.querySelector("#selectSound")

const instruction = document.querySelector("#instruction")
const instruction1 = document.querySelector("#instruction1")

// var radio1 = document.getElementById("tab1");
// var radio2 = document.getElementById("tab2");
// var radio1 = document.getElementById("tab3");
// var radio2 = document.getElementById("tab4");
// var radio1 = document.getElementById("tab5");

function mouseOver_infPessoais() {
    mouseOverSound.play()
}

function mouseOut_infPessoais() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver_habilidades() {
    mouseOverSound.play()
}

function mouseOut_habilidades() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver_projetos() {
    mouseOverSound.play()
}

function mouseOut_projetos() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver_expProfissionais() {
    mouseOverSound.play()
}

function mouseOut_expProfissionais() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver_contato() {
    mouseOverSound.play()
}

function mouseOut_contato() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

window.onload = function LoadmenuSelect() {
    detailMenuInfPessoais.classList.add('ativo');
    pagHabilidades.classList.add('ativo')
    pagProjetos.classList.add('ativo')
    pagExpProfissionais.classList.add("ativo")
    pagContato.classList.add("ativo")
    mouseOverSound.play()

}


// checkbox.change(function (event) {
//     var checkbox = event.target;
//     if (checkbox.checked) {
//         alert("Checked, executar function")
//     } else {
//         alert("Unchecked")
//     }
// });

// menu.addEventListener('onmouseover', () => {
//     detailMenu1.classList.add('ativo');
//     detailMenu2.classList.add('ativo')
// })

// var click = 1




// function mouseOver1() {
//     detailMenu1InfPessoais.classList.add('ativo');
//     detailMenu2InfPessoais.classList.add('ativo');
//     // console.log("deu certo")
// }

// if (radio1.checked == null) {
//     function mouseOut1() {

//         detailMenu1InfPessoais.classList.remove('ativo');
//         detailMenu2InfPessoais.classList.remove('ativo');

//     }

// }

function menuSelect1() {
    detailMenuInfPessoais.classList.add('ativo');
    detailMenuHabilidades.classList.remove('ativo');
    detailMenuProjetos.classList.remove('ativo');
    detailMenuExpProfissionais.classList.remove('ativo');
    detailMenuContato.classList.remove('ativo')
    pagSobre.classList.remove('ativo')
    pagHabilidades.classList.add('ativo')
    pagProjetos.classList.add('ativo')
    pagExpProfissionais.classList.add("ativo")
    pagContato.classList.add("ativo")
    selectSound.play()
}


function menuSelect2() {
    // if (radio2.checked == true) {
    detailMenuHabilidades.classList.add('ativo');
    detailMenuInfPessoais.classList.remove('ativo');
    detailMenuProjetos.classList.remove('ativo');
    detailMenuExpProfissionais.classList.remove('ativo');
    detailMenuContato.classList.remove('ativo')
    pagSobre.classList.add('ativo')
    pagHabilidades.classList.remove('ativo')
    pagProjetos.classList.add('ativo')
    pagExpProfissionais.classList.add("ativo")
    pagContato.classList.add("ativo")
    console.log("deu certo")
    selectSound.play()
}

function menuSelect3() {
    // if (radio2.checked == true) {
    detailMenuProjetos.classList.add('ativo');
    detailMenuHabilidades.classList.remove('ativo');
    detailMenuInfPessoais.classList.remove('ativo');
    detailMenuExpProfissionais.classList.remove('ativo');
    detailMenuContato.classList.remove('ativo')
    console.log("deu certo")
    pagSobre.classList.add('ativo')
    pagHabilidades.classList.add('ativo')
    pagProjetos.classList.remove('ativo')
    pagExpProfissionais.classList.add("ativo")
    pagContato.classList.add("ativo")
    selectSound.play()
}

function menuSelect4() {
    // if (radio2.checked == true) {
    detailMenuExpProfissionais.classList.add('ativo');
    detailMenuProjetos.classList.remove('ativo');
    detailMenuHabilidades.classList.remove('ativo');
    detailMenuInfPessoais.classList.remove('ativo');
    detailMenuContato.classList.remove('ativo')
    pagExpProfissionais.classList.remove("ativo")
    pagSobre.classList.add('ativo')
    pagHabilidades.classList.add('ativo')
    pagProjetos.classList.add('ativo')
    pagContato.classList.add("ativo")
    console.log("deu certo")
    selectSound.play()

}

function menuSelect5() {
    // if (radio2.checked == true) {
    detailMenuContato.classList.add('ativo')
    detailMenuExpProfissionais.classList.remove('ativo');
    detailMenuProjetos.classList.remove('ativo');
    detailMenuHabilidades.classList.remove('ativo');
    detailMenuInfPessoais.classList.remove('ativo');
    pagContato.classList.remove("ativo")
    pagExpProfissionais.classList.add("ativo")
    pagSobre.classList.add('ativo')
    pagHabilidades.classList.add('ativo')
    pagProjetos.classList.add('ativo')
    console.log("deu certo")
    selectSound.play()
}

function mouseOver1() {
    htmlDescription.classList.add('ativo')
    htmlImage.classList.add('ativo')
    instruction.classList.add('ativo')
    mouseOverSound.play()
}

function mouseOut1() {
    htmlDescription.classList.remove('ativo')
    htmlImage.classList.remove('ativo')
    instruction.classList.remove('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver2() {
    cssDescription.classList.add('ativo')
    cssImage.classList.add('ativo')
    instruction.classList.add('ativo')
    mouseOverSound.play()
}

function mouseOut2() {
    cssDescription.classList.remove('ativo')
    cssImage.classList.remove('ativo')
    instruction.classList.remove('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver3() {
    jsDescription.classList.add('ativo')
    jsImage.classList.add('ativo')
    instruction.classList.add('ativo')
    mouseOverSound.play()
}

function mouseOut3() {
    jsDescription.classList.remove('ativo')
    jsImage.classList.remove('ativo')
    instruction.classList.remove('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver4() {
    nodeDescription.classList.add('ativo')
    nodeImage.classList.add('ativo')
    instruction.classList.add('ativo')
    mouseOverSound.play()
}

function mouseOut4() {
    nodeDescription.classList.remove('ativo')
    nodeImage.classList.remove('ativo')
    instruction.classList.remove('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver5() {
    reactDescription.classList.add('ativo')
    reactImage.classList.add('ativo')
    instruction.classList.add('ativo')
    mouseOverSound.play()
}

function mouseOut5() {
    reactDescription.classList.remove('ativo')
    reactImage.classList.remove('ativo')
    instruction.classList.remove('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOver6() {
    gitDescription.classList.add('ativo')
    gitImage.classList.add('ativo')
    instruction.classList.add('ativo')
    mouseOverSound.play()
}

function mouseOut6() {
    gitDescription.classList.remove('ativo')
    gitImage.classList.remove('ativo')
    instruction.classList.remove('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOverLandingPage() {
    landingPageDescription.classList.add('ativo')
    landingPageImage.classList.add('ativo')
    FMSDescription.classList.remove("ativo")
    empDescription.classList.remove("ativo")
    instruction1.classList.add('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
    mouseOverSound.play()
    landingPageList.classList.add("ativo")
    FMSList.classList.remove("ativo")
    emp1List.classList.remove("ativo")
    emp2List.classList.remove("ativo")
}

function mouseOutLandingPage() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mouseOverFMS() {
    FMSDescription.classList.add("ativo")
    landingPageDescription.classList.remove('ativo')
    landingPageImage.classList.remove('ativo')
    empDescription.classList.remove("ativo")
    instruction1.classList.add('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
    mouseOverSound.play()
    FMSList.classList.add("ativo")
    landingPageList.classList.remove("ativo")
    emp1List.classList.remove("ativo")
    emp2List.classList.remove("ativo")
}

function mouseOverEMP1() {
    empDescription.classList.add("ativo")
    landingPageDescription.classList.remove('ativo')
    landingPageImage.classList.remove('ativo')
    FMSDescription.classList.remove("ativo")
    instruction1.classList.add('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
    mouseOverSound.play()
    emp1List.classList.add("ativo")
    FMSList.classList.remove("ativo")
    landingPageList.classList.remove("ativo")
    emp2List.classList.remove("ativo")
}

function mouseOverEMP2() {
    empDescription.classList.add("ativo")
    landingPageDescription.classList.remove('ativo')
    landingPageImage.classList.remove('ativo')
    FMSDescription.classList.remove("ativo")
    instruction1.classList.add('ativo')
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
    mouseOverSound.play()
    emp2List.classList.add("ativo")
    emp1List.classList.remove("ativo")
    FMSList.classList.remove("ativo")
    landingPageList.classList.remove("ativo")
}

function mouseOverContato() {
    mouseOverSound.play()
}
function mouseOutContato() {
    mouseOverSound.pause()
    mouseOverSound.currentTime = 0
}

function mute() {
    sound.classList.toggle("ativo")
    withSound.classList.toggle("ativo")
    mouseOverSound.muted = true;
    selectSound.muted = true;
}

function som() {
    mouseOverSound.muted = false;
    selectSound.muted = false;
}

// function mouseOverSound() {
//     mouseOverSound.play()
// }


// function selectLandingPage() {
//     landingPageDescription.classList.add('ativo')
//     landingPageImage.classList.add('ativo')
//     instruction1.classList.add('ativo')
//     selectSound.play()
//     mouseOutLandingPage(stop)
// }
