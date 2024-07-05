
let diaryData = [
    {
       todayPlan : "",
    },

];

let monData = [
    {
        monPlan :"",
    }
];

let nextWeekData = [
    {
        nextWeekPlan: "",
    },
];

let nextMonData = [
    {
        nextMonPlan:"",
    },
]

let anuncioData = [
    {
        anuncio:"",
    },
]



const diaryPlan = document.querySelector(".diaryPlan");
const monPlan = document.querySelector(".monPlan");


//初始化
function inicio(){
    let diaryContent = "";
    let monContent = "";
    diaryData.forEach(function(item,index){
        let str = `<li>${item.todayPlan}</li>`
        diaryContent += str;
    })

    monData.forEach(function(item,index){
        let str = `<li>${item.monPlan}</li>`
        monContent += str;
    })


    diaryPlan.innerHTML = diaryContent;
    monPlan.innerHTML = monContent;
}



// input ------------當日計畫＆＆當月計畫

const productionBtn = document.querySelector(".productionBtn1");
const productionBtn2 = document.querySelector(".productionBtn2");
const diaryPlanInput = document.querySelector(".diaryPlanInput");
const monPlanInput = document.querySelector(".monPlanInput");
const productionDiaryDele = document.querySelector(".productionDiaryDele");
const productionMonDele = document.querySelector(".productionMonDele");

productionBtn2.addEventListener("click",function(e){
    let monPlanObj = {};
    monPlanObj.monPlan = monPlanInput.value;
    monData.push(monPlanObj);
    inicio();
    monPlanInput.value="";

})


productionBtn.addEventListener("click",function(e){
    let todayPlanObj ={};
    todayPlanObj.todayPlan = diaryPlanInput.value;
    diaryData.push(todayPlanObj);
    inicio();
    diaryPlanInput.value="";
})

// delete ---------------當日計畫＆＆當月計畫

productionDiaryDele.addEventListener("click",function(e){
    diaryData.pop();
    inicio();
})
productionMonDele.addEventListener("click",function(e){
    monData.pop();
    inicio();
})




// logistics -----------------------------------------------------


const nextWeekPlan = document.querySelector(".nextWeekPlan");
const nextMonPlan = document.querySelector(".nextMonPlan");
const nextWeekPlanInput = document.querySelector(".nextWeekPlanInput");
const nextMonPlanInput = document.querySelector(".nextMonPlanInput");


// logistics inicio -----------------------------------

function inicioLogistics(){
    let nextWeekContent = "";
    let nextMonContent = "";
    nextWeekData.forEach(function(item,index){
        let str = `<li>${item.nextWeekPlan}</li>`;
        nextWeekContent += str;
    })
    nextWeekPlan.innerHTML = nextWeekContent;
    nextMonData.forEach(function(item,index){
        let str = `<li>${item.nextMonPlan}</li>`;
        nextMonContent += str;
    })
    nextWeekPlan.innerHTML = nextWeekContent;
    nextMonPlan.innerHTML = nextMonContent;
}


// input ------------下週計畫＆＆下月計畫

const logisticsBtn = document.querySelector(".logisticsBtn1");
const logisticsBtn2 = document.querySelector(".logisticsBtn2");
const logisticsNextWeekDele = document.querySelector(".logisticsNextWeekDele");
const logisticsNextMonDele = document.querySelector(".logisticsNextMonDele");

logisticsBtn2.addEventListener("click",function(e){
    let nextMonLgtcObj = {};
    nextMonLgtcObj.nextMonPlan = nextMonPlanInput.value;
    nextMonData.push(nextMonLgtcObj);
    inicioLogistics();
    nextMonPlanInput.value="";
})

logisticsBtn.addEventListener("click",function(e){
    let nextWeekLgtcObj = {};
    nextWeekLgtcObj.nextWeekPlan = nextWeekPlanInput.value;
    nextWeekData.push(nextWeekLgtcObj);
    inicioLogistics();
    nextWeekPlanInput.value="";
})



// delete ---------------下週計畫＆＆下月計畫

logisticsNextWeekDele.addEventListener("click",function(e){
    nextWeekData.pop();
    inicioLogistics();
})
logisticsNextMonDele.addEventListener("click",function(e){
    nextMonData.pop();
    inicioLogistics();
})



// anuncio ----------------------------------

const anuncio = document.querySelector(".anuncio p");


//inicioAnuncio--------------------------------

function inicioAnuncio(){
    let content = "";

    anuncioData.forEach(function(item,index){
        let str =`<p>${item.anuncio}</p>`;
        content += str;
        anuncio.innerHTML = content;
    })
}


// input ------------------------公告


const anuncioBtn = document.querySelector(".anuncioBtn");
const anuncioDele = document.querySelector(".anuncioDele");
const anuncioInput = document.querySelector(".anuncioInput");

anuncioBtn.addEventListener("click",function(e){
    let anuncioObj = {};
    anuncioObj.anuncio = anuncioInput.value;
    anuncioData.push(anuncioObj);
    console.log(anuncioData);
    inicioAnuncio();
    anuncioInput.value="";
})


// Delete ------------------------公告

anuncioDele.addEventListener("click",function(e){
    anuncioData.pop();
    inicioAnuncio();
})