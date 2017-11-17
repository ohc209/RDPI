#pragma strict

function Start () {
Destroy(gameObject, 2);
}

function Update () {

}

function OnTriggerEnter2D( coll : Collider2D ){

if(coll.gameObject.tag == "Player"){


//Increment the score variable in the GameController Script
gameObject.Find("GameController").SendMessage("FiveScore");
Destroy(gameObject);

}
}