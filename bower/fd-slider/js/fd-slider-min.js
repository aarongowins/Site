var fdSlider=function(){function V(a){function d(a){a=!!a;a!=n&&(n=a,F(J()))}function g(a){if(!W||a){try{if(pa(e,-1),l(e,"focus",y),l(e,"blur",E),O?l(e,"keypress",D):(l(e,"keydown",D),l(e,"keypress",I)),l(i,"mouseover",N),l(i,"mouseout",U),l(i,"mousedown",X),l(i,"touchstart",X),ja)window.addEventListener&&!window.devicePixelRatio?window.removeEventListener("DOMMouseScroll",B,!1):(l(document,"mousewheel",B),l(window,"mousewheel",B))}catch(b){}w(j,"fd-slider-focused");w(j,"fd-slider-active");C(j,"fd-slider-disabled");
i.setAttribute("aria-disabled",!0);c.disabled=W=!0;clearTimeout(v);a||u("disable")}}function f(a){if(W||a)pa(e,0),h(e,"focus",y),h(e,"blur",E),O?h(e,"keypress",D):(h(e,"keydown",D),h(e,"keypress",I)),h(i,"touchstart",X),h(i,"mousedown",X),h(i,"mouseover",N),h(i,"mouseout",U),w(j,"fd-slider-disabled"),i.setAttribute("aria-disabled",!1),c.disabled=W=P=!1,a||u("enable")}function o(){fa();try{var a=i.offsetWidth,b=i.offsetHeight,d=e.offsetWidth,f=e.offsetHeight;x=(k?b-f:a-d)/Ea;Q=Math.max(t?qa(ra(q)):
Math.abs((q-r)/p)*x,0);K=Math.min(t?qa(ra(s)):Math.abs((s-r)/p)*x,Math.floor(k?b-f:a-d));Fa=a;Ga=b;F(sa?J():"select"==m?c.selectedIndex:parseFloat(c.value),!1)}catch(g){}u("redraw")}function u(a){if(G){if(a.match(/^(blur|focus|change)$/i)){var b;if("undefined"!=typeof document.createEvent)b=document.createEvent("HTMLEvents"),b.initEvent(a,!0,!0),c.dispatchEvent(b);else if("undefined"!=typeof document.createEventObject)try{b=document.createEventObject(),c.fireEvent("on"+a.toLowerCase(),b)}catch(d){}}}else if(ta.hasOwnProperty(a)){b=
{userSet:n,disabled:W,elem:c,value:"select"==m?c.options[c.selectedIndex].value:c.value};for(var e=0,f;f=ta[a][e];e++)f.call(c,b)}}function y(){C(j,"fd-slider-focused");Y.onfocus&&(n=!0,F(J()));ja&&(h(window,"DOMMouseScroll",B),h(document,"mousewheel",B),O||h(window,"mousewheel",B));u("focus");return!0}function E(){w(j,"fd-slider-focused");ja&&(l(document,"mousewheel",B),l(window,"DOMMouseScroll",B),O||l(window,"mousewheel",B));z=!0;u("blur")}function B(a){if(z){var a=a||window.event,b=0,c;a.wheelDelta?
(b=a.wheelDelta/120,O&&9.2>window.opera.version()&&(b=-b)):a.detail&&(b=-a.detail/3);k&&(b=-b);b&&(c=J(),c+=0>b?-p:p,n=!0,F(Z(c)));R(a)}}function I(a){a=a||window.event;return 33<=a.keyCode&&40>=a.keyCode||!z||45==a.keyCode||46==a.keyCode?ua(a):!0}function D(a){if(!z)return!0;var a=a||window.event,b=null!==a.keyCode?a.keyCode:a.charCode,c;if(33>b||40<b&&45!=b&&46!=b)return!0;c=J();37==b||40==b||46==b||34==b?c-=a.ctrlKey||34==b?+ka:+p:39==b||38==b||45==b||33==b?c+=a.ctrlKey||33==b?+ka:+p:35==b?c=s:
36==b&&(c=q);n=!0;F(Z(c));u("update");R(a)}function N(){C(j,"fd-slider-hover")}function U(){w(j,"fd-slider-hover")}function X(a){a=a||window.event;R(a);var b;a.target?b=a.target:a.srcElement&&(b=a.srcElement);b&&3==b.nodeType&&(b=b.parentNode);if(a.touches){if(a.targetTouches&&1!=a.targetTouches.length)return!1;a=a.touches[0];P=!0}clearTimeout(v);v=null;z=!1;n=!0;if(-1!=b.className.search("fd-slider-handle"))va=k?a.clientY:a.clientX,Ha=parseInt(k?e.offsetTop:e.offsetLeft)||0,$(a),P?(h(document,"touchmove",
$),h(document,"touchend",la),l(i,"mousedown",X)):(h(document,"mousemove",$),h(document,"mouseup",la)),C(j,"fd-slider-active"),C(document.body,"fd-slider-drag-"+(k?"vertical":"horizontal")),u("dragstart");else{fa();b=0;if(a.pageX||a.pageY)b=k?a.pageY:a.pageX;else if(a.clientX||a.clientY)b=k?a.clientY+document.body.scrollTop+document.documentElement.scrollTop:a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;b-=k?Ia+Math.round(e.offsetHeight/2):Ja+Math.round(e.offsetWidth/2);b=
wa(b);"tween"==Ka?(C(j,"fd-slider-active"),z=!1,xa=parseInt(b,10),ya=parseInt(k?e.offsetTop:e.offsetLeft,10),La=xa-ya,za=0,v||(v=setTimeout(Ma,20))):"timed"==Ka?(C(j,"fd-slider-active"),h(document,P?"touchend":"mouseup",V),aa=b,ga()):ma(b)}return!1}function V(a){a=a||window.event;R(a);l(document,P?"touchend":"mouseup",V);w(j,"fd-slider-active");clearTimeout(v);v=null;z=!0;return!1}function la(a){a=a||window.event;R(a);P?(l(document,"touchmove",$),l(document,"touchend",la)):(l(document,"mousemove",
$),l(document,"mouseup",la));z=!0;w(document.body,"fd-slider-drag-"+(k?"vertical":"horizontal"));w(j,"fd-slider-active");u("dragend");return!1}function $(a){a=a||window.event;R(a);if(a.touches){if(a.targetTouches&&1!=a.targetTouches.length)return!1;a=a.touches[0]}ma(wa(Ha+(k?a.clientY-va:a.clientX-va)));return!1}function ba(a){var b=J();n=!0;b+=a*p;F(Z(b))}function fa(){var a=0,b=0,c=i;try{do a+=c.offsetLeft,b+=c.offsetTop;while(c=c.offsetParent)}catch(d){}Ja=a;Ia=b}function ga(){var a=parseInt(k?
e.offsetTop:e.offsetLeft,10),a=Math.round(aa<a?Math.max(aa,Math.floor(a-x)):Math.min(aa,Math.ceil(a+x)));ma(wa(a));a!=aa?v=setTimeout(ga,20<Ea?50:100):(z=!0,w(j,"fd-slider-active"),u("finalise"))}function ca(a){if(isNaN(a)||""===a||"undefined"==typeof a)return n=!1,H;if(a<Math.min(q,s))return n=!1,Math.min(q,s);if(a>Math.max(q,s))return n=!1,Math.max(q,s);n=!0;return a}function J(){return Z("input"==m?parseFloat(c.value):c.selectedIndex)}function Z(a){return isNaN(a)||""===a||"undefined"==typeof a?
H:Math.min(Math.max(a,Math.min(q,s)),Math.max(q,s))}function ma(a){var b;if(t){b=a/((i[k?"offsetHeight":"offsetWidth"]-i[e?"offsetHeight":"offsetWidth"])/100);var c=0,d=r,f,g;for(g in t)t.hasOwnProperty(g)&&(b>=c&&b<=+g&&(f=d+(b-c)*(+t[g]-d)/(+g-c)),c=+g,d=+t[g]);b=f}else b=k?A-Math.round(a/x)*p:r+Math.round(a/x)*p;b=Z(b);e.style[k?"top":"left"]=(a||0)+"px";ia();ha("select"==m||1==p?Math.round(b):b)}function F(a,b){var c=!1,d;("undefined"===typeof a||isNaN(a)||""===a)&&"input"==m&&!sa?(d=H,c=!0,n=
!1):d=ca(a);e.style[k?"top":"left"]=(t?qa(ra(d)):k?Math.round((A-d)/p*x):Math.round((d-r)/p*x))+"px";ia();!1!==typeof b&&ha(c?"":d)}function wa(a){if(t)return Math.max(Math.min(K,a),Q);var b=a%x,a=b&&b>=x/2?a+(x-b):a-b;a<Math.min(Math.abs(Q),Math.abs(K))?a=Math.min(Math.abs(Q),Math.abs(K)):a>Math.max(Math.abs(Q),Math.abs(K))&&(a=Math.max(Math.abs(Q),Math.abs(K)));return Math.min(Math.max(a,0),K)}function ra(a){var b=0,c=r,d=0,e;for(e in t)t.hasOwnProperty(e)&&(a>=c&&a<=+t[e]&&(d=b+(a-c)*(+e-b)/(+t[e]-
c)),b=+e,c=+t[e]);return d}function qa(a){return(i[k?"offsetHeight":"offsetWidth"]-e[k?"offsetHeight":"offsetWidth"])/100*a}function ha(a){u("update");n?w(j,"fd-slider-no-value"):C(j,"fd-slider-no-value");if("select"==m)try{a=parseInt(a,10);if(c.selectedIndex===a){L();return}c.options[a].selected=!0}catch(b){}else{""!==a&&!Aa&&(a=(r+Math.round((a-r)/p)*p).toFixed(Pa));if(c.value===a){L();return}c.value=a}L();u("change")}function ia(){na||(k?S.style.height=Math.max(1,T.offsetHeight-e.offsetTop)+"px":
S.style.width=Math.max(1,e.offsetLeft)+"px")}function L(){var a="select"==m?c.options[c.selectedIndex].value:c.value,b=Na?Na(a):"select"==m?c.options[c.selectedIndex].text?c.options[c.selectedIndex].text:a:a;e.setAttribute("aria-valuenow",a);e.setAttribute("aria-valuetext",b)}function Ca(){n=!0;Aa=Qa;F("input"==m?parseFloat(c.value):c.selectedIndex);L();Aa=!1}function Da(){"input"==m?c.value=c.defaultValue:c.selectedIndex=Ra;ca("select"==m?c.options[c.selectedIndex].value:c.value);o();L()}function d(a){n=
!!a}function pa(a,b){a.setAttribute("tabIndex",b);a.tabIndex=b}var c=a.inp,W=!1,m=c.tagName.toLowerCase(),r=+a.min,A=+a.max,q=+a.min,s=+a.max,da=Math.abs(A-r),p="select"==m?1:+a.step,ka=a.maxStep?+a.maxStep:2*p,Pa=a.precision||0,Ea=Math.ceil(da/p),t=a.scale||!1,da=!!a.hideInput,Ka=a.animation||"",k=!!a.vertical,ta=a.callbacks||{},oa=a.classNames||"",G=!!a.html5Shim,H=A<r?r:r+(A-r)/2,Ra="select"==m?c.selectedIndex:c.defaultValue||H,sa=G||!!a.forceValue,M=G&&k&&"inpHeight"in a?a.inpHeight:!1,Na=!G&&
a.ariaFormat?a.ariaFormat:!1,Qa=!G&&"select"!=m&&"userSnap"in a?!!a.userSnap:!1,Aa=!1,v=null,z=!0,Ga=0,Fa=0,xa=0,ya=0,La=0,za=0,Ja=0,Ia=0,K=0,Q=0,Ha=0,aa=0,va=0,x=0,n=!1,P=!1,i,j,ea,e,S,T;"input"==m&&(sa&&!c.defaultValue)&&(c.defaultValue=J());A<r&&(p=-Math.abs(p),ka=-Math.abs(ka));t&&(t[100]=A);var Ma=function(){za++;var a=La,b=za,c=ya,a=Math.ceil(b==20?c+a:a*(-Math.pow(2,-10*b/20)+1)+c);ma(b==20?xa:a);if(b!=20){u("move");v=setTimeout(Ma,20)}else{clearTimeout(v);v=null;z=true;w(j,"fd-slider-focused");
w(j,"fd-slider-active");u("finalise")}};G||da?C(c,"fd-form-element-hidden"):h(c,"change",Ca);G&&(c.stepUp=function(a){ba(a||1)},c.stepDown=function(a){ba(a||-1)});i=document.createElement("span");i.className="fd-slider"+(k?"-vertical ":" ")+oa;i.id="fd-slider-"+c.id;k&&M&&(i.style.height=M+"px");j=document.createElement("span");j.className="fd-slider-wrapper"+(!G?" fd-slider-no-value":"");ea=document.createElement("span");ea.className="fd-slider-inner";T=document.createElement("span");T.className=
"fd-slider-bar";Oa?e=document.createElement("span"):(e=document.createElement("a"),e.setAttribute("href","#"),h(e,"click",ua));pa(e,0);e.className="fd-slider-handle";e.appendChild(document.createTextNode(String.fromCharCode(160)));j.appendChild(ea);na||(S=document.createElement("span"),S.className="fd-slider-range",j.appendChild(S));j.appendChild(T);j.appendChild(e);i.appendChild(j);c.parentNode.insertBefore(i,c);O&&(e.unselectable="on",T.unselectable="on",ea.unselectable="on",i.unselectable="on",
j.unselectable="on",na||(S.unselectable="on"));i.setAttribute("role","application");e.setAttribute("role","slider");e.setAttribute("aria-valuemin","select"==m?c.options[0].value:r);e.setAttribute("aria-valuemax","select"==m?c.options[c.options.length-1].value:A);a=!1;da=document.getElementsByTagName("label");for(oa=0;M=da[oa];oa++)if(M.htmlFor&&M.htmlFor==c.id||M.getAttribute("for")==c.id){a=M;break}a&&!a.id&&(a.id=c.id+"_label");a&&(e.setAttribute("aria-labelledby",a.id),e.id="fd-slider-handle-"+
c.id,a.setAttribute("for",e.id));document.getElementById(Ba)&&e.setAttribute("aria-describedby",Ba);!0==c.getAttribute("disabled")||"disabled"==c.getAttribute("disabled")?g(!0):f(!0);Y.onvalue&&(n=!0,ca("input"==m?parseFloat(c.value):c.selectedIndex));c.form&&h(c.form,"reset",Da);L();u("create");o();return{onResize:function(){(i.offsetHeight!=Ga||i.offsetWidth!=Fa)&&o()},destroy:function(){clearTimeout(v);ea=T=e=i=j=v=null;u("destroy");ta=null},reset:function(){F(m=="input"?parseFloat(c.value):c.selectedIndex)},
stepUp:function(a){ba(Math.abs(a)||1)},stepDown:function(a){ba(-Math.abs(a)||-1)},increment:function(a){ba(a)},disable:function(){g()},enable:function(){f()},setRange:function(a,b){var d=a,f=b;if(q>s){d=Math.min(r,Math.max(d,f));f=Math.max(A,Math.min(d,f));q=Math.max(d,f);s=Math.min(d,f)}else{d=Math.max(r,Math.min(d,f));f=Math.min(A,Math.max(d,f));q=Math.min(d,f);s=Math.max(d,f)}H<Math.min(q,s)?H=Math.min(q,s):H>Math.max(q,s)&&(H=Math.max(q,s));e.setAttribute("aria-valuemin",q);e.setAttribute("aria-valuemax",
s);ca(m=="input"?parseFloat(c.value):c.selectedIndex);o()},getValueSet:function(){return!!n},setValueSet:function(a){d(a)},checkValue:function(){if(Y.onvalue){n=true;ca(m=="input"?parseFloat(c.value):c.selectedIndex)}L();o()}}}var g={},Ca=0,ja=!0,Oa=!0,Ba="fd-slider-describedby",Y={onfocus:!0,onvalue:!0},na=!1,fa="jump",O="[object Opera]"===Object.prototype.toString.call(window.opera),D=/^([\-]{0,1}[0-9]+(\.[0-9]+){0,1})$/,U=/^([0-9]+(\.[0-9]+){0,1})$/,ga=function(a){if("object"===typeof a)for(var d in a)switch(value=
a[d],d.toLowerCase()){case "mousewheelenabled":ja=!!value;break;case "fullaria":Oa=!!value;break;case "describedby":Ba=String(value);break;case "norangebar":na=!!value;break;case "html5animation":fa=-1!=String(value).search(/^(jump|tween|timed)$/i)?String(value).toLowerCase():"jump";break;case "varsetrules":if("onfocus"in value&&(Y.onfocus=!!value.onfocus),"onvalue"in value)Y.onvalue=!!value.onvalue}},h=function(a,d,g){a.addEventListener?a.addEventListener(d,g,!0):a.attachEvent&&a.attachEvent("on"+
d,g)},l=function(a,d,g){try{a.removeEventListener?a.removeEventListener(d,g,!0):a.detachEvent&&a.detachEvent("on"+d,g)}catch(f){}},ua=function(a){a=a||window.event;a.stopPropagation&&(a.stopPropagation(),a.preventDefault());return!1},R=function(a){a=a||window.event;a.preventDefault?a.preventDefault():a.returnValue=!1},C=function(a,d){RegExp("(^|\\s)"+d+"(\\s|$)").test(a.className)||(a.className+=(a.className?" ":"")+d)},w=function(a,d){a.className=!d?"":a.className.replace(RegExp("(^|\\s)"+d+"(\\s|$)"),
" ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},y=function(a){return!!(a in g&&g.hasOwnProperty(a))},Da=function(a){if(!a||!a.inp||!a.inp.tagName||-1==a.inp.tagName.search(/^input|select/i))return!1;a.html5Shim=!1;if("select"==a.inp.tagName.toLowerCase()){if(2>a.inp.options.length)return!1;a.min=0;a.max=a.inp.options.length-1;a.step=1;a.precision=0;a.scale=!1;a.forceValue=!0}else{if(-1==String(a.inp.type).search(/^(text|range)$/i))return!1;a.min=a.min&&-1!=String(a.min).search(D)?+a.min:0;a.max=a.max&&
-1!=String(a.max).search(D)?+a.max:100;a.step=a.step&&-1!=String(a.step).search(U)?a.step:1;a.precision=a.precision&&-1!=String(a.precision).search(/^[0-9]+$/)?a.precision:-1!=String(a.step).search(/\.([0-9]+)$/)?String(a.step).match(/\.([0-9]+)$/)[1].length:0;a.scale=a.scale||!1;a.forceValue="forceValue"in a?!!a.forceValue:!1;a.userSnap="userSnap"in a?!!a.userSnap:!1}a.ariaFormat="ariaFormat"in a&&"function"==typeof a.ariaFormat?a.ariaFormat:!1;a.maxStep=a.maxStep&&-1!=String(a.maxStep).search(U)?
+a.maxStep:2*+a.step;a.classNames=a.classNames||"";a.callbacks=a.callbacks||!1;N(a.inp.id);g[a.inp.id]=new V(a);return!0},o=function(a,d){return a.getAttribute(d)||""},I=function(){for(var a=document.getElementsByTagName("input"),d,h=0,f;f=a[h];h++)if("input"==f.tagName.toLowerCase()&&("text"==f.type.toLowerCase()&&(o(f,"min")&&-1!=o(f,"min").search(D)||o(f,"max")&&-1!=o(f,"max").search(D)||o(f,"step")&&-1!=o(f,"step").search(/^(any|([0-9]+(\.[0-9]+){0,1}))$/i)))&&(!f.id||!document.getElementById("fd-slider-"+
f.id)))f.id&&!document.getElementById("fd-slider-"+f.id)&&N(f.id),f.id||(f.id="fd-slider-form-elem-"+Ca++),d={inp:f,callbacks:[],animation:fa,vertical:o(f,"data-fd-slider-vertical")?!0:f.offsetHeight>f.offsetWidth,classNames:o(f,"data-fd-slider-vertical"),html5Shim:!0},d.vertical&&!o(f,"data-fd-slider-vertical")&&(d.inpHeight=f.offsetHeight),d.min=o(f,"min")||0,d.max=o(f,"max")||100,d.step=-1!=o(f,"step").search(/^any$/i)?d.max-d.min:-1!=o(f,"step").search(U)?f.getAttribute("step"):1,d.precision=
-1!=String(d.step).search(/\.([0-9]+)$/)?String(d.step).match(/\.([0-9]+)$/)[1].length:0,d.maxStep=2*d.step,N(d.inp.id),g[d.inp.id]=new V(d);return!0},N=function(a){return a in g&&g.hasOwnProperty(a)?(g[a].destroy(),delete g[a],!0):!1},ha=function(){for(var a in g)g.hasOwnProperty(a)&&g[a].destroy();g=[]},ia=function(){for(var a in g)if(g.hasOwnProperty(a))g[a].onResize()};h(window,"load",I);h(window,"load",function(){setTimeout(function(){for(var a in g)g[a].checkValue()},0)});h(window,"resize",
ia);h(window,"unload",function(){ha();g=null});var E=document.getElementsByTagName("script"),E=function(a){if("string"!==typeof a||""===a)return{};try{if("object"===typeof JSON&&"function"===typeof JSON.parse)return JSON.parse(a);if(/mousewheelenabled|fullaria|describedby|norangebar|html5animation|varsetrules/.test(a.toLowerCase()))return Function(["var document,top,self,window,parent,Number,Date,Object,Function,Array,String,Math,RegExp,Image,ActiveXObject;return (",a.replace(/<\!--.+--\>/gim,"").replace(/\bfunction\b/g,
"function-"),");"].join(""))()}catch(d){}return{err:"Could not parse the JSON object"}}(String(E[E.length-1].innerHTML).replace(/[\n\r\s\t]+/g," ").replace(/^\s+/,"").replace(/\s+$/,""));"object"===typeof E&&!("err"in E)&&ga(E);return{rescanDocument:I,createSlider:function(a){return Da(a)},onDomReady:function(){l(window,"load",I);I()},destroyAll:function(){ha()},destroySlider:function(a){return N(a)},redrawAll:function(){ia()},addEvent:h,removeEvent:l,stopEvent:ua,increment:function(a,d){if(!y(a))return!1;
g[a].increment(d)},stepUp:function(a,d){if(!y(a))return!1;g[a].stepUp(Math.abs(d)||1)},stepDown:function(a,d){if(!y(a))return!1;g[a].stepDown(-Math.abs(d)||-1)},setRange:function(a,d,h){if(!y(a))return!1;g[a].setRange(d,h)},updateSlider:function(a){if(!y(a))return!1;g[a].onResize();g[a].reset()},disable:function(a){if(!y(a))return!1;g[a].disable()},enable:function(a){if(!y(a))return!1;g[a].enable()},getValueSet:function(){var a={},d;for(d in g)a[d]=g[d].getValueSet();return a},setValueSet:function(a,
d){if(!y(id))return!1;g[a].setValueSet(!!d)},setGlobalVariables:function(a){ga(a)},removeOnload:function(){l(window,"load",I)}}}();