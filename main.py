# Send all received packets to serial output

def on_received_number(receivedNumber):
    if receivedNumber == 0:
        music.play(music.tone_playable(233, music.beat(BeatFraction.WHOLE)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            """)
        basic.clear_screen()
    else:
        music.play(music.tone_playable(233, music.beat(BeatFraction.QUARTER)),
            music.PlaybackMode.UNTIL_DONE)
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
    basic.clear_screen()
radio.on_received_number(on_received_number)

def on_logo_long_pressed():
    basic.show_leds("""
        . . . . .
        . # # # .
        . . . . .
        . # . # .
        . . . . .
        """)
    radio.send_string("FIN")
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

# Decrement radio group by 1

def on_button_pressed_a():
    basic.show_leds("""
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        """)
    radio.send_number(0)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.show_leds("""
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        """)
    radio.send_string("fin")
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_received_string(receivedString):
    if receivedString == "fin":
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
        basic.pause(1000)
        basic.clear_screen()
    else:
        basic.show_string(receivedString)
radio.on_received_string(on_received_string)

"""

Download this code and connect the device to the computer.

Press A and B to select the radio group or change it in the code.

"""
# Increment radio group by 1

def on_button_pressed_b():
    basic.show_leds("""
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        """)
    radio.send_number(1)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        """)
    radio.send_string("HEY!")
    basic.clear_screen()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

group = 128
radio.set_group(group)