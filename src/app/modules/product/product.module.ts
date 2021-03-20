import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects} from "./+store/product.effects";
import {productFeatureKey, reducer} from './+store/product.reducer';
import {SharedModule} from "../shared/shared.module";
import {ApiModule} from "../api/api.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(productFeatureKey, reducer),
    EffectsModule.forFeature([ProductEffects]),
    SharedModule,
    ApiModule
  ]
})
export class ProductModule { }
