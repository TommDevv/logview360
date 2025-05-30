import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatenciaComponent } from './latencia.component';

describe('LatenciaComponent', () => {
  let component: LatenciaComponent;
  let fixture: ComponentFixture<LatenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatenciaComponent]
    });
    fixture = TestBed.createComponent(LatenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
