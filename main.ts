input.onButtonPressed(Button.A, function () {
    HAPPY.showImage(0)
})
input.onButtonPressed(Button.AB, function () {
    normal.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    Sad.showImage(0)
})
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
basic.forever(function () {
	
})
