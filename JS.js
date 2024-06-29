// Configuración global de Toastr
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

function calcularNotas() {
  // Obtener los valores de los campos
  let identidad = document.getElementById('identidad').value;
  let nombres = document.getElementById('nombres').value;
  let notaProducto1 = parseFloat(document.getElementById('notaProducto1').value);
  let notaProducto2 = parseFloat(document.getElementById('notaProducto2').value);
  let notaProducto3 = parseFloat(document.getElementById('notaProducto3').value);
  let notaDesempeno1 = parseFloat(document.getElementById('notaDesempeno1').value);
  let notaDesempeno2 = parseFloat(document.getElementById('notaDesempeno2').value);
  let notaConocimiento = parseFloat(document.getElementById('notaConocimiento').value);

  // Validar que los campos no estén vacíos y son válidos
  if (!identidad) {
    toastr.error('Por favor, ingresa la identidad.');
    document.getElementById('identidad').focus();
    return;
  }
  if (!nombres) {
    toastr.error('Por favor, ingresa los nombres.');
    document.getElementById('nombres').focus();
    return;
  }
  if (isNaN(notaProducto1)) {
    toastr.error('Por favor, ingresa un valor válido para la Nota Producto 1.');
    document.getElementById('notaProducto1').focus();
    return;
  }
  if (isNaN(notaProducto2)) {
    toastr.error('Por favor, ingresa un valor válido para la Nota Producto 2.');
    document.getElementById('notaProducto2').focus();
    return;
  }
  if (isNaN(notaProducto3)) {
    toastr.error('Por favor, ingresa un valor válido para la Nota Producto 3.');
    document.getElementById('notaProducto3').focus();
    return;
  }
  if (isNaN(notaDesempeno1)) {
    toastr.error('Por favor, ingresa un valor válido para la Nota Desempeño 1.');
    document.getElementById('notaDesempeno1').focus();
    return;
  }
  if (isNaN(notaDesempeno2)) {
    toastr.error('Por favor, ingresa un valor válido para la Nota Desempeño 2.');
    document.getElementById('notaDesempeno2').focus();
    return;
  }
  if (isNaN(notaConocimiento)) {
    toastr.error('Por favor, ingresa un valor válido para la Nota Conocimiento.');
    document.getElementById('notaConocimiento').focus();
    return;
  }

  // Calcular los promedios y la nota final
  let promedioProducto = (notaProducto1 + notaProducto2 + notaProducto3) / 3;
  let promedioDesempeno = (notaDesempeno1 + notaDesempeno2) / 2;
  let notaFinal = (promedioProducto * 0.4) + (promedioDesempeno * 0.3) + (notaConocimiento * 0.3);

    // Determinar si el estudiante aprueba o reprueba
    let mensajeResultado = `Identidad: ${identidad}<br>Nombres: ${nombres}<br>Nota Final: ${notaFinal.toFixed(2)}<br>`;
    if (notaFinal >= 3.5) {
      mensajeResultado += '<div class="alert alert-success">Aprobado</div>';
    } else {
      mensajeResultado += '<div class="alert alert-danger">Reprobado</div>';
    }

    // Mostrar el resultado en el DOM
    document.getElementById('resultado').innerHTML = mensajeResultado;

    // Mostrar el resultado en una alerta
    alert(mensajeResultado.replace(/<br>/g, '\n').replace(/<div.*?>|<\/div>/g, ''));
}

function limpiarFormulario() {
  document.getElementById('notasForm').reset();
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('identidad').focus();
  toastr.success('Formulario limpiado correctamente');
}
