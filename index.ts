// er um pedido... Os pedidos devem cada um ter um numero do pedido(id) - randomico ou incremental assim como os Itens
// Poder adicionar Itens ao pedido...
// Itens contém - id, Categoria, description e preço
// os Itens adicionados devem conter um id - Seram numeros gerados automaticamente de Randomica ou Incremental

// Poder pegar o subtotal do pedido

// poder pegar as taxas

// Poder pegar o total

// Crie as classes Beer, Cigar, Eletronic, Water - Lembrando que agua é um item, mas não tem taxa... 
// mas os outros itens tem taxas... Coloque qualquer taxas para esses itens, o valor n importa!
interface ItenDTO{

}

class Item implements ItenDTO{
    id : string
    categoria:string
    description:string
    price:number
    constructor(categoria:string,description:string,price:number){
            this.id = `${Math.floor(Math.random()* 100000)}`
            this.categoria = categoria
            this.description = description
            this.price = price
    } 
        }
abstract class IntenTax extends Item{
    tax:number 
    constructor(categoria:string,description:string,price:number,tax:number){
        super(categoria,description,price)
            this.tax = tax
            
        }
        CalTax(): number {
            return this.price * this.getTax()
            
        }
        abstract getTax(): number
        
 }
abstract class Beer extends IntenTax{
     constructor(categoria:string,description:string,price:number,tax:number){
        super(categoria,description,price,tax)
     }
     getTax(): number {
         return 1
     }
 }
 
abstract class Cigarette extends IntenTax{
    constructor(categoria:string,description:string,price:number,tax:number){
        super(categoria,description,price,tax)
     }
     getTax(): number {
        return 77
    }
}
abstract class Eletronic extends IntenTax{
    constructor(categoria:string,description:string,price:number,tax:number){
        super(categoria,description,price,tax)
     }
     getTax(): number {
        return 2
    }
}
abstract class Water extends Item{
    constructor(categoria:string,description:string,price:number,){
        super(categoria,description,price)
     }
}
class Order {
    
}