import { injectable, inject } from 'tsyringe';
import IUserRepository from '../../users/repositories/IUserRepository';
import IClassesRepository from '../repositories/IClassesRepository';
import convertHourToMinutes from '../../../utils/convertHourToMinutes';
import Class from '../repositories/typeorm/entities/Class';

interface ScheduleItemProps {
  week_day: number;
  from: string;
  to: string;
}

interface CreateClassesProps {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
  schedule: ScheduleItemProps[];
}

@injectable()
class CreateClassesService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) { }

  public async execute({
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  }: CreateClassesProps): Promise<Class> {
    const user = await this.userRepository.create({
      name,
      avatar,
      whatsapp,
      bio,
    });

    const classSchedule = schedule.map(scheduleItem => {
      return {
        week_day: scheduleItem.week_day,
        from: convertHourToMinutes(scheduleItem.from),
        to: convertHourToMinutes(scheduleItem.to),
      };
    });

    const classes = await this.classesRepository.create({
      subject,
      cost,
      user_id: user.id,
      schedule: classSchedule,
    });

    return classes;
  }
}

export default CreateClassesService;
