import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";

export class ReviewDTO extends BaseDTO {
  movie_id: string | undefined;

  review_file_path?: string;

  user_id: string | undefined;

  score: number | undefined;

  user?: UserDTO;
}
