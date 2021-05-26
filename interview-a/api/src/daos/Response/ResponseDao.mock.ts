import { ISurveyResponse } from '@entities/SurveyResponse';
import { getRandomInt } from '@shared/functions';
import { IResponseDao } from './ResponseDao';
import MockDaoMock from '../MockDb/MockDao.mock';



class ResponseDao extends MockDaoMock implements IResponseDao {


    public async getOne(id: number): Promise<ISurveyResponse | null> {
        const db = await super.openDb();
        for (const response of db.responses) {
            if (response.id === id) {
                return response;
            }
        }
        return null;
    }


    public async getAll(): Promise<ISurveyResponse[]> {
        const db = await super.openDb();
        return db.responses;
    }


    public async add(Response: ISurveyResponse): Promise<void> {
        const db = await super.openDb();
        Response.id = getRandomInt();
        Response.completed ||= new Date();
        db.responses.push(Response);
        await super.saveDb(db);
    }


    public async update(Response: ISurveyResponse): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.responses.length; i++) {
            if (db.responses[i].id === Response.id) {
                db.responses[i] = Response;
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Response not found');
    }


    public async delete(id: number): Promise<void> {
        const db = await super.openDb();
        for (let i = 0; i < db.responses.length; i++) {
            if (db.responses[i].id === id) {
                db.responses.splice(i, 1);
                await super.saveDb(db);
                return;
            }
        }
        throw new Error('Response not found');
    }
}

export default ResponseDao;
