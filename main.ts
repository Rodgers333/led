input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 60; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    strip.setPixelColor(0, neopixel.rgb(42, 122, 159))
    strip.setPixelColor(1, neopixel.rgb(120, 55, 219))
    strip.setPixelColor(2, neopixel.rgb(97, 63, 159))
    strip.setPixelColor(3, neopixel.rgb(267, 45, 219))
    strip.setPixelColor(4, neopixel.rgb(28, 111, 159))
    strip.setPixelColor(5, neopixel.rgb(173, 345, 219))
    strip.setPixelColor(6, neopixel.rgb(88, 123, 159))
    strip.setPixelColor(7, neopixel.rgb(55, 54, 219))
    strip.setPixelColor(8, neopixel.rgb(23, 234, 159))
    strip.setPixelColor(9, neopixel.rgb(11, 312, 219))
    strip.setPixelColor(10, neopixel.rgb(190, 111, 159))
    strip.setPixelColor(11, neopixel.rgb(350, 53, 219))
    strip.setPixelColor(12, neopixel.rgb(111, 73, 159))
    strip.setPixelColor(13, neopixel.rgb(37, 142, 219))
    strip.setPixelColor(14, neopixel.rgb(46, 360, 159))
    strip.setPixelColor(15, neopixel.rgb(324, 2, 219))
    strip.show()
    for (let index = 0; index < 15; index++) {
        basic.pause(500)
        strip.shift(1)
        strip.show()
        basic.pause(500)
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
