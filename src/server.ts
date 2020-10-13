import express, { Application } from "express";
import cors from "cors";
import { JugadoresRouter } from "./routes/jugadores.routes";
export class Server {
  private app: Application;

  constructor(port: number) {
    this.app = express();
    this.middlewares();
    this.listening(port);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(new JugadoresRouter().rutasJugador());
  }

  listening(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}
