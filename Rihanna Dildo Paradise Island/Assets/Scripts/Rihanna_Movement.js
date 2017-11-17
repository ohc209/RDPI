#pragma strict
//This will change sprites on Key Pressed
//var rihannaRight: Sprite; 
//var rihannaLeft: Sprite;
//var velocity : int = 8;
//var sprite : SpriteRenderer;

var moveLeft: KeyCode;
var moveRight: KeyCode;
var moveUp: KeyCode;
var moveDown: KeyCode;

var speed : float = 1;

var rb: Rigidbody2D;

function Start () {

rb.GetComponent.<Rigidbody2D>();
//This will change sprites on key pressed
//sprite = GetComponent(SpriteRenderer);
}

function Update () {

Debug.Log(transform.position);

if ( Input.GetKey(moveRight)){

//transform.position.x += speed;
rb.velocity.x = speed;
transform.localScale = new Vector3(.4796255, .4796255, .4796255);
//This will change sprite on key pressed
//sprite.sprite = rihannaRight;
//        transform.Translate(Vector2.right * velocity * Time.deltaTime);
}

else if ( Input.GetKey(moveLeft)){

//transform.position.x += speed*-1;

rb.velocity.x = speed*-1;
transform.localScale = new Vector3(-.4796255, .4796255, .4796255);
//This will change sprite on key pressed
//sprite.sprite = rihannaLeft;
//        transform.Translate(Vector2.right * -1 * velocity * Time.deltaTime);
}

if (Input.GetKey(moveUp)){
//transform.position.y += speed;

rb.velocity.y = speed;
}

else if(Input.GetKey(moveDown)){
//transform.position.y += speed*-1;

rb.velocity.y = speed*-1;
}
}