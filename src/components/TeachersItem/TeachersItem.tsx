import type { Teacher } from "../../types/teacher";

interface TeacherDataProps {
  teacherData: Teacher;
}

const TeacherItem = ({ teacherData }: TeacherDataProps) => {
  return (
    <>
      <div className="flex flex-row w-296 bg-white rounded-3xl p-8 ">
        <div className="flex justify-center items-center w-30 h-30 rounded-[50%] border-[3px] border-orange shrink-0 mr-12 relative">
          <img
            className="w-24 h-24 rounded-[50%]"
            src={teacherData.avatar_url}
            alt="teachers avatar"
          />
          <div className="absolute h-3 w-3 top-4 right-5 bg-[#38cd3e] rounded-[50%] border-white border-2"></div>
        </div>
        <div className="flex flex-col grow-1">
          <div className="flex flex-row justify-between">
            <div className="mb-8">
              <p className="mb-2">Languages</p>
              <h2>
                {teacherData.name} {teacherData.surname}
              </h2>
            </div>
            <ul className="flex flex-row gap-8">
              <li>Lessons online</li>
              <li>Lessons done: {teacherData.lessons_done}</li>
              <li>Rating: {teacherData.rating}</li>
              <li>Price / 1 hour: {teacherData.price_per_hour}</li>
            </ul>
          </div>
          <div className="flex flex-col items-start mb-8">
            <div className="flex">
              <span className="mr-1">Speaks: </span>
              <ul className="flex mb-2 gap-1">
                {teacherData.languages.map((language, index) => (
                  <li key={language}>
                    {language}
                    {index < teacherData.languages.length - 1 && ", "}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mb-2">Lesson Info: {teacherData.lesson_info}</p>
            <div className="flex">
              <span className="mr-1">Conditions: </span>
              <ul className="flex mb-4 gap-1">
                {teacherData.conditions.map((condition) => {
                  return <li key={condition}>{condition}</li>;
                })}
              </ul>
            </div>
            <button className="leading-normal font-medium underline">
              Read more
            </button>
          </div>
          <ul className="flex">
            {teacherData.levels.map((level) => {
              return <li key={level}>{level}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TeacherItem;
