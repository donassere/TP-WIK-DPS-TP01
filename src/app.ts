import express from "express";
import * as http from "http";
import { RoutesConfig } from "./routes.config";
import { ApiRoutes } from "./apiRoutes";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PING_LISTEN_PORT || 8080;
/* "start": "tsc && PING_LISTEN_PORT=8686 node ./build/app.js", <= in tsconfig scripts but it doesnt work */ 

const routes: Array<RoutesConfig> = [];

app.use(express.json());
routes.push(new ApiRoutes(app));

app.get("/ping", (req: express.Request, res: express.Response) => {
    const os = require('os');
    console.log(os.hostname());
    res.status(200).send(`GET Request successful!`);
    
  });

app.get("*", (req: express.Request, res: express.Response) => {
  res.statusCode = 404;
  res.end()
});

server.listen(port, () => { 
  console.log(`Server running locally at port: ${port}`);
});