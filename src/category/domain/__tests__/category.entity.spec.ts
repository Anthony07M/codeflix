import { Uuid } from "../../../shared/domain/values-objects/uuid.vo";
import { Category } from "../category.entity";

describe("Category Unit Tests", () => {
  test("should be crate Category values defaul", () => {
    const category = new Category({
      name: "Movie",
    });

    expect(category.categoryId).toBeInstanceOf(Uuid);
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.isActive).toBeTruthy();
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  test("should be create Category with values a description, name, isActive and createdAt", () => {
    const createdAt = new Date(2023, 11, 2);
    const category = new Category({
      name: "Test",
      description: "Lorem ipsum",
      isActive: false,
      createdAt,
    });

    expect(category.name).toBe("Test");
    expect(category.description).toBe("Lorem ipsum");
    expect(category.isActive).toBeFalsy();
    expect(category.createdAt).toBeInstanceOf(Date);
    expect(category.createdAt.getFullYear()).toBe(2023);
  });

  test("should be change name, isAcative and decription", () => {
    const category = Category.create({
      name: "Test",
      description: "Lorem ipsum",
      isActive: false,
    });

    expect(category.name).toBe("Test");
    expect(category.description).toBe("Lorem ipsum");
    expect(category.isActive).toBe(false);

    category.changeName("other name");
    category.changeDescription("other description");
    category.activate();

    expect(category.name).toBe("other name");
    expect(category.description).toBe("other description");
    expect(category.isActive).toBeTruthy();
  });
});
