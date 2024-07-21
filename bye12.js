// for patty
let valueCount=1;
let increment=document.querySelector(".plus");
let decrement=document.querySelector(".minus");
let  count =document.querySelector(".num0");

increment.addEventListener("click",()=>{
    let add=  valueCount++;
    count.value=add;
   
     })
    
     decrement.addEventListener("click",()=>{
      if(valueCount>=1){
       let sub =--valueCount;
       count.value=sub;  
      }
    })

   

// for cheese
      let valueCount1=1;
      let increment1=document.querySelector(".plus1");
      let  count1 =document.querySelector(".num1");
      let decrement1=document.querySelector(".minus1");
    

    increment1.addEventListener("click",()=>{
      let add1=  valueCount1++;
      count1.value=add1;
      })
          
        decrement1.addEventListener("click",()=>{
              if(valueCount1>=1){
            let sub1 =--valueCount1;
            count1.value=sub1;
            totalcount1.innerHTML=(sub1*40);  
         
            }
          })

// for tomato
          let valueCount2=1;
          let increment2=document.querySelector(".plus2");
          let  count2 =document.querySelector(".num2");
          let decrement2=document.querySelector(".minus2");
      
    
        increment2.addEventListener("click",()=>{
          let add2=  valueCount2++;
          count2.value=add2;
          })
              
            decrement2.addEventListener("click",()=>{
                  if(valueCount2>=1){
                let sub2 =--valueCount2;
                count2.value=sub2;
                
             
                }
              })

              // for onion
              let valueCount3=1;
          let increment3=document.querySelector(".plus3");
          let  count3 =document.querySelector(".num3");
          let decrement3=document.querySelector(".minus3");
      
    
          increment3.addEventListener("click",()=>{
            let add3=  valueCount3++;
            count3.value=add3;
            })
              
            decrement3.addEventListener("click",()=>{
                  if(valueCount3>=1){
                let sub3 =--valueCount3;
                count3.value=sub3;
                
             
                }
              })

             // for LETTUCE
              
             let valueCount4=1;
          let increment4=document.querySelector(".plus4");
          let  count4 =document.querySelector(".num4");
          let decrement4=document.querySelector(".minus4");
      
    
          increment4.addEventListener("click",()=>{
            let add4=  valueCount4++;
            count4.value=add4;
            })
              
            decrement4.addEventListener("click",()=>{
                  if(valueCount4>=1){
                let sub4 =--valueCount4;
                count4.value=sub4;
                
             
                }
              })

function pdd(){
  let add=  document.getElementById("quantity").value;
let add1=document.getElementById("quantity1").value;
let add2=document.getElementById("quantity2").value;
let add3=document.getElementById("quantity3").value;
let add4=document.getElementById("quantity4").value;
 let totalcount=add*30;
  let totalcount1=add1*40;
  let totalcount2=add2*25;
  let totalcount3=add3*17;
  let totalcount4=add4*50;
  let tot = 230+  parseInt(totalcount) + parseInt(totalcount1)+ parseInt(totalcount2) +parseInt(totalcount3) +parseInt(totalcount4);

  document.getElementById("totalamount").innerHTML = tot;
}


