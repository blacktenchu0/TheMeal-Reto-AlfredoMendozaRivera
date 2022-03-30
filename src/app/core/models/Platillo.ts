export class Platillo {
  idMeal?: String;
  strArea?: String;
  strCategory?: String;
  strIngredient1?: String;
  strIngredient2?: String;
  strIngredient3?: String;
  strIngredient4?: String;
  strIngredient5?: String;
  strIngredient6?: String;
  strIngredient7?: String;
  strIngredient8?: String;
  strIngredient9?: String;
  strIngredient10?: String;
  strIngredient11?: String;
  strIngredient12?: String;
  strIngredient13?: String;
  strIngredient14?: String;
  strIngredient15?: String;
  strIngredient16?: String;
  strIngredient17?: String;
  strIngredient18?: String;
  strIngredient19?: String;
  strIngredient20?: String;
  strInstructions?: String;
  strMeal?: String;
  strMealThumb?: String;
  strMeasure1?: String;
  strMeasure2?: String;
  strMeasure3?: String;
  strMeasure4?: String;
  strMeasure5?: String;
  strMeasure6?: String;
  strMeasure7?: String;
  strMeasure8?: String;
  strMeasure9?: String;
  strMeasure10?: String;
  strMeasure11?: String;
  strMeasure12?: String;
  strMeasure13?: String;
  strMeasure14?: String;
  strMeasure15?: String;
  strMeasure16?: String;
  strMeasure17?: String;
  strMeasure18?: String;
  strMeasure19?: String;
  strMeasure20?: String;
  strSource?: String;
  strTags?: String;
  strYoutube?: String;
  strCreativeCommonsConfirmed: any;
  strDrinkAlternate: any;
  strImageSource: any;
}

export interface ResponsePlatilloRandom {
  meals?: Platillo[];
}

export interface ResponsePlatilloById {
  meals?: Platillo[];
}

export interface ResponsePlatillo {
  meals?: Platillo[];
}

export interface ResponsePlatillosByArea {
  meals?: Platillo[];
}

export interface ResponsePlatillosByCategoria {
  meals?: Platillo[];
}

export interface ResponsePlatillosByIngrediente {
  meals?: Platillo[];
}
