export interface Job {
  id: number;
  title: string;
  image: string;
  salary: string;
  location: string;
  jobtype: string;
  category: string;
}

const JobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    image: "/images/c1.png",
    salary: "35k - 40k",
    location: "London,Uk",
    jobtype: "full time",
    category: "Data Analysis",
  },
  {
    id: 2,
    title: "DevOps Engineer",
    image: "/images/c2.png",
    salary: "35k - 40k",
    location: "Pakistan",
    jobtype: "full time",
    category: "Marketing",
  },
  {
    id: 3,
    title: "Fronetend Engineer",
    image: "/images/c3.png",
    salary: "45k - 50k",
    location: "Kolkata,India",
    jobtype: "full time",
    category: "Software",
  },
  {
    id: 4,
    title: "Backend Developer",
    image: "/images/c4.png",
    salary: "25k - 30k",
    location: "USA",
    jobtype: "Part time",
    category: "Data Analysis",
  },
  {
    id: 5,
    title: "Fullstack Developer",
    image: "/images/c5.png",
    salary: "55k - 60k",
    location: "Australia",
    jobtype: "full time",
    category: "Software",
  },
  {
    id: 6,
    title: "Web Designer",
    image: "/images/c6.png",
    salary: "25k - 30k",
    location: "Canada",
    jobtype: "Freelance",
    category: "Marketing",
  },
];

export default JobData;
