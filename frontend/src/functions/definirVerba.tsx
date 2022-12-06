import moment from "moment";

export default function definirVerba(
    hrInicioVerba:Date, hrInicioAp:Date, hrFimVerba: string, hrFimAp: string,
    diaVerba: Array<String>, diaApont: string, codigo: string) {

        // var horaInicioVerba =  moment.utc(hrInicioVerba).format('hh:mm:ss')
        //var InicioAp =  moment.utc(hrInicioAp).format('hh:mm:ss')
        //var horaFimVerba =  moment.utc(hrFimVerba).format('hh:mm:ss')
        //var FimAp =  moment.utc(hrFimAp).format('hh:mm:ss')

        //var horaInicioVerba = new Date(hrInicioVerba).getTime();
       // var horaFimVerba = new Date(hrFimVerba).getTime();

       // var horaInicioAp = new Date(InicioAp).getTime();
        //var horaFimAp = new Date(FimAp).getTime();



        //const comparacaoHoraInicio = (horaInicioVerba >= horaInicioAp ? true : false)
        //const comparacaoHoraFim = (horaFimAp <= horaFimVerba ? true : false)

        //var dv = moment(diaVerba).day()
   
/*
        var av = moment(diaApont).day()
        var dataAp = moment.weekdays(av)
        
        const verifica = (diaVerba.includes(dataAp) ? true : false)

*/

        return true;

    }

    /*
    
{definirVerba(verba.horario_inicio,ap.horario_inicio,verba.horario_fim,ap.horario_fim,verba.dia_semana,{obterDiaSemana(ap.horario_inicio)},verba.codigo)}
*/