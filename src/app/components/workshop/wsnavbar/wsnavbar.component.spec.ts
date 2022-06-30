import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsnavbarComponent } from './wsnavbar.component';

describe('WsnavbarComponent', () => {
  let component: WsnavbarComponent;
  let fixture: ComponentFixture<WsnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsnavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
