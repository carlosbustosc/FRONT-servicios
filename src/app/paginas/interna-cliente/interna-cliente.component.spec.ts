import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaClienteComponent } from './interna-cliente.component';

describe('InternaTrabajadorComponent', () => {
  let component: InternaClienteComponent;
  let fixture: ComponentFixture<InternaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        InternaClienteComponent 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
