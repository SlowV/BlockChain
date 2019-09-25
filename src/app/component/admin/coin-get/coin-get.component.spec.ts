import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinGetComponent } from './coin-get.component';

describe('CoinGetComponent', () => {
  let component: CoinGetComponent;
  let fixture: ComponentFixture<CoinGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
