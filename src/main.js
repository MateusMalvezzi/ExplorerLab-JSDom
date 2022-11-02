import "./css/index.css";

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path ");
//Como eu quero selecionar o "primeiro nivel de G", coloco > g
//Tendo o "primeiro nivel de g", preciso selecionar qual g eu quero. Por isso, uso o nth-child e seleciono o FILHO com (1).
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path ");
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

function setCardType(type) {
    const colors = {
        visa: ["#436D99", "#2D57F2"],
        mastercard: ["#a79774", "#C69347"],
        default:["black", "gray"],
    };

    ccBgColor01.setAttribute("fill", colors[type] [0])
    ccBgColor02.setAttribute("fill", colors[type] [1])
    ccLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("visa")
