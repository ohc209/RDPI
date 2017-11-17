#pragma strict

function Start () {
Destroy(gameObject, 3);
}

function Update () {

}

function OnTriggerEnter2D( coll : Collider2D ){

if(coll.gameObject.tag == "Player"){


//Increment the score variable in the GameController Script
gameObject.Find("GameController").SendMessage("DoubleScore");
Destroy(gameObject);

}
}