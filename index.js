let root1 = document.getElementById("root1");
let div1 = document.createElement("div");
if(localStorage.getItem("notes")===null){
  localStorage.setItem("notes" , "Hi there!")
}
show();
root1.appendChild(div1);
div1.setAttribute("class", "info");
div1.setAttribute("style", "border : 2px solid black ; padding:9px");
div1.addEventListener("click", function (e) {
  let inputElem = document.getElementsByClassName("inputElem");
  if (inputElem.length === 0) {
    div1.innerHTML = `<input id='text' style='padding:4px' class='inputElem' placeholder='edit text' />`;
  }
  let text = document.getElementById("text");
  text.addEventListener("blur", function () {
    localStorage.setItem("notes", text.value);
    div1.innerHTML = localStorage.getItem("notes");
  });
});
function show(e) {
  div1.innerHTML = localStorage.getItem("notes");
}