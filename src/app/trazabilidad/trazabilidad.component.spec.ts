import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrazabilidadComponent } from './trazabilidad.component';

describe('TrazabilidadComponent', () => {
  let component: TrazabilidadComponent;
  let fixture: ComponentFixture<TrazabilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrazabilidadComponent]
    });
    fixture = TestBed.createComponent(TrazabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
