import React, { Component } from 'react';
import styled from 'styled-components';
import FloatingLabel, {
  floatingStyles,
  focusStyles,
  inputStyles,
  labelStyles
} from 'floating-label-react'

const ContactWrapper = styled.article`
  width: 25vw;
  min-width: 360px;
  height: auto;
  position: absolute;
  right: 72px;
  top: 72px;
  background: #fff;
  box-shadow: 0 2px 16px -2px rgba(159,159,159,0.32);
`;

const ContactHeader = styled.h3`
  width: 100%;
  padding: 24px 0;
  background: #0f0f0f;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactForm = styled.form`
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;

  & label input {
    width: 100%;
    margin-bottom: 8px;
  }

  & label textarea {
    width: 100%;
    margin-bottom: 8px;
  }

  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus
  & textarea:-webkit-autofill,
  & textarea:-webkit-autofill:hover
  & textarea:-webkit-autofill:focus,
  & select:-webkit-autofill,
  & select:-webkit-autofill:hover,
  & select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }
`;

const ContactFormRow = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  & label {
    width: calc(50% - 12px);
  }

  & label input {
    width: 100%;
  }

  & label textarea {
    width: 100%;
  }
`;

const ContactFormFieldset = styled.fieldset`
  border: 0;
`;

const StyledSubmit = styled.input`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  appearance: none;
  color: #0f0f0f;
  font-size: 1.5rem;
  font-weight: 400;
  position: relative;
  z-index: 1;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: -1;
  }

  &::after {
    content: "";
    height: 100%;
    width: 100%;
    background: #0f0f0f;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
    transition: 0.3s ease-out all;
  }

  &:hover::after {
    width: 0;
  }

`;

class Contact extends Component {

  render() {
    return (
      <ContactWrapper className="contact">
        <ContactHeader className="contact__header">
          Let us buy you a beer
        </ContactHeader>
        <ContactForm className="contact__form" netlify method="POST">
            <ContactFormRow className="contact__form--row">
              <FloatingLabel
                type="text"
                name="fname"
                placeholder="First name"
                styles={{
                  floating: {
                    ...floatingStyles,
                    color: '#9f9f9f'
                  },
                  focus: {
                    ...focusStyles,
                    borderColor: '#9f9f9f'
                  }
                }}
              />
              <FloatingLabel
                type="text"
                name="lname"
                placeholder="Last name"
                styles={{
                  floating: {
                    ...floatingStyles,
                    color: '#9f9f9f'
                  },
                  focus: {
                    ...focusStyles,
                    borderColor: '#9f9f9f'
                  }
                }}
              />
            </ContactFormRow>
            <FloatingLabel
              type="email"
              placeholder="Email"
              styles={{
                floating: {
                  ...floatingStyles,
                  color: '#9f9f9f'
                },
                focus: {
                  ...focusStyles,
                  borderColor: '#9f9f9f'
                }
              }}/>
            <FloatingLabel
              type="select"
              placeholder="Favorite hangout spot"
              styles={{
                floating: {
                  ...floatingStyles,
                  color: '#9f9f9f'
                },
                focus: {
                  ...focusStyles,
                  borderColor: '#9f9f9f'
                }
              }}/>
            <FloatingLabel
              type="text"
              placeholder="What are you working on? (AirBnB for pets, a queso truck, etc)"
              element="textarea"
              rows="5"
              styles={{
                floating: {
                  ...floatingStyles,
                  color: '#9f9f9f'
                },
                focus: {
                  ...focusStyles,
                  borderColor: '#9f9f9f'
                }
              }}/>
          <StyledSubmit type="submit" value="Submit" />
        </ContactForm>
      </ContactWrapper>
    );
  }

}

export default Contact;
