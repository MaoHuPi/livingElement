/*
 * Copyright © 2022 by MaoHuPi
 * v1.0.0
 */
'use strict';
String.prototype.sj = function(s, j){
    return(this.split(s).join(j));
}
function $(e, f = document){return(f.querySelector(e));}
function $$(e, f = document){return(f.querySelectorAll(e));}
function vw(){return(window.innerWidth/100);}
function vh(){return(window.innerHeight/100);}
function randint(a, b){return(Math.min(a, b) + Math.floor(Math.random()*Math.max(a, b)));};
let mode = 'rebound';
Object.prototype.offset = function (type = 'all'){
    var element = this;
    var data = {
        height:this.offsetHeight, 
        width:this.offsetWidth , 
        top:0, 
        left:0
    };
    while(element !== document.body && element.offsetParent){
        data.left += element.offsetLeft;
        data.top += element.offsetTop;
        element = element.offsetParent;
    }
    return(type in data ? data[type] : data);
}
Object.prototype.LEInit = function (){
    this.LEInited == true;
};
Object.prototype.LEUpdate = function (){
    if(!('LEInited' in this && this.LEInited == true) && 'LEInit' in this){
        this.LEInit();
    }
    let nowTime = new Date().getTime();
    let deltaTime = 'lastAniTime' in this ? (nowTime - this.lastAniTime)/1e3 : 0;
    this.lastAniTime = nowTime;
    switch(mode){
        case 'rebound':
            let elementWidth = this.offsetWidth/vw(), 
                elementHeight = this.offsetHeight/vh(), 
                elementLeft = 0, 
                elementTop = 0;
            try{
                elementLeft = this.offset('left')/vh();
                elementTop = this.offset('top')/vw();
            }
            catch(error){}
            if(!('LEPosition' in this)){
                try{
                    this.LEPosition = {x: this.offset('left')/vw(), y: this.offset('top')/vh()};
                }
                catch(error){
                    this.LEPosition = {x: randint(0, 100 - elementWidth), y: randint(0, 100 - elementHeight)};
                }
            }
            if(!('LEForce' in this)){
                this.LEForce = {x: randint(-1*100, 1*100)/100, y: 0};
                this.LEForce.y = (a => (1/* r */ - a**2)**0.5)(this.LEForce.x)*randint(-1, 1);
            }
            this.LEPosition.x += this.LEForce.x/vw()*deltaTime*vw()*5;
            this.LEPosition.y += this.LEForce.y/vh()*deltaTime*vw()*5;
            if(this.LEPosition.x < 0){
                this.LEPosition.x  = 0;
                this.LEForce.x *= -1;
            }
            if(this.LEPosition.x > 100 - elementWidth){
                this.LEPosition.x  = 100 - elementWidth;
                this.LEForce.x *= -1;
            }
            if(this.LEPosition.y < 0){
                this.LEPosition.y  = 0;
                this.LEForce.y *= -1;
            }
            if(this.LEPosition.y > 100 - elementHeight){
                this.LEPosition.y  = 100 - elementHeight;
                this.LEForce.y *= -1;
            }

            if(this.style.position != 'fixed'){
                this.style.position = 'fixed';
            }
            var transition = 0.1;
            if(this.style.transition != `left ${transition}s, top ${transition}s`){
                this.style.transition = `left ${transition}s, top ${transition}s`;
            }
            this.style.left = `${Math.floor(this.LEPosition.x*vw())}px`;
            this.style.top = `${Math.floor(this.LEPosition.y*vh())}px`;
            // this.style.transform = `translateX(${Math.floor((this.LEPosition.x - elementLeft)*vw())}px) translateY(${Math.floor((this.LEPosition.y - elementTop)*vh())}px)`;
            // $('body').computedStyleMap().get('background-color').toString()
            break;
    }
};
function update(){
    $$('*:not(html, body)').forEach(element => {
        if('LEUpdate' in element){
            element.LEUpdate();
        }
    });
    setTimeout(update, 30);
    $$('html, body').forEach(element => {
        if(element.style.overflow != 'hidden'){
            element.style.overflow = 'hidden';
        }
    });
}
function main(){
    // update();
}
main();