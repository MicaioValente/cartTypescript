import TaxItem from './taxItem'



export default class Eletronic extends TaxItem {
    constructor(description: string, price: number) {
      super('eletronic', description, price)
    }
  
    getTax(date: Date): number {
      return 0.1
    }
  }