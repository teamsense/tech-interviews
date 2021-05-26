import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import ResponseDao from '@daos/Response/ResponseDao.mock';
import { paramMissingError } from '@shared/constants';

const responseDao = new ResponseDao();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;


/**
 * Add a response.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns 201 created with an empty body.
 *   If the parameters are invalid, returns a 400 with an JSON object describing the error.
 */
 export async function addResponse(req: Request, res: Response) {
    const { response } = req.body;
    if (!response) {
        return res.status(BAD_REQUEST)
                  .json({error: paramMissingError});
    }
    await responseDao.add(response);
    return res.status(CREATED).end();
}

/**
 * Add a response.
 *
 * @param req The Express Request.
 * @param res The Express Response.
 * @returns
 *   On success returns 200 Ok with an JSON object of the list of survey responses.
 */
 export async function listResponses(req: Request, res: Response) {
    const responses = await responseDao.getAll();
    if (responses) {
        return res.status(OK)
                  .json({responses});
    } else {
        return res.status(OK).json({responses: []});
    }
}
