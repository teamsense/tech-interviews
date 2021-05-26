import { IQuestion } from "../entities/Survey"
import Answer from "./Answer";
interface QuestionProps {
    question: IQuestion;
    onSelection?: (question: string, answer: string) => any;
}

const Question = ({ question, onSelection }: QuestionProps) => {
    const group = Date.now() + "";
    const onSelectAnswer = (answer: string) => {
        if (onSelection) {
            onSelection(question.question, answer);
        }
    }

    const answers = question.answers.map((answer, index) => {
        return <Answer answer={ answer }
                       group={ group }
                       onSelection={ onSelectAnswer }
                       key={ index } />
    });

    return (
        <fieldset>
            <legend>{ question.question }</legend>
            { answers }
        </fieldset>
    );
};

export default Question;
