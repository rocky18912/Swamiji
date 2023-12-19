import React, { useState } from "react";
import styled from "styled-components";

export default function Modal() {
  const [view, setView] = useState(false);
  const toggleModal = () => {
    setView(!view);
  };
  return (
    <Container>
      <button onClick={toggleModal}>Contact Us</button>
      {view && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h3>Please Enter Details</h3>
              <form action="/action_page.php">
                <label for="fname">Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="eg: Shivam Dube"
                />

                <label for="lname">Contact Number</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="eg: xxxxx xxxxx"
                />

                <label for="lname">Email</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="eg:shivamdub@gmail.com"
                />

                <label for="country">Country</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="eg:India"
                />
              </form>
              <button>Continue</button>
              <button className="close-btn" onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  .disp {
    display: flex;
    gap: 2px;
  }
  .close-btn {
    background-color: #fff;
    color: #02a66e;
    border: 0.5px solid #02a66e;
    &:hover {
      background: #ccc;
    }
  }
  h3 {
    padding-left: 100px;
    font-weight: lighter;
  }
  font-family: sans-serif;
  label {
    font-weight: lighter;
  }
  button {
    display: flex;
    width: 100%;
    margin: 3px;
    color: #460954;
    padding: 8px 12px 8px 12px;
    text-decoration: none;
    font-size: 18px;
    font-family: "Courier New", Courier, monospace;
    font-weight: bolder;
    background-color: #02a66e;
    color: #fff;
    border: none;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
      background-color: rgb(2, 166, 110, 0.8);
    }
  }
  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: rgba(49, 49, 49, 0.8);
    z-index: 10;
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #fff;
    padding: 14px 28px;
    border-radius: 10px;
    max-width: 400px;
    min-width: 300px;
    z-index: 15;
  }
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 0.5px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
  }

  input[type="submit"] {
    background-color: #04aa6d;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #45a049;
  }
`;
