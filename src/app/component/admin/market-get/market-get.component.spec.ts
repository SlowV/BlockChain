import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketGetComponent } from './market-get.component';

describe('MarketGetComponent', () => {
  let component: MarketGetComponent;
  let fixture: ComponentFixture<MarketGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
