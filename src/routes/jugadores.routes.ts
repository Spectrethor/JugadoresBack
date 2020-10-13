import { JugadoresController } from "./../controller/jugadoresController";
import { Router } from "express";

export class JugadoresRouter {
  private router: Router;
  private jugadorController: JugadoresController;

  constructor() {
    this.router = Router();
    this.jugadorController = new JugadoresController();
  }

  rutasJugador(): Router {
    this.router.get("/jugador", (req, res) => {
      this.jugadorController.mostrarJugador(req, res);
    });
    this.router.get("/jugador/:id", (req, res) => {
      this.jugadorController.jugadoresGet(req, res);
    });

    this.router.post("/jugador", (req, res) => {
      this.jugadorController.insertarJugador(req, res);
    });

    this.router.put("/jugador/editar/:id", (req, res) => {
      this.jugadorController.editarJugador(req, res);
    });

    this.router.delete("/jugador/eliminar/:id", (req, res) => {
      this.jugadorController.eliminarJugador(req, res);
    });
    return this.router;
  }
}
