import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfilmsComponent } from './searchfilms.component';

describe('SearchfilmsComponent', () => {
  let component: SearchfilmsComponent;
  let fixture: ComponentFixture<SearchfilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchfilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchfilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
