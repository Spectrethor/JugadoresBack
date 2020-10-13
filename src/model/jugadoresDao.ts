import { Config } from "./config";
import { JugadoresEntities } from "./../Entities/jugadoresEntities";
export class JugadoresDao {
  async insertarJugador(jugador: JugadoresEntities) {
    const sqlInsertar = "call sp_insertarjugador(?,?,?,?,?)";
    const data = [];
    data.push(jugador.getNombreCompletos());
    data.push(jugador.getEdad());
    data.push(jugador.getPosicion());
    data.push(jugador.getEquipo());
    data.push(jugador.getPais());
    try {
      const pool = await Config.getConexion().getConnection();
      const response: any[] = await pool.execute(sqlInsertar, data);
      return response[0].affectedRows;
    } catch (error) {
      return Promise.reject("Error al insertar jugador :" + error);
    }
  }

  async editarJugador(jugador: JugadoresEntities) {
    const sqlEditar = "call sp_actualizarjugadores(?,?,?,?,?,?)";
    const data = [];
    data.push(jugador.getCodjuga());
    data.push(jugador.getNombreCompletos());
    data.push(jugador.getEdad());
    data.push(jugador.getPosicion());
    data.push(jugador.getEquipo());
    data.push(jugador.getPais());
    try {
      const pool = await Config.getConexion().getConnection();
      const response: any[] = await pool.execute(sqlEditar, data);
      console.log(typeof response);
      return response[0].changedRows;
    } catch (error) {
      return Promise.reject("Error al editar jugador :" + error);
    }
  }

  async eliminarJugador(jugador: JugadoresEntities) {
    const sqlElimnar = "call sp_eliminarJugador(?)";
    const data = [];
    data.push(jugador.getCodjuga());
    try {
      const pool = await Config.getConexion().getConnection();
      const response: any[] = await pool.execute(sqlElimnar, data);
      console.log(typeof response);
      return response[0].changedRows;
    } catch (error) {
      return Promise.reject("Error al eliminar jugador :" + error);
    }
  }

  async mostrarJugadores() {
    const sqlmostrarJugador = "SELECT * FROM jugadores";
    try {
      const pool = await Config.getConexion().getConnection();
      const response: any[] = await pool.execute(sqlmostrarJugador);
      return response[0];
    } catch (error) {
      return Promise.reject("Error al mostrar jugador :" + error);
    }
  }

  async jugadoresGet(jugador: JugadoresEntities) {
    const sqlJugadorget = "call sp_jugadorGet(?)";
    try {
      const pool = await Config.getConexion().getConnection();
      const response: any[] = await pool.execute(sqlJugadorget, [
        jugador.getCodjuga(),
      ]);
      console.log("jugadorGet ", typeof response);
      console.log(response);
      return response[0][0];
    } catch (error) {
      return Promise.reject("Error al jugadorGet :" + error);
    }
  }
}
