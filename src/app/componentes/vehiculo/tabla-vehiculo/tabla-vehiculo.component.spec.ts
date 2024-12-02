import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVehiculoComponent } from './tabla-vehiculo.component';

describe('TablaVehiculoComponent', () => {
  let component: TablaVehiculoComponent;
  let fixture: ComponentFixture<TablaVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaVehiculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
