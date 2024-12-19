export const StepTwo = ({ setCurrentStep }) => {
  return (
    <div className="">
      <b className="px-10"> Step 2 </b>
      <button onClick={() => setCurrentStep(1)}>Back</button>
      <button onClick={() => setCurrentStep(3)}>Next</button>
    </div>
  );
};
