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
}
