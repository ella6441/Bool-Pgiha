import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolScore } from './bool-score';

describe('BoolScore', () => {
  let component: BoolScore;
  let fixture: ComponentFixture<BoolScore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolScore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoolScore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
