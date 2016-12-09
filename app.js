



function hello () {
  console.log('thanks for clicking');
  var changeDiv = document.getElementById("divElement");
  changeDiv.innerHTML = "wa";
  console.log(changeDiv);
}

function fast() {
  var classElements = document.getElementsByClassName("first");
  console.log(classElements);
  classElements[0].innerHTML = "waa";
}