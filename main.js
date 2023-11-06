
 
function preload() {

	mario_gameover = loadSound("gameover.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_kick = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav") 
    world_start = loadSound("world_start.wav")
	
	setSprites();
	MarioAnimation();
    
}

function setup() {
canvas=createCanvas(1240, 336)

instializeInSetup(mario);
canvas.parent("lienzo")
video=createCapture(VIDEO)
video.size(800, 400)
video.parent("camara")
//poseNet = ml5.poseNet(video, modelLoaded); 
//poseNet.on('pose', gotPoses);
poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on("pose", gotPoses)	


//---------------CARGA Y ACTIVA EL MODELO POSENET PARA QUE DETECTE TU NARIZ-----------------




}


//-------COMPLETA LA FUNCION DE MODELO CARGADO ------------

function modelLoaded() 
{
console.log("poseNet")	
}



//------------CREA LA FUNCIÓN gotPoses PARA LEER LA POSICION DE LA NARIZ --------------

function gotPoses(results)
{
if(results.length>0){
	console.log(results)
	noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y 
}	



}
   

function draw() 
{
	game();
}





