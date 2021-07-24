function ちょうおんぱできょりをはかる () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P2, 0)
    return pins.pulseIn(DigitalPin.P1, PulseValue.High) / 58
}
pins.digitalWritePin(DigitalPin.P2, 0)
music.playTone(523, music.beat(BeatFraction.Sixteenth))
basic.pause(100)
servos.P0.setAngle(180)
basic.pause(500)
basic.forever(function () {
    if (ちょうおんぱできょりをはかる() < 15) {
        servos.P0.setAngle(120)
        basic.pause(500)
        servos.P0.setAngle(180)
        basic.pause(100)
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Double))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Double))
        music.playTone(659, music.beat(BeatFraction.Breve))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Breve))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Double))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Double))
        servos.P0.setAngle(120)
        basic.pause(1000)
        servos.P0.setAngle(180)
        basic.pause(1000)
    }
})
