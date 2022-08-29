import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCategory1Component } from './featured-category1.component';

describe('FeaturedCategory1Component', () => {
  let component: FeaturedCategory1Component;
  let fixture: ComponentFixture<FeaturedCategory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCategory1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedCategory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
