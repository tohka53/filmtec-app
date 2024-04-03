import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hcf4Component } from './hcf4.component';

describe('Hcf4Component', () => {
  let component: Hcf4Component;
  let fixture: ComponentFixture<Hcf4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hcf4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hcf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
