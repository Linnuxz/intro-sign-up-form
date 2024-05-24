import Form from "./components/Form";

const App = () => {
    return (
        <div className="px-6 min-h-screen py-[88px] flex flex-col gap-16 max-w-[540px] justify-center mx-auto xl:flex-row xl:max-w-full items-center">
            <div className="text-center flex flex-col gap-4 text-white max-w-[540px] xl:justify-center xl:text-left">
                <h2 className="text-[28px] leading-[36px] tracking-[-0.292px] font-bold xl:text-[50px] xl:leading-[55px]">
                    Learn to code by watching others
                </h2>
                <p className="text-[16px] leading-[26px] font-medium">
                    See how experienced developers solve problems in real-time.
                    Watching scripted tutorials is great, but understanding how
                    developers think is invaluable.
                </p>
            </div>
            <div>
              <Form />
            </div>
        </div>
    );
};

export default App;
