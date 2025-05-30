import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaArchivosComponent } from './carga-archivos.component';

describe('CargaArchivosComponent', () => {
  let component: CargaArchivosComponent;
  let fixture: ComponentFixture<CargaArchivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaArchivosComponent]
    });
    fixture = TestBed.createComponent(CargaArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
