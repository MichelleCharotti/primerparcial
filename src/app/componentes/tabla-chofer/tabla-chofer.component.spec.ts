import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaChoferComponent } from './tabla-chofer.component';

describe('TablaChoferComponent', () => {
  let component: TablaChoferComponent;
  let fixture: ComponentFixture<TablaChoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaChoferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
