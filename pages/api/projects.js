import fs from 'fs';
import { v4 } from "uuid";
import nextConnect from 'next-connect';
import multer from 'multer';


const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Returns a Multer instance that provides several methods for generating 
// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploaded-images/projects',
    filename: (req, file, cb) => cb(null, v4() + file.originalname.substring(file.originalname.lastIndexOf("."))),
  }),
})


// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.fields([
  { name: 'mainImage' },
  { name: 'moreImages' }
]);;

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);

// Process a POST request
apiRoute.post((req, res) => {
  const filePath = 'projects.json';
  const projects = [];
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
    } else {
      projects.push(...JSON.parse(data))
      const { title, description, clients_word } = req.body;
      const jsonObj = {
        title,
        description,
        mainImage: "/uploaded-images/projects/" + req.files.mainImage[0].filename,
        moreImages: req.files.moreImages.map(file => "/uploaded-images/projects/" + file.filename),
        clients_word
      };

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
});
apiRoute.get((req, res) => {
  const filePath = 'projects.json';
  const projects = [];
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.setHeader('Content-Type', 'text/plain');
      res.status(200).send(data);
    }
  });
})
apiRoute.use((req, res) => {
  res.status(405).json({ error: 'Method Not Allowed' });
})
export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
// export default function handler(req, res) {
//   const filePath = 'projects.json';

//   const projects = [];

//   if (req.method === 'POST') {

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//       if (err) {
//         console.error(`Error reading file: ${err}`);
//       } else {
//         projects.push(...JSON.parse(data))
//         const { title, description, mainImage, moreImages, clients_word } = req.body;
//         const content = `"id:${v4()}\ntitle:${title}\ndescription:${description}\nmainImage:${mainImage}\nmoreImages:${moreImages}\nclients_word:${clients_word}"`;
//         const jsonStr = `{${content.replace(/:/g, '":"').replace(/\n/g, '","')}}`;
//         const jsonObj = JSON.parse(jsonStr);

//         projects.push(jsonObj)

//         fs.writeFile(filePath, JSON.stringify(projects), (err) => {
//           if (err) {
//             console.error(`Error writing file: ${err}`);
//             res.status(500).json({ error: 'Internal Server Error' });
//           } else {
//             fs.readFile(filePath, 'utf-8', (err, data) => {
//               if (err) {
//                 console.error(`Error reading file: ${err}`);
//                 res.status(500).json({ error: 'Internal Server Error' });
//               } else {
//                 res.setHeader('Content-Type', 'text/plain');
//                 res.status(200).send(data);
//               }
//             });
//           }
//         });
//       }
//     });

//   } else if (req.method === 'GET') {
//     fs.readFile(filePath, 'utf-8', (err, data) => {
//       if (err) {
//         console.error(`Error reading file: ${err}`);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.setHeader('Content-Type', 'text/plain');
//         res.status(200).send(data);
//       }
//     });
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }

// }
