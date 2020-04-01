let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 8 8 8 . . . . 
. . . . . . . 8 8 6 6 8 . . . . 
. . . . . . 8 6 6 8 8 . . . . . 
. . . . . 8 7 6 8 . . . . . . . 
. . . . 8 7 7 8 . . . . . . . . 
. . . . 8 7 7 8 . . . . . . . . 
. . . 8 7 7 8 . . . . . . . . . 
. . . 8 5 7 8 . . . . . . . . . 
. . . 8 5 5 8 . . . . . . . . . 
. . . 8 7 5 8 . . . . . . 8 8 . 
. . . 8 7 6 7 8 . . . . 8 7 8 . 
. . . 8 7 6 7 8 . . . 8 7 8 . . 
. . . . 8 7 6 7 8 . 8 7 6 8 . . 
. . . . 8 7 6 7 6 8 6 7 8 . . . 
. . . . . 8 7 6 6 8 7 7 8 . . . 
. . . . . . 8 6 6 8 7 6 6 . . . 
. . . . . . . 8 6 8 7 6 7 8 . . 
. . . . . . . . 8 6 6 7 6 7 8 . 
. . . . . . . . 8 6 8 5 7 5 6 . 
. . . . 8 8 . . 8 6 6 6 5 7 5 6 
. . . 8 6 8 . . 8 6 6 8 5 6 5 6 
. . 8 6 6 8 . . 8 6 6 8 7 6 7 8 
. 8 6 6 8 . . 8 6 8 6 8 7 6 7 8 
. 8 6 8 . . 8 6 8 8 6 6 7 6 7 8 
8 7 6 8 . 8 8 8 8 6 8 7 6 7 7 8 
8 7 6 8 . 8 8 8 8 8 7 7 6 7 8 . 
8 7 6 6 8 8 8 8 8 6 7 6 7 7 8 . 
8 7 6 7 6 8 8 8 6 6 8 7 7 8 . . 
. 8 7 6 7 7 6 8 6 8 6 6 8 . . . 
. 8 7 7 6 6 7 7 8 8 6 8 . . . . 
. . 8 7 7 6 6 7 6 8 8 . . . . . 
. . . 8 6 7 6 7 7 8 8 . . . . . 
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, mySprite, Math.randomRange(-25, 25), Math.randomRange(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx > 0) {
        projectile.image.flipX()
    }
})
