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