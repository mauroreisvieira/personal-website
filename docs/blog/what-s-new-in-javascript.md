Some of the new features are still proposal, so if you are playing with the code, try to use **Google Chrome**.

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

From the **Counter** class, the `#counter` value is private.\
If we try to access the `#counter`, then syntax error will be shown.
From the **Counter** class, the `#counter` value is private.\
If we try to access the `#counter`, then syntax error will be shown.


### Rest/Spread Properties

The rest operator `...` copies the remaining property keys that were not mentioned. Let's look at an example:

```js
const values = {a: 1, b: 2, c: 3, d: 4};
const {a, ...n} = values;
console.log(a);   // prints 1
console.log(n);   // prints {b: 2, c: 3, d: 4}
````

### Asynchronous Iteration

Now we can use `await` on our loops declarations.

```js
for await (const line of readLines(filePath)) {
  console.log(line);
}
```

### Regular Expression

JavaScript regular expressions can return a match object — an array-like value containing matched strings.
For example, to parse a date in YYYY-MM-DD format:

```js
const
  reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/,
  match  = reDate.exec('2019-05-21'),
  year   = match[1], // 2019
  month  = match[2], // 05
  day    = match[3]; // 21
````

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

### Set

The Set object lets you store unique values of any type, whether primitive values or object references.\
Set objects are collections of values. You can iterate through the elements of a set in insertion order.
A value in the Set may only occur once; it is unique in the Set's collection.

```js
const duplicates = [1, 2, 3, 4, 1, 3, 4, 5];
const uniques = Array.from(new Set(duplicates));

console.log(uniques); //[1, 2, 3, 4, 5]

const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]

mySet.has(1); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed
```
