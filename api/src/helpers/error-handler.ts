import { HttpStatus } from "@nestjs/common/enums"
import { HttpException } from "@nestjs/common/exceptions"
import { QueryError } from "mysql2"

export const databaseErrorHandler = (error: QueryError) => {
  console.log(error.code)
  const errors = {
    'ER_DUP_ENTRY': () => { throw new HttpException('Song already in queue', HttpStatus.CONFLICT) },
    'ER_NO_DEFAULT_FOR_FIELD': () => { throw new HttpException('Missing field', HttpStatus.BAD_REQUEST) },
    default: () => { throw error },
  }
  const errorHandler = errors[error.code] || errors['default'];

  throw errorHandler();
}