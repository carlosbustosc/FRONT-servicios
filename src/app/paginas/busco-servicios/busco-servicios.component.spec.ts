import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscoServiciosComponent } from './busco-servicios.component';

describe('BuscoServiciosComponent', () => {
  let component: BuscoServiciosComponent;
  let fixture: ComponentFixture<BuscoServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscoServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscoServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
