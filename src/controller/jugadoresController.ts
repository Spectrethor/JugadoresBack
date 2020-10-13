import { JugadoresDao } from "./../model/jugadoresDao";
import { JugadoresEntities } from "./../Entities/jugadoresEntities";
import { Request, Response } from "express";
export class JugadoresController {
  private db: JugadoresDao;
  constructor() {
    this.db = new JugadoresDao();
  }

  async insertarJugador(req: Request, res: Response) {
    const jugadores = new JugadoresEntities();
    jugadores.setNombreCompletos(req.body.nombre);
    jugadores.setEdad(req.body.edad);
    jugadores.setEquipo(req.body.equipo);
    jugadores.setPais(req.body.pais);
    jugadores.setPosicion(req.body.posicion);
    console.log(req.body);

    try {
      const response = await this.db.insertarJugador(jugadores);
      res.json({
        code: 200,
        message: "Se inserto la cantidad de filas" + response,
      });
    } catch (error) {
      res.json({ code: 500, message: error });
    }
  }

  async editarJugador(req: Request, res: Response) {
    const jugadores = new JugadoresEntities();
    jugadores.setCodjuga(parseInt(req.params.codjuga));
    jugadores.setNombreCompletos(req.body.nombre);
    jugadores.setEdad(req.body.edad);
    jugadores.setEquipo(req.body.equipo);
    jugadores.setPais(req.body.pais);
    jugadores.setPosicion(req.body.posicion);
    try {
      const response: number = await this.db.editarJugador(jugadores);
      res.json({ code: 200, message: response });
    } catch (error) {
      res.json({ code: 500, result: error });
    }
  }

  async eliminarJugador(req: Request, res: Response) {
    const jugadores = new JugadoresEntities();
    jugadores.setCodjuga(parseInt(req.params.codjuga));
    try {
      const response: number = await this.db.editarJugador(jugadores);
      res.json({ code: 200, message: response });
    } catch (error) {
      res.json({ code: 500, result: error });
    }
  }

  async mostrarJugador(req: Request, res: Response) {
    try {
      const response = await this.db.mostrarJugadores();
      res.json({ code: 200, list: response });
    } catch (error) {
      res.json({ code: 500, message: error });
    }
  }

  async jugadoresGet(req: Request, res: Response) {
    try {
      const jugadores = new JugadoresEntities();
      jugadores.setCodjuga(parseInt(req.params.codjuga));
      const response = await this.db.jugadoresGet(jugadores);
      res.json({ code: 200, list: response });
    } catch (error) {
      res.json({ code: 500, message: error });
    }
  }
}
