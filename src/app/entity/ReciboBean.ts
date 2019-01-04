class ReciboBean {
  id: number;
  fecha_emision: Date;
  num_registro: number;
  id_vecino: number;
  descripcion: string;
  importe: number;
  fecha_cobro: Date;

  constructor(
    id: number,
    fecha_emision: Date,
    num_registro: number,
    id_vecino: number,
    descripcion: string,
    importe: number,
    fecha_cobro: Date
  ) {
    this.id = id;
    this.fecha_emision = fecha_emision;
    this.num_registro = num_registro;
    this.id_vecino = id_vecino;
    this.descripcion = descripcion;
    this.importe = importe;
    this.fecha_cobro = fecha_cobro;
  }
}
