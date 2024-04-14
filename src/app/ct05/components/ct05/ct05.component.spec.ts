import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct05Component } from './ct05.component';

describe('Ct05Component', () => {
  let component: Ct05Component;
  let fixture: ComponentFixture<Ct05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct05Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
