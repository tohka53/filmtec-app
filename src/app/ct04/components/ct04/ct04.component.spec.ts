import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct04Component } from './ct04.component';

describe('Ct04Component', () => {
  let component: Ct04Component;
  let fixture: ComponentFixture<Ct04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct04Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
