import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcri3Component } from './hcri3.component';

describe('Hcri3Component', () => {
  let component: Hcri3Component;
  let fixture: ComponentFixture<Hcri3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcri3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcri3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
