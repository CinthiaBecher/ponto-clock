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
      // Adiciona 9 horas e 48 minutos ao horário de entrada
      dataHoraEntrada.setHours(dataHoraEntrada.getHours() + jornada[0]);
      dataHoraEntrada.setMinutes(dataHoraEntrada.getMinutes() + jornada[1]);

      // Obtém a hora e os minutos do horário de saída
      const horaSaida = dataHoraEntrada.getHours().toString().padStart(2, '0');
      const minutosSaida = dataHoraEntrada.getMinutes().toString().padStart(2, '0');

      // Exibe o horário de saída
      console.log(`Horário de Saída: ${horaSaida}:${minutosSaida}`);

      const horarioSaidaElemento = document.getElementById('horarioSaida');
      horarioSaidaElemento.textContent = `${horaSaida}:${minutosSaida}`;

    }
}

horasJornada = document.getElementById("inputHorasJornada");
horasJornada.addEventListener('input', calcularHorarioSaida);

function getHorasJornada(){
  return inputToDate(inputHorasJornada.value)
}

intervalo = document.getElementById("inputIntervaloDefault");
intervalo.addEventListener('input', getInvervalo);

function getInvervalo(){
  return inputToDate(inputIntervaloDefault.value)
}

function inputToDate(inputValue){
  // Converte o horário de entrada para o formato de data e hora
  const horaMinutoData = new Date(`2000-01-01T${inputValue}`);
  
  var horas = horaMinutoData.getHours().toString().padStart(2, '0');
  var minutos = horaMinutoData.getMinutes().toString().padStart(2, '0');

  return [parseInt(horas), parseInt(minutos)]
}