const FreeTrial = () => {
    return (
        <div className="bg-[#5E54A4] px-6 h-[88px] flex items-center justify-center text-center rounded-md shadow-freeTrialShadow xl:h-[60px]">
            <p className="text-white font-normal leading-[26px] tracking-[0.268px]">
                <span className="font-bold">Try it free 7 days</span> then{' '}
                <br className="xl:hidden" /> $20/mo. thereafter
            </p>
        </div>
    );
};

export default FreeTrial;
