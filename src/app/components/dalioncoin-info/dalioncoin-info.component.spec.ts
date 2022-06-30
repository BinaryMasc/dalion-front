import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalioncoinInfoComponent } from './dalioncoin-info.component';

describe('DalioncoinInfoComponent', () => {
  let component: DalioncoinInfoComponent;
  let fixture: ComponentFixture<DalioncoinInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalioncoinInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalioncoinInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
