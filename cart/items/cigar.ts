import TaxItem from './taxItem'



export default class Cigar extends TaxItem {
    constructor(description: string, price: number) {
      super('cigar', description, price)
    }
  
    getTax(date: Date): number {
      return 0.1
    }
  }