import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  readonly statusCode = 500;
  private reason = 'Error connecting to database';

  constructor() {
    super('Error connecting to database');

    // Needed because we are extending a built in class.
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
