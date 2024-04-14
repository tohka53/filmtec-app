import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct012Component } from './ct012.component';

describe('Ct012Component', () => {
  let component: Ct012Component;
  let fixture: ComponentFixture<Ct012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct012Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
