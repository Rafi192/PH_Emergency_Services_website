# PH_Emergency_Services_website
Emergency Services contact information website. Fully responsive, using technologies such as HTML, CSS3, Tailwind CSS, DaisyUI and JavaScript.


What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer->There are some difference between the 4 methods.
1. getElementById(id) Finds one element by its id
2. getElementsByClassName(class) → Finds many elements by class name, this returns a list of classes. An HTML HTMLCollection.

3. querySelector(id/class/tag) returns one element,that first match.
4. querySelectorAll() Finds all elements that match a CSS selector, this returns a NodeList.

How do you create and insert a new element into the DOM?
answer->
There are some steps to insert an element into the DOM.
step 1. 
make a new element:
let div = document.createElement("div");

step 2. 
put some text or class:
div.textContent = "Hello!";
div.className = "box";

step 3. 
Finally, add or insert it to the page or DOM:
document.body.appendChild(div); // adds at the end

parentElement.insertBefore(newDiv, referenceElement); // adds before an element



What is Event Bubbling and how does it work?

Answer →
When I click a child element, the event also goes up to its parent, then grandparent, and so on.
Text example:

If I click a button inside a box, first the button “click” happens, then the box “click” happens, then the page “click” happens.


What is Event Delegation in JavaScript? Why is it useful?

Answer →
Instead of adding a click to every child element, I put one click on the parent.
The parent can check which child was clicked.

It’s useful because:

Less code, fewer event listeners.

Works even if new elements are added later.

example:

If I have a list of fruits and I click on “Apple”, the parent list notices the click and says “You clicked Apple.”
I don’t need to add a click listener to every fruit separately.
What is the difference between preventDefault() and stopPropagation() methods?
answer->

preventDefault() Stops the default action, like stopping a link from opening or form from submitting. 

stopPropagation() stops the event from moving up to parent elements.