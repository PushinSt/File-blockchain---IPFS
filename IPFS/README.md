Пример как работать с сетью IPFS  

версия ноды
nvm use 18.12.0


Пример как работать с IPFS

1. nvm use 18.12.0
2. npm i
3. node index.js

Далее можно отправлять запросы через Postman  
Примеры запросов:

Post запрос  
http://localhost:3000/getFile/  
Body:  
{  
		"path": "message.txt",  
		"content": "postman says whassup!"  
}  
path - Название файла (Файл должен находиться в папке IPFS/files/send)  
Content - Содержимое файла (опция)  
Если файл по пути path сущетвует, то он загрузится в сеть IPFS. Если файла не сущетмвует, то создаться новый с содержимым, которое указано в content.  

Get запрос  
http://localhost:3000/getFile/$name/$cid  
name - имя файла  
cid - cid файла в сети IPFS  
http://localhost:3000/getFile/nameFile.jpg/QmWyWr6BQXox7t57xsUKWkPoyKFEBiQgSjhBruxMtUE4YKK  
По итогу файл загружается в папку IPFS/files/get  
