//navbar pages transfer//
function opennav(event,btnName)
{
  let i, btnContent, btnLink;
  btnContent = document.getElementsByClassName("btnContent");
  for (i = 0; i < btnContent.length; i++) {
    btnContent[i].style.display = "none";
  }

  btnLink = document.getElementsByClassName("btnLink");
  for (i = 0; i < btnLink.length; i++) {
    btnLink[i].className = btnLink[i].className.replace(" active", "");
  }

  document.getElementById(btnName).style.display = "block";
  event.currentTarget.className += " active";
}
   document.getElementById("default").click();


// fixed navbar on scroll page//

function fixnavbar(){

 if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80)
    {
     let navbar=document.getElementById("navbar");
      navbar.classList.add("navbar-fixed-top");
  }
    else{
       navbar.classList.remove("navbar-fixed-top");
  }
}

/* read more btn consulate*/
function ReadMoreConsultations(){
    var Consultations_btn=document.getElementById("Consultations_btn");
  if(Consultations_btn.textContent =="Read More")
  {
      Consultations_btn.textContent= "Read Less";
      Consultations_btn.style.backgroundColor="#32c69a";
  } 
    
    else{
       Consultations_btn.textContent="Read More"; 
        Consultations_btn.style.backgroundColor="#337ab7";
        }
}


function ReadMoreEmergency(){
    var Emergency_btn=document.getElementById("Emergency_btn");
  if(Emergency_btn.textContent == "Read More") 
  {
      Emergency_btn.textContent= "Read Less";
      Emergency_btn.style.backgroundColor="#32c69a";
  } 
    
    else{
       Emergency_btn.textContent="Read More"; 
       Emergency_btn.style.backgroundColor="#337ab7";
        }
}
// serv
function opentap(evt, tapName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tapName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


//home chang icon plus to - //
 function changicon1(){
     let icon=document.getElementById("icon1");
     if(icon.classList.contains("glyphicon-plus"))
     {
     icon.className=icon.className.replace("glyphicon-plus","glyphicon-minus");
     }
     else{
         icon.className=icon.className.replace("glyphicon-minus","glyphicon-plus");
     }
 }


 function changicon2(){
     let icon=document.getElementById("icon2");
     if(icon.classList.contains("glyphicon-plus"))
     {
     icon.className=icon.className.replace("glyphicon-plus","glyphicon-minus");
        
     }
     else{
         icon.className=icon.className.replace("glyphicon-minus","glyphicon-plus");
     }
 }


 function changicon3(){
     let icon=document.getElementById("icon3");
     if(icon.classList.contains("glyphicon-plus"))
     {
     icon.className=icon.className.replace("glyphicon-plus","glyphicon-minus");
     }
     else{
         icon.className=icon.className.replace("glyphicon-minus","glyphicon-plus");
     }
 }


 function changicon4(){
     let icon=document.getElementById("icon4");
     if(icon.classList.contains("glyphicon-plus"))
     {
     icon.className=icon.className.replace("glyphicon-plus","glyphicon-minus");
     }
     else{
         icon.className=icon.className.replace("glyphicon-minus","glyphicon-plus");
     }
 }


 function changicon5(){
     let icon=document.getElementById("icon5");
     if(icon.classList.contains("glyphicon-plus"))
     {
     icon.className=icon.className.replace("glyphicon-plus","glyphicon-minus");
     }
     else{
         icon.className=icon.className.replace("glyphicon-minus","glyphicon-plus");
     }
 }



//form validation contact
function namevalidation1(){
    let a = document.form.name.value;
if(!isNaN(a)){
document.getElementById("msgname").innerHTML="Please Enter Only Characters";
document.form.name.select();
return false;
}   
}


function namevalidation2(){
   let a = document.form.name.value;
if(!isNaN(a)){
document.getElementById("name").innerHTML="Please Enter Only Characters";
document.form.name.select();
return false;
}   
}


//validation of name //
function validationphone(){   
let ph = document.form.phone.value;
if(isNaN(ph))
{
document.getElementById("phone").innerHTML="Enter the valid Mobile Number(Like:9566137117)";
document.form.phone.focus();
return false;
}
if((ph.length < 1) || (ph.length > 11)){
document.getElementById("phone").innerHTML=" Your Mobile Number must be 1 to 11 Integers";
document.form.phone.select();
return false;
}
}



//validation of date //

function minDate(){
    let curent_date= new Date(),
        selected_date=document.form.date_.value;
    
    if(selected_date < curent_date){
document.getElementById("phone").innerHTML="inValide date !";
        document.form.date_.focus();
          return false;
    }
}

