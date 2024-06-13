export interface Project {
  id: number;
  img: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
  date: {
    month: string;
    year: number;
  };
}
