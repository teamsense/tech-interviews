import { Router } from 'express';
import { getSurvey, getSurveys } from './Surveys';
import { addResponse } from './Responses'

// Survey routes
const surveyRouter = Router();
surveyRouter.get('/', getSurveys);
surveyRouter.get('/:id', getSurvey);

// Response routes
const responseRouter = Router();
responseRouter.post('/', addResponse);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/surveys', surveyRouter);
baseRouter.use('/responses', responseRouter);
export default baseRouter;
