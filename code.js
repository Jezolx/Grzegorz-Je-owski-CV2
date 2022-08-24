let about_me =[,"Imię i nazwisko:","Grzegorz Jeżowski","Adres:","Sportowa 1/2","63-000 Środa Wlkp.","Numer telefonu:","+48 609 709 477","Adres @-mali:","g.jezowski@tlen.pl"]

let languages = [
    ["image/eng.png","średniozaawansowany"],
    ["image/de.png","średni"],
    ["image/html.png","podstawowy"],
    ["image/css.png","podstawowy"],
    ["image/js.png","podstawowy"]
]

let work_exp = [
    ["image/homag.png",
    "Kontroler operacyjny",
    "Homag Services Poland Sp. z o.o.",
    "2022-obecnie",
    "· Business Partner dla obszarów Purchasing, Dispositions, Strategic Chain Managment (SCM)",
    "· Udział w zamknięciu miesiąca, kroki związane z zamknięciem produkcyjnym w programie SAP. Kontrola i sprawdzanie danych",
    "· Udział w wdrożeniu projektów nowych produktów, wspradzie i współpraca z dzaiłami Industral Engeniering oraz R&D",
    "· Raportowanie dla zarządu, analizy w programie Excel (Power Pivot i Query), zestawienia w programie Excel, prezentacje (Power Point i Thik-cell)",
    "· Prowadzenie projektów optymalizacyjnych (wprowadzenie BOT do automatycznych kalkulacji)",
    "· Kalkulacje kosztu produkcji masznyn i komponentów w SAP oraz w niektórych przypadkach również z wykorzystaniem programu Excel"
],[
    "image/homag.png",
    "Analityk operacyjny",
    "Homag Services Poland Sp. z o.o.",
    "2018-2022",
    "· Udział w wdrożeniu projektów nowych produktów, wspradzie i współpraca z dzaiłami Industral Engeniering oraz R&D",
    "· Raportowanie dla zarządu, analizy w programie Excel",
    "· Kalkulacje kosztu produkcji masznyn i komponentów z wykorzystaniem programu Excel"
],[
    "image/homag.png",
    "Młodszy specjalista ds. controllingu",
    "Homag Poland Sp. z o.o.",
    "2016-2018",
    "· Kalkulacje kosztu produkcji masznyn i komponentów z wykorzystaniem programu Excel",
]
]

let edu=[
    ["image/eko.jpeg",
    "Uniwerstytet Ekonomiczny w Poznaniu",
    "Podyplomowe studia z rachunkowości",
    "2010-2021"],
    ["image/uam.jpg",
    "Uniwerstytet im. Adama Mickiewicza w Poznaniu",
    "Matematyka, Matematyka finansowa",
    "2005-2010"]
]

function AddToDiv(target,input) {
input.forEach(function(element){
DivCreator(target,"","",element);
})}

function DivCreator(where,id,cls,content){
    let item = document.createElement("div");
    item.setAttribute("id",id);
    item.setAttribute("class",cls);
    item.innerText = content;
    document.getElementById(where).appendChild(item);
}

function ImgCraator(where,id,cls,src){
    let item = document.createElement("img");
    item.setAttribute("id",id);
    item.setAttribute("class",cls);
    item.setAttribute("src",src);
    document.getElementById(where).appendChild(item);
}

function AddLang(input){
    let numerator = 0;
input.forEach(function(element){
    DivCreator("languages","language"+numerator,"language","");
    DivCreator("language"+numerator,"img"+numerator,"div_lang_pic","")
    ImgCraator("img"+numerator,"","lang_pic",element[0]);
    DivCreator("language"+numerator,"","",element[1])
    numerator=numerator+1;
})}

// funkcja tworząca tablicę od liczby do liczby
function numberRange (start, end) {
    return new Array(end - start).fill().map(function(d,i) {return i + start});
  }

function AddWorkExp(input){
    input.forEach(function(element){
        DivCreator("content","content"+input.indexOf(element),"contents","");
        DivCreator("content"+input.indexOf(element),"logo"+input.indexOf(element),"logo_cont","");
        ImgCraator("logo"+input.indexOf(element),"","logo",element[0])
        DivCreator("content"+input.indexOf(element),"info"+input.indexOf(element),"info"+input.indexOf(element),"");
        numberRange(1,4).forEach(function(item){
            DivCreator("info"+input.indexOf(element),"","work_title",element[item]);
        } )    
        numberRange(4,element.length).forEach(function(item){
            DivCreator("info"+input.indexOf(element),"","work_todos",element[item]);
        } )    

    })
}

function AddEdu(input){
    input.forEach(function(element){
        DivCreator("edu","edu"+input.indexOf(element),"edu1","");
        DivCreator("edu"+input.indexOf(element),"logo_edu"+input.indexOf(element),"logo_edu","");
        ImgCraator("logo_edu"+input.indexOf(element),"","logo_edu_pic",element[0]);
        DivCreator("edu"+input.indexOf(element),"edu_info"+input.indexOf(element),"edu_info","");
        DivCreator("edu_info"+input.indexOf(element),"","edu_title",element[1]);
        numberRange(2,element.length).forEach(function(item){
            DivCreator("edu_info"+input.indexOf(element),"","edu_text",element[item]);
        } )    
    })
}