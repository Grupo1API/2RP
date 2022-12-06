import moment from "moment";

export default function converterHora (horario: Date){
    var data =  moment.utc(horario).format('hh:mm:ss') //definir o formato da data desejado
    return data;
  }