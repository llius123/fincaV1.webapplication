class ComunidadBean {
  id: number;
  nombre: string;
  direccion: string;
  nif: string;
  iban: string;
  sufijo: string;
  cod_poblacion: number;
  constructor(
    id: number,
    nombre: string,
    direccion: string,
    nif: string,
    iban: string,
    sufijo: string,
    cod_poblacion: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.nif = nif;
    this.iban = iban;
    this.sufijo = sufijo;
    this.cod_poblacion = cod_poblacion;
  }
}
