class VecinoBean {
  id: number;
  nombre: string;
  direccion: string;
  numero: string;
  nif: string;
  iban: string;
  num_mandato: string;
  fecha_mandato: Date;
  porcentaje_participacion: number;
  id_comunidad: number;
  email: string;
  telefono: string;
  id_tipovecino: number;
  cod_poblacion: number;
  constructor(
    id: number,
    nombre: string,
    direccion: string,
    numero: string,
    nif: string,
    iban: string,
    num_mandato: string,
    fecha_mandato: Date,
    porcentaje_participacion: number,
    id_comunidad: number,
    email: string,
    telefono: string,
    id_tipovecino: number,
    cod_poblacion: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.numero = numero;
    this.nif = nif;
    this.iban = iban;
    this.num_mandato = num_mandato;
    this.fecha_mandato = fecha_mandato;
    this.porcentaje_participacion = porcentaje_participacion;
    this.id_comunidad = id_comunidad;
    this.email = email;
    this.telefono = telefono;
    this.id_tipovecino = id_tipovecino;
    this.cod_poblacion = cod_poblacion;
  }
}
