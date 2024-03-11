import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeckwrapComponent } from './teckwrap.component';

describe('TeckwrapComponent', () => {
  let component: TeckwrapComponent;
  let fixture: ComponentFixture<TeckwrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeckwrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeckwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
