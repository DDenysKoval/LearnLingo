import { useState } from "react";
import ButtonComp from "../ButtonComp/ButtonComp";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import { Navigate, useNavigate } from "react-router";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../features/auth/useAuth";
import { updateProfile } from "firebase/auth";

export interface SubmitRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const initialValues: SubmitRegisterFormValues = {
  name: "",
  email: "",
  password: "",
};

const submitRegisterFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface RegisterFormProps {
  onSuccess: () => void;
}

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (
    values: SubmitRegisterFormValues,
    actions: FormikHelpers<SubmitRegisterFormValues>
  ) => {
    try {
      const userCredential = await doCreateUserWithEmailAndPassword(
        values.email,
        values.password
      );

      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: values.name,
        });
      }
      onSuccess();
      toast.success("Register was successfully!");
      actions.resetForm();
      navigate("/teachers");
    } catch {
      toast.error("Registration failed");
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/teachers" replace />;
  }

  return (
    <div>
      <h2 className="mb-5 text-[40px] font-medium leading-[1.2]">
        Registration
      </h2>
      <p className="mb-10 leading-[1.38]">
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={submitRegisterFormSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col">
          <label className="relative" htmlFor="name">
            <Field
              className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className="text-red-400 text-[10px] absolute top-14 left-0"
            />
          </label>
          <label className="relative" htmlFor="email">
            <Field
              className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange  mb-4.5"
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className="text-red-400 text-[10px] absolute top-14 left-0"
            />
          </label>
          <label className="relative" htmlFor="password">
            <Field
              className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange  mb-10"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-400 text-[10px] absolute top-14 left-0"
            />
            <button
              className="absolute top-4 right-4.5 cursor-pointer"
              type="button"
              onClick={handleClick}
              onMouseDown={(e) => e.preventDefault()}
            >
              <svg
                className={`fill-none hover:stroke-[#d87f7f] transition duration-300 ease-in-out ${
                  showPassword ? "stroke-orange" : " stroke-black"
                }`}
                width={20}
                height={20}
              >
                <use href="/icons.svg#eye"></use>
              </svg>
            </button>
          </label>
          <ButtonComp width="w-full" text="Sign Up" type="submit" />
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
