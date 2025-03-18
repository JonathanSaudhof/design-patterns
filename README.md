# Software Design Patterns

# Creational Patterns

Creational Patterns deal with the problems of object creation. [^fn1]

## Builder

Problem: You have a highly customable object with a lot of properties.
For every instance you would need to pass multiple properties into the constructor or set them afterwards.

Solution:

- You can implement an object builder with a standardized interface for the customization.
- Now you call the builder and customize the build process with the methods on the builder and do not interact with the
  constructor or object directly
- Furthermore, you can create a director for all the different builder configuratoins and just call those methods if you need certain configurations multiple times.

## Factory

Problem: You have different kinds of objects with the same interface but different implementations (oven vs. microwave). At runtime you need to create one of them.

Solution: The (abstract) factory provides a single interface for creating those functional related objects.
Depending on which object you need the factory interface creates it.

## Prototype

Problem: You want to have a (deep) copy of an object with all the internal state, a clone.

Solution: You delegate the "cloneing" to the object itself. "Cloneable" object have a public method "clone"
implemented, which returns a 1:1 copy of itself.

## Singleton

Problem: At runtime you need a single instance of an object and want to make sure, that just one instances is created.

Solution: Despite providing a public constructor, the singleton pattern has a static method which either returns
an existing instance of the object or creates a new instance an stores it in a private property of the object.

---

# Structural Patterns

Structural design patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient. [^fn1]

## Adapter

Problem: You have a legacy or external api which need to work with a different internal api.

Solution: The adapter, also called wrapper, wraps the old / external api into a class / object and provides
the wanted interface.

## Bridge

Problem: You have similar objects / entities which can be differentiated along two dimensions. (e.g. shape and color). Imagine you have 10 colors and 3 shapes. In order to provide an object for each combination you will endup creating 30 classes.

Solution: With the bridge pattern you split up those dimensions in two different interfaces. Now you create classes for each concrete implementation for each dimension (e.g. circle, rectangle, square, and red, green, yellow). Those concrete implementations will take the other dimension as a dependency that you can compose them
however you want. cirle(yellow()), ... etc. [^fn1]

## Composite

Example: Notion is a perfect example. Everything is a page. And a page can hold a page.

Problem: Your object structure can be visualized as a tree. E.g. a box, where you can put in multiple items (leafs) or a box itself (component), which also can hold multiple items or boxes.

Solution: With the composite pattern you offer a shared interface for components and leafs.
A component takes a list of this items with that interfaces. Now you can put in components or leafs.

## Decorator

Problem: You want to add behavior to an existing object without extending/changing the object itself or
to create another class. Imagine you want to create an outfit and have 2 jeans, 3 t-shirts, and 2 hat.
In order to create multiple outfits you have think you have to create a class for each jeans-t-shirt-hat combination.

Solution: instead of inheritance you can use the decorator pattern and compose the classes. A decorator is a wrapper, which
takes the same interface as an input as it returns. Therefore you can combine decorators with infinitely with other decorators
of the same interface.

## Facade

Problem: You have a complex task that needs the orchestration of multiple subsystems. For testing you need a lot of time mocking all the needed sub classes just to get some actual data.

Solution: When handling complex or complicated tasks you can create an facade interface in order to hide the complexity behind an easy to understand and test api.

## Proxy

Problem: You want to controll the access of an external resource, have an expensive object to create within you system you need to access at different places, or you want to protect the access of an internal object. [^fn2]

Solution: You can mittigate the access via an proxy which implements the same interface as the original object but with an adapted logic. The proxy is
controlls when an how the actual object is instantiaded.

---

# Behavioral Patterns

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects. [^fn1]

## Chain of responseability

Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.[^fn1]

Problem: You have a process with a certain order of decision points, like authorisation, and need to make sure that they will be
processed in a concrete order.

Solution: With the chain of responsibility pattern you break down the process and steps into a chain of handlers. Each handler has
a link to the next handler. Every handler can decide wether or not it passes the request to the next handler.

## Command

Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.[^fn1]

Problem [^fn3]:

- You have operations (like "Undo" or "Redo") that need to be executed later.
- You want to queue or log actions (e.g., saving user commands for a history feature).
- You need to decouple the sender of a request from the object that actually performs it.

It decouples the invoker (button, switch) and the actual object that does something (receiver). The invoker calls an action on the receiver using the command.

## Iterator

Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).[^fn1]

Problem: [^fn1]
You have different collections of objects with all sorts of complex data structures (stack, tree, graphs, and others). For all theses collections you need a simple interface to go through all the elements without
caring about the underlying datastructure.

Solution: [^fn1]
The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an iterator.

All of the traversal details are hidden behind the iterator implementation.

## Mediator

Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.[^fn1]

Problem: You want to have objects to communicate or call actions upon each other. With the increasing amount of objects you have to manage the dependencies
and interactions on a object/class level. This makes it hard to reuse those objects in other places as those objects are hard coupled with each other.

Solution: You can introduce an intermediate object inbetween as a central mediator. Each object does depend just on the mediator. The mediator itself knows
every "registered" component. Each time an object wants to interact with an other object it calls a method on the mediator. The mediator than
manages the request with an implemented logic.

## Observer

Problem: You have multiple objects (subscriber) waiting for an object (provider) to change in order to react accordingly. How does the subscribers know when the provider changed? A subscriber could pull/ask for the state every 2 seconds. But what if you have hundreds or thousands of subscribers?

Solution: The observer pattern introduces a subscription and delegates the responsibility to the provider to notify all the subscribers on every state change. The subscriber just listens/receives the update/notification and acts accordingly.

## State

Problem: "The State pattern is closely related to the concept of a Finite-State Machine. The main idea is that, at any given moment, there’s a finite number of states which a program can be in. Within any unique state, the program behaves differently, and the program can be switched from one state to another instantaneously. However, depending on a current state, the program may or may not switch to certain other states. These switching rules, called transitions, are also finite and predetermined [^fn1]."

Solution: With the Strategy pattern decouple the actual state from the original object/context, which just holds the reference to the initial state. For each state there is a single implementation for the logic when some events occure. Each implementation handles the transition to the next state based on the incoming event.

[^fn1]: [RefactoringGuru](https://refactoring.guru/)
[^fn2]: [YouTube: Christopher Okhravi](https://www.youtube.com/@ChristopherOkhravi)
[^fn3]: ChatGPT
