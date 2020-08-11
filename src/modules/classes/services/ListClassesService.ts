import { inject, injectable } from 'tsyringe';
import IClassesRepository from '../repositories/IClassesRepository';
import { IClassesFilters } from '../interfaces/ClasssInterface';
import Class from '../repositories/typeorm/entities/Class';

@injectable()
class ListClassesService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) { }

  public async execute({
    week_day,
    time,
    subject,
  }: IClassesFilters): Promise<Class[]> {
    const classes = await this.classesRepository.index({
      week_day,
      subject,
      time,
    });

    return classes;
  }
}

export default ListClassesService;
