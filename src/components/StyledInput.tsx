import ErrorIcon from '../assets/icon-error.svg';

type StyledInputProps = {
    type: string;
    placeholder: string;
    name: string;
    changeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors: boolean;
    isEmail?: boolean;
};

const StyledInput = ({
    type,
    placeholder,
    name,
    changeValue,
    errors,
    isEmail,
}: StyledInputProps) => {
    const displayPlaceholder =
        errors && isEmail ? 'email@example/com' : errors ? '' : placeholder;

    return (
        <div className="relative">
            <input
                className={`border-[1px] border-solid border-[#DEDEDE] w-full h-[56px] rounded-[5px] px-[15px] xl:px-[32px] outline-none focus:border-[#5E54A4] ${
                    errors
                        ? 'border-[#FF7979] placeholder-[#FF7979] border-2 text-[#FF7979]'
                        : ''
                }`}
                type={type}
                placeholder={displayPlaceholder}
                name={name}
                onChange={changeValue}
            />
            {errors && (
                <div className="mb-[20px]">
                    <img
                        src={ErrorIcon}
                        alt="error"
                        className="absolute top-4 right-[15px] w-[24px] h-[24px]"
                    />
                    <p className="text-[#FF7979] text-[11px] font-medium italic absolute right-0">
                        {placeholder} cannot be empty
                    </p>
                </div>
            )}
        </div>
    );
};

export default StyledInput;
