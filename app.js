var textInp = document.querySelector("textarea");
var btn = document.querySelector("#btn");
var languages = document.querySelector("#languages");
var serverUrl="https://api.funtranslations.com/translate/";

function errorHandler(error){
    alert("Sorry,Something is wrong.Please try again after some time!!");
}
function getTranslationUrl(selctor,text){
    return serverUrl+selctor+"?"+"text="+text;
}
function clickHandler(){
    fetch(getTranslationUrl(languages.value,textInp.value)).then(response => response.json()).then(json =>output.innerText=json.contents.translated).catch(errorHandler);
}
btn.addEventListener('click',clickHandler);