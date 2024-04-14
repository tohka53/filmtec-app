import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct07Component } from './ct07.component';

describe('Ct07Component', () => {
  let component: Ct07Component;
  let fixture: ComponentFixture<Ct07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct07Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
