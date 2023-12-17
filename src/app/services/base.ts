import fetch from 'node-fetch'

export class BaseService {

  protected async baseFetch (url: string): Promise<any> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw ('Network error');
      }

      return await response.json();
    } catch (err) {
      throw err;
    }
  }
}