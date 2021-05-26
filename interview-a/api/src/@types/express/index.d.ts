import { ISurveyResponse } from "@entities/SurveyResponse";
import { ISurvey } from "@entities/Survey";

declare module 'express' {
    export interface Request  {
        body: {
            survey?: ISurvey,
            response?: ISurveyResponse
        };
    }
}
