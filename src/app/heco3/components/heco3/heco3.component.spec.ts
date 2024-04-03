import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco3Component } from './heco3.component';

describe('Heco3Component', () => {
  let component: Heco3Component;
  let fixture: ComponentFixture<Heco3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
