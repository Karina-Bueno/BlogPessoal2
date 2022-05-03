import { Tema } from "./Tema"
import { Usuario } from "./Usuario"

export class Postagem {
  public id: number
  public titulo: string
  public texto: string
  public data: Date
  public usuarios: Usuario //importando do Usuario.ts
  public tema: Tema //importando do Tema.ts
}