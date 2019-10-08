import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]= [
    new Recipe('Salad','Test Salad Recipe','https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2-696x696.jpg'),
    new Recipe('Chicken','Test Chicken Recipe','https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2-696x696.jpg'),
    new Recipe('Lamb','Test Lamb Recipe','https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2-696x696.jpg')
  ]

  @Output() emitRecipe=new EventEmitter<Recipe>();

  onRecipeSelect(event:Recipe){
   this.emitRecipe.emit(event);

  }
  constructor() { }

  ngOnInit() {
   
  }

}
