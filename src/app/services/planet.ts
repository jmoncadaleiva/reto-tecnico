import { PaginatedResponse } from "../types/common";
import { BaseService } from "./base";

export class PlanetService extends BaseService {

  protected async getPlanets () {
    const response = await this.baseFetch('https://swapi.py4e.com/api/planets/');
    return response as Promise<PaginatedResponse>
  }

  protected async getPlanet (id: number) {
    const response = await this.baseFetch(`https://swapi.py4e.com/api/planets/${id}`);
    return response
  }

}