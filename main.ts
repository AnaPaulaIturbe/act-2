input.onButtonPressed(Button.A, function () {
    SUMA = n1 + n2
    basic.showNumber(SUMA)
    PALABRA1 = "SUMASTE"
})
input.onButtonPressed(Button.AB, function () {
    SUMA = n1 * n2
    basic.showNumber(MULTIPLICACION)
    PALABRA1 = "MULTIPLICASTE"
})
input.onButtonPressed(Button.B, function () {
    SUMA = n1 - n2
    basic.showNumber(RESTA)
    PALABRA1 = "RESTASTE"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(n1)
    basic.showNumber(n2)
    basic.showString(PALABRA1)
})
let MULTIPLICACION = 0
let RESTA = 0
let SUMA = 0
let PALABRA1 = ""
let n2 = 0
let n1 = 0
n1 = randint(1, 5)
n2 = randint(1, 5)
PALABRA1 = "-"
SUMA = 0
RESTA = 0
MULTIPLICACION = 0
