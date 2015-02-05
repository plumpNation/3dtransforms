---

title: Card Flip
layout: doc
category: docs

---

We now have all the tools to start making 3D objects. Let's get started with the basics, flipping a card.

Here's the basic markup we'll need:

{% highlight html %}

<section class="container">
  <div id="card">
    <figure class="front">1</figure>
    <figure class="back">2</figure>
  </div>
</section>

{% endhighlight %}

The `.container` will house the 3D space. The `#card` acts as a wrapper for the 3D object. Two separate elements for both faces of the card, `.front` and `.back`. Even for such a simple object, I recommend using this same pattern for any 3D transform.  Keeping the 3D space element and the object separate element establishes a paradigm that is simple to understand and easier to style.

We're ready for some 3D stylin'. First, apply necessary `perspective` to the parent 3D space, along with any size or positioning styles.

{% highlight css %}

.container { 
  width: 200px;
  height: 260px;
  position: relative;
  perspective: 800px;
}

{% endhighlight %}

Now the `#card` element can be transformed in its parent's 3D space. We're using absolute/relative positioning so the 3D object is removed from the flow of the document. We'll also add @width: 100%;`  and `height: 100%;@. This ensures the object's `transform-origin` will occur in the center of container. More on `transform-origin` later. 

Let's add a CSS3 transition so users can see the transform take effect. 

{% highlight css %}

#card {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
}

{% endhighlight %}

The `.container`'s `perspective` only applies to direct descendant children, in this case `#card`. In order for subsequent children to inherit a parent's perspective, and live in the same 3D space, the parent can pass along its perspective with `transform-style: preserve-3d`. Without 3D `transform-style`, the faces of the card would be flattened with its parents and the back face's rotation would be nullified. 

To position the faces in 3D space, we'll need to reset their positions in 2D with `position: absolute`. In order to hide the back-side of the faces when they are faced away from the viewer, we use `backface-visibility: hidden`. 

{% highlight css %}

#card figure {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

{% endhighlight %}

To flip the `.back` face, we add a basic 3D transform of `rotateY( 180deg )`. 

{% highlight css %}

#card .front {
  background: red;
}
#card .back {
  background: blue;
  transform: rotateY( 180deg );
}

{% endhighlight %}

With the faces in place, the `#card` requires a corresponding style for when it is flipped.

{% highlight css %}

#card.flipped {
  transform: rotateY( 180deg );
}

{% endhighlight %}

Now we have a working 3D object. To flip the card, we can toggle the `flipped` class. When `.flipped`, the `#card` will rotate 180 degrees, thus exposing the `.back` face.

[**See Example: Card 1**](../examples/card-01.html)

[![3D card flip transition](../img/card-flip01.png)](../examples/card-01.html)

## Slide-flip

Take another look at the Weather App 3D transition. You'll notice that it's not quite the same effect as our [previous demo](../examples/card-01.html). If you follow the right edge of the card, you'll find that it stays flush with the container. Instead of pivoting from the horizontal center, it pivots on that right edge. But the transition is not just a rotation -- the edge moves horizontally from right to left. We can reproduce this transition just by modifying a couple lines of CSS from our original card flip demo.

The pivot point for the rotation occurs at the right side of the card. By default, the `transform-origin` of an element is at its horizontal and vertical center (`50% 50%` or `center center`). Let's change it to the right side:

{% highlight css %}

#card { transform-origin: right center; }

{% endhighlight %}

That flip now needs some horizontal movement with `translateX`. We'll set the rotation to `-180deg` so it flips right side out.

{% highlight css %}

#card.flipped {
  transform: translateX( -100% ) rotateY( -180deg );
}

{% endhighlight %}

[**See Example: Card 2**](../examples/card-02-slide-flip.html)

[![3D card slide-flip transition](../img/card-flip02.png)](../examples/card-02-slide-flip.html)

* * *

[**Next: Cube &raquo;**](cube.html)
