
var noLucky = document.querySelector("#not-lucky-person");
var lucky = document.querySelector("#lucky-person");
var birthDay = document.querySelector("#birthdate");
var luckyNumber = document.querySelector("#lucky-number");
var btnCheck = document.querySelector("#btn-check");
var notice = document.querySelector("#notice");
var noticeContainer = document.querySelector(".notice-class");
var errBirthdate = document.querySelector("#err-birthdate");
var errLuckyNo = document.querySelector("#err-lucky-no");
let sum = 0;

btnCheck.addEventListener("click",function clickHandler(){
    
    var splitDate = birthDay.value.split("-") ;
     for(let i=0; i<splitDate.length;i++){
         sum = sum + Number(splitDate[i]);
     }

     if(birthDay.value == null || sum == 0 || sum < 1900 ){
        errBirthdate.style.display = "block";
    }else{
        errBirthdate.style.display = "none";
        if( luckyNumber.value == null || luckyNumber.value < 1 ){
            errLuckyNo.style.display = "block";
        }
        else{
            errLuckyNo.style.display = "none";
        }
    }

    
     console.log(sum , luckyNumber.value)
     var remainder = sum % luckyNumber.value;
     console.log(remainder);
     if(remainder > 0){
         noLucky.style.display = "block";
         lucky.style.display = "none";
     }else{
         lucky.style.display = "block";
         noLucky.style.display = "none";
     }
     sum = 0;
})

notice.addEventListener("click",function clickHandler(){
    noticeContainer.style.display = "none";
})



