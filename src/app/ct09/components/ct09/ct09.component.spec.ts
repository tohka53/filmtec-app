import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct09Component } from './ct09.component';

describe('Ct09Component', () => {
  let component: Ct09Component;
  let fixture: ComponentFixture<Ct09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
