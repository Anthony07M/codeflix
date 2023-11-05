import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Category } from "./category.entity";

export class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  constructor({ name, description, isActive }: Category) {
    Object.assign(this, { name, description, isActive });
  }
}

class CategoryValidator {
  validate(entity: Category) {

  }
}
