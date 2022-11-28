import moment from "moment";

export default function diferencaEntreHorarios (data1:string , data2:string){
    var inicio  = moment(data1);
    var fim = moment(data2);
  
    var ms = moment.duration(fim.diff(inicio));
    var d = moment.duration(ms);
    var s = moment.duration((inicio.diff(fim))).hours(); //retornando resultado da hora negativa
    var p = Math.abs(s) //transformar valor em positivo
    console.log(ms);
    console.log(d);
    console.log(p)
    //'YYYY-MM-DD Thh:mm:ss.sssZ'
    return p;
    }