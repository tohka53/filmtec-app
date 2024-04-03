import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcf1Component } from './hcf1.component';

describe('Hcf1Component', () => {
  let component: Hcf1Component;
  let fixture: ComponentFixture<Hcf1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcf1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
