import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTradeComponent } from './create-trade.component';

describe('CreateTradeComponent', () => {
  let component: CreateTradeComponent;
  let fixture: ComponentFixture<CreateTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTradeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
