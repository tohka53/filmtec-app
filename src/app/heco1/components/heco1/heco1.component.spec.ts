import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco1Component } from './heco1.component';

describe('Heco1Component', () => {
  let component: Heco1Component;
  let fixture: ComponentFixture<Heco1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
