# JsFundamentals
 JavaScript édition 2022 (les bases)

 ## Extentions for VS code:
 - Live server
 - Material Icon Theme
 - Monokai ++ (theme)

## Javascript data types:
 - Number : 1,2,3,100, 3.14
 - String : "Hello wolrd" , "Fatima zahra c'est mon prénom"
 - Boolean : false , true
 - Null : To say that variable is with no value
 - Undefined : To say the variable is not yet defined
 - Object : Complex data structure, arrays , dates, literals
 - Sybmbol : used with object

## Primitive & reference types:
### Primitive types:
- numbers
- strings
- booleans
- null
- undefined
- symbols

### Reference types:
All type of objects:
- object literals
- arrays
- functions
- dates
- all other objects

when we create a primitive type like a string or number and we assign it to a variable, that value is stored on something called the **stack** which refers to the stack of different values in the memory, and they can be accessed quickly when we need to use them, but the space inside the **stack** is quite limited, so when we create a reference type like an object literal or array that doesn't stored in the **stack** but in something else called **heap** , because the **heap** has more space available so it can hold bigger and more complex types like objects.

When the primitive value has stored in a variable it adds that value to the stack and it locks the variable name to it as an accessor to that value.
When the reference value has stored in a variable like an object , it adds it to the heap, and then it adds a pointer to that object on the stack.
Code example is in the `object.js` file
