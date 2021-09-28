let aud, c, time = 1000, t = 0, show = [], body, check, truth;
let beg = () => {
    truth = true;
    body = document.getElementById("body");
    aud = document.getElementById("aud");
    c = prompt("What Number Of Boxes Do You Like?");
    if (c == null | c == undefined) {
        inn();
    };
    if (c != '') {
        init(c);
    }else{
        alert('You must enter a number');
        beg();
    };
};
let on=0;
function add(){
	if (on){
		init(1)
	}
}

function init(s) {
	
    for (let i = 0; i < s; i++) {
        let pre = document.createElement("span");
        body.appendChild(pre);
        show.push(pre);
    };
    write(0);
};
let write = (i)=> {
    for (var i = 0; i < show.length; i++) {
        show[i].innerText = (Math.random() * 20).toFixed(2);
        show[i].setAttribute("onclick", "still(this, event)");
    };
    pos();
    test();
    count();
};
let grow, mate;
let pos = () => {
    if (truth) {
        for (var i = 0; i < show.length; i++) {
            if (!(show[i] == check)) {
                show[i].style.left = Math.floor(Math.random() * (window.innerWidth - show[i].offsetWidth)) + "px";
                show[i].style.top = Math.floor(Math.random() * (window.innerHeight - show[i].offsetHeight)) + "px";
                if (check) {
                    if (show[i].style.backgroundColor == check.style.backgroundColor) {
                        show[i].style.backgroundColor = 'rgba(0, 102, 255, 0.3)';
                    };
                };
            };  
        };
        size();
        setTimeout(function() {
            pos();
        }, time);
    };
    };
    let play = {
		cat: ()=>{
			aud.src = 'catch.mp3';aud.play()
		},
		beep:() => {
			aud.src = 'beep.mp3'; aud.play();
		}
	};
let size = () =>{
    let r=(Math.random());
    let me = show[(r*(show.length-1)).toFixed()];
    if (!(me.style.fontSize == '2.49em')) {
        me.style.fontSize = '2.49em';
    };
        setTimeout(()=>{
            me.style.fontSize = 'initial';
        }, 1000);
    
};
function test () {
    if (truth) {
        for (var i = 0; i < show.length; i++) {
            show[i].innerText = (Math.random() * 20).toFixed(2);
        };
        setTimeout(()=> test(), t);
    };
};
let ct = 0;
let still = (me, e) => {
    e.stopPropagation();
    if (check != me) {
        play.cat();
        check = me;
        me.style.backgroundColor = 'rgba(38, 151, 57, 0.3)';
        me.style.left = (e.clientX - (.5 * me.offsetWidth)) + "px";
        me.style.top = (e.clientY - (.5 * me.offsetHeight)) + "px";
        me.style.zIndex = -1;
        me.removeAttribute("onclick");
        count();
    };
};
let start = function() {
    if (!truth) {
        body.style.filter = "blur(2px)";
        con = document.getElementById('con');
        con.style.display = 'block';
        con.style.left = ((.5*window.innerWidth) - (.5*con.offsetWidth)) + "px";
        con.style.top = ((.5*window.innerHeight) - (.5*con.offsetHeight)) + "px";
    };
};
let count = function() {
    document.getElementById("rem").innerText = 'Remaining: ' + (show.length - ct) +';';
    document.getElementById("cot").innerText = 'Caught: ' + ct++ +';';
    if ((ct - 1) == show.length) {
        truth = false;
        start();
    };
};
let dull = () => {
    document.getElementById('con').style.display = 'none';
    for (let i = 0; i < show.length; i++) {
        body.removeChild(show[i]);
    };
    ct = 0;
    show=[];
    body.style.filter = "initial";
    play.beep();
    beg();
};
function inn() {
    let pre = document.createElement("span");
    pre.innerText = "GOOD BYE 👋";
    pre.setAttribute('id', 'bye');
    body.innerHTML = '';
    body.appendChild(pre);
    pre.style.fontSize = '4em';
    pre.style.left = ((.5*window.innerWidth) - (.5*pre.offsetWidth)) + "px";
    pre.style.top = ((.5*window.innerHeight) - (.5*pre.offsetHeight)) + 'px';
    document.getElementById('con').style.display = 'none';
    play.beep();
};

let del = (x)=>{
    for (let i = 0; i < x; i++) {
        body.removeChild(show[i]);
    };
	show=show.slice(x)
}
// let me=0;
// let rem = ()=>{
		// setTimeout(()=>{
			// me=1;
		// },70)
	// if (me){
			// del(1)
	// }
// }