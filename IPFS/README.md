# Пример как работать с сетью IPFS  

Выполнить:
```
$ nvm use 18.12.0
$ npm i
$ node index.js
```

Далее можно отправлять запросы через Postman  
Примеры запросов:

- Post запрос  
```
http://localhost:3000/addFile/  
Body:  
{  
		"path": "message.txt",  
		"content": "postman says whassup!"  
}  
path - Название файла (Файл должен находиться в папке IPFS/files/send)  
Content - Содержимое файла (опция)  
```
Если файл по пути path существует, то он загрузится в сеть IPFS. Если файла не существует, то создаться новый с содержимым, которое указано в content. 
Отображение файла в сети IPFS после загрузки происходит в течении некоторого времени. У меня этот процесс занимал около 5 минут. 


- Get запрос  
```
http://localhost:3000/getFile/$name/$cid  
name - имя файла  
cid - cid файла в сети IPFS  
http://localhost:3000/getFile/nameFile.jpg/QmWyWr6BQXox7t57xsUKWkPoyKFEBiQgSjhBruxMtUE4YKK  
```
По итогу файл загружается в папку IPFS/files/get  
