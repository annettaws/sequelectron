import express from "express";
//import fs from "fs";
import bodyParser from "body-parser";

/*
  body-parser: Parse incoming request bodies in a middleware before your handlers, 
  available under the req.body property.
*/

/*const routeFiles = fs
  .readdirSync(__dirname + "\\..\\src\\server\\src\\routes\\")
  .filter(
    (file) => file.endsWith(".js")
  );
  console.log(routeFiles)*/
const routeFiles = ["address.routes.js", "login.routes.js", "user.routes.js"];

let server;
let routes = [];

const expressService = {
  init: async () => {
    try {
      /*
        Loading routes automatically
      */
      for (const file of routeFiles) {
        const route = await import(`../routes/${file}`);
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
