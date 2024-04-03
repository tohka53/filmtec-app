import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcf3Component } from './hcf3.component';

describe('Hcf3Component', () => {
  let component: Hcf3Component;
  let fixture: ComponentFixture<Hcf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcf3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
