import moment from "moment";

export default function compararHoraInicio(
    hrInicioVerba:Date, hrInicioAp:Date) {
        var InicioAp =  moment.utc(hrInicioAp).format('hh:mm:ss')
        var horaInicioVerba = new Date(hrInicioVerba).getTime();
        var horaInicioAp = new Date(InicioAp).getTime();
        const comparacaoHoraInicio = (horaInicioVerba > horaInicioAp ? true : false)

    return comparacaoHoraInicio;

    }