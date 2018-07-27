console.log(123456789);
//获取屏幕宽度（viewport）
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
console.log(htmlWidth);

//获取html的dom
let htmlDom = document.getElementsByTagName('html')[0];
console.log(htmlDom);//360px

//设置html的fontsize
htmlDom.style.fontSize = htmlWidth / 20 + 'px';
console.log(htmlDom.style.fontSize);//36px
