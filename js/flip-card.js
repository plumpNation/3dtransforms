var card = document.getElementById('card');

function setRotation(angle) { 
  if (angle > 90) angle = 90;
  if (angle < -90) angle = -90;
  card.style.transform = "rotateY( " + angle + "deg )";
}

function setOrientation(x) {
  var origin = 'right';

  if (x > 0) {
    origin = 'left';
  }

  card.style.transformOrigin = "top " + origin;
}

function setOpacity(x) {
  card.style.opacity = Math.max(1 - Math.abs(x) / 200, 0.3);
}

Draggable.create(card, {type: 'left', onDrag: function () {
  var angle = -(this.x / 2);
  setRotation(angle);
  setOrientation(this.x);
  setOpacity(this.x);
}, throwProps: true});
