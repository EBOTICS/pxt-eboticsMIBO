//tests
let strip: neopixel.Strip = null
eboticsMIBO.init_wheel(AnalogPin.P1, AnalogPin.P2)
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})
basic.forever(function () {
    eboticsMIBO.freestyle(30, 90)
    basic.pause(1500)
    eboticsMIBO.freestyle(90, 30)
    basic.pause(1500)
})
