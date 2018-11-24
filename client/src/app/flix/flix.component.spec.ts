/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlixComponent } from './flix.component';

describe('FlixComponent', () => {
  let component: FlixComponent;
  let fixture: ComponentFixture<FlixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
