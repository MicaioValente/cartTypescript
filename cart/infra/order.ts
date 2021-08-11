import ItemDTO from '../items/item'
import OrderDTO from '../dto/order'
import TaxItem from '../items/taxItem'

export default class Order implements OrderDTO {
  code: string
  items: ItemDTO[]

  constructor() {
    this.code = `${Math.floor(Math.random() * 100000)}`
    this.items = []
  }

  addItem(item: ItemDTO) {
    this.items.push(item)
  }

  getOrders(): OrderDTO {
    const order = { items: this.items, code: this.code }
    return order
  }

  getSubtotal() {
    let total = 0
    for (const item of this.items) {
      total += item.price
    }
    return total
  }

  getTaxes(date: Date) {
    let taxes = 0
    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTaxes(date)
      }
    }
    return taxes
  }

  getTotal(date: Date) {
    return this.getSubtotal() + this.getTaxes(date)
  }
}
