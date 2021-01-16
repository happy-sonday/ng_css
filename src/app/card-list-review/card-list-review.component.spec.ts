import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListReviewComponent } from './card-list-review.component';

describe('CardListReviewComponent', () => {
  let component: CardListReviewComponent;
  let fixture: ComponentFixture<CardListReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
