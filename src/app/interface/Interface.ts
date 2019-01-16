interface ComunidadInterface {
  id: number;
  nombre: string;
  direccion: string;
  nif: string;
  iban: string;
  sufijo: string;
  poblacion: PoblacionBean;
}

interface FacturaProveedorInterface {
  fecha_registro: Date;
  proveedor: ProveedorBean;
  tipofactura: TipofacturaBean;
  base_imponible0: number;
  base_imponible1: number;
  base_imponible2: number;
  base_imponible3: number;
  tipo_iva1: number;
  tipo_iva2: number;
  tipo_iva3: number;
  cuota_iva1: number;
  cuota_iva2: number;
  cuota_iva3: number;
  total: number;
  comunidad: ComunidadBean;
  num_factura: string;
  cobrado: string;
}

interface IncidenciaInterface {
  id: number;
  vecino: VecinoBean;
  descripcion: String;
  fecha_creacion: Date;
  atendido: String;
}

interface PoblacionInterface {
  cod_postal: number;
  descripcion: string;
  provincia: ProvinciaBean;
}

interface ProveedorInterface {
  id: number;
  direccion: string;
  telefono: string;
  email: string;
  poblacion: PoblacionBean;
}

interface ProvinciaInterface {
  cod_provincia: number;
  descripcion: string;
}

interface ReciboInterface {
  id: number;
  fecha_emision: Date;
  num_registro: number;
  vecino: VecinoBean;
  descripcion: string;
  importe: number;
  fecha_cobro: Date;
}

interface TipofacturaInterface {
  id: number;
  descripcion: string;
}

interface TipovecinoInterface {
  id: number;
  descripcion: string;
}

interface VecinoInterface {
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
  id_tipovecino: TipovecinoBean;
  poblacion: PoblacionBean;
  login: string;
  pass: string;
}

interface ErrorInterface {
  status: number;
  msg: string;
}

interface TareaInterface{
  id: number;
  fecha: Date;
  descripcion: String;
}