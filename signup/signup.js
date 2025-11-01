let signup=()=>{
    let name=document.querySelector("#sname").value.trim();
    let email=document.querySelector("#semail").value.trim();
    let phone=document.querySelector("#sphone").value.trim();
    let pass=document.querySelector("#spass").value.trim();
    let cpass=document.querySelector("#scpass").value.trim();

    let errName=document.querySelector("#errSname");
    let errEmail=document.querySelector("#errSemail");
    let errPhone=document.querySelector("#errSphone");
    let errPass=document.querySelector("#errSpass");
    let errCpass=document.querySelector("#errScpass");

    
    errName.innerHTML=""
    errEmail.innerHTML=""
    errPhone.innerHTML=""
    errPass.innerHTML=""
    errCpass.innerHTML=""
    
    
    
    
    // localStorage.setItem("Name",name)
    // localStorage.setItem("Email",email)
    // localStorage.setItem("Phone",phone)
    // localStorage.setItem("Pass",pass)
    // localStorage.setItem("Cpass",cpass)

    if(name=="" ){
        errName.innerHTML="Enter your name";
        errName.style.color="red";
        return false
    }
    else if(!(email.includes("@") && email.includes(".com"))){
        errEmail.innerHTML="Enter Email correctly";
        errEmail.style.color="red";
        return false
    }
    else if(phone.length!=10){
        errPhone.innerHTML="Enter Correct Phone number";
        errPhone.style.color="red";
        return false
    }
    else if(!(pass.match(/[@#$%^&*+-/!]/) &&
                pass.match(/[1234567890]/) &&
                pass.match(/[a-z]/)  &&
                pass.match(/[A-Z]/)
            ) &&
            pass.length<8
        ){
            errPass.innerHTML="Enter Strong password";
            errPass.style.color="red";
            return false
        }
        else if(cpass != pass){
            errCpass.innerHTML="Both password must be same";
            errCpass.style.color="red";
            return false
        } 
        // else if(ema)

        let checkEmail=`http://localhost:3000/userlogin?Email=${email}`;
    fetch(checkEmail)
    .then(response=>response.json())
    .then(data=>{
        if(data.length>0){
            alert("This email is already registered. Please Login");
        }
        else{
                let api="http://localhost:3000/userlogin";
                
    fetch(api,{

        method :"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            
            Name:name,
            Email:email,
            Phone:phone,
            Pass:pass,
            Cpass:cpass

        })
    })
    .then(response=>{
        if(!response.ok){
            throw new Error("Server responds with an error ! ");
        }
        return response.json();
    })
    .then(data=>{
        console.log("Data saved ", data);

        location.href="login.html"
    })
    .catch(error=>{
        console.error("Error:",error);
        alert("There was a problem creating your account.");
    });

        }
    })
        
    


    // location.href="login.html"
    return false;

}

let loginRedirect=()=>{
    location.href="login.html"
    return false
}

let signupRedirect=()=>{
    location.href="signup.html"
}

let login=()=>{
    let logEmail=document.querySelector("#logEmail").value.trim();
    let logPass=document.querySelector("#logPass").value.trim();

    let errLemail=document.querySelector("#errLemail")
    let errLpass=document.querySelector("#errLpass")

    if(!(logEmail.includes("@") && logEmail.includes(".com"))){
        errLemail.innerHTML="Enter valid mail"
        errLemail.style.color="red"
        return false;
    }

    // let locEmail=localStorage.getItem("Email")
    // let locPass=localStorage.getItem("Pass")
    let api=`http://localhost:3000/userlogin?Email=${logEmail}&Pass=${logPass}`;
    fetch(api)
    .then(response=>{
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        return response.json();
    })
    .then(data=>{
        if(data.length>0){
            console.log("Login Successful ",data[0]);
            location.href="../index.html";
        }
        else{
            alert("Invalid Email or Password.");
        }
    })
    .catch(error=>{
        console.error("loggined failed ", error);
        alert("There was a problem logging in. please try again later.");
    });

    // if(logEmail==locEmail && logPass==locPass){
    //     location.href="../index.html"
    //     return false
    // }
    // else{
    //     alert("Enter valid crediantials")
    //     return false

    // }
    return false;
    

}