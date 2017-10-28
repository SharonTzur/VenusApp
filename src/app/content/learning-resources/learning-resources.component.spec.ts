import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningResourcesComponent } from './learning-resources.component';

describe('LearningResourcesComponent', () => {
  let component: LearningResourcesComponent;
  let fixture: ComponentFixture<LearningResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
