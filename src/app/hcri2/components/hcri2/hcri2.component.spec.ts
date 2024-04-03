import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcri2Component } from './hcri2.component';

describe('Hcri2Component', () => {
  let component: Hcri2Component;
  let fixture: ComponentFixture<Hcri2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcri2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcri2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
