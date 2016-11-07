## Learn JavaScript. Lesson 6

### 1. listarray.js
* function arrayToList(array)  
 Функция принимает на вход массив из n-элементов и создает список вида:  
 {   value: 1,   rest: {     value: 2,     rest: {       value: 3,       rest: null     }   } }
* function listToArray(list)  
 Функция принимает на вход список и создает массив
* function prepend(element)  
 Функция принимает на вход число и создает объект с value равным element и rest равным New Object()
* function nth(list, num)  
 Функция принимает на вход список и уровень глубины и возвращает Object.value для заданной глубины

### 2. reversed.js
* reverseArray(array)  
 Функция принимает на вход массив и создает новый массив с обратным порядком элементов
* reverseArrayInPlace(array)  
 Функция принимает на вход массив и изменяет в нем порядок элементов на обратный

### 3. pick.js
* pick(obj, keys)  
 Функция принимает на вход объект и массив из ключей(свойств) и осуществляет поиск существующих ключей(свойств) в заданном объекте
