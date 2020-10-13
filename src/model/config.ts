import mysql, { Pool } from "mysql2";
export class Config {
  private static cnn: Pool;
  //ya me da la conexion pero envuelta en una promesa
  static getConexion() {
    this.cnn = mysql.createPool({
      database: "angular_bd",
      user: "root",
      password: "",
      connectionLimit: 10,
    });

    return this.cnn.promise();
  }
}
