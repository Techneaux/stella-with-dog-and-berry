input.onButtonPressed(Button.A, function () {
    // show dog
    images.createImage(`
        # # # # .
        # # # # .
        # # # # #
        . . . . #
        . . . . #
        `).showImage(0)
})
input.onButtonPressed(Button.B, function () {
    // scroll berry
    images.createBigImage(`
        . . . . . . . . . .
        . . . . # # . . . .
        . . . # # # # . . .
        . . . # # # # . . .
        . . . # # # # . . .
        `).scrollImage(1, 200)
    // hide berry
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(0)
})
// show fun shape
images.createImage(`
    # # . . #
    # . # . .
    . . # . #
    # . . . #
    . . # . .
    `).showImage(0)
