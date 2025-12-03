import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolSelectColor } from './bool-select-color';

describe('BoolSelectColor', () => {
  let component: BoolSelectColor;
  let fixture: ComponentFixture<BoolSelectColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolSelectColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoolSelectColor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
