function derecha () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    basic.pause(200)
}
function izquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(200)
}
let Ultimo_giro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        izquierda()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            maqueen.motorStop(maqueen.Motors.All)
            derecha()
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
                maqueen.motorStop(maqueen.Motors.All)
                derecha()
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
