import moment from "moment";

export default function verificaDia(
    diaVerba: Array<String>, diaApont: string) {
        var av = moment(diaApont).day()
        var dataAp = av.toString()
        const verifica = (diaVerba.includes(dataAp) ? true : false)

    return verifica;

    }