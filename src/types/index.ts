export interface IFormDataPart {
  headers: {
    [key: string]: string;
  };
  string: string;
  fieldName: string;
}
