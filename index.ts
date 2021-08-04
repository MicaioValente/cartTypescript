//Crie as classes Beer, Cigar, Eletronic, Water - Lembrando que agua é um item, mas não tem taxa... 
//mas os outros itens tem taxas... Coloque qualquer taxas para esses itens, o valor n importa!//


interface ItemDTO{
    name: string
    validity: string
    
}



class Cigarette implements ItemDTO{
    name: string
    validity: string
    tax : number
    minimunAge: number
    constructor( name: string,validity: string,minimunAge: number,tax : number){
        this.name = name
        this.validity= validity
        this.minimunAge = minimunAge
        this.tax = tax
    }
}
class Beer implements ItemDTO{
    name: string
    validity: string
    minimunAge: number
    tax : number

    constructor( name: string,validity: string,minimunAge: number,tax : number){
        this.name = name
        this.validity= validity
        this.minimunAge = minimunAge
        this.tax = tax
    }
}
class Eletronic implements ItemDTO{
    name: string
    validity: string
    tax : number
    constructor( name: string,validity: string,tax : number){
        this.name = name
        this.validity= validity
        this.tax = tax
    }
}
class Watter implements ItemDTO{
    name: string
    validity: string
    mineral: boolean
    constructor( name: string,validity: string,mineral: boolean){
        this.name = name
        this.validity = validity
        this.mineral = mineral
        
}























// abstract class Pessoa {
//     protected nome: string
//     protected idade: number
//     protected cidade: string
  
//     constructor(nome: string, idade: number, cidade: string) {
//       this.nome = nome
//       this.idade = idade
//       this.cidade = cidade
//     }
  
//     abstract exibirDados(): void
//   }
  
//   interface Veiculo {
//     tipo: string
//     marca: string
//     modelo: string
//     ano: number
//   }
  
//   class Motorista extends Pessoa {
//     private veiculo: Veiculo
  
//     constructor(nome: string, idade: number, cidade: string, carteiraDeMotorista: string, veiculo: Veiculo) {
//       super(nome, idade, cidade)
//       this.veiculo = veiculo
//     }
  
//     exibirDados() {
//       console.log(this.nome, this.idade)
//     }
//   }
  
//   const zezinDeMaua = new Motorista('Ze Da Silva', 200, 'Mauá', 'Z', {
//     tipo: 'Carroça',
//     marca: 'Potrancas',
//     modelo: 'HIGH PONEI TURBO CONFORT LINE TSI AWD',
// ano: 1911
//   })
  
  