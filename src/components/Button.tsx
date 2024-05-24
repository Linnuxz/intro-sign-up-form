type ButtonFunction = {
    onClickCommand: () => void;
};

const Button = ({ onClickCommand }: ButtonFunction) => {
    return (
        <button
            className="text-white text-[15px] font-semibold leading-[26px] tracking-[1px] text-center bg-[#38CC8B] w-full h-[56px] rounded-[5px] shadow-buttonShadow active:bg-[#77E2B3] duration-100"
            onClick={onClickCommand}
        >
            CLAIM YOUR FREE TRIAL
        </button>
    );
};

export default Button;
