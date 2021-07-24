def ちょうおんぱできょりをはかる():
    pins.digital_write_pin(DigitalPin.P2, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P2, 0)
    return pins.pulse_in(DigitalPin.P1, PulseValue.HIGH) / 58
pins.digital_write_pin(DigitalPin.P2, 0)
basic.pause(100)

def on_forever():
    serial.write_number(ちょうおんぱできょりをはかる())
    serial.write_line("")
    basic.pause(1000)
basic.forever(on_forever)
