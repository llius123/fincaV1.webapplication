interface ComunidadInterface {
  id: number;
  nombre: string;
  direccion: string;
  nif: string;
  iban: string;
  sufijo: string;
  poblacion: PoblacionInterface;
}

interface FacturaProveedorInterface {
  id:number;
  fecha_registro: Date;
  proveedor: ProveedorInterface;
  tipofactura: TipofacturaInterface;
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
  comunidad: ComunidadInterface;
  num_factura: string;
  cobrado: string;
}

interface IncidenciaInterface {
  id: number;
  vecino: VecinoInterface;
  descripcion: String;
  fecha_creacion: Date;
  atendido: String;
}

interface PoblacionInterface {
  id:number;
  cod_postal: number;
  descripcion: string;
  provincia: ProvinciaInterface;
}

interface ProveedorInterface {
  id: number;
  direccion: string;
  telefono: string;
  email: string;
  poblacion: PoblacionInterface;
}

interface ProvinciaInterface {
  id:number;
  cod_provincia: number;
  descripcion: string;
}

interface ReciboInterface {
  id: number;
  fecha_emision: Date;
  num_registro: number;
  vecino: VecinoInterface;
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
  comunidad: ComunidadInterface;
  email: string;
  telefono: string;
  id_tipovecino: TipovecinoInterface;
  poblacion: PoblacionInterface;
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