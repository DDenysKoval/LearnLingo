import type { Teacher } from "../../types/teacher";

interface TeacherDataProps {
  teacherData: Teacher;
}

const TeacherItem = ({ teacherData }: TeacherDataProps) => {
  return (
    <li className="">
      <div className="flex flex-row">
        <div>avatar</div>
        <div>
          <p>Languages</p>
          <ul>
            <li>Lessons online</li>
            <li>Lessons done: {teacherData.lessons_done}</li>
            <li>Rating: {teacherData.rating}</li>
            <li>Price / 1 hour: {teacherData.price_per_hour}</li>
          </ul>
        </div>
        <div>
          <h2>
            {teacherData.name} {teacherData.surname}
          </h2>
          <ul>
            Speaks:{" "}
            {teacherData.languages.map((language, index) => (
              <span key={language}>
                {language}
                {index < teacherData.languages.length - 1 && ", "}
              </span>
            ))}
          </ul>
          <p>Lesson Info: {teacherData.lesson_info}</p>
          <ul>
            Conditions:{" "}
            {teacherData.conditions.map((condition) => {
              return <li>{condition}</li>;
            })}
          </ul>
        </div>
      </div>
      <button>Read more</button>
      <ul className="flex">
        {teacherData.levels.map((level) => {
          return <li>{level}</li>;
        })}
      </ul>
    </li>
  );
};

export default TeacherItem;
