import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostionNavComponent } from './postion-nav.component';

describe('PostionNavComponent', () => {
  let component: PostionNavComponent;
  let fixture: ComponentFixture<PostionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
