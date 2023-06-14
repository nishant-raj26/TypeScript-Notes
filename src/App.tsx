import React, { useState } from "react";
import { Note } from "./models/noteModel";
import Header from "./components/Header";
import NotesList from "./components/NotesList";
import { Container, Row, Col } from "react-bootstrap";
import CreateNotes from "./components/CreateNotes";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meeting",
      text: "Schedule Meeting",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);
  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
