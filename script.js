var timeFormat = "12";
console.log("time format is set to" + timeFormat )

// for change time format

function changeTimeFormat() {
  if (timeFormat==="12"){  console.log("function changeTimeFormat runned. time format is" + timeFormat )
    var timeFormat="24";
    console.log("an if in changeTimeFotmat runned. time format is now" + timeFormat )}
  else if (timeFormat==="24"){
    var timeFormat="12"
    console.log("an if in changeTimeFotmat runned. time format is now" + timeFormat )
  }
  }

//A script for the Clock
function clock() {
    // An array that is a day of week 
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    // What date it is
    var now = new Date();
    // What year it is 
    var y = now.getFullYear();
    // Month. Loaded in a number of 0~11 so we need plus 1.
    var mo = now.getMonth() + 1;
    // What date it is
    var d = now.getDate();
    // A day of week
    var w = weeks[now.getDay()];
    // Of the clock
    var hRaw = now.getHours();
    // Minut
    var mi = now.getMinutes();
    // Second
    var s = now.getSeconds();

    // Every number sould be the format of XX, not X 
    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;
  
   //The developer prefers 12 time format rather than 24 
  if (timeFormat==="24"){
  var h=hRaw;
      console.log("timeFormat is  "+  timeFormat)  
  
  }else if(timeFormat==="12"){
   console.log("timeFormat is "+ timeFormat)
   if ( hRaw < 12){
       var amOrPm = "am" 
       h = hRaw
    }else{
       var h = hRaw -12
       var amOrPm = "pm"
      }
    document.getElementById("am_or_pm").innerHTML = amOrPm;    
      //document.getElementById("am_or_pm").innerHTML = false;
    }
  

    //　HTML: <span id="clock_date">date</span>
    document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d  +" "+ w ;
    //　HTML: <span id="clock_time">time</span>
    document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s  ;
    
}

// Run per a thousand milliseconds
setInterval(clock, 1000);

var define;
var Snackbar;

/*!
 * Snackbar v0.1.14
 * http://polonel.com/Snackbar
 *
 * Copyright 2018 Chris Brame and other contributors
 * Released under the MIT license
 * https://github.com/polonel/Snackbar/blob/master/LICENSE
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],function(){return a.Snackbar=b()}):"object"==typeof module&&module.exports?module.exports=a.Snackbar=b():a.Snackbar=b()}(this,function(){var a={};a.current=null;var b={text:"Default Text",textColor:"#FFFFFF",width:"auto",showAction:!0,actionText:"Dismiss",actionTextAria:"Dismiss, Description for Screen Readers",alertScreenReader:!1,actionTextColor:"#4CAF50",showSecondButton:!1,secondButtonText:"",secondButtonAria:"Description for Screen Readers",secondButtonTextColor:"#4CAF50",backgroundColor:"#323232",pos:"bottom-left",duration:5e3,customClass:"",onActionClick:function(a){a.style.opacity=0},onSecondButtonClick:function(a){},onClose:function(a){}};a.show=function(d){var e=c(!0,b,d);a.current&&(a.current.style.opacity=0,setTimeout(function(){var a=this.parentElement;a&&
// possible null if too many/fast Snackbars
a.removeChild(this)}.bind(a.current),500)),a.snackbar=document.createElement("div"),a.snackbar.className="snackbar-container "+e.customClass,a.snackbar.style.width=e.width;var f=document.createElement("p");if(f.style.margin=0,f.style.padding=0,f.style.color=e.textColor,f.style.fontSize="14px",f.style.fontWeight=300,f.style.lineHeight="1em",f.innerHTML=e.text,a.snackbar.appendChild(f),a.snackbar.style.background=e.backgroundColor,e.showSecondButton){var g=document.createElement("button");g.className="action",g.innerHTML=e.secondButtonText,g.setAttribute("aria-label",e.secondButtonAria),g.style.color=e.secondButtonTextColor,g.addEventListener("click",function(){e.onSecondButtonClick(a.snackbar)}),a.snackbar.appendChild(g)}if(e.showAction){var h=document.createElement("button");h.className="action",h.innerHTML=e.actionText,h.setAttribute("aria-label",e.actionTextAria),h.style.color=e.actionTextColor,h.addEventListener("click",function(){e.onActionClick(a.snackbar)}),a.snackbar.appendChild(h)}e.duration&&setTimeout(function(){a.current===this&&(a.current.style.opacity=0,
// When natural remove event occurs let's move the snackbar to its origins
a.current.style.top="-100px",a.current.style.bottom="-100px")}.bind(a.snackbar),e.duration),e.alertScreenReader&&a.snackbar.setAttribute("role","alert"),a.snackbar.addEventListener("transitionend",function(b,c){"opacity"===b.propertyName&&"0"===this.style.opacity&&("function"==typeof e.onClose&&e.onClose(this),this.parentElement.removeChild(this),a.current===this&&(a.current=null))}.bind(a.snackbar)),a.current=a.snackbar,document.body.appendChild(a.snackbar);getComputedStyle(a.snackbar).bottom,getComputedStyle(a.snackbar).top;a.snackbar.style.opacity=1,a.snackbar.className="snackbar-container "+e.customClass+" snackbar-pos "+e.pos},a.close=function(){a.current&&(a.current.style.opacity=0)};
// Pure JS Extend
// http://gomakethings.com/vanilla-javascript-version-of-jquery-extend/
var c=function(){var a={},b=!1,d=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],d++);for(var f=function(d){for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b&&"[object Object]"===Object.prototype.toString.call(d[e])?a[e]=c(!0,a[e],d[e]):a[e]=d[e])};d<e;d++){var g=arguments[d];f(g)}return a};return a});
//# sourceMappingURL=snackbar.min.js.map

//Thanks so much for developing a good librany,polonel!







var elem = document.body;

// View in fullscreen 
function enterFullscreen() {
   if (document.fullscreenEnabled){
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.webkitRequestFullscreen) { // Chrome, Safari and Opera 
      document.body.webkitRequestFullscreen();
    } else if (document.body.mozRequestFullScreen) { // Firefox 
      document.body.mozRequestFullScreen();
    } else if (document.body.msRequestFullscreen) { // IE/Edge 
      document.body.msRequestFullscreen();
  }
    document.getElementById("fullscreen_buttom").innerHTML = "Exit fullscreen";
    document.getElementById("fullscreen_buttom").setAttribute ("onclick", "exitFullscreen()");
     
     }else{
       Snackbar.show({text: 'Fullscreen is not supported in your environment.', showAction: false, pos: 'bottom-center',duration:4000});
     }
}


// Close fullscreen 
function exitFullscreen() {
  console.log('fullscreen closed by exitFullscreen')
  if (document.exitFullscreen) {
    document.body.exitFullscreen();
    console.log('document.body.exitFullscreen runned')
  } else if (document.body.webkitExitFullscreen) { //  Chrome, Safari and Opera 
    document.body.webkitExitFullscreen();
  } else if (document.body.mozCancelFullScreen) { //Firefox 
    document.body.mozCancelFullScreen();
  } else if (document.body.msExitFullscreen) { // IE/Edge
    document.body.msExitFullscreen();
  }
  document.getElementById("fullscreen_buttom").innerHTML = "Fullscreen";
  document.getElementById("fullscreen_buttom").setAttribute ("onclick", "exitFullscreen()");
}



// for pip
document.getElementById("clock_frame_pip").style.display = "none";

var clock_frame_pip = document.getElementById('clock_frame_pip');
var source = document.createElement('canvas');
var ctx = source.getContext('2d');
ctx.font = "60px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
anim();

var stream = source.captureStream();
clock_frame_pip.srcObject = stream;

function enter_pip() {

  var pip_request = document.getElementById('pip_request');  
  if( clock_frame_pip.requestPictureInPicture ) {
    clock_frame_pip.requestPictureInPicture();
    document.getElementById("clock_frame_pip").style.display = "block";
  
  }
  else {
    Snackbar.show({text: 'Picture in Picture is not supported in your environment.', showAction: false, pos: 'bottom-center',duration:4000});
}

  }

 function pip_clock() {
    var now = new Date();
    // What year it is 
    var y = now.getFullYear();
    // Month. Loaded in a number of 0~11 so we need plus 1.
    var mo = now.getMonth() + 1;
    // What date it is
    var d = now.getDate();
    // Of the clock
    var hRaw = now.getHours();
    // Minut
    var mi = now.getMinutes();
    // Second
    var s = now.getSeconds();

    // Every number sould be the format of XX, not X 
    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;
  
   //The developer prefers 12 time format rather than 24 
   if ( hRaw < 12){
     var amOrPm = "am" 
     h = hRaw
   }else{
     var h = hRaw -12
     var amOrPm = "pm"
   }

}

pip_clock();


function anim() {
  ctx.fillStyle = "#121212";
  ctx.fillRect( 0, 0, source.width, source.height );
  ctx.fillStyle = "white";
  //ctx.fillText( new Date().toTimeString().split('')[0], source.width / 2, source.height / 2 );   
  ctx.fillText( h + ":" + mi + ":" + s,  source.width /2 ,source.height /2 );
  requestAnimationFrame( anim );
}
