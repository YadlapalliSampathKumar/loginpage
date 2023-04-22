var email="abcd@gmail.com"
var pass="1234"
var form=document.forms
function loginPage()
{
  var userDefEmail=document.getElementById("email").value 
  var userDefPass=document.getElementById("password").value
  var divbor=document.getElementsByClassName("borderDiv")
  if(email!=userDefEmail && pass!=userDefPass)
  {
    document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
    divbor[0].style.borderColor="red"
    divbor[1].style.borderColor="red"
    document.getElementById("result").innerHTML="user name and password is wrong"
  }  
  else if(email!=userDefEmail && pass!=userDefPass)
  {
    document.body.style.backgroundImage="linear-gradient(75deg,rgb(201,0,134),red)"
    divbor[0].style.borderColor="royalblue"
    divbor[1].style.borderColor="red"
    document.getElementById("result").innerHTML="Password is wrong"
  }   
  else if(email!=userDefEmail && pass!=userDefPass)
  {
    document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
    divbor[0].style.borderColor="royalblue"
    divbor[1].style.borderColor="red"
    document.getElementById("result").innerHTML="Email is wrong"
  }  
  else
  {
    form[0].action="./html/home.html"
    form[0].elements[2].type="submit"
  }
}
function visible()
{
    form[0].elements[1].type="text";
    document.getElementById("passVisible").src="../closedeye.png"
    document.getElementById("passVisible").style.transform="rotateY(360deg)"
    document.getElementById("passvisible").style.transition="transform 0.5s"
}
function invisible()
{
    form[0].elements[1].type="password";
    document.getElementById("passVisible").src="../openeye.png"
    document.getElementById("passVisible").style.transform="rotateY(0deg)"
    document.getElementById("passvisible").style.transition="transform 0.5s"
}
