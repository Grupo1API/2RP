import moment from "moment";

export default function compararHoraFim(
    hrFimVerba: string, hrFimAp: string) {
        var FimAp =  moment.utc(hrFimAp).format('hh:mm:ss')
        var horaFimVerba = new Date(hrFimVerba).getTime();
        var horaFimAp = new Date(FimAp).getTime();
        const comparacaoHoraFim = (horaFimAp < horaFimVerba ? true : false)

    return comparacaoHoraFim;

    }