import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    PainelComponent
  ]
})
export class PainelModule { }
