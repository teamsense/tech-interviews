import { Response } from 'supertest';
import { ISurvey } from '@entities/Survey';
import { ISurveyResponse } from '@entities/SurveyResponse';


export interface IResponse extends Response {
    body: {
        error: string;
        survey: ISurvey;
        responses: [ISurveyResponse];
    };
}

export interface IResponseSurveyList extends Response {
    body: {
        error: string;
        surveys: ISurvey[];
    };
}

export interface IReqBody {
    response?: ISurveyResponse;
}
