import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router";
import ButtonComp from "../ButtonComp/ButtonComp";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { useAuth } from "../../features/auth/useAuth";

export interface SubmitLoginFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubmitLoginFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SubmitLoginFormValues> = async (values) => {
    try {
      if (!isSigningIn) {
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(values.email, values.password);
      }

      toast.success("Successfully logged in!");
      onSuccess();
      reset();
      navigate("/teachers");
    } catch {
      toast.error("Login failed");
      setIsSigningIn(false);
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/teachers" replace />;
  }

  return (
    <div>
      <h2 className="mb-5 text-[40px] font-medium leading-[1.2]">Log In</h2>
      <p className="mb-10 leading-[1.38]">
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>

      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
              className={`fill-none transition duration-300 ${
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
          text={isSubmitting ? "Logging in..." : "Log In"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default LoginForm;
