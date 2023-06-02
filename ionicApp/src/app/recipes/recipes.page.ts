import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipes[] = [
    {
      id: "r1",
      title: "Boulettes de viande",
      imageurl: "https://images.pexels.com/photos/12720645/pexels-photo-12720645.jpeg?auto=compress&cs=tinysrgb&w=600",
      ingredients:["viande haché", "spaghetti", "tomate"]
    },
    {
      id: "r2",
      title: "Salade viennoise",
      imageurl: "https://images.pexels.com/photos/16854489/pexels-photo-16854489/free-photo-of-nourriture-assiette-salade-tomates.jpeg?auto=compress&cs=tinysrgb&w=600",
      ingredients:["Salade", "avocat", "tomate"]
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
