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
  comunidad: ComunidadBean;
  email: string;
  telefono: string;
  tipovecino: TipovecinoBean;
  poblacion: PoblacionBean;
  login: string;
  pass: string;
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
    comunidad: ComunidadBean,
    email: string,
    telefono: string,
    tipovecino: TipovecinoBean,
    poblacion: PoblacionBean,
    login: string,
    pass: string
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
    this.comunidad = comunidad;
    this.email = email;
    this.telefono = telefono;
    this.tipovecino = tipovecino;
    this.poblacion = poblacion;
    this.login = login;
    this.pass = pass;
  }
}
