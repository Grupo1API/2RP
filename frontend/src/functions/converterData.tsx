import moment from "moment";

export default function converterData (horario: Date){
    var data =  moment.utc(horario).format('MM/DD/YYYY, hh:mm:ss') //definir o formato da data desejado
    return data;
  }