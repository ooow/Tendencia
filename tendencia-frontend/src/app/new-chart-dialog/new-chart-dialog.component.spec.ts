import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewChartDialogComponent} from './new-chart-dialog.component';

describe('NewChartDialogComponent', () => {
  let component: NewChartDialogComponent;
  let fixture: ComponentFixture<NewChartDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewChartDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChartDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
