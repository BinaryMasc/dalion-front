import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsArticleComponent } from './ws-article.component';

describe('WsArticleComponent', () => {
  let component: WsArticleComponent;
  let fixture: ComponentFixture<WsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
