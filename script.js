x=document.getElementById("test");
x.addEventListener("click", function() {
  document.getElementById("image").style.display = "none";
  myfunction("trwereqwrrew");
  });

function myfunction() {
    alert("Элемент был удалён")
}






document.getElementById("test_button").addEventListener("click",function() {
  inputTest = document.getElementById("test_input").value;
  if ((inputTest.includes('@')) & inputTest.length > 9) {
    alert('okv')
  } else {
    alert('ne ok')
  }
})

names = ['t', 'f', 'a', 't', 'e', 'x']

for(i=0; i < names.length; i++){
  console.log(names[i]);
}


