import { IClass, IClassesFilters } from '../interfaces/ClasssInterface';
import Class from './typeorm/entities/Class';

export default interface IClassesRepository {
  index(classesFilters: IClassesFilters): Promise<Class[]>;
  create(classesProps: IClass): Promise<Class>;
}
