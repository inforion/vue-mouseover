# Description

A simple Vue directive that automatically updates Vue component data with a customizable value when mouse enters or leaves HTML element it is attached to.

# Installation

Using NPM:

```
npm install vue-mouseover
```

or using Yarn:

```
yarn add vue-mouseover
```

# Setup

```javascript
import Vue from 'vue';
import Mouseover from 'vue-mouseover';
    
Vue.use(Mouseover);
```

You can also pass an [options object](#options) to the `Vue.use` call as well:

```javascript
Vue.use(Mouseover, options);
```

# Examples

## Default values

`hover` will be `true` when mouse is over `<div>` and `false` otherwise.
<br/>
**You can customize** these default values in [options object](#options) during setup.

```javascript
Vue.extend({
    template: `<div v-mouseover="hover" />`,
    data() {
        return {
            hover: false
        }
    }
})
```

## Specify only `mouseenter` value

`hover` will be `"foo"` when mouse is over `<div>` and `null` otherwise.
<br/>
**You can customize** the default `mouseleave` value in [options object](#options) during setup.

```javascript
Vue.extend({
    template: `
        <div
            v-mouseover="hover"
            v-mouseover-value="customValue"
        />
    `,
    data() {
        return {
            customValue: 'foo',
            hover: null
        }
    }
})
```

**Note:** In the previous example you **cannot use objects** as custom `mouseenter` values.

**In order to use objects** as custom `mouseenter` values you should use another form of `v-mouseover-value` directive setting as in this example:

```javascript
Vue.extend({
    template: `
        <div
            v-mouseover="hover"
            v-mouseover-value="{ mouseenter: customValue }"
        />
    `,
    data() {
        return {
            customValue: {
                foo: 'Hello world'
            },
            hover: null
        }
    }
})
```

## Specify `mouseenter` and `mouseleave` values

`hover` will be `"foo"` when mouse is over `<div>` and `"bar"` otherwise.

```javascript
Vue.extend({
    template: `
        <div
            v-mouseover="hover"
            v-mouseover-value="{
                mouseenter: mouseenterValue,
                mouseleave: mouseleaveValue
            }"
        />
    `,
    data() {
        return {
            mouseenterValue: 'foo',
            mouseleaveValue: 'bar',
            hover: null
        }
    }
})
```

It is also possible to specify only `mouseleave` value inside `v-mouseover-value` setting. The default `mouseenter` value for this case **can also be customized** in [options object](#options) during setup.

# Immediate value assignment

**Note:** by default the data property specified in `v-mouseover` directive will be overwritten immediately after the directive is attached to the element. If mouse is over this element at the moment, `mouseenter` value will be assigned, and `mouseleave` value otherwise.
<br/>
You can disable this behavior in [options object](#options) during setup.

# Nested properties assignment

Value assignment behavior for nested properties was designed to be as similar to the `v-model` directive as possible. Consider the following Vue component `data` context:

```json5
{
    a: {
        b: {
            prop: 'value',
            arr: []
        }
    }
}
```

* `a.b.prop` will be successfully assigned;
* `a.b.missing` assignment **will fail** with error (as reactive properties should be initialized beforehand);
* `a.b.arr.0`, `a.b.arr.2` and even `a.b.missing` will be successfully assigned with [Vue.set](https://ru.vuejs.org/v2/api/#Vue-set) method.

# Options

These are all available options and their default values:

```json5
{
    defaultValues: { // default values to be written into data property specified in v-mouseover directive
        noValueDirective: {  // when v-mouseover-value directive is not attached
            mouseenter: true,
            mouseleave: false
        },
        hasValueDirective: { // when v-mouseover-value directive is attached to the same element v-mouseover directive is
            mouseenter: null,
            mouseleave: null
        }
    },
    immediate: true // whether to update data property immediately after v-mouseover directive is attached to the element
}
```

# Restrictions

Target language version of the bundle is ECMAScript 6. This is because of using `WeakMap` for storing event handlers.
<br/>
Any PRs are appreciated :)

# Motivation

You can achieve the same effect without using this package (with some reservations):

```javascript
Vue.extend({
    template: `
        <div
            @mouseenter="hover = 'foo'"
            @mouseleave="hover = 'bar'"
        />
    `,
    data() {
        return {
            hover: 'bar'
        }
    }
})
```

The reservations are:

* These assignments look pretty much imperative and should be duplicated along all use cases;
* If you use the same `mouseenter`/`mouseleave` values in multiple Vue components you should duplicate or import them everywhere;
* Initial value in `data` object should be assigned manually.

`vue-mouseover` relieves you from these disadvantages and makes your code a bit cleaner.