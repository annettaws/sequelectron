import express from "express";
import bodyParser from "body-parser";

/*
  body-parser: Parse incoming request bodies in a middleware before your handlers, 
  available under the req.body property.
*/
const fs = require('fs');
const path = require('path')

const base = path.resolve('.');

const arrayOfFiles = fs.readdirSync("src/routes").filter(
  (file) => file.endsWith(".routes.js")
)

let server;
let routes = [];

const expressService = {
  init: async () => {
    try {
      /*
        Loading routes automatically
      */
      for (const file of arrayOfFiles) {
        const route = await import(`${base}/src/routes/${file}`);
        // console.log('route', `${base}/src/routes/${file}`)
        const routeName = Object.keys(route)[0];
        routes.push(route[routeName]);
      }
      server = express();
      server.use(bodyParser.json());
      server.use(routes);

      server.get("/quit", function(res) {
        res.send("[EXPRESS] Express closed");
        server.close();
      });

      server.listen(3000, () => {
        console.log("[EXPRESS] Express initialized");
      });
    } catch (error) {
      console.log("[EXPRESS] Error during express service initialization");
      throw error;
    }
  }
};

export default expressService;
