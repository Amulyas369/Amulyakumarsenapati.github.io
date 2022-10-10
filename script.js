function myFunction() {
 if(document.getElementById("menu_section").style.display=="none"){
  document.getElementById("menu_section").style.display="block";
 }
 else{
  document.getElementById("menu_section").style.display="none";
 }
    
  }
function getMassage(){
  let name=document.getElementById("name").value;
  let email=document.getElementById("email").value;
  let subject=document.getElementById("subject").value;
  let massage=document.getElementById("massage").value;
  alert("Mr./Ms "+name+" "+"Thanks for contact me I will Response you about your queries of "+ subject+" "+"by your provided email "+ email);
}
function updateFunction(){
  var x=document.getElementById("femail").value;
alert("thanks for register us.You have registered your Email for future update.We will update you in your email "+x);
}