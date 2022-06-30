import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsexploreComponent } from './wsexplore.component';

describe('WsexploreComponent', () => {
  let component: WsexploreComponent;
  let fixture: ComponentFixture<WsexploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsexploreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsexploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
