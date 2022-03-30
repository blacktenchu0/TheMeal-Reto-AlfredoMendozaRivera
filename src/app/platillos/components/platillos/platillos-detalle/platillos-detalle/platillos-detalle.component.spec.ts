import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatillosDetalleComponent } from './platillos-detalle.component';

describe('PlatillosDetalleComponent', () => {
  let component: PlatillosDetalleComponent;
  let fixture: ComponentFixture<PlatillosDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatillosDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatillosDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
