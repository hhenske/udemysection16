import { useEffect } from 'react';
import useInput from '../hooks/use-input';


const SimpleInput = (props) => {
  const { 
    value : enteredName, 
    isValid: enteredName,
    hasError: nameInputHasError, 
    valueChangeHandler: nameChangedHandler, 
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const { 
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    vlueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(vaue => value.includes('@'));
  
  let formIsValid = false;
  
  
 
  useEffect(() => {
    if (enteredNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);

    } else {
      setFormIsValid(false);
    }
  }, [enteredNameIsValid, enteredEmailIsValid])

  const formSubmissionHandler = (event) => {
    event.preventDefault();


    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
     
      return;
    }

    console.log(enteredName, enteredEmail);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
  };

  

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputhasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          onChange={emailtChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
          />
        {emailInputHasError && (
          <p className='error-text'>Email must not be empty.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
