input.onButtonPressed(Button.A, function () {
    health += 1
    ANGRY.showImage(0)
})
input.onSound(DetectedSound.Loud, function () {
    lightson = !(lightson)
    if (lightson) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    basic.showString("STOP SHAKING!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    HAPPY.showImage(0)
})
let turn = 0
let lightson = false
let health = 0
let HAPPY: Image = null
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
HAPPY = images.createImage(`
    . # # # .
    . . # . .
    # . # . #
    . # # # .
    . . . . .
    `)
NEUTRAL.showImage(0)
basic.showString("PRESS LOGO")
input.setSoundThreshold(SoundThreshold.Loud, 128)
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
    } else if (turn >= 0 && (0 as any) <= (49 as any)) {
        NEUTRAL.showImage(0)
        basic.pause(5000)
    } else {
        ANGRY.showImage(0)
        basic.pause(5000)
    }
})
