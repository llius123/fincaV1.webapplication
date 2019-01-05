class FacturaProveedorBean {
  fecha_registro: Date;
  id_proveedor: number;
  id_tipofactura: number;
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
  id_comunidad: number;
  num_factura: string;
  cobrado: string;
  constructor(
    fecha_registro: Date,
    id_proveedor: number,
    id_tipofactura: number,
    base_imponible0: number,
    base_imponible1: number,
    base_imponible2: number,
    base_imponible3: number,
    tipo_iva1: number,
    tipo_iva2: number,
    tipo_iva3: number,
    cuota_iva1: number,
    cuota_iva2: number,
    cuota_iva3: number,
    total: number,
    id_comunidad: number,
    num_factura: string,
    cobrado: string
  ) {
    this.fecha_registro = fecha_registro;
    this.id_proveedor = id_proveedor;
    this.id_tipofactura = id_tipofactura;
    this.base_imponible0 = base_imponible0;
    this.base_imponible1 = base_imponible1;
    this.base_imponible2 = base_imponible2;
    this.base_imponible3 = base_imponible3;
    this.tipo_iva1 = tipo_iva1;
    this.tipo_iva2 = tipo_iva2;
    this.tipo_iva3 = tipo_iva3;
    this.cuota_iva1 = cuota_iva1;
    this.cuota_iva2 = cuota_iva2;
    this.cuota_iva3 = cuota_iva3;
    this.total = total;
    this.id_comunidad = id_comunidad;
    this.num_factura = num_factura;
    this.cobrado = cobrado;
  }
}
