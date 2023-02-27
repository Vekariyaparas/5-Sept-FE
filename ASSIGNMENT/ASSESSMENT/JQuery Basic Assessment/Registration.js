function test(){
  var fname=document.forms["myForm"]["fname"].value;
  var lname=document.forms["myForm"]["lname"].value;
  var mail=document.forms["myForm"]["mail"].value;
  var phone=document.forms["myForm"]["phone"].value;
  var gen=document.forms["myForm"]["gen"].value;
  var dob=document.forms["myForm"]["dob"].value;
  var add=document.forms["myForm"]["add"].value;
  var city=document.forms["myForm"]["city"].value;
  var pin=document.forms["myForm"]["pin"].value;
  var sta=document.forms["myForm"]["sta"].value;
  var qua=document.forms["myForm"]["qua"].value;
  var spe=document.forms["myForm"]["spe"].value;
  var pass=document.forms["myForm"]["pass"].value;

  if(fname == "")
  {
    alert("Please enter your first name.");
    document.getElementById("fname").focus();
    return false;
  }
  else if(lname == "")
  {
    alert("Please enter your last name.");
    document.getElementById("lname").focus();
    return false;
  }
  else if(mail == "")
  {
    alert("Please enter your E-mail.");
    document.getElementById("mail").focus();
    return false;
  }
  else if(phone == "")
  {
    alert("Please enter your phone-number.");
    document.getElementById("phone").focus();
    return false;
  }
  else if(gen == "")
  {
    alert("Please select your gender.");
    document.getElementById("gen").focus();
    return false;
  }
  else if(dob == "")
  {
    alert("Please select your birth date.");
    document.getElementById("dob").focus();
    return false;
  }
  else if(add == "")
  {
    alert("Please enter your address.");
    document.getElementById("add").focus();
    return false;
  }
  else if(city == "")
  {
    alert("Please enter your city.");
    document.getElementById("city").focus();
    return false;
  }
  else if(pin == "")
  {
    alert("Please enter your area pincode.");
    document.getElementById("pin").focus();
    return false;
  }
  else if(sta == "")
  {
    alert("Please enter your state.");
    document.getElementById("sta").focus();
    return false;
  }
  else if(qua == "")
  {
    alert("Please select your qualification.");
    document.getElementById("qua").focus();
    return false;
  }
  else if(spe == "")
  {
    alert("Please select your specialization.");

  }
  else if(pass == "")
  {
    alert("Please enter your password.");
    document.getElementById("pass").focus();
    return false;
  }
  else
  {
    return true;
  }


  
}