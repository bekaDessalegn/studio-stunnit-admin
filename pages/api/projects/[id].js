import fs from 'fs';

export default function handler(req, res) {
    const filePath = 'projects.json';
    const { id } = req.query;

    const projects = [];

   if (req.method === 'GET') {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err}`);
          res.status(500).json({ error: 'Internal Server Error' });
        } else {

          const jsonData = JSON.parse(data);
          const index = jsonData.findIndex((item) => item.id === id);

          const project = jsonData[index];

          if (index === -1) {
            console.error(`Item with ID ${itemId} not found!`);
            res.status(404).json({ error: '404 Not Found' });
          } else {
            res.setHeader('Content-Type', 'text/plain');
            res.status(200).send(project);
          }
        }
      });
} else if (req.method === 'PATCH') {
  
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const jsonData = JSON.parse(data);
          const index = jsonData.findIndex((item) => item.id === id);

          if (index === -1) {
            console.error(`Item with ID ${itemId} not found!`);
            res.status(404).json({ error: '404 Not Found' });
          } else {
            const { title, description, mainImage, moreImages, clients_word } = req.body;
            const content = `"id:${id}\ntitle:${title}\ndescription:${description}\nmainImage:${mainImage}\nmoreImages:${moreImages}\nclients_word:${clients_word}"`;
            const jsonStr = `{${content.replace(/:/g, '":"').replace(/\n/g, '","')}}`;
            const jsonObj = JSON.parse(jsonStr);

            jsonData[index] = jsonObj;

            fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
              if (err) {
                console.error(err);
              } else {
                console.log('Item updated successfully!');
                fs.readFile(filePath, 'utf-8', (err, data) => {
                    if (err) {
                      console.error(`Error reading file: ${err}`);
                      res.status(500).json({ error: 'Internal Server Error' });
                    } else {
            
                      const jsonData = JSON.parse(data);
                      const index = jsonData.findIndex((item) => item.id === id);
            
                      const project = jsonData[index];
            
                      if (index === -1) {
                        console.error(`Item with ID ${itemId} not found!`);
                        res.status(404).json({ error: '404 Not Found' });
                      } else {
                        res.setHeader('Content-Type', 'text/plain');
                        res.status(200).send(project);
                      }
                    }
                  });
              }
            });
          }
        }
      });
} else if (req.method === 'DELETE') {
  
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const jsonData = JSON.parse(data);
        const index = jsonData.findIndex((item) => item.id === id);

        if (index === -1) {
          console.error(`Item with ID ${itemId} not found!`);
          res.status(404).json({ error: '404 Not Found' });
        } else {

            jsonData.splice(index, 1);

          fs.writeFile(filePath, JSON.stringify(jsonData), (err) => {
            if (err) {
              console.error(err);
            } else {
              console.log('Item deleted successfully!');
              res.setHeader('Content-Type', 'text/plain');
              res.status(200).send("Item deleted successfully!");
            }
          });
        }
      }
    });
} else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }

}
