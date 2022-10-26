let x = 0
let i = 0
let a = 0
basic.forever(function () {
    x += 1
    i = 0
    a = x
    while (a != 1) {
        if (a % 2 == 1) {
            led.plot(i % 5, Math.idiv(i, 5))
        } else {
            led.unplot(i % 5, Math.idiv(i, 5))
        }
        a = Math.trunc(a / 2)
        i += 1
    }
    if (a % 2 == 1) {
        led.plot(i % 5, Math.idiv(i, 5))
    } else {
        led.unplot(i % 5, Math.idiv(i, 5))
    }
})
