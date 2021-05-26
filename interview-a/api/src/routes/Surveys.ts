import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import SurveyDao from '@daos/Survey/SurveyDao.mock';

const surveyDao = new SurveyDao();
const { NOT_FOUND, OK } = StatusCodes;

/**
 * Get one survey, by ID.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns the survey as JSON `{"survey": {...}}`.
 *   If the survey ID isn't found, returns a 404 with an empty body.
 */
 export async function getSurveys(req: Request, res: Response) {
    const surveys = await surveyDao.getAll();
    if (surveys) {
        return res.status(OK)
                  .json({surveys});
    } else {
        return res.status(NOT_FOUND).end();
    }
}

/**
 * Get one survey, by ID.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns the survey as JSON `{"survey": {...}}`.
 *   If the survey ID isn't found, returns a 404 with an empty body.
 */
export async function getSurvey(req: Request, res: Response) {
    const { id } = req.params;
    const idNumber = Number(id);

    const survey = await surveyDao.getOne(idNumber);
    if (survey) {
        return res.status(OK)
                  .json({survey});
    } else {
        return res.status(NOT_FOUND).end();
    }
}

