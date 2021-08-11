import Item from './item'



export default class Water extends Item {
    constructor(description: string, price: number) {
      super('water', description, price)
    }
  }