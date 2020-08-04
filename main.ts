basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P1) < 80) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P1) < 130) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P1) < 160) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P1) < 600) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
