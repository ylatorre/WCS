var p = "#";
var patates = prompt('Hey mon ami ! Tu aimes ça les patates?', 'Oui');

if (patates == 'Oui')
{
  for (var i=0; i < 7 ;i++)
  {
    console.log(p);
    p += "#";
  }
}
  else if (patates =='Non')
  {
    alert(":'(");
  }
  else {
    alert("Je vous sens comme tiraillé");
}

function maFonction(){
  setTimeout(function(){
    alert("Hello go back to sleep");
    myFunction();

  }, 5000);
}
(window.addEventListener) ? window.addEventListener("load", maFonction, false) : window.attachEvent("onload", maFonction);
function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        maFonction();
    }
    document.getElementById("demo").innerHTML = txt;
}
