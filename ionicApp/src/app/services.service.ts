import { Injectable } from '@angular/core';
import { Recipes } from './recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private recipes: Recipes[] = [
    {
      id: "r1",
      title: "Boulettes de viande",
      imageurl: "https://images.pexels.com/photos/12720645/pexels-photo-12720645.jpeg?auto=compress&cs=tinysrgb&w=600",
      ingredients:["viande haché", "spaghetti", "tomate", "ail"]
    },
    {
      id: "r2",
      title: "Salade viennoise",
      imageurl: "https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ingredients:["Salade", "avocat", "tomate", "oignon", "nugette"]
    },
    {
      id: "r3",
      title: "Poulet braisé",
      imageurl: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ingredients:["Poulet", "huile d'olive", "oignon fris"]
    }, {
      id: "r4",
      title: "Brochette boeuf",
      imageurl: "https://images.pexels.com/photos/12326183/pexels-photo-12326183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ingredients:["Boeuf", "huile d'olive", "poivron", "oignon", "aubergine"]
    },
  ];
  constructor() { }

//create a copy of the array [...  ]
  getAllservice(){
    return [...this.recipes];
  }

  //get one recipe by id
  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => recipe.id === recipeId)};

  }
  OnDeleteRecipe(recipeloaded: Recipes){
   this.recipes = this.recipes.filter(recipe => {
    return recipe.id !== recipeloaded.id
   })
  }
}
