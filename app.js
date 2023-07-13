entrada = document.getElementById("inputEntrada");
entrada.addEventListener('input', calcularHorarioSaida);

function calcularHorarioSaida() {
    // Obtém o valor do horário de entrada
    const horarioEntrada = inputEntrada.value;

    // Verifica se o horário de entrada é válido
    if (horarioEntrada) {
      // Converte o horário de entrada para o formato de data e hora
      const dataHoraEntrada = new Date(`2000-01-01T${horarioEntrada}`);

      //Pega os valores de jornada atualizados
      jornada = getHorasJornada()

      //Pega os valores de invervalo atualizados
      intervalo = calculaIntervalo()

      // Adiciona 9 horas e 48 minutos ao horário de entrada
      dataHoraEntrada.setHours(dataHoraEntrada.getHours() + jornada[0] + intervalo[0]);
      dataHoraEntrada.setMinutes(dataHoraEntrada.getMinutes() + jornada[1] + intervalo[1]);

      // Obtém a hora e os minutos do horário de saída
      const horaSaida = dataHoraEntrada.getHours().toString().padStart(2, '0');
      const minutosSaida = dataHoraEntrada.getMinutes().toString().padStart(2, '0');

      const horarioSaidaElemento = document.getElementById('horarioSaida');
      horarioSaidaElemento.textContent = `${horaSaida}:${minutosSaida}`;

    }
}

horasJornada = document.getElementById("inputHorasJornada");
horasJornada.addEventListener('input', calcularHorarioSaida);

function getHorasJornada(){
  return inputToDate(inputHorasJornada.value)
}

function inputToDate(inputValue){
  // Converte o horário de entrada para o formato de data e hora
  const horaMinutoData = new Date(`2000-01-01T${inputValue}`);
  
  var horas = horaMinutoData.getHours().toString().padStart(2, '0');
  var minutos = horaMinutoData.getMinutes().toString().padStart(2, '0');

  return [parseInt(horas), parseInt(minutos)]
}

inicioIntervalo = document.getElementById("inputInicioIntervalo");
inicioIntervalo.addEventListener('input', calcularHorarioSaida);

fimIntervalo = document.getElementById("inputFimIntervalo");
fimIntervalo.addEventListener('input', calcularHorarioSaida);

function calculaIntervalo(){
  console.log("entrou")
  const inicio = inputInicioIntervalo.value
  const fim = inputFimIntervalo.value

  if (inicio && fim) {
    // Converte o horário de entrada para o formato de data e hora
    const dataHoraInicio = new Date(`2000-01-01T${inicio}`);
    const dataHoraFim = new Date(`2000-01-01T${fim}`);

    // Calcule a diferença de tempo em milissegundos
    var diferencaEmMilissegundos = Math.abs(dataHoraFim - dataHoraInicio);

    // Calcule a diferença em horas, minutos e segundos
    var horas = Math.floor(diferencaEmMilissegundos / 3600000);
    var minutos = Math.floor((diferencaEmMilissegundos % 3600000) / 60000);

    return [horas, minutos]
  }
}