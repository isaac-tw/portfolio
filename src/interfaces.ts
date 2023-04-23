import { type ElementType } from 'react';

export interface Education {
  Degree: string;
  School: string;
  Duration: string;
  Additional?: string;
}

export interface Experience {
  Title: string;
  'Company name': string;
  Duration: string;
  Additional?: string;
}

export interface Activity {
  Name: string;
  Organization?: string;
  Duration: string;
  Additional?: string;
}

export interface Skill {
  Language?: string;
  '3D Modeling'?: string;
  Adobe?: string;
  Programming?: string;
  Other?: string;
}

export interface About {
  Description: string;
  Education: Education[];
  Experience: Experience[];
  Activity: Activity[];
  Skill: Skill[];
}

export interface Item {
  component?: ElementType;
  file?: string;
  format: string;
  dimensions?: string;
  keyWord?: string;
  src?: string;
}

export interface Project {
  details: Item[][];
  duration: string;
  id: string;
  name: string;
  note?: string;
  subtitle: string;
  year: number;
}

export interface Projects {
  'candle-chair': Project;
  duplo: Project;
  deepsense: Project;
  luggageplus: Project;
  magprint: Project;
  'o-assist': Project;
  'remote-control-redesign': Project;
  'searching-ball': Project;
}
