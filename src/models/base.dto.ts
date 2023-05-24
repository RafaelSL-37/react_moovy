export class BaseDTO {
  id: string | undefined;

  created_at: Date | undefined;

  updated_at: Date | undefined;

  deleted_at?: Date;
} //TODO: Remove these "undefined"
