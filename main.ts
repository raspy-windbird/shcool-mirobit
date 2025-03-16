//  Send all received packets to serial output
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 0) {
        music.play(music.tonePlayable(233, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
    } else {
        music.play(music.tonePlayable(233, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function on_logo_long_pressed() {
    basic.showLeds(`
        . . . . .
        . # # # .
        . . . . .
        . # . # .
        . . . . .
        `)
    radio.sendString("FIN")
    basic.clearScreen()
})
//  Decrement radio group by 1
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    radio.sendNumber(0)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    radio.sendString("fin")
    basic.clearScreen()
})
radio.onReceivedString(function on_received_string(receivedString: string) {
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
/** 

Download this code and connect the device to the computer.

Press A and B to select the radio group or change it in the code.


 */
//  Increment radio group by 1
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendNumber(1)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
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
