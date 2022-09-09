import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCarouselComponent } from './offers-carousel.component';

describe('OffersCarouselComponent', () => {
  let component: OffersCarouselComponent;
  let fixture: ComponentFixture<OffersCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
