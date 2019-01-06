class PoblacionBean {
  cod_postal: number;
  descripcion: string;
  provincia: ProvinciaBean;
  constructor(cod_postal: number, descripcion: string, provincia: ProvinciaBean) {
    this.cod_postal = cod_postal;
    this.descripcion = descripcion;
    this.provincia = provincia;
  }
}
