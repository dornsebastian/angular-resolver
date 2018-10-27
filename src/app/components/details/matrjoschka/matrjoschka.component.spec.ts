import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrjoschkaComponent } from './matrjoschka.component';

describe('MatrjoschkaComponent', () => {
  let component: MatrjoschkaComponent;
  let fixture: ComponentFixture<MatrjoschkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrjoschkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrjoschkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
