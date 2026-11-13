input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.SmallSquare)
        basic.showIcon(IconNames.Chessboard)
    }
})
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        # # # # #
        # # . # #
        # # . # #
        `)
})
