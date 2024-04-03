import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco2Component } from './heco2.component';

describe('Heco2Component', () => {
  let component: Heco2Component;
  let fixture: ComponentFixture<Heco2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
