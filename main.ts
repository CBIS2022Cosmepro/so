input.onButtonPressed(Button.A, function () {
    HAPPY.showImage(0)
})
input.onButtonPressed(Button.B, function () {
    Sad.showImage(0)
})
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
basic.forever(function () {
	
})
