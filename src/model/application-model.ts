/* eslint-disable @typescript-eslint/no-empty-object-type */
import AboutMe from '@/modules/docker/AboutMe';
import AboutSo from '@/modules/docker/AboutSo';
import Calculator from '@/modules/docker/Calculator';
import Calendar from '@/modules/docker/Calendar';
import Clock from '@/modules/docker/Clock';
import DockerConfig from '@/modules/docker/DockerConfig';
import DockerPreferencesApp from '@/modules/docker/DockerPreferencesApp';
import Map from '@/modules/docker/Map';
import Music from '@/modules/docker/Music';
import Note from '@/modules/docker/Note';
import Profile from '@/modules/docker/Profile';
import SoPreferenceApp from '@/modules/docker/SoPreferenceApp';
import Time from '@/modules/docker/Time';
import ExpMe from '@/modules/toolbar/usecase/ExpMe';
import HistoricMe from '@/modules/toolbar/usecase/HistoricMe';
import ServiceMe from '@/modules/toolbar/usecase/ServiceMe';
import SkillsMe from '@/modules/toolbar/usecase/SkillsMe';
import type { LucideIcon } from 'lucide-react';

export enum Applications {
  Configuration = 'CONFIGURATION',
  Map = 'MAP',
  Clock = 'CLOCK',
  Calendar = 'CALENDAR',
  Profile = 'PROFILE',
  Calculator = 'CALCULATOR',
  Music = 'MUSIC',
  Note = 'NOTE',
  Time = 'TIME',
  about_so = 'ABOUT_SISTEM',
  about_me = 'ABOUT_ME',
  historic_me = 'HISTORIC_ME',
  exp_me = 'EXP_ME',
  skills = 'SKILLS_ME',
  service = 'SERVICE_ME',
  so_preference = 'SO_PREFERENCE',
  docker_preference = 'DOCKER_PREFERENCE',
}

export const ApplicationsComponent: Record<
  Applications,
  React.ComponentType<{}>
> = {
  // docker apps
  [Applications.Configuration]: DockerConfig, //nao usado ainda
  [Applications.Map]: Map,
  [Applications.Clock]: Clock,
  [Applications.Calendar]: Calendar,
  [Applications.Profile]: Profile,
  [Applications.Calculator]: Calculator,
  [Applications.Music]: Music,
  [Applications.Note]: Note,
  [Applications.Time]: Time,

  [Applications.about_so]: AboutSo,
  [Applications.about_me]: AboutMe,
  [Applications.historic_me]: HistoricMe,
  [Applications.exp_me]: ExpMe,
  [Applications.skills]: SkillsMe,
  [Applications.service]: ServiceMe,
  [Applications.so_preference]: SoPreferenceApp,
  [Applications.docker_preference]: DockerPreferencesApp,
};

export type TAppRuntime = {
  id?: Applications | number;
  index: number;
  minimize: boolean;
  appName?: string;
  tooltip?: string;
  icon?: LucideIcon | null;
};
