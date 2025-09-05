# PH\_Emergency\_Services\_website 🚨

Emergency Services contact information website. Fully responsive, built using **HTML, CSS3, Tailwind CSS, DaisyUI, and JavaScript**.

---

## JavaScript Q\&A 📝

### 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`?

**Answer →**
There are some differences between the 4 methods:

1. **getElementById(id)** → Finds **one element** by its id
2. **getElementsByClassName(class)** → Finds **many elements** by class name; this returns a list of classes (**HTMLCollection**)
3. **querySelector(id/class/tag)** → Returns **one element**, the first match
4. **querySelectorAll()** → Finds **all elements** that match a CSS selector; returns a **NodeList**

---

### 2. How do you create and insert a new element into the DOM?

**Answer →**
There are some steps to insert an element into the DOM:

**Step 1:** Make a new element:

```
let div = document.createElement("div");
```

**Step 2:** Put some text or class:

```
div.textContent = "Hello!";
div.className = "box";
```

**Step 3:** Add or insert it to the page/DOM:

```
document.body.appendChild(div); // adds at the end
parentElement.insertBefore(newDiv, referenceElement); // adds before an element
```

---

### 3. What is Event Bubbling and how does it work?

**Answer →**
When I click a child element, the event also goes up to its parent, then grandparent, and so on.

**Text example:**

> If I click a button inside a box, first the button “click” happens, then the box “click” happens, then the page “click” happens.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?

**Answer →**
Instead of adding a click to every child element, I put **one click on the parent**.
The parent can check which child was clicked.

**It’s useful because:**

* Less code, fewer event listeners
* Works even if new elements are added later

**Example:**

> If I have a list of fruits and I click on “Apple”, the parent list notices the click and says “You clicked Apple.”
> I don’t need to add a click listener to every fruit separately.

---

### 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

**Answer →**

* **preventDefault()** → Stops the default action, like stopping a link from opening or a form from submitting
* **stopPropagation()** → Stops the event from moving up to parent elements
