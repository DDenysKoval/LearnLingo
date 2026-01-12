import { useForm, type SubmitHandler } from "react-hook-form";
import type { Teacher } from "../../types/teacher";
import ButtonComp from "../ButtonComp/ButtonComp";
import { useNavigate } from "react-router";

type Inputs = {
  name: string;
  email: string;
  phone: number;
};

interface BookingFormProps {
  teacherData: Teacher;
  onSuccess: () => void;
}

const BookingForm = ({ teacherData, onSuccess }: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    onSuccess();
    navigate("/");
  };

  return (
    <div>
      <p className="mb-5 font-medium leading-[1.2] text-[40px]">
        Book trial lesson
      </p>
      <p className="mb-5 leading-[1.38] text-[16px]">
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className="flex mb-10 items-center">
        <img
          className="w-11 h-11 rounded-[50%] mr-3.5"
          src={teacherData.avatar_url}
          alt="teachers avatar"
        />
        <div>
          <p className="text-[#8a8a89] text-[12px] leading-[1.33]">
            Your teacher
          </p>
          <h3 className="font-medium leading-normal">
            {teacherData.name} {teacherData.surname}
          </h3>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <legend className="mb-5 font-medium text-2xl">
          What is your main reason for learning English?
        </legend>
        <div className="flex flex-col gap-4 mb-10">
          <label className="flex items-center cursor-pointer" htmlFor="career">
            <input
              className="peer sr-only"
              type="radio"
              name="reason"
              id="career"
              value="career"
              defaultChecked
            />
            <span
              className="mr-2 w-5 h-5 rounded-full border-2 border-gray
                flex items-center justify-center
                peer-checked:border-orange
                before:content-['']
                before:w-2.5 before:h-2.5
                before:rounded-full
                before:bg-orange
                before:scale-0
                peer-checked:before:scale-100
                before:transition-transform"
            ></span>
            <span>Career and business</span>
          </label>
          <div>
            <label className="flex items-center cursor-pointer" htmlFor="kids">
              <input
                className="peer sr-only"
                type="radio"
                name="reason"
                id="kids"
                value="kids"
              />
              <span
                className="mr-2 w-5 h-5 rounded-full border-2 border-gray
                flex items-center justify-center
                peer-checked:border-orange
                before:content-['']
                before:w-2.5 before:h-2.5
                before:rounded-full
                before:bg-orange
                before:scale-0
                peer-checked:before:scale-100
                before:transition-transform"
              ></span>
              <span>Lesson for kids</span>
            </label>
          </div>
          <div>
            <label
              className="flex items-center cursor-pointer"
              htmlFor="abroad"
            >
              <input
                className="peer sr-only"
                type="radio"
                name="reason"
                id="abroad"
                value="abroad"
              />
              <span
                className="mr-2 w-5 h-5 rounded-full border-2 border-gray
                flex items-center justify-center
                peer-checked:border-orange
                before:content-['']
                before:w-2.5 before:h-2.5
                before:rounded-full
                before:bg-orange
                before:scale-0
                peer-checked:before:scale-100
                before:transition-transform"
              ></span>
              <span>Living abroad</span>
            </label>
          </div>
          <div>
            <label className="flex items-center cursor-pointer" htmlFor="exams">
              <input
                className="peer sr-only"
                type="radio"
                name="reason"
                id="exams"
                value="exams"
              />
              <span
                className="mr-2 w-5 h-5 rounded-full border-2 border-gray
                flex items-center justify-center
                peer-checked:border-orange
                before:content-['']
                before:w-2.5 before:h-2.5
                before:rounded-full
                before:bg-orange
                before:scale-0
                peer-checked:before:scale-100
                before:transition-transform"
              ></span>
              <span>Exams and coursework</span>
            </label>
          </div>
          <div>
            <label
              className="flex items-center cursor-pointer"
              htmlFor="travel"
            >
              <input
                className="peer sr-only"
                type="radio"
                name="reason"
                id="travel"
                value="travel"
              />
              <span
                className="mr-2 w-5 h-5 rounded-full border-2 border-gray
                flex items-center justify-center
                peer-checked:border-orange
                before:content-['']
                before:w-2.5 before:h-2.5
                before:rounded-full
                before:bg-orange
                before:scale-0
                peer-checked:before:scale-100
                before:transition-transform"
              ></span>
              <span>Culture, travel or hobby</span>
            </label>
          </div>
        </div>
        <div className="mb-10">
          <div className="relative">
            <input
              className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
              type="text"
              id="name"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Name must be under 20 characters",
                },
                pattern: {
                  value: /^[A-Za-zÀ-ÿ\s'-]+$/,
                  message: "Only letters are allowed",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-400 text-[10px] absolute top-14 left-0">
                {errors.name.message}
              </span>
            )}
            <label htmlFor="name"></label>
          </div>
          <div className="relative">
            <input
              className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
              type="email"
              id="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400 text-[10px] absolute top-14 left-0">
                {errors.email.message}
              </span>
            )}
            <label htmlFor="email"></label>
          </div>
          <div className="relative">
            <input
              className="h-13.5 border border-gray rounded-xl py-4 px-4.5 w-full placeholder:text-neutral-500 outline-orange focus:border-orange mb-4.5"
              type="tel"
              id="phone"
              placeholder="Phone number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+\s()-]{7,20}$/,
                  message: "Invalid phone number",
                },
              })}
            />
            {errors.phone && (
              <span className="text-red-400 text-[10px] absolute top-14 left-0">
                {errors.phone.message}
              </span>
            )}
            <label htmlFor="phone"></label>
          </div>
        </div>
        <ButtonComp text="Book" width="w-[472px]" type="submit" />
      </form>
    </div>
  );
};

export default BookingForm;
