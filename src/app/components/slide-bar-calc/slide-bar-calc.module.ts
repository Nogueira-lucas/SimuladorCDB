import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideBarCalcComponent } from './slide-bar-calc.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    SlideBarCalcComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SlideBarCalcModule { }
