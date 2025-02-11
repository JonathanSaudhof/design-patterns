# Adapter pattern

also known as >>Wrapper<<.

> An Adapter acts as a wrapper between two object. It catches calls for on object and transforms them to format
> and interface recognizable by the second object.
> -- <cite>[Refactoring Guru](https://refactoring.guru/design-patterns/adapter/go/example)</cite>

OR

> Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
> -- <cite>[Refactoring Guru](https://refactoring.guru/design-patterns/adapter)</cite>

# Problem

1. Integration of Legacy Code

   ... with a certain wanted behavior needs to be integrated.

2. External API

   If you have a 3rd party api which you want to use, that does not match the needed interface you can wrap it in an adapter.

3. Old behavior new interface
   (Old wine, new bottles)
