import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";

export class ReviewDTO extends BaseDTO {
  movie_id!: string;

  review_file_path?: string;

  user_id!: string;

  score!: number;

  user?: UserDTO;
} //TODO: Remove these "undefined"
