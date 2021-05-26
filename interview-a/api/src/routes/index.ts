import { Router } from 'express';
import { getSurvey } from './Surveys';
import { addResponse, listResponses } from './Responses'

// Survey routes
const surveyRouter = Router();
surveyRouter.get('/:id', getSurvey);

// Response routes
const responseRouter = Router();
responseRouter.post('/', addResponse);
responseRouter.get('/', listResponses);

// Export the base-router
const baseRouter = Router();
baseRouter.use('/surveys', surveyRouter);
baseRouter.use('/responses', responseRouter);
export default baseRouter;
