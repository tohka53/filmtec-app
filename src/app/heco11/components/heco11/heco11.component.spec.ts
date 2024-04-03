import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heco11Component } from './heco11.component';

describe('Heco11Component', () => {
  let component: Heco11Component;
  let fixture: ComponentFixture<Heco11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Heco11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Heco11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
