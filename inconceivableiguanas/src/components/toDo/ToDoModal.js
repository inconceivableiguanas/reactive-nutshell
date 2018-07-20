//leah gwin 2018
import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Modal, Field, Label } from "bloomer";

handleUpdate = e => {
  e.preventDefault();
  //was looking into what prevent default was and how to connect modal to othe r

  export default class TodoModal extends Component {
    render() {
      //start of modal code
      <Modal>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Add a New Task</ModalCardTitle>
            <Delete />
          </ModalCardHeader>
          <ModalCardBody>
            {
              //this holds the form that takes in the input values of task
              <Field>
                <Label>Task Name</Label>
                <Control>
                  <Input type="text" placeholder="Type Task Here" />
                  <Input type="text" placeholder="Type Due Date Here" />
                </Control>
              </Field>
            }
          </ModalCardBody>
          <ModalCardFooter>
            <Button isColor="success">Save</Button>
            <Button isColor="warning">Cancel</Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>;
    }
  }
};
