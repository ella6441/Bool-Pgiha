import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolBoard } from './bool-board';

describe('BoolBoard', () => {
  let component: BoolBoard;
  let fixture: ComponentFixture<BoolBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoolBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
