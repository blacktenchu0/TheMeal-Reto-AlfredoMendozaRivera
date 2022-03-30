export class Categoria {
  strCategory?: string;
}

export class Area {
  strArea?: string;
}

export class Ingrediente {
  idIngredient?: string;
  strDescription?: string;
  strIngredient?: string;
  strType?: string;
}

export interface ResponseCategorias{
  meals?: Categoria[];
}

export interface ResponseAreas{
  meals?: Area[];
}

export interface ResponseIngredientes{
  meals?: Ingrediente[];
}
