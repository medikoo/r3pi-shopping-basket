# R3Pi shopping basket

## Comments

Solution could easily fit file, but I decided to follow with some modularity (that will make closer to real world app solution).
I didn't introduce any tests, as there's no complex (or even medium level) algorithms involved. Still production solution will not be complete without at least some integration tests.

## Setup

Relies on one external package (of which I'm the author), used purely to format receipt output.

Therefore in a folder of a project do:

```
npm install
```

## Print example receipt

```
node bin/print-example
```
