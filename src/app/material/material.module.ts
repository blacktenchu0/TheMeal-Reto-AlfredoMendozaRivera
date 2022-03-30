import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';

const componentsMaterial = [
  MatBadgeModule,
  LayoutModule,
  MatFormFieldModule,
  MatSliderModule,
  MatCheckboxModule,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSidenavModule,
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatTabsModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  MatTableModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatTreeModule,
  MatStepperModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatRippleModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, componentsMaterial],
  exports: [componentsMaterial],
  providers: [],
})
export class MaterialModule {}
