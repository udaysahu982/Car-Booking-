let loginRedirect=()=>{
    location.href="signup/login.html"
    return false
}

let signupRedirect=()=>{
    location.href="signup/signup.html"
}

let addLocation=async()=>{

    
    let api="http://localhost:3000/city";
    let res=await fetch(api);
    
    let data =await res.json()
    
    let deploc=document.querySelector("#select-dep-loc");
    let desloc=document.querySelector("#select-des-loc");

    data.map((e)=>{
        deploc.innerHTML+=
        `
        <option value="">${e.city}, ${e.state}</option>

        `
    })
     data.map((e)=>{
        desloc.innerHTML+=
        `
        <option value="${e.city}, ${e.state}">${e.city}, ${e.state}</option>

        `
    })
}
addLocation();


let sameLocation=()=>{
    let deploc=document.querySelector("#select-dep-loc");
    let desloc=document.querySelector("#select-des-loc");
    

    desloc.innerHTML=deploc;

}

// let addCars=async()=>{

//     let card=document.querySelector(".mid-section-body");
    
//     let carApi="http://localhost:3000/cars"
//     let res= await fetch(carApi,{method:"GET"});
//     let data=await res.json();
//     data.map((e)=>{
//         card.innerHTML+= `
         
//                 <div class="car-card" >

//                     <img src="./${e.imgLink}" alt="Sedan">
//                 <div class="car-card-content">
//                     <h2>${e.carName}</h2>
//                     <h3>${e.carSpecs}</h3>
//                     <div class="card-p">
//                     <ul>
//                         <li>${e.seats}</li>
//                         <li>${e.type}</li>
//                     </ul>
//                     <p>${e.price}/day</p>
//                     </div>
                   
//                 </div>
//                 <div  class="car-card-button" onclick="BookCar()">Book Now</div>

//                 </div>
//         `
//     })

// }
// addCars();

let addTags=async()=>{
    let addTags=document.querySelector(".section-body");
    let Tgapi="http://localhost:3000/AddTags"
    let res=await fetch(Tgapi,{method:"GET"})
    let data=await res.json()
    data.map((e)=>{
        addTags.innerHTML+=        `
        <div class="section-body-card">${e.tag}</div>
        `
    })
}
addTags();


let CarDetail =()=>{
    // href.location="detail.html"
    location.href="detail.html"
}


let BookCar=()=>{
    document.querySelector(".booking-form").style.display="block"
  
}



let formSubmit=()=>{
    let name = document.getElementById("formName").value.trim();
  let email = document.getElementById("formEmail").value.trim();
  let phone = document.getElementById("formPhone").value.trim();
  let fromDate = document.getElementById("formDate").value;
  let toDate = document.getElementById("formTodate").value;
  let car = document.getElementById("formCar").value;

  // Name validation
  if (name == "") {

    alert("Please enter your full name.");
    return false;
  }

  // Email validation
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Phone validation (10 digits)
  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Date validation
  if (fromDate === "" || toDate === "") {
    alert("Please select both booking dates.");
    return false;
  }

  if (new Date(fromDate) > new Date(toDate)) {
    alert("The 'From Date' cannot be after the 'To Date'.");
    return false;
  }

  // Car selection validation
  if (car === "") {
    alert("Please select a car.");
    return false;
  }

  // If all validations pass
  alert(
    `Booking Successful!\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCar: ${car}\nFrom: ${fromDate}\nTo: ${toDate}`
  );

  // Reset form after successful validation

//   let Carapi=""
  

   let api="http://localhost:3000/carData";
                
    fetch(api,{

        method :"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            
            Name:name,
            Email:email,
            Phone:phone,
            From:fromDate,
            ToDate:toDate,
            Car:car

        })
    })
}

// let carDetail=async()=>{

//     let api="http://localhost:3000/cars";
//     let res=await fetch(api,{method:"GET"});
//     let data=await res.json()

//     let carImg1=document.querySelector("#detail-section-left-top-img")
//     data.map((e)=>{
        
//         carImg1.src=`${e.imgLink}`
//     })

// }
// carDetail();