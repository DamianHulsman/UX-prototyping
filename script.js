let mode = "light";
function togglemodes()
{

  if(mode == "light")
  {
    mode = "dark";
    //console.log('dark mode activated');
    document.getElementById('body').style.backgroundColor = "black";
    document.querySelector("body").style.filter = "invert(1)";
  }
  else if(mode == "dark")
  {
    mode = "light";
    //console.log('light mode activated');
    document.getElementById('body').style.backgroundColor = "white";
    document.querySelector("body").style.filter = null;
  }
}