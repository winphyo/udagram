import express, { Router, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles, generateFileName } from './util/util';
import { write, watchFile } from 'fs';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END @TODO1

  // Get a greeting to a specific person to demonstrate req.query
  app.get("/filteredimage/", (req: Request, res: Response) => {
    let { image_url } = req.query;

    if (!image_url) {
      return res.status(400)
        .send(`image_url is required`);
    }

    var write_url = generateFileName(image_url);

    filterImageFromURL(image_url, write_url).finally(function () {
      console.log("Going to response ")
      var stringout = __dirname + "/util" + write_url;
      res.sendFile(stringout); // Set disposition and send it.

      const testFolder = __dirname + "/util/tmp";
      const fs = require('fs');

      fs.readdir(testFolder, function (err: any, files: any[]) {
        if (err) {
          console.log("Error getting directory information.")
        } else {
          deleteLocalFiles(files);
          // files.forEach(function (file: any) {
          //   console.log(file);
          //   fs.unlinkSync(testFolder + file);
          // })
        }
      })
    });



  });

  // Root Endpoint
  // Displays a simple message to the user
  app.get("/", async (req, res) => {
    res.send("try GET /filteredimage?image_url={{}}")
  });


  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();