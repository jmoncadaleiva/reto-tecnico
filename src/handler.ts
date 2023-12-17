import {
    Context,
    APIGatewayProxyStructuredResultV2,
    APIGatewayProxyEventV2,
    Handler,
  } from "aws-lambda";
  import { PlanetController } from './app/controllers/planet';

  const planetController = new PlanetController();
  
  export const getAllPlanets: Handler = async (_event: APIGatewayProxyEventV2, _context: Context): Promise<APIGatewayProxyStructuredResultV2> => {
    return await planetController.getAll(_event, _context)
  };

  export const getPlanet: Handler = async (_event: APIGatewayProxyEventV2, _context: Context): Promise<APIGatewayProxyStructuredResultV2> => {
    return await planetController.get(_event, _context)
  };