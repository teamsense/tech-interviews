interface AnswerProps {
    answer: string;
    group: string;
    onSelection?: (answer: string) => any;
}

const Answer = ({ answer, group, onSelection }: AnswerProps) => {
    const onClickAnswer = () => {
        if (onSelection) {
            onSelection(answer);
        }
    };

    return (
        <div>
            <label>
                <input value={ answer }
                       type="radio"
                       name={ group }
                       onClick={ _event => onClickAnswer() }/>
                { answer }
            </label>
        </div>
    );
};

export default Answer;
