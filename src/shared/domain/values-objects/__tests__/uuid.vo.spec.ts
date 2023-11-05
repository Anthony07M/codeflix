import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as validateUuid } from "uuid";

describe("Uuid Unit Tests", () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, "validate");
  //   test("should be throw error when uuid is invalid", () => {
  //     expect(() => {
  //       new Uuid("invalid-uuid");
  //     }).toThrowError(new InvalidUuidError());
  //   });

  test("should be create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(validateUuid(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test("should be accept a valid uuid", () => {
    const fakeUuid = "d3228fe8-4256-4f42-be2f-0a63896d7f37";
    const uuid = new Uuid(fakeUuid);

    expect(uuid.id).toBe(fakeUuid);
  });
});
