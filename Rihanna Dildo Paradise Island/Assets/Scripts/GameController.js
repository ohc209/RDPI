#pragma strict

var textBox: UnityEngine.UI.Text; 

var image: UnityEngine.UI.Image;

//var loseImage: UnityEngine.UI.Image;

//var winImage: UnityEngine.UI.Image;

var weed : GameObject;

var blunt: GameObject;

var dolphin: GameObject;

var pig: GameObject;

var lastTime : float = 0;
var bluntTime : float = 0;
var dolphinTime : float = 0;
var pigTime: float = 0;


var score : int = 0;

var isStarted: boolean = false;
var preStart: boolean = false;
var restart: boolean = false;

var startTime: float = 0;

var fadeColor: float = 1; 

var weedSound: AudioSource;
var pigSound: AudioSource;
var dolphinSound: AudioSource; 

function Start () {
//loseImage.color = new Color(loseImage.color.r, loseImage.color.g, loseImage.color.b, 0);
//winImage.color = new Color(winImage.color.r, winImage.color.g, winImage.color.b, 0);
}

function Update () {
 Debug.Log(isStarted);
if (restart) {
	if (Input.GetKey(KeyCode.DownArrow)) {  
    	Application.LoadLevel ('Weed_Heaven');  
  	}  
}

//This will start the game after 3 seconds
if (Input.GetKey(KeyCode.UpArrow)) {
	//start music
	preStart = true;
}

if(((Time.time) > 3.5) && isStarted == false && preStart ==true){

image.color = new Color(image.color.r, image.color.g, image.color.b, fadeColor); 
fadeColor -=0.01;

//fadeColor = fadeColor*0.9;
if (fadeColor < 0){
fadeColor = 0;
isStarted = true; 
}
}

if(isStarted == false) {
//image.color = new Color(image.color.r, image.color.g, image.color.b, fadeColor);


if (Input.GetKey(KeyCode.DownArrow) || Input.GetKey(KeyCode.UpArrow) || Input.GetKey(KeyCode.RightArrow) || Input.GetKey(KeyCode.LeftArrow)) {
Destroy (image);
isStarted = true;
}
}

//This will spawn a Weed every 1.5 seconds
if(((Time.time -lastTime) > 1.5) && isStarted == true){

spawnWeed();
lastTime = Time.time; 
}
if(((Time.time -bluntTime) > 10) && isStarted == true){
spawnBlunt();
bluntTime = Time.time; 
}	
if(((Time.time -dolphinTime) > 17) && isStarted == true){
spawnDolphin();
dolphinTime = Time.time;
}

if(((Time.time -pigTime) > 12) && isStarted == true){
spawnPig();
pigTime = Time.time;
}

if (score >= 100) {
Application.LoadLevel('Win');
//winImage.color = new Color(winImage.color.r, winImage.color.g, winImage.color.b, 1);
//textBox.text = "";
//winText.text = "420 BLAZIN";
restart = true;
}

if (score < 0) {
Application.LoadLevel('Lose');
//gameOver();
restart = true;

}

}
function spawnWeed(){
Instantiate(weed, Vector3(Random.Range(-10,10),10,0), Quaternion.identity);

}

function spawnBlunt() {
Instantiate(blunt, Vector3(Random.Range(-9.5,9.5),4,0), Quaternion.identity);
}

function spawnDolphin() {
Instantiate(dolphin, Vector3(Random.Range(-9.5,9.5),4.5,0), Quaternion.identity);
}

function spawnPig(){
Instantiate(pig, Vector3(Random.Range(-10,10),10,0), Quaternion.identity);
}

function Score(){

score += 1;
//Debug.Log(score);
textBox.text = score + "% High"; 
weedSound.Play();
}

function DoubleScore(){

score += 5;
textBox.text = score + "% High";
dolphinSound.Play(); 
} 

function FiveScore(){

score += 10;
textBox.text = score + "% High"; 
dolphinSound.Play(); 
}

function MinusScore() {

score -= 10;
textBox.text = score + "% High";
pigSound.Play();  
}

//function gameOver() {
//Application.LoadLevel('Lose');
//loseImage.color = new Color(loseImage.color.r, loseImage.color.g, loseImage.color.b, 1); 



//}

//function winGame() {
//winImage.color = new Color(winImage.color.r, winImage.color.g, winImage.color.b, 1); 
//
//}