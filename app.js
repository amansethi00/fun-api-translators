var textInp = document.querySelector("textarea");
var btn = document.querySelector("#btn");
var languages = document.querySelector("#languages");
var serverUrl="https://api.funtranslations.com/translate/";
var output = document.querySelector("#output")

function errorHandler(error){
    alert("Sorry,Something is wrong.Please try again after some time!!");
}
function getTranslationUrl(selctor,text){
    return serverUrl+selctor+"?"+"text="+text;
}
function clickHandler(){
    if(textInp.value === ""){
        alert("Please enter some text and click submit!");
    }
    else{
    fetch(getTranslationUrl(languages.value,textInp.value)).then(response => response.json()).then(json =>output.innerText=json.contents.translated).catch(errorHandler);
    }
}
btn.addEventListener('click',clickHandler);