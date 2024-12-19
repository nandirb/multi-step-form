export const validateStepOne = (form) => {
  let isValid = true;

  let newErrors = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };

  if (form.firstName === '') {
    isValid = false;
    newErrors.firstName = 'Ner bh ystoi';
  }

  if (form.lastName === '') {
    isValid = false;
    newErrors.lastName = 'Last Ner bh ystoi';
  }

  if (form.password === '') {
    isValid = false;
    newErrors.password = 'Password bh ystoi';
  }

  if (form.password.length < 8) {
    isValid = false;
    newErrors.password = 'Passwordiin urt +8  ystoi';
  }

  if (form.confirmPassword === '') {
    isValid = false;
    newErrors.confirmPassword = 'Password bh ystoi';
  }

  if (form.profileImage === '') {
    isValid = false;
    newErrors.profileImage = 'ystoi';
  }

  if (form.confirmPassword !== form.password) {
    isValid = false;
    newErrors.confirmPassword = '2 Password taarah ystoi';
  }

  return { isValid, newErrors };
};
