// Send all received packets to serial output
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # . # .
        . . . . .
        `)
    radio.sendString("BYE")
    basic.clearScreen()
})
// Decrement radio group by 1
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(0)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendString("fin")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "fin") {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.showString(receivedString)
    }
})
// Increment radio group by 1
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    radio.sendNumber(1)
    basic.clearScreen()
})
/**
 * Download this code and connect the device to the computer.
 * 
 * Press A and B to select the radio group or change it in the code.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    radio.sendString("HEY!")
    basic.clearScreen()
})
let group = 128
radio.setGroup(group)
