import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct03Component } from './ct03.component';

describe('Ct03Component', () => {
  let component: Ct03Component;
  let fixture: ComponentFixture<Ct03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
