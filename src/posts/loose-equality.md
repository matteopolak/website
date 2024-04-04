---
title: How JavaScript's loose equality works
description: A detailed explanation of how JavaScript's loose equality works, and why it's always a bad idea.
date: '2024-04-03'
tags:
  - javascript
  - tc39
published: true
---

You've likely seen one of the many weird quirks of JavaScript's loose equality operator.

```javascript
0 == '0' // true
false == 0 // true
[] == false // true
0 == ' \t\r\n\v\f' // true
['0x1'] == 1 // true
false == '0b0' // true
```

Okay, the first few are pretty well known, so let's start with `[] == false`.

### [] == false

When an Object is compared to a String, Number, BigInt, or Symbol, the object is converted
into a primitive value and compared again. In this case, the object is converted to the string `''`,
then the boolean is converted to the number `0`, then the empty string is converted to the number `0`.

Here's what's *really* happening:

> note that Number('') takes the same path as '' == 0, [ToNumber](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber)!

```javascript
Number([].valueOf().toString()) === Number(false) // true
```

### 0 == ' \t\r\n\v\f'

Strangely, although `' \t\r\n\v\f'` is not falsy, it is still loosely equal to 0. When comparing a number to a string,
the string is converted into a number with [ToNumber](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-tonumber).
This function returns `0` if the string consists of only whitespace characters, of which this one does!

```javascript
Number(' \t\r\n\v\f') === 0 // true
```

### ['0x1'] == 1

Okay, this is getting ridiculous. Again, when comparing an object to a number, the object is converted to a primitive value.
This primitive value is `'0x1'`, which is then converted to the number `1` as `0x1` is the hexadecimal representation of `1`.

```javascript
Number(['0x1'].valueOf().toString()) === 1 // true
```

### false == '0b0'

Similarly, when comparing a boolean to a string, the string is converted to a number. In this case, the string is `'0b0'`,
which is converted to the number `0` as `0b0` is the binary representation of `0`.

```javascript
false === Number('0b0') // true
```

Let's re-cap all of the rules:

Before all of this, if the types are the same, the values are compared directly using the (actually decent) strict equality operator, `===`.

1. When comparing a number (or bigint) and a string, convert the string to a number (or bigint) and compare again.
2. When comparing with a boolean, convert the other value to a number and compare again.
3. When comparing with an object, convert the object to a primitive value and compare again.
    - If the object implements `Symbol.toPrimitive` (such as `Date`), it is called with the hint `'default'` (the behaviour of which depends on anything you can dream of).
    - For everything else, `valueOf().toString()` is called.

## Why you should never use loose equality

The loose equality operator is a minefield of edge cases and weird behaviour. It's almost always better to use the strict equality operator, `===`, which doesn't perform any type coercion and makes your intentions much clearer.

## When you should use loose equality

There are a few cases where loose equality is useful, such as when you're comparing a value to `null` or `undefined`. In these cases, the type coercion is predictable and the behaviour is well-defined. However, it's still not very clear and I would never recommend using it.

There are only two cases where two values are loosely equal:

```javascript
null == undefined // true
undefined == null // true
```
