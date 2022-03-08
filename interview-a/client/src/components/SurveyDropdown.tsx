import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ISurvey } from "../entities/Survey";
import { Form, Button } from "react-bootstrap";



const SurveyDropdown = () => {
    const [surveyList, setSurveyList] = useState<ISurvey[]>();
    const [selectedSurvey, setSelectedSurvey] = useState<string>("1");

    let history = useHistory();

    const onSubmit = (e: any) => {
        const l = `/survey/${selectedSurvey}`
        history.push(l)
    }
    
    const onChange = (e: any) => {
        setSelectedSurvey(e.target.value)
    }

    useEffect(() => {
        const loadSurveys = async (): Promise<void> => {
            const response = await fetch(`http://localhost:2047/api/surveys`);
            let data;
            try {
                data = await response.json();
            } catch(error) {
                console.error(error);
                data = null;
            }
            
            if (response.ok) {
                setSurveyList(data.surveys)
            } else {
                console.error(`API failure: ${response.status}`, data);
            }
        }
        loadSurveys();
    }, []);


    return (
        <>
        <Form onSubmit={onSubmit}>
          <Form.Label>
            Select a Survey:
          </Form.Label>
            <Form.Control as="select" onChange={onChange}>
                {surveyList?.map(s => (<option value={s.id}>{s.name}</option>))}
            </Form.Control>
          <Button className="my-1" variant="secondary" type="submit" block={true}>Submit</Button>
        </Form>
        </>
    )
}

export default SurveyDropdown;