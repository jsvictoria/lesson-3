/*
####Задача 4

Сделайте функцию `f`, которая принимает параметром число от 1 до 7, 
а затем возвращает день недели на русском языке. 
Данная функция должна обьязательно содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.

```js
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number
```
*/

function f(n) {
	if (typeof n === 'number') {
		if (n >= 1 && n <= 7) {
			let day;
			switch (n) {
				case 1: 
					day = 'Воскресенье';
					break;
				case 2: 
					day = 'Понедельник';
					break;
				case 3: 
					day = 'Вторник';
					break;
				case 4: 
					day = 'Среда';
					break;
				case 5: 
					day = 'Четверг';
					break;
				case 6: 
					day = 'Пятница';
					break;
				case 7: 
					day = 'Суббота';
					break;
			}
			return day;
		} else {
			throw new Error('parameter should be in the range of 1 to 7');
		}
	} else {
		throw new Error('parameter type is not a Number');
	}
}

console.log(f(1)); // Воскресенье
console.log(f(2)); // Понедельник
console.log(f(8)); // Error: parameter should be in the range of 1 to 7
console.log(f('1')); // Error: parameter type is not a Number