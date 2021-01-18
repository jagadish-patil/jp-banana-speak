var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" +text;
}

function errorHandler(){
    console.log("error occured ", error);
    alert("something wrong with server! try again after some time");
}

btnTranslate.addEventListener("click", function clickEventHandler(){
    //outputDiv.innerText = "welcome " + txtInput.value;

    var inputText = txtInput.nodeValue; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated)
    .catch(errorHandler))

});

