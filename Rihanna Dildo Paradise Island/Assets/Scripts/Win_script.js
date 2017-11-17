#pragma strict
var movTexture : MovieTexture;
var winTime: float = 0;

function Start () {
	GetComponent.<Renderer>().material.mainTexture = movTexture;
	movTexture.loop = true;
	movTexture.Play();
	winTime = Time.time;
}
function Update () {
	if (((Time.time - winTime) > 5) && Input.GetKey(KeyCode.Return)) {
        Application.LoadLevel('Start');
    }

}