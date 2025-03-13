namespace SpriteKind {
    export const loder = SpriteKind.create()
    export const clon = SpriteKind.create()
    export const eneny1 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight4, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(14, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level11`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    pause(100)
    tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`transparency16`)
    myEnemy = sprites.create(img`
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
        `, SpriteKind.eneny1)
    tiles.placeOnTile(myEnemy, tiles.getTileLocation(11, 2))
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(11, 2))
    mySprite5.follow(mySprite, 50)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level29`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 10))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    pause(5000)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight1, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 6))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level25`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level15`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 1))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level30`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 9))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level11`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 14))
    pause(100)
    tiles.setTileAt(tiles.getTileLocation(1, 14), assets.tile`transparency16`)
})
let mySprite5: Sprite = null
let myEnemy: Sprite = null
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
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
    `, SpriteKind.loder)
controller.startLightPulse(0x00ff00, 5000)
characterAnimations.loopFrames(
mySprite2,
[img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c f f c c c c c c c 
    c c c c c c f f f f c c c c c c 
    c c c c c f f f f f f c c c c c 
    c c c c f f f f f f f f c c c c 
    c c c c f f f f f f f f c c c c 
    c c c f f 3 f f f f 3 f f c c c 
    c c c f f f f f f f f f f c c c 
    c c c f f f 3 f f f f f f c c c 
    c c f f f f f 3 3 f f f f f c c 
    c c f f f f f f f f f f f f c c 
    c c f f f f f f f f f f f f c c 
    f f f f f f f f f f f f f f f f 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `,img`
    c c c c c c c c c c c c f c c c 
    c c c c c c c c c c c c f c c c 
    c c c c c c c c c f f f f c c c 
    c c c c c c f f f f f f f c c c 
    c c c c f f f f f f f f f c c c 
    c c c f f f 3 f f f f f f c c c 
    c c f f f f f f f f f f f c c c 
    c f f f f f f f f 3 f f f c c c 
    c f f f f f f f f 3 f f f c c c 
    c c f f f f f f 3 f f f f c c c 
    c c c f f f 3 f f f f f f c c c 
    c c c c f f f f f f f f f c c c 
    c c c c c c f f f f f f f c c c 
    c c c c c c c c c f f f f c c c 
    c c c c c c c c c c c c f c c c 
    c c c c c c c c c c c c f c c c 
    `,img`
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    c c c c c c c c c c c c c c c c 
    f f f f f f f f f f f f f f f f 
    c c f f f f f f f f f f f f c c 
    c c f f f f f f f f f f f f c c 
    c c f f f f f 3 3 f f f f f c c 
    c c c f f f f f f 3 f f f c c c 
    c c c f f f f f f f f f f c c c 
    c c c f f 3 f f f f 3 f f c c c 
    c c c c f f f f f f f f c c c c 
    c c c c f f f f f f f f c c c c 
    c c c c c f f f f f f c c c c c 
    c c c c c c f f f f c c c c c c 
    c c c c c c c f f c c c c c c c 
    c c c c c c c c c c c c c c c c 
    `,img`
    c c c f c c c c c c c c c c c c 
    c c c f c c c c c c c c c c c c 
    c c c f f f f c c c c c c c c c 
    c c c f f f f f f f c c c c c c 
    c c c f f f f f f f f f c c c c 
    c c c f f f f f f 3 f f f c c c 
    c c c f f f f 3 f f f f f f c c 
    c c c f f f 3 f f f f f f f f c 
    c c c f f f 3 f f f f f f f f c 
    c c c f f f f f f f f f f f c c 
    c c c f f f f f f 3 f f f c c c 
    c c c f f f f f f f f f c c c c 
    c c c f f f f f f f c c c c c c 
    c c c f f f f c c c c c c c c c 
    c c c f c c c c c c c c c c c c 
    c c c f c c c c c c c c c c c c 
    `],
1,
characterAnimations.rule(Predicate.NotMoving)
)
pause(5000)
mySprite2.setPosition(0, 120)
mySprite2.setImage(img`
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
    `)
characterAnimations.loopFrames(
mySprite2,
[img`
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
    `],
500,
characterAnimations.rule(Predicate.NotMoving)
)
mySprite = sprites.create(assets.image`z`, SpriteKind.Player)
