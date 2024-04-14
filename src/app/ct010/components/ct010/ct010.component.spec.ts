import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct010Component } from './ct010.component';

describe('Ct010Component', () => {
  let component: Ct010Component;
  let fixture: ComponentFixture<Ct010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct010Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
