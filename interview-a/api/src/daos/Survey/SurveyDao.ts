import { ISurvey } from '@entities/Survey';


export interface ISurveyDao {
    getOne: (id: number) => Promise<ISurvey | null>;
    getAll: () => Promise<ISurvey[]>;
    add: (Survey: ISurvey) => Promise<void>;
    update: (Survey: ISurvey) => Promise<void>;
    delete: (id: number) => Promise<void>;
}
