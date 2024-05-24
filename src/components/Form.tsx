import { ChangeEvent, useState } from 'react';
import FreeTrial from './FreeTrial';
import Button from './Button';
import StyledInput from './StyledInput';

type TForm = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type TErrors = {
    firstNameErr: boolean;
    lastNameErr: boolean;
    emailErr: boolean;
    passwordErr: boolean;
};

const Form = () => {
    const [form, setForm] = useState<TForm>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<TErrors>({
        firstNameErr: false,
        lastNameErr: false,
        emailErr: false,
        passwordErr: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateInputs = () => {
        const newErrors = {
            firstNameErr: form.firstName.trim() === '',
            lastNameErr: form.lastName.trim() === '',
            emailErr: form.email.trim() === '',
            passwordErr: form.password.trim() === '',
        };
        setErrors(newErrors);
    };

    return (
        <div className="flex flex-col gap-[24px] xl:w-[540px]">
            <FreeTrial />
            <div className={`px-[24px] bg-white flex flex-col gap-10 py-[24px] xl:px-[40px] text-[14px] font-semibold leading-[26px] tracking-[0.25px] text-[#3D3B48] rounded-[10px] shadow-formShadow xl:gap-[20px] ${Object.values(errors).some((err) => err) ? 'text-[#FF7979]': ''}`}>
                <label>
                    <StyledInput
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        changeValue={handleChange}
                        errors={errors.firstNameErr}
                    />
                </label>
                <label>
                    <StyledInput
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        changeValue={handleChange}
                        errors={errors.lastNameErr}
                    />
                </label>
                <label>
                    <StyledInput
                        type="text"
                        placeholder="Email Address"
                        name="email"
                        changeValue={handleChange}
                        errors={errors.emailErr}
                        isEmail={true}
                    />
                </label>
                <label>
                    <StyledInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        changeValue={handleChange}
                        errors={errors.passwordErr}
                    />
                </label>
                <div className="flex flex-col gap-[8px]">
                    <Button onClickCommand={validateInputs} />
                    <p className="px-[15px] text-[#BAB7D4] text-[11px] font-medium leading-[21px] text-center ">
                        By clicking the button, you are agreeing to our{' '}
                        <a
                            href="/"
                            className="cursor:pointer text-[#FF7979] font-bold"
                        >
                            Terms and Services
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Form;
