import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaTrabajadorComponent } from './interna-trabajador.component';

describe('InternaTrabajadorComponent', () => {
  let component: InternaTrabajadorComponent;
  let fixture: ComponentFixture<InternaTrabajadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaTrabajadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
