import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferSeleccionadoComponent } from './chofer-seleccionado.component';

describe('ChoferSeleccionadoComponent', () => {
  let component: ChoferSeleccionadoComponent;
  let fixture: ComponentFixture<ChoferSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoferSeleccionadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoferSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
