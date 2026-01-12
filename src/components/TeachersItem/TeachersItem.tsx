import { useState } from "react";
import type { Teacher } from "../../types/teacher";
import clsx from "clsx";
import ButtonComp from "../ButtonComp/ButtonComp";
import BookingForm from "../BookingForm/BookingForm";
import Modal from "../Modal/Modal";

interface TeacherDataProps {
  teacherData: Teacher;
}

const TeacherItem = ({ teacherData }: TeacherDataProps) => {
  const [isUnfolded, setIsUnfolded] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleUnfold = () => {
    setIsUnfolded(true);
  };
  const handleClick = () => {
    setModalIsOpen(true);
  };
  const handleClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="flex flex-row w-296 bg-white rounded-3xl p-8 transition duration-300 ease-in-out">
        <div className="flex justify-center items-center w-30 h-30 rounded-[50%] border-[3px] border-orange shrink-0 mr-12 relative">
          <img
            className="w-24 h-24 rounded-[50%]"
            src={teacherData.avatar_url}
            alt="teachers avatar"
          />
          <div className="absolute h-3 w-3 top-4 right-5 bg-[#38cd3e] rounded-[50%] border-white border-2"></div>
        </div>
        <div className="flex flex-col grow">
          <div className="flex flex-row justify-between">
            <div className="mb-8">
              <p className="mb-2 leading-normal text-[#8a8a89] font-medium">
                Languages
              </p>
              <h2 className="text-2xl font-medium">
                {teacherData.name} {teacherData.surname}
              </h2>
            </div>
            <div className="flex flex-row  items-center h-6.5">
              <div className="flex flex-row gap-8">
                <div className="flex gap-2 items-center relative after:absolute after:h-4 after:w-px after:bg-neutral-300 after:-right-4">
                  <svg
                    className="fill-none stroke-black"
                    height={16}
                    width={16}
                  >
                    <use href="/icons.svg#book"></use>
                  </svg>
                  <p className="font-medium leading-normal">Lessons online</p>
                </div>
                <p className="flex items-center font-medium leading-normal relative after:absolute after:h-4 after:w-px after:bg-neutral-300 after:-right-4">
                  Lessons done: {teacherData.lessons_done}
                </p>
                <div className="flex gap-2 items-center relative after:absolute after:h-4 after:w-px after:bg-neutral-300 after:-right-4">
                  <svg className="fill-orange" height={16} width={16}>
                    <use href="/icons.svg#star"></use>
                  </svg>
                  <p className="font-medium leading-normal">
                    Rating: {teacherData.rating}
                  </p>
                </div>
                <p className="mr-16 font-medium leading-normal">
                  Price / 1 hour:{" "}
                  <span className="text-[#38cd3e]">
                    {teacherData.price_per_hour}$
                  </span>
                </p>
              </div>
              <button type="button">
                <svg
                  className="fill-none stroke-black hover:stroke-orange transition duration-300 ease-in-out"
                  height={26}
                  width={26}
                >
                  <use href="/icons.svg#heart"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start mb-8">
            <div className="flex leading-normal font-medium">
              <span className="mr-1  text-[#8a8a89] ">Speaks: </span>
              <ul className="flex mb-2 gap-1 underline">
                {teacherData.languages.map((language, index) => (
                  <li key={language}>
                    {language}
                    {index < teacherData.languages.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mb-2 leading-normal font-medium">
              <span className="mr-1  text-[#8a8a89] ">Lesson Info:</span>
              {teacherData.lesson_info}
            </p>
            <div className="flex leading-normal font-medium">
              <span className="mr-1  text-[#8a8a89] ">Conditions:</span>
              <ul className={clsx("flex gap-1", isUnfolded ? "mb-0" : "mb-4")}>
                {teacherData.conditions.map((condition) => {
                  return <li key={condition}>{condition}</li>;
                })}
              </ul>
            </div>
            <button
              className={clsx(
                "leading-normal font-medium underline cursor-pointer hover:text-[#d87f7f] transition duration-300 ease-in-out",
                isUnfolded && "hidden"
              )}
              type="button"
              onClick={handleUnfold}
            >
              Read more
            </button>
          </div>
          <div
            className={clsx(
              "transition duration-300 ease-in-out",
              isUnfolded ? "block" : "hidden"
            )}
          >
            <p className="leading-normal mb-8">{teacherData.experience}</p>
            <ul className="flex flex-col gap-8 mb-8">
              {teacherData.reviews.map((review) => {
                return (
                  <li className="flex flex-col">
                    <div className="flex mb-4">
                      <img
                        className="w-11 h-11 rounded-[50%] mr-3"
                        src={teacherData.avatar_url}
                        alt="reviewers avatar"
                      />
                      <div>
                        <h3 className="text-[#8a8a89] leading-normal mb-0.5">
                          {review.reviewer_name}
                        </h3>
                        <div className="flex ">
                          <svg
                            className="fill-orange mr-2"
                            height={16}
                            width={16}
                          >
                            <use href="icons.svg#star"></use>
                          </svg>
                          <p>{review.reviewer_rating}.0</p>
                        </div>
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={clsx("flex gap-2 ", isUnfolded && "mb-8")}>
            {teacherData.levels.map((level) => {
              return (
                <li
                  className="flex justify-center items-center h-8 border border-neutral-300 rounded-4xl px-3 text-[14px] font-medium first:bg-orange"
                  key={level}
                >
                  #{level}
                </li>
              );
            })}
          </ul>
          {isUnfolded && (
            <ButtonComp
              text="Book trial lesson"
              width="w-[232px]"
              onClick={handleClick}
              type="button"
            />
          )}
          {modalIsOpen && (
            <Modal onClose={handleClose} width="w-150">
              <BookingForm teacherData={teacherData} />
            </Modal>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherItem;
