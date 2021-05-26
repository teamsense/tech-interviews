interface IQuestion {
    question: string;
    answer: string;
}
interface IContent {
    questions: IQuestion[]
}
export interface ISurveyResponse {
    id: number;
    content: IContent;
    completed: Date;
}

class SurveyResponse implements ISurveyResponse {

    public id: number;
    public content: IContent;
    public completed: Date;

    constructor(idOrResponse: number | ISurveyResponse, content?: IContent, completed?: Date) {
        if (typeof idOrResponse === 'number') {
            this.id = idOrResponse || -1;
            this.content = content || {"questions":[]};
            if (typeof completed === 'string') {
                this.completed = new Date(completed);
            } else {
                this.completed = completed || new Date();
            }
        } else {
            this.content = idOrResponse.content;
            this.id = idOrResponse.id;
            if (typeof idOrResponse.completed === 'string') {
                this.completed = new Date(idOrResponse.completed);
            } else {
                this.completed = idOrResponse.completed || new Date();
            }
        }
    }
}

export default SurveyResponse;
