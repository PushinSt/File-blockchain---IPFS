const express = require('express');
const ipfsClient = require('ipfs-http-client');
const fs = require('fs');

const node = ipfsClient.create() // the default API address http://localhost:5001

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
	return res.send('Welcome to my IPFS app');
});


/*
Body:
{
		"path": "message.txt",
		"content": "postman says whassup!"
}
path - Название файла
Content - Содержимое файла
*/
app.post('/addFile', async (req, res) => {
	console.log(req.body);
	const fileHash = await addFile(req.body);
	return res.send(`https://gateway.ipfs.io/ipfs/${fileHash.cid}`);
});


/*
Скачать файл по cid

http://localhost:3000/getFile/nameFile.jpg/QmWyWr6BQXox7t57xsUKWkPoyKFEBiQgSjhBruxMtUE4YKK
*/
app.get("/getFile/:path/:cidFile", async (req, res) => {
	console.log(req.params["path"], req.params["cidFile"]);
	getFile({ path:req.params["path"], cid:req.params["cidFile"] });
	return res.send(`https://gateway.ipfs.io/ipfs/${req.params["cidFile"]}`);
});



const addFile = async ({ path, content }) => {
	var file;
	try {
		const contentFile = fs.readFileSync("./files/send/" + path);
		file = { path: path, content: Buffer.from(contentFile) };
	} catch (err) {
		file = { path: path, content: Buffer.from(content) };
	}
	const filesAdded = await node.add(file);
	console.log(filesAdded.cid);
	return filesAdded;
}

const getFile = async ( {path, cid} ) => {
	const pathFile = "./files/get/" + path;
	const stream = node.cat(cid)
  for await (const chunk of stream) {
		fs.appendFileSync(pathFile, chunk);
  }
	console.log("Прочитан файл: " + cid + ", записан в файл: " + pathFile);
}

app.listen(3000, () => {
	console.log('Server running on port 3000');
});