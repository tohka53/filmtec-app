import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeckstoreComponent } from './teckstore.component';

describe('TeckstoreComponent', () => {
  let component: TeckstoreComponent;
  let fixture: ComponentFixture<TeckstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeckstoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeckstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
