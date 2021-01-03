import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarginOverwrapComponent } from './margin-overwrap.component';

describe('MarginOverwrapComponent', () => {
  let component: MarginOverwrapComponent;
  let fixture: ComponentFixture<MarginOverwrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarginOverwrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarginOverwrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
