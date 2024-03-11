import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuntekstoreComponent } from './suntekstore.component';

describe('SuntekstoreComponent', () => {
  let component: SuntekstoreComponent;
  let fixture: ComponentFixture<SuntekstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuntekstoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuntekstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
