import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionTest2Component } from './postion-test2.component';

describe('PostionTest2Component', () => {
  let component: PostionTest2Component;
  let fixture: ComponentFixture<PostionTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostionTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostionTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
