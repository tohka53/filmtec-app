import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntekComponent } from './suntek.component';

describe('SuntekComponent', () => {
  let component: SuntekComponent;
  let fixture: ComponentFixture<SuntekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuntekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuntekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
