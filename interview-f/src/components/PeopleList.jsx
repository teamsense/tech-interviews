import React from "react";
import { Form, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";

import { AGE_RANGE } from "../utils/filterData";

import "./PeopleList.scss";

export const PeopleList = () => {
  return (
    <Row className="py-5 px-3 px-md-5">
      <Form.Group className="col-12 col-md-6 mb-3">
        <Form.Label>Age Ranges</Form.Label>
        <Typeahead
          id="ages-filter"
          multiple
          // onChange={ageRangeChangeHandler}
          options={AGE_RANGE}
          placeholder="Choose Age Ranges..."
          // selected={selectedAgeRanges}
        />
      </Form.Group>
    </Row>
  );
};
