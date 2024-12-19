import { validateStepOne } from '@/utils/validate';
import { Input } from './Input';
import { useState } from 'react';

export const StepOne = ({
  setCurrentStep,
  onChange,
  form,
  errors,
  setErrors,
}) => {
  const [selectedImage, setSelectedImage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div>
      <b className="px-10"> Step 1 </b>

      <form className=" flex flex-col p-8">
        <Input
          label="FirstName"
          id="firstName"
          type="text"
          value={form.firstName}
          onChange={onChange}
          setErrors={setErrors}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          id="lastName"
          type="text"
          value={form.lastName}
          onChange={onChange}
          setErrors={setErrors}
          error={errors.lastName}
        />
        <Input
          label="Password"
          id="password"
          type="text"
          value={form.password}
          onChange={onChange}
          setErrors={setErrors}
          error={errors.password}
        />
        <Input
          label="confirmPassword"
          id="confirmPassword"
          type="text"
          value={form.confirmPassword}
          onChange={onChange}
          setErrors={setErrors}
          error={errors.confirmPassword}
        />
        {selectedImage ? (
          <div>
            <img src={selectedImage} />
          </div>
        ) : (
          <Input
            label="profileImage"
            id="profileImage"
            type="file"
            value={form.profileImage}
            onChange={handleFileChange}
            setErrors={setErrors}
            error={errors.profileImage}
          />
        )}
      </form>

      <button
        onClick={() => {
          const { isValid, newErrors } = validateStepOne(form);

          setErrors(newErrors);

          if (isValid) {
            setCurrentStep(2);
          }
        }}
      >
        Next
      </button>
    </div>
  );
};
