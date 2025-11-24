let imgData=[
             "image/car1-1.png",
             "image/car3-1.png",
             "image/car4-1.png",
             "image/toyotaCamre.png"
            ]
let imgData1=[
             "image/car1-2.png",
             "image/car3-2.png",
             "image/car4-2.png",
             "image/toyotaCamre.png"
            ]
let imgData2=[
             "image/car1-3.png",
             "image/car3.png",
             "image/car4-3.png",
             "image/toyotaCamre.png"

            ]

            // let carName;


let changeImageData=(val)=>{
    
    
    localStorage.setItem("saveValue",val);
    
    // let img1=document.querySelector("#detail-section-left-top-img");
    // img1.src=`${imgData[val]}`
    location.href="detail.html";
    // detailChange();
    
} 
 let img1=document.querySelector("#detail-section-left-top-img");
    let img2=document.querySelector("#dslbImg1");
    let img3=document.querySelector("#dslbImg2");
    let img4=document.querySelector("#dslbImg3");
    let val=localStorage.getItem("saveValue")
    

let detailChange=()=>{
   
    img1.src=`${imgData[val]}`
    img2.src=`${imgData[val]}`
    img3.src=`${imgData1[val]}`
    img4.src=`${imgData2[val]}`
   

}
let changeimg1=()=>{
    img1.src=`${imgData[val]}`
}
let changeimg2=()=>{
    img1.src=`${imgData1[val]}`
}
let changeimg3=()=>{
    img1.src=`${imgData2[val]}`
}

        let calculateDays=()=> {
            let startInput = document.getElementById('startDate').value;
            let endInput = document.getElementById('endDate').value;
            let totalDaysSpan = document.getElementById('totalDays');

            if (startInput && endInput) {
                let start = new Date(startInput);
                let end = new Date(endInput);
                
                // Calculate difference
                let diffTime = end - start;
                let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

                if (diffDays > 0) {
                    totalDaysSpan.innerText = diffDays;
                } else {
                    totalDaysSpan.innerText = "0";
                }
            }
        }

        let changeNav=()=>{
            let newClass=document.querySelector("#nav-bar")
            newClass.style.height="45vh"
            let navLeft=document.querySelector(".nav-left")
            navLeft.style.flexDirection="column";
            navLeft.style.width="100%";
           let navLeftul= document.querySelector(".nav-left ul")
           navLeftul.style.display="flex";
           navLeftul.style.flexDirection="column";
           navLeftul.style.width="100%";
           document.querySelector(".icon").style.fontSize="2.5rem"

           document.querySelector(".ulli").classList.add("addListStyle")
           document.querySelector(".ulli1").classList.add("addListStyle")
           document.querySelector(".ulli2").classList.add("addListStyle")
           document.querySelector(".ulli3").classList.add("addListStyle")
           document.querySelector(".ulli4").classList.add("addListStyle")
           document.querySelector(".check-bar").style.display="none"
           document.querySelector(".cross-bar").style.display="block"
            
        }
        let unchangeNav=()=>{
        document.querySelector(".nav-left ul").style.display="none"  
        document.querySelector("#nav-bar").style.height="8vh"
        let navLeft=document.querySelector(".nav-left")
            navLeft.style.flexDirection="column";
            navLeft.style.width="40%";
            document.querySelector(".icon").style.fontSize="1.8rem"

             document.querySelector(".check-bar").style.display="block"
             document.querySelector(".cross-bar").style.display="none"
            
        }
