export class Ingrediente {
  idIngredient?: string;
  strDescription?: string;
  strIngredient?: string;
  strType?: string;
}

export interface ResponseIngredientesPopulares {
  meals?: Ingrediente[];
}
