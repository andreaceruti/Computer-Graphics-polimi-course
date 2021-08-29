class Paddle {
    constructor(position, scale)
    {
        this.position = position;
        this.scale = scale;
        this.hasChanged = false;

        this.canBeDisabled = false;
        this.disabled = false;
        this.isPaddle = true;
        this.speed = PADDLE_SPEED;
    }

    moveLeft = false;
    moveRight = false;

    movePaddle(deltaTime)
    {
        if(this.moveLeft)
        {
            this.hasChanged = true;
            this.position.x -= this.speed * deltaTime;
        }
        else if(this.moveRight)
        {
            this.hasChanged = true;
            this.position.x += this.speed * deltaTime;
        }

        // very ugly code to limit paddle position inside walls
        if(this.position.x <= wallLeft.position.x + PADDLE_HALF_LENGTH + WALL_LATERAL_HALF_LENGTH)
        {   
            this.position.x = wallLeft.position.x + PADDLE_HALF_LENGTH + WALL_LATERAL_HALF_LENGTH;
        }
        else if(this.position.x >= wallRight.position.x - PADDLE_HALF_LENGTH - WALL_LATERAL_HALF_LENGTH)
        {   
            this.position.x = wallRight.position.x - PADDLE_HALF_LENGTH - WALL_LATERAL_HALF_LENGTH;
        }
    }
}