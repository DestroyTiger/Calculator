const keys = document.querySelectorAll(".buttom");
const boxanswer = document.querySelector(".boxanswer");
const equad = document.querySelector(".mosavi");
const history = document.querySelector(".history");
const clearSlice = document.querySelector(".C");
const clearAll = document.querySelector(".AC");

window.addEventListener("keyup", function (event) {
    if (event.key >= 0 | event.key <= 9 | event.key === "+" | event.key === "/" | event.key === "-" | event.key === "%" | event.key === "*" | event.key === "." | event.key === ")" | event.key === "(") {
        boxanswer.value += event.key;
        boxanswer.value = boxanswer.value.replaceAll(",", "");
        boxanswer.value = boxanswer.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    else if (event.key === "Enter") {
        sumall();

    }
    else if (event.key == "Backspace") {
        clearone();


    }

});


history.addEventListener("click", () => boxanswer.value = history.innerText);

equad.addEventListener("click", sumall);

clearSlice.addEventListener("click", clearone);
clearAll.addEventListener("click", () =>{ 
    boxanswer.value = "";
    history.innerText="0";
});

keys.forEach((items) => {
    items.addEventListener("click", () => {
        boxanswer.value += items.innerHTML;
        boxanswer.value = boxanswer.value.replaceAll(",", "");
        boxanswer.value = boxanswer.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
});







function sumall(event) {
    if (boxanswer.value.length > 0 & +eval(boxanswer.value.replaceAll(",", "")) >= 0) {
        boxanswer.value = boxanswer.value.replaceAll(",", "");
        history.innerText = boxanswer.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        boxanswer.value = (+eval(boxanswer.value).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}
function clearone() {
    let clear = boxanswer.value.replaceAll(",", "");
    boxanswer.value = clear.substring(0, clear.length - 1).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (boxanswer.value.length < 1)
        boxanswer.value = "";
}
