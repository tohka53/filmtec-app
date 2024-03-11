import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexisstoreComponent } from './hexisstore.component';

describe('HexisstoreComponent', () => {
  let component: HexisstoreComponent;
  let fixture: ComponentFixture<HexisstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexisstoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexisstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
