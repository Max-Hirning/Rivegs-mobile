export interface IRecipeForm {
  title: string;
  typeId: string;
  description: string;
  steps: IStepIngredient[];
  ingredients: IStepIngredient[];
}

export interface IStepIngredient {
  _id: string;
  value: string;
  bold: boolean;
  italic: boolean;
  underlined: boolean;
}
