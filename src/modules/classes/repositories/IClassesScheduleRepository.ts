import ClassSchedule from './typeorm/entities/ClassSchedule';
import { IClassesFilters } from '../interfaces/ClasssInterface';

export default interface IClassesScheduleRepository {
  index(classesScheduleData: IClassesFilters): Promise<ClassSchedule[]>;
}
