var card = document.getElementById('card');

function setRotation(angle) {
  var num = 90; 
  if (angle > num) angle = num;
  if (angle < -num) angle = -num;
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
  card.style.opacity = Math.max(1 - Math.abs(x) / 200, 0.1);
}

function animateToOrigin() {
  TweenMax.to(card, 0.5, {left: 0, opacity: 1, css: {rotationY: 0}});
}

var limit = 180;
Draggable.create(card, {
  bounds:{
    maxX:limit,
    minX:-limit
  },
  type: 'left',
  onDrag: function () {
    var angle = -(this.x / 2);
    setRotation(angle);
    setOrientation(this.x);
    setOpacity(this.x);
  },
  onDragEnd: function () {
    animateToOrigin();
  },
  throwProps: true
});
