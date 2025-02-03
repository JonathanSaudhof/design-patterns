import { IPhone11Builder } from "../builder.oop";

describe("Testing Builder OOP", () => {
  test("should return an object with null values for properties", () => {
    const builder = new IPhone11Builder();
    const phone = builder.build();
    Object.entries(phone).forEach(([key, value]) => {
      console.log(key, value);
      expect(value).toBeNull();
    });
  });

  test("should return an object with the right values for properties", () => {
    const builder = new IPhone11Builder();
    const phone = builder
      .buildScreen()
      .buildBattery()
      .buildOS()
      .buildCamera()
      .buildProcessor()
      .build();
    expect(phone.screen).toBe('6.06"');
    expect(phone.battery).toBe("3110 mAh");
    expect(phone.os).toBe("iOS 13");
    expect(phone.camera).toBe("12 MP + 12 MP");
  });

  test("should return reset the object to null values", () => {
    const builder = new IPhone11Builder();
    const phone1 = builder
      .buildScreen()
      .buildBattery()
      .buildOS()
      .buildCamera()
      .buildProcessor()
      .build();

    Object.entries(phone1).forEach(([_key, value]) => {
      expect(value).not.toBeNull();
    });

    const phone2 = builder.build();
    Object.entries(phone2).forEach(([key, value]) => {
      console.log(key, value);
      expect(value).toBeNull();
    });
  });

  test("should reset value using reset method", () => {
    const builder = new IPhone11Builder();
    const customPhoneBuilder = builder
      .buildScreen()
      .buildBattery()
      .buildOS()
      .buildCamera()
      .buildProcessor();

    Object.entries(customPhoneBuilder.reset().build()).forEach(
      ([_key, value]) => {
        expect(value).toBeNull();
      }
    );
  });
});
