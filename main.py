x = 0
i = 0
a = 0

def on_forever():
    global x, i, a
    x += 1
    i = 0
    a = x
    while a != 1:
        if a % 2 == 1:
            led.plot(i % 5, Math.idiv(i, 5))
        else:
            led.unplot(i % 5, Math.idiv(i, 5))
        a = int(a / 2)
        i += 1
    if a % 2 == 1:
        led.plot(i % 5, Math.idiv(i, 5))
    else:
        led.unplot(i % 5, Math.idiv(i, 5))
basic.forever(on_forever)
