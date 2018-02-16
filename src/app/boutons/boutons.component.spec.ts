import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonsComponent } from './boutons.component';

describe('BoutonsComponent', () => {
  let component: BoutonsComponent;
  let fixture: ComponentFixture<BoutonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
