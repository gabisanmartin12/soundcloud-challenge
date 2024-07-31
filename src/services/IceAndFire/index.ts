import { Axios } from "axios";
import IceAndFireHousesService from "./Houses";

export default class IceAndFireService {
  private caller: Axios;
  houses: IceAndFireHousesService;

  constructor(baseURL: string) {
    this.caller = new Axios({
      baseURL,
      transformResponse: (data: string) => JSON.parse(data),
    });

    this.houses = new IceAndFireHousesService(this.caller);
  }
}
