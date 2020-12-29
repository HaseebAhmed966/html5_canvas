var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var c = canvas.getContext('2d');
// // change a color of rectangle
// c.fillStyle ='rgba(255 , 0 , 0, 0.5)'
// // c.fillReact(x ,y, width, height)
// c.fillRect(100,100, 100,100)
// c.fillStyle ='rgba(0 , 0 , 255, 0.5)'
// c.fillRect(400,100, 100,100)
// c.fillStyle ='rgba(0 , 255 , 0, 0.5)'
// c.fillRect(300,300, 100,100)
// console.log(canvas)

// //line
// // start line
// c.beginPath();
// //c.moveTo(x,y)
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// // change a color of a line with stroke style css property
// c.strokeStyle = " purple";
// // show a line
// c.stroke();


// Arc/Circles
// c.beginPath()
// c.arc(300 , 300 , 30, 0 , Math.PI*2, false );
// c.strokeStyle = "brown"
// c.stroke();
// // Multiples circles draw using for loop

// for( var i=0; i<4; i++){
//     var x = Math.random()* window.innerWidth;
//     var y = Math.random()* window.innerHeight;
//     c.beginPath()
//     c.arc(x , y, 30, 0 , Math.PI*2, false );
//     c.strokeStyle = "brown"
//     c.stroke(); 
// }
var mouse={
    x:undefined,
    y:undefined
}
var colorArray=[
    '#611B70',
    '#945ED1',
    '#3A24E0',
    '#1B4FF7',
    '#1A92ED',
    '#023059',
    '#03588C',
    '#F2F2F2',
    '#A62F03',
    '#731702',
    
]
var maxRadius=40;
// var minRadius=2;
window.addEventListener('mousemove',
function(event){
    mouse.x=event.x;
    mouse.y=event.y
}
)
window.addEventListener('resize',
    function(){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        init();
    }
);

function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius
    this.minRadius=radius
    this.color=colorArray[Math.floor(Math.random()* colorArray.length)]
    this.draw=function(){
        c.beginPath();
c.arc(this.x ,this.y ,this.radius, 0 , Math.PI*2, false );
c.strokeStyle = "brown";
c.stroke();
c.fillStyle=this.color
c.fill();

    }
    this.update=function(){

        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx=-this.dx
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy=-this.dy
        }
               this.x += this.dx;
                this.y += this.dy;
if(mouse.x - this.x<50 && mouse.x - this.x >-50 
    && mouse.y - this.y <50 && mouse.y - this.y >-50)
{
    if(this.radius < maxRadius)
        {this.radius += 1;
      }
}
else if(this.radius > this.minRadius){
    this.radius -= 1;
}

                this.draw()

    }
}
var circleArray=[]
function init(){
    circleArray=[];
for(var i=0; i<1000; i++){
    var radius=Math.random() *3 +1;
    var x=Math.random()*(innerWidth - radius*2) + radius;
var y=Math.random()*(innerHeight - radius * 2)+ radius;

var dx=(Math.random() - 0.5)*1;
var dy=(Math.random() - 0.5)*1;

    circleArray.push(new Circle(x,y,dx,dy,radius))




}
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    // circle.update();
for(var i=0;i<circleArray.length;i++){
circleArray[i].update();
}



}
animate();
init();