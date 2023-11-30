
// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
	fabric.Image.fromURL("golf-b.png",)function(Img)
	{
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	}
	new_image();
}

function new image(){
ft

fabric. Image. fromuURL("bola.png", function(Img) (

ball obj - Img;

ball obj.scaleToWidth(5e);

ball obj.scaleToHeight(50);

ball obj.set((

top:ball y,

Jeft:ball x

canvas. add(ball obj);

»ps}

window.addEventListener("keydown", my_keydown);
document . getElementById("hd3").innerHTML="Vocf] acertou o buraco.
document . getElementById("myCanvas") . style.borderColor="red";
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
	}

	function down()
	{

if(ball y <-450)

ball y = ball y + block image height;
console.log("altura do bloco da imagem = " + block image height);
console.log("Quando a seta para baixo [| pressionada, X = "+ ballx+",Y-"mally);
canvas. remove(ball obj);
new image();

)

	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
		}
	}
	
}

