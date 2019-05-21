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
const array = [1, 2, 3, 4, [5]];
array.flat(); // Output: 1, 2, 3, 4, 5;
```

Array.flat will convert nested array items to a flat list. By default, it will convert 1 level deep. You can use

`const array = [ 1, [2 , [3 , 4 , [5 , 6 ] ]]]`\
`array.flat(Infinity);`

The output will be **1, 2, 3, 4, 5, 6** if we use Infinity it will recursively convert to a flat list.
