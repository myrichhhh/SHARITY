import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ListProjectsPage } from './list-projects.page';

describe('ListProjectsPage', () => {
  let component: ListProjectsPage;
  let fixture: ComponentFixture<ListProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListProjectsPage],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
