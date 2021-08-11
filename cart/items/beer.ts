import TaxItem from './taxItem'



export default class Beer extends TaxItem {
    constructor(description: string, price: number) {
      super('Beer', description, price)
    }
  
    getTax(date: Date): number {
      return 0.1
    }
  }