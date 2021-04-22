/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListPricesComponent } from './ListPrices.component';

describe('ListPricesComponent', () => {
  let component: ListPricesComponent;
  let fixture: ComponentFixture<ListPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
