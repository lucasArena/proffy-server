import { Repository, getRepository } from 'typeorm';
import { IClassesFilters } from '../../interfaces/ClasssInterface';
import IClassesScheduleRepository from '../IClassesScheduleRepository';
import ClassSchedule from './entities/ClassSchedule';

class ClassesScheduleRepository implements IClassesScheduleRepository {
  private repository: Repository<ClassSchedule>;

  constructor() {
    this.repository = getRepository(ClassSchedule);
  }

  public async index({
    week_day,
    subject,
    time,
  }: IClassesFilters): Promise<ClassSchedule[]> {
    const classes = await this.repository.find({
      relations: ['class'],
    });

    return classes;
  }
}

export default ClassesScheduleRepository;
