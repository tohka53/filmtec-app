import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct011Component } from './ct011.component';

describe('Ct011Component', () => {
  let component: Ct011Component;
  let fixture: ComponentFixture<Ct011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct011Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
