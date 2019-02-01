import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})
export class ConfigService {
  constructor() { }

  private _api: string = "http://localhost:8081/fincaV1.server/";

  public get api(): string {
    return this._api;
  }

  public get header(): Object {
    const httpOptions = {
      withCredentials: true
    };
    return httpOptions;
  }

  formatoFechaDatePicker: any = {
    firstDayOfWeek: 1,
    dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
    dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
    dayNamesMin: [ "D","L","M","X","J","V","S" ],
    monthNames: [ "enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre" ],
    monthNamesShort: [ "ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic" ],
    today: 'Hoy',
    clear: 'Borrar',
    dateFormat: 'dd/mm/yy'
};
}
