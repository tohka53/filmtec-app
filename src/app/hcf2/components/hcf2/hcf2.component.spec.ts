import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcf2Component } from './hcf2.component';

describe('Hcf2Component', () => {
  let component: Hcf2Component;
  let fixture: ComponentFixture<Hcf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcf2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
