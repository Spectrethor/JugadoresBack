export class JugadoresEntities {
  private codjuga: number;
  private nombreCompletos: string;
  private edad: number;
  private posicion: string;
  private equipo: string;
  private pais: string;

  constructor() {
    this.codjuga = 0;
    this.nombreCompletos = "";
    this.edad = 0;
    this.posicion = "";
    this.equipo = "";
    this.pais = "";
  }

  public getCodjuga(): number {
    return this.codjuga;
  }

  public setCodjuga(codjuga: number): void {
    this.codjuga = codjuga;
  }

  public getNombreCompletos(): string {
    return this.nombreCompletos;
  }

  public setNombreCompletos(nombreCompletos: string): void {
    this.nombreCompletos = nombreCompletos;
  }

  public getEdad(): number {
    return this.edad;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public getPosicion(): string {
    return this.posicion;
  }

  public setPosicion(posicion: string): void {
    this.posicion = posicion;
  }

  public getEquipo(): string {
    return this.equipo;
  }

  public setEquipo(equipo: string): void {
    this.equipo = equipo;
  }

  public getPais(): string {
    return this.pais;
  }

  public setPais(pais: string): void {
    this.pais = pais;
  }
}
