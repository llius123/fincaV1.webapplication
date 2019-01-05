class PoblacionBean {
  cod_postal: number;
  descripcion: string;
  cod_provincia: number;
  constructor(cod_postal: number, descripcion: string, cod_provincia: number) {
    this.cod_postal = cod_postal;
    this.descripcion = descripcion;
    this.cod_provincia = cod_provincia;
  }
}
