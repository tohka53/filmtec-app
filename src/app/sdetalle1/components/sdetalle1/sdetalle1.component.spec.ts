import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sdetalle1Component } from './sdetalle1.component';

describe('Sdetalle1Component', () => {
  let component: Sdetalle1Component;
  let fixture: ComponentFixture<Sdetalle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Sdetalle1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Sdetalle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
