import { Repository, getRepository, SelectQueryBuilder } from 'typeorm';
import IClassesRepository from '../IClassesRepository';
import { IClass, IClassesFilters } from '../../interfaces/ClasssInterface';
import Class from './entities/Class';
import ClassSchedule from './entities/ClassSchedule';

class ClassesRepository implements IClassesRepository {
  private repository: Repository<Class>;

  constructor() {
    this.repository = getRepository(Class);
  }

  public async index({
    week_day,
    subject,
    time,
  }: IClassesFilters): Promise<Class[]> {
    const classes = await this.repository.find({
      relations: ['schedule', 'user'],
      join: { alias: 'classes', innerJoin: { schedule: 'classes.schedule' } },
      where: (qb: SelectQueryBuilder<ClassSchedule>) => {
        qb.where({
          subject,
        })
          .andWhere('schedule.week_day = :week_day', {
            week_day,
          })
          .andWhere('schedule.from <= :time', {
            time,
          })
          .andWhere('schedule.to > :time', {
            time,
          });
      },
    });

    return classes;
  }

  public async create(classesData: IClass): Promise<Class> {
    const classes = this.repository.create(classesData);
    await this.repository.save(classes);

    return classes;
  }
}

export default ClassesRepository;
