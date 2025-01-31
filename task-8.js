/*
####Задача 8

Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров, 
а затем последовательно выводит на экран его элементы. Обязательно нужно использовать рекурсию. Использовать цикл запрещено. 
Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только не пустой массив.

*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*

```js
f([1,2,3]);
// 1
// 2
// 3
f(1,2,3) // Error: parameter type should be an array
f('Content') // Error: parameter type should be an array
f([]) // Error: parameter can't be an empty
```
*/

function f(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('parameter type should be an array');
		return;
	}

	if (arr.length == 0) {
		throw new Error('parameter can\'t be an empty');
		return;
	}

	if (arr.length > 1) {
		console.log(arr.splice(0, 1).toString());
		f(arr);
	} else {
		console.log(arr[0]);
	}
}

f([1,2,3]);
