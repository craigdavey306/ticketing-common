/**
 * Abstract class used for defining new custom error classes.
 *
 * When defining a new customer error class, remember to include
 * the following in the constructor method:
 * ```js
 * Object.setPrototypeOf(this, NewCustomClass.prototype);
 * ```
 *
 * Where 'NewCustomClass' is the name of the new class.
 */
export abstract class CustomError extends Error {
  abstract readonly statusCode: number;

  constructor(message: string) {
    super(message);

    // Needed because we are extending a built in class.
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; field?: string }[];
}
