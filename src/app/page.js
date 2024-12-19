'use client';

import { useState } from 'react';
import { StepOne } from '@/components/StepOne';
import { StepTwo } from '@/components/StepTwo';

const FormBody = ({
  currentStep,
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  if (currentStep === 1) {
    return (
      <StepOne
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        setErrors={setErrors}
        errors={errors}
      />
    );
  }

  if (currentStep === 2) {
    return <StepTwo setCurrentStep={setCurrentStep} />;
  }

  return <div>Success</div>;
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
  });

  const onChange = (e) => {
    const newValues = { ...form, [e.target.id]: e.target.value };
    setForm(newValues);
  };

  return (
    <div className="">
      <FormBody
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        onChange={onChange}
        form={form}
        setErrors={setErrors}
        errors={errors}
      />
    </div>
  );
}
