import supertest from 'supertest';
import StatusCodes from 'http-status-codes';
import { SuperTest, Test } from 'supertest';

import app from '@server';
import ResponseDao from '@daos/Response/ResponseDao.mock';
import { pErr } from '@shared/functions';
import { paramMissingError } from '@shared/constants';
import { IReqBody, IResponse } from '../support/types';
import SurveyResponse from '@entities/SurveyResponse';



describe('Responses Routes', () => {

    const responsesPath = '/api/responses';
    const addResponsesPath = `${responsesPath}/`;

    const { BAD_REQUEST, CREATED } = StatusCodes;
    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"POST:${addResponsesPath}"`, () => {

        const callApi = (reqBody: IReqBody) => {
            return agent.post(addResponsesPath).type('form').send(reqBody);
        };

        const responseData = {
            response: new SurveyResponse(
                -1,
                {"questions":[{"question":"What's your favorite number?","answer":"1"}]}
            ),
        };

        it(`returns a status code of "${CREATED}" if the request was successful.`, (done) => {
            // Setup Spy
            spyOn(ResponseDao.prototype, 'add').and.returnValue(Promise.resolve());
            // Call API
            agent.post(addResponsesPath).type('form').send(responseData)
                .end((err: Error, res: IResponse) => {
                    pErr(err);
                    expect(res.status).toBe(CREATED);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`returns a JSON object with an error message of "${paramMissingError}" and a status
            code of "${BAD_REQUEST}" if the response param was missing.`, (done) => {
            // Call API
            callApi({})
                .end((err: Error, res: IResponse) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBe(paramMissingError);
                    done();
                });
        });

        it(`returns a JSON object with an error message and a status code of "${BAD_REQUEST}"
            if the request was unsuccessful.`, (done) => {
            // Setup spy
            const errMsg = 'TEST: Could not add response.';
            spyOn(ResponseDao.prototype, 'add').and.throwError(errMsg);
            // Call API
            callApi(responseData)
                .end((err: Error, res: IResponse) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    expect(res.body.error).toBe(errMsg);
                    done();
                });
        });
    });

});
