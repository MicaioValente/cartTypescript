import ItemDTO from '../items/item'

export default interface OrderDTO {
  code: string
  items: ItemDTO[]
}