#pragma strict
var startTime: float = 0;

function Start () {
startTime = Time.time;
}

function Update () {
if ((Time.time - startTime) > 2 && Input.anyKey) {
Application.LoadLevel('Weed_Heaven');
}
}