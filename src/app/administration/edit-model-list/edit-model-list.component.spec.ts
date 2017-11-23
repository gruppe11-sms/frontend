import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EditModelListComponent} from './edit-model-list.component';

describe('EditModelListComponent', () => {
  let component: EditModelListComponent;
  let fixture: ComponentFixture<EditModelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditModelListComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditModelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
