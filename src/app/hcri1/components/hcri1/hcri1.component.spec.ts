import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcri1Component } from './hcri1.component';

describe('Hcri1Component', () => {
  let component: Hcri1Component;
  let fixture: ComponentFixture<Hcri1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcri1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcri1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
