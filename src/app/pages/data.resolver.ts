import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../api/api';
import { PersonalInformationDataType, ProjectDataType, SkillDataType } from '../../types';

export interface ResolvedData {
  personal: PersonalInformationDataType | null;
  skills: SkillDataType[];
  projects: ProjectDataType[];
}

export const resolverData: ResolveFn<ResolvedData> = () => {
  const apiService = inject(ApiService);

  return forkJoin({
    personal: apiService.getInformation().pipe(
      catchError(() => of({} as PersonalInformationDataType))
    ),
    skills: apiService.getSkills().pipe(
      catchError(() => of([]))
    ),
    projects: apiService.getProjects().pipe(
      catchError(() => of([]))
    )
  });
};
