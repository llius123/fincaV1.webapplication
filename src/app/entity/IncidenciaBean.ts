class IncidenciaBean {
  id: number;
  vecino: VecinoBean;
  descripcion: String;
  fecha_creacion: Date;
  atendido: String;

  constructor(
    id: number,
    vecino: VecinoBean,
    descripcion: String,
    fecha_creacion: Date,
    atendido: String
  ) {
    this.id = id;
    this.vecino = vecino;
    this.descripcion = descripcion;
    this.fecha_creacion = fecha_creacion;
    this.atendido = atendido;
  }
}
