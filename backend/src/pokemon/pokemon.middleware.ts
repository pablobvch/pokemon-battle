import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';

@Injectable()
export class PokemonMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { pokemon1Id, pokemon2Id } = req.body;
    if (
      !pokemon1Id ||
      !pokemon2Id ||
      !Number.isInteger(pokemon1Id) ||
      !Number.isInteger(pokemon2Id)
    ) {
      throw new HttpException(
        'Pokemon IDs are required and must be integer values',
        HttpStatus.BAD_REQUEST,
      );
    }
    next();
  }
}
