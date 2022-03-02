import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class recipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
        'This is simply a gourmet', 
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Meat',1),
            new Ingredient('Fries',20),
        ]
        ),
        new Recipe('Another Test Recipe', 
        'This is simply a test', 
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Root',1),
            new Ingredient('Beans',20),
        ])
      ];
    constructor(private sls : ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipeToShoppingList(ingredients: Ingredient[]){
        this.sls.addRecipeIngredients(ingredients);
    }
}