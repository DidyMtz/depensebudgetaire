import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipes[] = [];

  constructor(private service: ServicesService, private route: Router) {}

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    
  }
  ionViewDidEnter() {
    this.recipes = this.service.getAllservice();
  }

  ngOnDestroy() {}

  VoiDetails(id: any) {
    this.route.navigate(['/', id]);
  }
}
