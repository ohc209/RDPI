#pragma strict

function Start () {
Destroy(gameObject, 5);
}

function Update () {

}

function OnTriggerEnter2D( coll : Collider2D ){

if(coll.gameObject.tag == "Player"){


//Increment the score variable in the GameController Script
gameObject.Find("GameController").SendMessage("MinusScore");
Destroy(gameObject);

}
}