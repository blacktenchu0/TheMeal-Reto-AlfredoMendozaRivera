import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesPopularesListComponent } from './ingredientes-populares-list.component';

describe('IngredientesPopularesListComponent', () => {
  let component: IngredientesPopularesListComponent;
  let fixture: ComponentFixture<IngredientesPopularesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesPopularesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesPopularesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
