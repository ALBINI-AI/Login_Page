document.getElementById("myForm").addEventListener("submit", function fun(event){
    let name=document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pswrd = document.getElementById("pswrd").value;
    let confirmPswrd = document.getElementById("confirmPswrd").value;
    let flag=1;
    let text ="";

    //FullName Validation
    text="";
    console.log(typeof name);
    if (name.trim()===""){
        flag=0;
        text="Required";
        document.getElementById("nameError").style.display="block";
        document.getElementById("name").style.borderColor= "red" ;
        event.preventDefault();
    }
    else if(parseInt(name) || parseInt(name)){
        flag=0;
        text="Enter Characters A-Z or a-z";
        document.getElementById("nameError").style.display="block";
        document.getElementById("name").style.borderColor= "red" ;
        event.preventDefault();
    }
    else{
        flag&&=1;
        document.getElementById("nameError").style.display="none";
        document.getElementById("name").style.borderColor= "black" ;
    }
    document.getElementById("nameP").innerHTML=text;

    //UserName Validation
    if (username.trim()===""){
        flag=0;
        text="Required"
        document.getElementById("UNameError").style.display="block";
        document.getElementById("username").style.borderColor= "red" ;
        event.preventDefault();
    }
    else if(parseInt(username) || parseInt(username)){
        flag=0;
        text="Enter Characters A-Z or a-z";
        document.getElementById("nameError").style.display="block";
        document.getElementById("username").style.borderColor= "red" ;
        event.preventDefault();
    }
    else{
        flag=1;
        document.getElementById("UNameError").style.display="none";
        document.getElementById("username").style.borderColor= "black" ;
    }
    document.getElementById("usernameP").innerHTML=text;

    //email Validation
    text="";
    if (email.trim()===""){
        flag=0;
        text="Required"
        document.getElementById("emailError").style.display="block";
        document.getElementById("email").style.borderColor= "red" ;
        event.preventDefault();
    }
    else{
        flag&&=1;
        document.getElementById("emailError").style.display="none";
        document.getElementById("email").style.borderColor= "black" ;
    }
    document.getElementById("emailP").innerHTML=text;

    //Password Validation
    text="";
    if (pswrd.trim()===""){
        flag=0;
        text="Required"
        document.getElementById("pswrdError").style.display="block";
        document.getElementById("pswrd").style.borderColor= "red" ;
        event.preventDefault();
    }
    else{
        flag&&=1;
        document.getElementById("pswrdError").style.display="none";
        document.getElementById("pswrd").style.borderColor= "black" ;
    }
    document.getElementById("pswrdP").innerHTML=text;


    //Password Confirmation
    text="";
    if (confirmPswrd.trim()===""){
        flag=0;
        text="Required";
        document.getElementById("confirmPswrdError").style.display="block";
        document.getElementById("confirmPswrd").style.borderColor= "red" ;
        event.preventDefault();
    }
    else if(pswrd!=confirmPswrd){
        flag=0;
        text="Password Mismatch";
        document.getElementById("confirmPswrdError").style.display="block";
        document.getElementById("confirmPswrd").style.borderColor= "red" ;
        event.preventDefault();
    }
    else{
        flag&&=1;
        document.getElementById("confirmPswrdError").style.display="none";
        document.getElementById("confirmPswrd").style.borderColor= "black" ;
    }
    document.getElementById("confirmPswrdP").innerHTML=text;

    //Success Message
    if(flag==1){
        alert("Login Success");
    }
});

