import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services.service';
import { Recipes } from '../recipes.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipeid: any;
  loadedrecipe!: Recipes;
  recipes!: Recipes[];

  constructor(
    private activetedroute: ActivatedRoute,
    private service: ServicesService,
    private route: Router,
    private alertCtl: AlertController
  ) {}

  ngOnInit() {
    this.activetedroute.paramMap.subscribe((params) => {
      if (!params.has('recipeId')) {
        return;
      }
      this.recipeid = params.get('recipeId');
    });
    this.loadedrecipe = this.service.getRecipe(this.recipeid);
  }

  deleteRecipe() {
    this.alertCtl.create({
      header: 'Etes-vous sur ?',
      message: 'Voulez-vous vraiment supprimer cette recette ?',
      buttons: [
        { 
          text: 'Retour', 
          role: 'Retour' 
        }, 
        { 
          text: 'supprimer',
          handler : () =>  {this.service.OnDeleteRecipe(this.loadedrecipe);
          this.route.navigate(['/recipes']);}
        }
        ],
    }).then(alert => alert.present())

   
  }
}
