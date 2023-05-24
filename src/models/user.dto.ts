import { BaseDTO } from "./base.dto";
import { ReviewDTO } from "./review.dto";

export class UserDTO extends BaseDTO {
  email: string | undefined;

  password: string | undefined;

  name: string | undefined;

  date_of_birth: Date | undefined;

  reviews?: ReviewDTO[];
} //TODO: Remove these "undefined"

export class UserCredentialsDTO {
  email: string | undefined;

  password: string | undefined;
} //TODO: Remove these "undefined"
