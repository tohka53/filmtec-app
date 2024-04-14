import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct02Component } from './ct02.component';

describe('Ct02Component', () => {
  let component: Ct02Component;
  let fixture: ComponentFixture<Ct02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ct02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ct02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
