type EducationData = {
  college: string;
  degree: string;
  grade: string;
  year_finished: Date | string;
  description: string;
};
const MyEducation: EducationData[] = [
  {
    college: 'Eduvos',
    degree: 'BSC IT (SWE)',
    grade: 'Cum Laude (90%)',
    year_finished: new Date('2022-12-9'),
    description:
      'Finished My Bachelors Degree in Information Technology Majoring in Software Engineering in 2022 and graduated with (90%) (9 Distinctions).',
  },
  {
    college: 'Eduvos',
    degree: 'BSC IT (SWE) Honours',
    grade: 'Present',
    year_finished: new Date('2023-11-21'),
    description:
      'Obtained my Honours Degree in Information Technology Majoring in Software Engineering with a 76% average.',
  },
];

function Education() {
  return (
    <Section>
      <div
        id="education"
        className="w-full h-fit font-bold text-3xl font-mono flex flex-col items-center justify-start"
      >
        <h1 className="text-text flex items-center justify-start self-start space-x-4 mb-5">
          <span className="text-secondary text-2xl">03.</span>Education
          <hr className="w-[6rem] text-text2" />
        </h1>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {MyEducation.map((education: EducationData) => {
            return <EducationLabel {...education} />;
          })}
        </div>
      </div>
    </Section>
  );
}

export default Education;
import { BsCheck2 } from 'react-icons/bs';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdOutlineGrade, MdOutlineRotate90DegreesCcw } from 'react-icons/md';
import Section from './Section';
function EducationLabel(props: EducationData) {
  return (
    <div className="bg-navy2 rounded-lg p-4 project-view w-[400px] aspect-square hover:border-2 cursor-pointer border-secondary transition-all duration-20000 ease-in">
      <div className="flex flex-col items-start w-full text-text gap-3 ">
        <h1 className="flex items-center justify-center gap-2 text-lg md:text-2xl">
          <IoSchoolOutline
            className="cursor-pointer hover:animate-spin"
            color="#64ffda"
          />
          College: {props.college}
        </h1>
        <h1 className="flex items-center justify-center gap-2 text-lg md:text-2xl">
          <MdOutlineRotate90DegreesCcw
            className="cursor-pointer hover:animate-spin"
            color="#64ffda"
          />
          Degree: {props.degree}
        </h1>
        <h1 className="flex items-center justify-center gap-2 text-lg md:text-2xl">
          <MdOutlineGrade
            className="cursor-pointer hover:animate-spin"
            color="#64ffda"
          />
          Grade: {props.grade}
        </h1>
        <h1 className="flex w-fit items-center justify-center text-lg md:text-2xl">
          <span className="flex items-center gap-2">
            <BsCheck2
              className="cursor-pointer hover:animate-spin"
              color="#64ffda"
            />
            Completed:
          </span>
          {typeof props.year_finished === 'string'
            ? props.year_finished
            : props.year_finished.toLocaleString('en-ZA', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
        </h1>
        <p className="text-text2 p-8 text-lg hover:text-secondary cursor-pointer transition-colors duration-700 w-full">
          {props.description}
        </p>
      </div>
    </div>
  );
}
