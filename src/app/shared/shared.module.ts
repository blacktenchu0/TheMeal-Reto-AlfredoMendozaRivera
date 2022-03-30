import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfEmptyPipe } from './pipes/if-empty.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

const componentsShared = [
  IfEmptyPipe
];

@NgModule({
  declarations: [
    componentsShared
  ],
  exports: [componentsShared],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ]
})
export class SharedModule { }
