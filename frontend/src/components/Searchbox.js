import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useNavigate } from "react-router-dom";

export default function SearchBox(props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const search = (e) => {
    e.preventDefault();
    console.log(query);
    navigate(query ? `/search/${query}` : "/search", {
      name: "abc",
    });
  };

  return (
    <Form className="d-flex me-auto" style={{ width: "50%", float: "left" }}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for anything"
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button
          variant="outline-primary"
          type="submit"
          id="button-search"
          onClick={search}
        >
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
