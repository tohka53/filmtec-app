import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct08Component } from './ct08.component';

describe('Ct08Component', () => {
  let component: Ct08Component;
  let fixture: ComponentFixture<Ct08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct08Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
