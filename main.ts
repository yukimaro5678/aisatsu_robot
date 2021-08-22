input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (_1234 == 1) {
        basic.showString("Hello!")
    } else if (_1234 == 2) {
        basic.showString("sayounara")
    } else if (_1234 == 3) {
        basic.showString("ohayou")
    } else {
        basic.showString("konbanwa")
    }
})
function ちょうおんぱできょりをはかる () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    return pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
}
let _1234 = 0
pins.digitalWritePin(DigitalPin.P2, 0)
music.playTone(523, music.beat(BeatFraction.Sixteenth))
basic.pause(500)
servos.P0.setAngle(180)
basic.pause(500)
basic.forever(function () {
    if (ちょうおんぱできょりをはかる() < 15) {
        servos.P0.setAngle(120)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(100)
        _1234 = randint(1, 3)
        if (_1234 == 1) {
            music.playMelody("C D E F G - - - ", 120)
        } else if (_1234 == 2) {
            music.playMelody("G F E D C - - - ", 120)
        } else if (_1234 == 3) {
            music.playMelody("C D E E D D C - ", 120)
        } else {
            music.playMelody("C D E F G - - - ", 120)
        }
        servos.P0.setAngle(120)
        basic.pause(1000)
        servos.P0.setAngle(180)
        basic.pause(1000)
    }
})
