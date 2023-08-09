
        function obtenerTurnosDisponibles() {
            const jornadaInicio = 8; // Hora de inicio de la jornada laboral (8 AM)
            const jornadaFin = 17.5; // Hora de finalización de la jornada laboral (5:30 PM)
            const diferenciaMediaHora = 0.5; // Diferencia en horas entre cada turno (media hora)

            let turnosDisponibles = [];
            let horaActual = jornadaInicio;

            while (horaActual < jornadaFin) {
                let turno = horaActual.toFixed(2);
                turnosDisponibles.push(turno);
                horaActual += diferenciaMediaHora;
            }

            return turnosDisponibles;
        }

        function mostrarTurnos(turnos) {
            let turnosHTML = "<p>Turnos disponibles:</p><ul>";
            for (let i = 0; i < turnos.length; i++) {
                turnosHTML += `<li>${turnos[i]}</li>`;
            }
            turnosHTML += "</ul>";

            document.getElementById("turnos").innerHTML = turnosHTML;
        }

        function elegirTurno() {
            const turnoElegido = parseFloat(prompt("Escribe el turno que deseas reservar (por ejemplo, '8.00' para las 8:00 AM):"));
            if (isNaN(turnoElegido) || turnoElegido < 8 || turnoElegido >= 17.5) {
                alert("Turno no válido. Por favor, elige un turno válido dentro de la jornada laboral.");
            } else {
                alert(`Has reservado el turno de las ${turnoElegido.toFixed(2)} AM.`);
            }
        }

        function iniciarSimulador() {
            const turnosDisponibles = obtenerTurnosDisponibles();
            mostrarTurnos(turnosDisponibles);
            elegirTurno();
        }
    

