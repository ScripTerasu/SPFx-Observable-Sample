import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSampleWebPartComponent } from './observable-sample-web-part.component';

describe('ObservableSampleWebPartComponent', () => {
  let component: ObservableSampleWebPartComponent;
  let fixture: ComponentFixture<ObservableSampleWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableSampleWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableSampleWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
