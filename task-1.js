/*
####Задача 1

Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. 
Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только число.

```js
f(2); // 8
f('Content'); // Error: parameter type is not a Number
```
*/


function f(x) {
	if (typeof x !== 'number') {
		throw new Error('parameter type is not a Number');	
	}

	return x**3;
}

console.log(f(2));
console.log(f('Content'));