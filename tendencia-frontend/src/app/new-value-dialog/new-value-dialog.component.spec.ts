import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewValueDialogComponent} from './new-value-dialog.component';

describe('NewValueDialogComponent', () => {
  let component: NewValueDialogComponent;
  let fixture: ComponentFixture<NewValueDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewValueDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewValueDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
