input.onButtonPressed(Button.A, function () {
    HAPPY.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    normal.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    Sad.showImage(0)
})
input.onGesture(Gesture.Shake, function () {
    Sad.showImage(0)
    _.showImage(0)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 4764, 1695, 255, 255, 465, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
let _: Image = null
let normal: Image = null
let Sad: Image = null
let HAPPY: Image = null
HAPPY = images.createImage(`
    . # . # .
    . . . . .
    # . . . #
    . # . # .
    . . # . .
    `)
Sad = images.createImage(`
    . # . # .
    . . . . .
    . . # . .
    . # . # .
    # . . . #
    `)
normal = images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    `)
_ = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
    }
})
