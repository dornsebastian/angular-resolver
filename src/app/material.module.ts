import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatTableModule} from '@angular/material';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}
