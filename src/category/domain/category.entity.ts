import { ValueObject } from "../../shared/domain/value-object";
import { Uuid } from "../../shared/domain/values-objects/uuid.vo";
import { Entity } from "../../shared/entity";

export type CategoryConstructorProps = {
  categoryId?: Uuid;
  name: string;
  description?: string | null;
  isActive?: boolean;
  createdAt?: Date;
};

export type CategoryCreateCommand = {
  name: string;
  description?: string;
  isActive?: boolean;
};

export class Category extends Entity {
  categoryId?: Uuid;
  name: string;
  description: string | null;
  isActive: boolean;
  createdAt: Date;

  constructor(props: CategoryConstructorProps) {
    super();
    this.categoryId = props.categoryId ?? new Uuid();
    this.name = props.name;
    this.description = props.description ?? null;
    this.isActive = props.isActive ?? true;
    this.createdAt = props.createdAt ?? new Date();
  }

  get entityId(): ValueObject {
    return this.categoryId;
  }

  static create(props: CategoryCreateCommand): Category {
    const category = new Category(props);
    //Category.validate(category);
    return category;
  }

  changeName(name: string): void {
    this.name = name;
    //Category.validate(this)
  }

  changeDescription(description: string): void {
    this.description = description;
    //Category.validate(this)
  }

  activate(): void {
    this.isActive = true;
  }

  deactivate(): void {
    this.isActive = false;
  }

  toJSON() {
    return {
      categoryId: this.categoryId?.id,
      name: this.name,
      description: this.description,
      isActive: this.isActive,
      createdAt: this.createdAt,
    };
  }
}
