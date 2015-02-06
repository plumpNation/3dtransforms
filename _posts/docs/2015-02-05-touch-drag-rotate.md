---

title: Card drag rotate
layout: doc
category: docs

---

This example is just to start playing with the Greensock library again and see if I can achieve an interaction to order. The order is to create a clone of the interaction on the Samsung Android desktop.

Here's the basic markup we'll need:

{% highlight html %}

<section class="container">
  <div id="card">
    <figure class="front">1</figure>
  </div>
</section>

{% endhighlight %}

It's pretty easy to get started with Greensock. It's available on bower, and comes in a 'lite' or 'max' form. I find it easier to start with 'TweenMax' and then see if I can move it to 'TweenLite' later on.

There is a Draggable plugin which gives you a lot of functionality out of the box, so in the spirit of not reinventing the wheel especially for the purposes of a spike, I'm just going to use that.

{% highlight js %}

// The second parameter is the Draggable options, of which there are many. Google it like a pro.
Draggable.create(card, {type: 'left'});

{% endhighlight %}

[**See Example: Drag Rotate Card**](../examples/drag-slide-rotate.html)

* * *
