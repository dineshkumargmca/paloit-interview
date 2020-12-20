export class RecipeModel {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export class RecipeResponseModel {
    results: Array<RecipeModel>;
    offset: number;
    number: number;
    totalResults: number;
}