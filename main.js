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
Object.prototype.LEInit = function(){};
Object.prototype.LEUpdate = function(){};
function update(){
    $$('*').forEach(element => {
        if(element.LEUpdate){
            element.LEUpdate();
        }
    });
}
function main(){
    // if(location.href.indexOf('https://www.youtube.com/watch?v=') !== 0){
    //     return;
    // }
    
}
main();