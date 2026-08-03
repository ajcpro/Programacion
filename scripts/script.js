document.addEventListener("DOMContentLoaded", function() {

  // 1. Abrir enlaces externos en una nueva pestaña
  var links = document.querySelectorAll('a');
  links.forEach(function(link) {
    if (link.hostname && link.hostname !== location.hostname) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
  });

  // 2. Control preciso de posicionamiento flotante para Tooltips
  document.addEventListener('mouseover', function(e) {
    var targetTooltip = e.target.closest('.tooltip');
    if (!targetTooltip) return;

    var tooltip = targetTooltip.querySelector('.tooltiptext');
    if (!tooltip) return;

    // Medición exacta de la palabra y el bocadillo
    var wordRect = targetTooltip.getBoundingClientRect();
    var ttHeight = tooltip.offsetHeight;
    var ttWidth = tooltip.offsetWidth;

    // --- CÁLCULO VERTICAL ---
    var topPos;
    if ((wordRect.top - ttHeight - 8) < 10) {
      // No cabe arriba -> Se coloca DEBAJO de la palabra
      topPos = wordRect.bottom + 8;
    } else {
      // Cabe arriba -> Se coloca JUSTO ENCIMA de la palabra
      topPos = wordRect.top - ttHeight - 8;
    }

    // --- CÁLCULO HORIZONTAL ---
    var leftPos = wordRect.left;
    if ((leftPos + ttWidth) > (window.innerWidth - 15)) {
      leftPos = window.innerWidth - ttWidth - 15;
    }
    if (leftPos < 10) leftPos = 10;

    // Asignación directa de coordenadas limpiando cualquier margen/bottom
    tooltip.style.bottom = 'auto';
    tooltip.style.right = 'auto';
    tooltip.style.top = topPos + 'px';
    tooltip.style.left = leftPos + 'px';
  });

});