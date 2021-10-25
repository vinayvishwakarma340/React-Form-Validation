import { useState } from "react";
const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid =
    enteredEmail.includes("@") && enteredEmail.includes(".");
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
    formIsValid = true;
  };

  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    formIsValid = true;
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    setEnteredName(enteredName);
    setEnteredEmail(enteredEmail);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control ";

  return (
    <form
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {
            nameInputChangeHandler(e);
          }}
          onBlur={(e) => {
            nameInputBlurHandler(e);
          }}
          value={enteredName}
          autoComplete="off"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email : </label>
        <input
          type="email"
          id="email"
          onChange={(e) => {
            emailInputChangeHandler(e);
          }}
          onBlur={(e) => {
            emailInputBlurHandler(e);
          }}
          value={enteredEmail}
          autoComplete="off"
        />
        {emailInputIsInvalid && (
          <p className="error-text">invalid Email Address !</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
