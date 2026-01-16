import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../features/auth/useAuth";
import { updateProfile } from "firebase/auth";

import ButtonComp from "../ButtonComp/ButtonComp";

export interface SubmitRegisterFormValues {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubmitRegisterFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SubmitRegisterFormValues> = async (values) => {
    try {
      if (!isSubmitting) {
        setIsSubmitting(true);
        const userCredential = await doCreateUserWithEmailAndPassword(
          values.email,
          values.password
        );

        if (userCredential.user) {
          await updateProfile(userCredential.user, {
            displayName: values.name,
          });
        }

        toast.success("Register was successfully!");
        onSuccess();
        reset();
        navigate("/teachers");
      }
    } catch {
      toast.error("Registration failed");
      setIsSubmitting(false);
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

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="relative">
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
          />
          {errors.name && (
            <span className="text-red-400 text-[10px] absolute top-14 left-0">
              {errors.name.message}
            </span>
          )}
        </label>

        <label className="relative">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
          />
          {errors.email && (
            <span className="text-red-400 text-[10px] absolute top-14 left-0">
              {errors.email.message}
            </span>
          )}
        </label>

        <label className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-10"
          />
          {errors.password && (
            <span className="text-red-400 text-[10px] absolute top-14 left-0">
              {errors.password.message}
            </span>
          )}
          <button
            type="button"
            className="absolute top-4 right-4.5 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
            onMouseDown={(e) => e.preventDefault()}
          >
            <svg
              className={`fill-none hover:stroke-[#d87f7f] transition duration-300 ease-in-out ${
                showPassword ? "stroke-orange" : "stroke-black"
              }`}
              width={20}
              height={20}
            >
              <use href="/icons.svg#eye" />
            </svg>
          </button>
        </label>

        <ButtonComp
          width="w-full"
          text={isSubmitting ? "Signing Up..." : "Sign Up"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default RegisterForm;
