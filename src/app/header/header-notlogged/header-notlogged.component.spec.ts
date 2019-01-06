import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotloggedComponent } from './header-notlogged.component';

describe('HeaderNotloggedComponent', () => {
  let component: HeaderNotloggedComponent;
  let fixture: ComponentFixture<HeaderNotloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNotloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNotloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
