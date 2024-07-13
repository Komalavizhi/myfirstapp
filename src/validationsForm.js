import * as yup from "yup";


const validationsForm = {
  name: yup.string().required("Required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  department: yup.string().required("Select your course category"),
  password: yup
    .string()
    .min(8, "Password must contain at least 8 characters")
    .required("Enter your password"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Password does not match")
    .required("Confirm your password")
};

export default validationsForm;
