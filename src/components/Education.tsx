type EducationData = {
  college: string;
  degree: string;
  grade: string;
  year_finished: Date;
  description: string;
};
const MyEducation: EducationData[] = [
  {
    college: 'Eduvos',
    degree: 'BSC IT',
    grade: 'Cum Laude (90%)',
    year_finished: new Date('2022-12-9'),
    description:
      'Finished My Bachelors Degree in Information Technology Majoring in Software Engineering in 2022 and will be graduating with a Cum Laude (90%), thereafter I will continue with my studies in 2023 when I pursue a Honours degree.',
  },
];

function Education() {
  return (
    <div
      id="education"
      className="w-full h-fit font-bold text-3xl font-mono flex flex-col items-center justify-start"
    >
      <h1 className="text-text flex items-center justify-start space-x-4 mb-5">
        <span className="text-secondary text-2xl">03.</span>Education
        <hr className="w-[10rem] text-text2" />
      </h1>
      <div className="h-fit w-full block">
        {MyEducation!.map((education: EducationData) => {
          return <EducationLabel {...education} />;
        })}
      </div>
    </div>
  );
}

export default Education;
import { BsCheck2 } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdOutlineGrade, MdOutlineRotate90DegreesCcw } from 'react-icons/md';
function EducationLabel(props: EducationData) {
  return (
    <div className="h-fit bg-navy2 rounded-lg px-4 py-4 md:h-[15rem] project-view">
      <div className="flex flex-col items-center w-full justify-center text-center text-text md:space-x-8 md:flex-row md:h-[10rem] md:justify-center md:items-center">
        <h1 className="flex items-center justify-center gap-2 text-2xl">
          <IoSchoolOutline
            className="cursor-pointer hover:animate-spin"
            color="#64ffda"
          />
          College: {props.college}
        </h1>
        <h1 className="flex items-center justify-center gap-2 text-2xl">
          <MdOutlineRotate90DegreesCcw
            className="cursor-pointer hover:animate-spin"
            color="#64ffda"
          />
          Degree: {props.degree}
        </h1>
        <h1 className="flex items-center justify-center gap-2 text-2xl">
          <MdOutlineGrade
            className="cursor-pointer hover:animate-spin"
            color="#64ffda"
          />
          Grade: {props.grade}
        </h1>
        <h1 className="flex flex-col w-fit items-center justify-center text-2xl md:gap-2">
          <span className="flex items-center gap-2">
            <BsCheck2
              className="cursor-pointer hover:animate-spin"
              color="#64ffda"
            />{' '}
            Completed:
          </span>{' '}
          {props.year_finished?.toDateString() || 'Fri Dec 09 2022'}
        </h1>
      </div>
      <p className="text-text2 text-lg hover:text-secondary cursor-pointer transition-colors duration-700 text-center w-full">
        {props.description}
      </p>
    </div>
  );
}
