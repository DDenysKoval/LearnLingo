const Statistics = () => {
  return (
    <div className="flex justify-center h-29 px-30.5 items-center rounded-[30px] border-2 border-dashed border-orange">
      <ul className="flex justify-center items-center gap-25">
        <li className="statistics-list-item">
          <p className="statistics-list-item-number">32,000+</p>
          <p className="statistics-list-item-text">Experienced tutors</p>
        </li>
        <li className="statistics-list-item">
          <p className="statistics-list-item-number">300,000+</p>
          <p className="statistics-list-item-text">5-star tutor reviews</p>
        </li>
        <li className="statistics-list-item">
          <p className="statistics-list-item-number">120+</p>
          <p className="statistics-list-item-text">Subjects taught</p>
        </li>
        <li className="statistics-list-item">
          <p className="statistics-list-item-number">200+</p>
          <p className="statistics-list-item-text">Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
