import { useState, useEffect } from "react";
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
    email: '',
    name: '',
    password: '',
    isMember: true
};

const Register = () => {
    const [values, setValues] = useState(initialState);
    const handleChange = e => {
        console.log(e.target);
    };
    const onSubmit = e => {
        e.preventDefault();
        console.log(e.target);
    };

    return (
        <Wrapper className="full-page">
            <form className="form" onSubmit={onSubmit}>
                <Logo />
                <h3>LogIn</h3>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} className="form-input" />
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>

        </Wrapper>
    )
};

export default Register;