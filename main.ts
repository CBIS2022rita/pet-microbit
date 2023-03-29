input.onButtonPressed(Button.A, function () {
    health += 1
    ANGRY.showImage(0)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showString("STOP SHAKING!")
})
let turn = 0
let health = 0
let ANGRY: Image = null
ANGRY = images.createImage(`
    . # # # .
    . . # . .
    . # . # .
    # . . . #
    # # # # #
    `)
let NEUTRAL = images.createImage(`
    . # # # .
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    `)
let HAPPY = images.createImage(`
    . # # # .
    . . # . .
    # . # . #
    . # # # .
    . . . . .
    `)
loops.everyInterval(180000, function () {
    health += -1
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.clearScreen()
    basic.showString("HEALTH CARE PRESS A")
    if (health == 0) {
        basic.showString("GAME OVER")
        basic.clearScreen()
    }
})
basic.forever(function () {
    health = 20
    NEUTRAL.showImage(0)
})
basic.forever(function () {
    turn = input.rotation(Rotation.Pitch)
    if (turn >= 50 && turn <= 100) {
        HAPPY.showImage(0)
    } else if (0 >= 0 && 0 <= 0) {
        NEUTRAL.showImage(0)
    } else {
    	
    }
})
