import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopmainComponent } from './workshopmain.component';

describe('WorkshopmainComponent', () => {
  let component: WorkshopmainComponent;
  let fixture: ComponentFixture<WorkshopmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkshopmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
