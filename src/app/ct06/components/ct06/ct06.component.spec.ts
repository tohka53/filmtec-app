import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct06Component } from './ct06.component';

describe('Ct06Component', () => {
  let component: Ct06Component;
  let fixture: ComponentFixture<Ct06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct06Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
