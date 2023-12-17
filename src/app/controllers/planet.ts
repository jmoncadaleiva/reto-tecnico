import { Context } from 'aws-lambda';
import { PlanetService } from '../services/planet';
import { TranslateController } from './translator';

export class PlanetController extends PlanetService {

    private translatorController = new TranslateController()
    
    async getAll(event: any, context?: Context) {
        const response = await this.getPlanets()
        response.results = this.translatorController.translateArray(response.results)
        return {
            statusCode: 200,
            body: JSON.stringify(response),
          };
    }

    async get(event: any, context?: Context) {
        const planetId = event.pathParameters.id
        const response = await this.getPlanet(planetId)
        const translatedObject = this.translatorController.translateObject(response)
        return {
            statusCode: 200,
            body: JSON.stringify(translatedObject),
          };
    }
}