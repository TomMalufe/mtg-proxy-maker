import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrintoutComponent } from './card-printout.component';

describe('CardPrintoutComponent', () => {
  let component: CardPrintoutComponent;
  let fixture: ComponentFixture<CardPrintoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPrintoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
