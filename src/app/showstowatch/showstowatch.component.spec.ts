import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowstoWatchComponent } from './showstowatch.component';

describe('ShowstoWatchComponent', () => {
  let component: ShowstoWatchComponent;
  let fixture: ComponentFixture<ShowstoWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowstoWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowstoWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
