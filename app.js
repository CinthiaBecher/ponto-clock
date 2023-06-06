entrada = document.getElementById("inputEntrada");

entrada.addEventListener('input', calcularHorarioSaida);

function calcularHorarioSaida() {
    // Obtém o valor do horário de entrada
    const horarioEntrada = inputEntrada.value;

    // Verifica se o horário de entrada é válido
    if (horarioEntrada) {
      // Converte o horário de entrada para o formato de data e hora
      const dataHoraEntrada = new Date(`2000-01-01T${horarioEntrada}`);

      // Adiciona 9 horas e 48 minutos ao horário de entrada
      dataHoraEntrada.setHours(dataHoraEntrada.getHours() + 9);
      dataHoraEntrada.setMinutes(dataHoraEntrada.getMinutes() + 48);

      // Obtém a hora e os minutos do horário de saída
      const horaSaida = dataHoraEntrada.getHours().toString().padStart(2, '0');
      const minutosSaida = dataHoraEntrada.getMinutes().toString().padStart(2, '0');

      // Exibe o horário de saída
      console.log(`Horário de Saída: ${horaSaida}:${minutosSaida}`);
      horarioSaidaElemento.textContent = `${horaSaida}:${minutosSaida}`;

      displaySaida(horaSaida,minutosSaida);
    }
}

function displaySaida(horas,minutos){
}