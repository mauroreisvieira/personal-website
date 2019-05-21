Some of the new features are still proposal / not compatible in all browsers.\
So if you are playing with the code, try to use Google Chrome.

### Private Fields

```js
class Counter {
    #counter = 0;

    get value() {
        return this.#counter;
    }

    increment() {
        this.#counter++;
    }
}

const counter = new Counter();
counter.value(); // Output: 0;
counter.increment(); // Output: 0;
counter.value(); // Output: 1;
```

From the counterDemo class, the **#counter** value is private. If we try to access the #counter, then syntax error will be shown.

### Array Flat

```js
const numbers = [1, 2, [3, 4, [5, 6]]];
// Considers default depth of 1
numbers.flat();
> [1, 2, 3, 4, [5, 6]]
// With depth of 2
numbers.flat(2);
> [1, 2, 3, 4, 5, 6]
// Executes two flat operations
numbers.flat().flat();
> [1, 2, 3, 4, 5, 6]
// Flattens recursively until the array contains no nested arrays
numbers.flat(Infinity)
> [1, 2, 3, 4, 5, 6]
```

`Array.flat` will convert nested array items to a flat list.
By default, it will convert 1 level deep.

**You can use:**

`const array = [ 1, [2 , [3 , 4 , [5 , 6 ] ]]]`\
`array.flat(Infinity);`

The output will be **1, 2, 3, 4, 5, 6** if we use Infinity it will recursively convert to a flat list.

### Optional Catch Binding

```js
// Before
try {
   ...
} catch(error) {
   ...
}
// After
try {
   ...
} catch {
   ...
}
```

This feature is useful when you want to completely ignore the error.
There are cases where you know the possible error that could trigger on operations. You can ignore the catch block handling.