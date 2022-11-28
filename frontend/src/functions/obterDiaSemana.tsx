import moment from "moment";

export default function obterDiaSemana(data:Date){
    var data1 = moment(data).day() //retorna o dia da semana correspondente da data em numeros (0 - 6 / (Sunday-to-Saturday))
    var data2 = moment.weekdays(data1) //transforma o numero em string do dia da semana correspondente
     console.log(data2);
    return(data2)
 }