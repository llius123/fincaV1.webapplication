class IncidenciaBean {
  id: number;
  id_vecino: number;
  descripcion: String;
  fecha_creacion: Date;
  atendido: String;

  constructor(
    id: number,
    id_vecino: number,
    descripcion: String,
    fecha_creacion: Date,
    atendido: String
  ) {
    this.id = id;
    this.id_vecino = id_vecino;
    this.descripcion = descripcion;
    this.fecha_creacion = fecha_creacion;
    this.atendido = atendido;
  }
}
