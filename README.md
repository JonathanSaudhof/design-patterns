# Software Design Patterns

# Creational Patterns

Creational Patterns deal with the problems of object creation.

### Builder

Problem: You have a highly customable object with a lot of properties.
For every instance you would need to pass multiple properties into the constructor or set them afterwards.

Solution:

- You can implement an object builder with a standardized interface for the customization.
- Now you call the builder and customize the build process with the methods on the builder and do not interact with the
  constructor or object directly
- Furthermore, you can create a director for all the different builder configuratoins and just call those methods if you need certain configurations multiple times.

### Factory

Problem: You have different kinds of objects with the same interface but different implementations (oven vs. microwave). At runtime you need to create one of them.

Solution: The (abstract) factory provides a single interface for creating those functional related objects.
Depending on which object you need the factory interface creates it.

### Prototype

Problem: You want to have a (deep) copy of an object with all the internal state, a clone.

Solution: You delegate the "cloneing" to the object itself. "Cloneable" object have a public method "clone"
implemented, which returns a 1:1 copy of itself.

### Singleton

Problem: At runtime you need a single instance of an object and want to make sure, that just one instances is created.

Solution: Despite providing a public constructor, the singleton pattern has a static method which either returns
an existing instance of the object or creates a new instance an stores it in a private property of the object.

# Structural Patterns

## Adapter

Problem: You have a legacy or external api which need to work with a different internal api.

Solution: The adapter, also called wrapper, wraps the old / external api into a class / object and provides
the wanted interface.

## Bridge

Problem: You have similar objects / entities which can be differentiated along two dimensions. (e.g. shape and color). Imagine you have 10 colors and 3 shapes. In order to provide an object for each combination you will endup creating 30 classes.

Solution: With the bridge pattern you split up those dimensions in two different interfaces. Now you create classes for each concrete implementation for each dimension (e.g. circle, rectangle, square, and red, green, yellow). Those concrete implementations will take the other dimension as a dependency that you can compose them
however you want. cirle(yellow()), ... etc.

## Composite Pattern

Problem: Your object structure can be visualized as a tree. E.g. a box, where you can put in multiple items (leafs) or a box itself (component), which also can hold multiple items or boxes.

Solution: With the composite pattern you offer a shared interface for components and leafs.
A component takes a list of this items with that interfaces. Now you can put in components or leafs.
