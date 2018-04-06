import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstowatchComponent } from './showstowatch.component';

describe('ShowstowatchComponent', () => {
  let component: ShowstowatchComponent;
  let fixture: ComponentFixture<ShowstowatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstowatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstowatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
