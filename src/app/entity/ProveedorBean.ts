class ProveedorBean {
  id: number;
  direccion: string;
  telefono: string;
  email: string;
  cod_poblacion: number;
  constructor(
    id: number,
    direccion: string,
    telefono: string,
    email: string,
    cod_poblacion: number
  ) {
    this.id = id;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
    this.cod_poblacion = cod_poblacion;
  }
}
