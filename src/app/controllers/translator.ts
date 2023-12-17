import es from '../assets/languages/es';

export class TranslateController {
    
    translateArray (data: any) {
        return data.map((item: object) => {
            return this.translateObject(item)
        })
    }

    translateObject (data: any) {
        const tempData: any = {}
        Object.keys(data).forEach(key => {
            const translatedKey = es[key as keyof typeof es]
            tempData[translatedKey ? translatedKey: key] = data[key]
        })
        return tempData
    }
}