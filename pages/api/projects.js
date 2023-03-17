import fs from 'fs';
import { v4 } from "uuid";

export default function handler(req, res) {
    const filePath = 'projects.json';

    const projects = [];

  if (req.method === 'POST') {

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
      } else {
        projects.push(...JSON.parse(data))
        const { title, description, mainImage, moreImages, clients_word } = req.body;
        const content = `"id:${v4()}\ntitle:${title}\ndescription:${description}\nmainImage:${mainImage}\nmoreImages:${moreImages}\nclients_word:${clients_word}"`;
        const jsonStr = `{${content.replace(/:/g, '":"').replace(/\n/g, '","')}}`;
        const jsonObj = JSON.parse(jsonStr);

    projects.push(jsonObj)

    fs.writeFile(filePath, JSON.stringify(projects), (err) => {
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
} else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }

}
