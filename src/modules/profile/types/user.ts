export interface IUser {
  _id: string;
  login: string;
  email: string;
  avatar: string;
  recipeIds: string[];
  description?: string;
  savedRecipes: string[];
}
