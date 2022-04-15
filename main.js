var toucheEvent = "empty";


    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;
    canvas.addEventListener("touhdown", my_touchdown);
    
    function my_touchdown(e)
    {

        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        touchEvent = "touchDown";
    }

    canvas.addEventListener("touchup", my_touchup);
    function my_touchup(e)
    {
        touchEvent = "touchUP";
    }

    canvas.addEventListener("toucheleave", my_toucheleave);
    function my_toucheleave(e)
    {
        toucheEvent = "toucheleave";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart()
{
    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y
}
canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touche_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touche_x, current_position_of_touche_y);
    ctx.stroke();
     
    last_position_of_touch_x = current_position_of_touche_x;
    last_position_of_touch_y = current_position_of_touche_y;
}