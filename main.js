var Canvas=document.getElementById("Canvas");
var Ctx=Canvas.getContext("2d");
var Colour="Red";
var Last_position_X;
var Last_position_Y;
var Width_Line=2;
var Screen_Width=Screen.width;
var Canvas_New_Width=Screen.width-70;
var Canvas_New_Height=Screen.height-300;

if (Screen_Width<992){
    document.getElementById("Canvas").width=Canvas_New_Width;
    document.getElementById("Canvas").height=Canvas_New_Height;
    document.body.style.overflow="hidden";
}
Canvas.addEventListener("touchstart", myTouchStart)

function myTouchStart(e) {
    Colour=document.getElementById("colour_text_input").value;
    Width_Line=document.getElementById("width_input").value;
    Last_position_X=e.touches[0].clientX-Canvas.offsetLeft;
    Last_position_Y=e.touches[0].clientY-Canvas.offsetTop;

}

Canvas.addEventListener("touchmove", myTouchMove);
   
function myTouchMove (e){
    console.log(e)
    Current_position_x=e.touches[0].clientX-Canvas.offsetLeft;
    Current_position_y=e.touches[0].clientY-Canvas.offsetTop;   
    Ctx.beginPath();
    Ctx.strokeStyle=Colour;
    Ctx.lineWidth=Width_Line;
    console.log("x="+Last_position_X+", y="+Last_position_Y);
    Ctx.moveTo(Last_position_X, Last_position_Y);
    Ctx.lineTo(Current_position_x, Current_position_y);
    Ctx.stroke();
    Last_position_X=Current_position_x;
    Last_position_Y=Current_position_y;
}

function Clear(){
    Ctx.clearRect(0,0,800,600);
}
