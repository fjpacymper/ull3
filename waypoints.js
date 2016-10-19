$(document).ready(function() {
        
var waypoint = new Waypoint({
  element: document.getElementById('tres'),
  handler: function(direction) {
    alert('¡Has pasado por aquí!');
    if (direction == 'down') {
      alert('¡Hacia abajo!');
      this.destroy();                     // Sólo lo detectará una vez
    }
  }
});


});
