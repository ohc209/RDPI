#pragma strict
var loseTime: float = 0;

function Start () {
loseTime = Time.time;
}

function Update () {
if ((Time.time - loseTime) > 3 && Input.GetKey(KeyCode.Return)) {
Application.LoadLevel('Weed_Heaven');
}
}