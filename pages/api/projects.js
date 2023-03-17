import fs from 'fs';

export default function handler(req, res) {
    const filePath = 'projects.json';

  if (req.method === 'POST') {
    const { title, description, mainImage, moreImages, clients_word } = req.body;
    const content = `"title: ${title}\ndescription: ${description}\nmainImage: ${mainImage}\nmoreImages: ${moreImages}\nclients_word: ${clients_word}"`;
    const jsonStr = `{${content.replace(/:/g, '":"').replace(/\n/g, '","')}}`;
    const jsonObj = JSON.parse(jsonStr);

    fs.writeFile(filePath, JSON.stringify(jsonObj), (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        fs.readFile(filePath, 'utf-8', (err, data) => {
          if (err) {
            console.error(`Error reading file: ${err}`);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            res.setHeader('Content-Type', 'text/plain');
            res.status(200).send(data);
          }
        });
      }
    });
  } else if (req.method === 'GET') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err}`);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {
          res.setHeader('Content-Type', 'text/plain');
          res.status(200).send(data);
        }
      });
} else if (req.method === 'PUT') {
    const newContent = req.body.content;

    fs.writeFile(filePath, newContent, (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(204).end();
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }

}
