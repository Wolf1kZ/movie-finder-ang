import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresFilmsComponent } from './genres-films.component';

describe('GenresFilmsComponent', () => {
  let component: GenresFilmsComponent;
  let fixture: ComponentFixture<GenresFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
