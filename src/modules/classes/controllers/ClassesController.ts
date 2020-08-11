import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateClassesService from '../services/CreateClassesService';
import ListClassesService from '../services/ListClassesService';
import convertHourToMinutes from '../../../utils/convertHourToMinutes';

class ClassesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { week_day, subject, time } = request.query;

    const listClassesService = container.resolve(ListClassesService);

    const classes = await listClassesService.execute({
      week_day: Number(week_day),
      subject: String(subject),
      time: convertHourToMinutes(time as string),
    });

    return response.json(classes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const createClassesService = container.resolve(CreateClassesService);

    const classes = await createClassesService.execute({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    });

    return response.json(classes);
  }
}

export default ClassesController;
