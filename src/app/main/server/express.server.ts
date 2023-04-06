import { serverEnv } from "../../envs/server.envs";
import { createApp } from "../config/express.config";

export class Server {
  public static run() {
    const app = createApp();
    app.listen(serverEnv.port, () => console.log("Server is running."));
  }
}
