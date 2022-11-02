import "./css/index.css";

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path ");
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path ");


function setCardType(type) {
    const colors = {
        visa: ["#436D99", "#2D57F2"],
        mastercard: ["#DF6F29", "#C69347"],
        default["black", "gray"],
    };

    ccBgColor01.setAttribute("fill", colors[type] [0]);
    ccBgColor02.setAttribute("fill", colors[type] [1]);
};

setCardType("mastercard"); 