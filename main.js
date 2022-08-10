/*
 * Copyright © 2022 by MaoHuPi
 * v1.1.0
 */
'use strict';
String.prototype.sj = function(s, j){
    return(this.split(s).join(j));
}
// String.prototype.googleAsciiDecode = function(text = this){
//     text = text.sj('&amp;', '&');
//     for(let i = 32; i < 126+1; i++){
//         text = text.sj(`&#${i};`, String.fromCharCode(i));
//     }
//     return(text);
// }
// function sendXmlhttp(name = '', value = '', responseFunction = t => {console.log(t);}, type = 'get'){
//     let xmlhttp = new XMLHttpRequest();
//     let rf = function (){
//         if (xmlhttp.readyState==4) {
//             responseFunction(xmlhttp.responseText);
//         }
//     }
//     type = type.toLowerCase();
//     xmlhttp.addEventListener("readystatechange", rf);
//     if(type == 'get'){
//         xmlhttp.open("GET", name+value);
//         xmlhttp.send();
//     }
//     else if(type == 'post'){
//         xmlhttp.open("POST", name,true);
//         xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         xmlhttp.send(value);
//     }
// }
function $(e, f = document){return(f.querySelector(e));}
function $$(e, f = document){return(f.querySelectorAll(e));}
Object.prototype.LEInit = function(){};
Object.prototype.LEUpdate = function(){
    if(!('LEInited' in this && this.LEInited == true) && 'LEInit' in this){
        this.LEInit();
    }
    this.remove();
};
function update(){
    $$('*').forEach(element => {
        if('LEUpdate' in element){
            element.LEUpdate();
        }
    });
    setTimeout(update, 30);
}
function main(){
    // if(location.href.indexOf('https://www.youtube.com/watch?v=') !== 0){
    //     return;
    // }
    // update();
}
main();