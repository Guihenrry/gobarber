import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthsAvailabilityService from '@modules/appointments/services/ListProviderMonthsAvailabilityService';

export default class ProviderMonthsAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listProviderMonthsAvailability = container.resolve(
      ListProviderMonthsAvailabilityService,
    );

    const availability = await listProviderMonthsAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
