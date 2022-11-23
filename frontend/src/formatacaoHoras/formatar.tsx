export const formatarDataHora = (dataHora: string | undefined | null) => {
    if (dataHora === undefined || dataHora === null){
      return ''
    }
    else {
      let horas = Number(dataHora.split('T')[1].split(':')[0])
      if (horas < 3){
        horas  = 21
      }
      else {
        horas -= 3
      }
      const minutos = dataHora.split('T')[1].split(':')[1]
      const ano = dataHora.split('T')[0].split('-')[0]
      const mes = dataHora.split('T')[0].split('-')[1]
      const dia = dataHora.split('T')[0].split('-')[2]
      return horas  + ':'  + minutos  + ' '  + dia +  '/' +  mes  + '/' +  ano
    }
  }