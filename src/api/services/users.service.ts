import { faker } from '@faker-js/faker';

class UsersService {
  public async getMe() {
    return {
      id: faker.random.alphaNumeric(12),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      streetAddress: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      vehicle: faker.vehicle.vehicle(),
    };
  }
}

export default UsersService;
