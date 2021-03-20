import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';


import * as ProductActions from './product.actions';
import { ProjectPartialState } from './product.reducer';
import * as ProductSelectors from './product.selectors';
import {CreateProjectRequest} from '../../../models/project';

@Injectable()
export class ProductFacade {
  loaded$ = this.store.pipe(select(ProductSelectors.selectLoaded));
  projects$ = this.store.pipe(select(ProductSelectors.selectProjects));

  constructor(private store: Store<ProjectPartialState>) {}

  loadProjects(): void {
    this.store.dispatch(ProjectActions.loadProjects());
  }

  deleteProject(projectId: string): void {
    this.store.dispatch(ProjectActions.deleteProject({ projectId }));
  }

  createProject(createProjectRequest: CreateProjectRequest): void {
    this.store.dispatch(ProjectActions.createProject({ createProjectRequest }));
  }

  updateEmployees(projectId: string, employees: Employee[]): void {
    this.store.dispatch(ProjectActions.updateEmployees({ projectId, employees }));
  }

  completeProject(projectId: string): void {
    this.store.dispatch(ProjectActions.completeProject({ projectId }));
  }
}
