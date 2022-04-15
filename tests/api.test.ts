import * as faker from 'faker';
import { app } from '../src/app';
import chaiHttp = require('chai-http');
import * as chai from 'chai';
const { expect } = chai;
describe('API tests', () => {
  before(() => {
    chai.use(chaiHttp);
  });

  describe('GET /health', () => {
    it('Should return health', async () => {
      const res = await chai.request(app).get('/health');
      expect(res.status).to.be.equal(200);
    });
  });

  describe('GET /rides', async () => {
    it('Should return 404 not found ', async () => {
      const res = await chai.request(app).get('/rides');
      expect(res.status).to.be.equal(404);
    });
  });

  describe('POST /rides', async () => {
    it('Should return 400 Status Wrong Start Latitude', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 10,
        end_long: 10,
        rider_name: faker.name.firstName(),
        start_lat: 982,
        start_long: 0,
      });

      expect(res.status).to.be.equal(400);

      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'numberMax',
        message: "The 'start_lat' field must be less than or equal to 90.",
        field: 'start_lat',
        expected: 90,
        actual: 982,
      });
    });
    it('Should return 400 Status Request Wrong Start Longitude', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 10,
        end_long: 10,
        rider_name: faker.name.firstName(),
        start_lat: 0,
        start_long: 123,
      });
      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'numberMax',
        message: "The 'start_long' field must be less than or equal to 90.",
        field: 'start_long',
        expected: 90,
        actual: 123,
      });
      expect(res.status).to.be.equal(400);
    });

    it('Should return 400 Status Wrong Longitude', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 1231,
        end_long: 10,
        rider_name: faker.name.firstName(),
        start_lat: 0,
        start_long: 0,
      });
      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'numberMax',
        message: "The 'end_lat' field must be less than or equal to 90.",
        field: 'end_lat',
        expected: 90,
        actual: 1231,
      });
      expect(res.status).to.be.equal(400);
    });

    it('Should return 400 Status Wrong Longitude value', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 10,
        end_long: 541,
        rider_name: faker.name.firstName(),
        start_lat: 0,
        start_long: 0,
      });

      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'numberMax',
        message: "The 'end_long' field must be less than or equal to 90.",
        field: 'end_long',
        expected: 90,
        actual: 541,
      });

      expect(res.status).to.be.equal(400);
    });

    it('Should return 400 Status Wrong Rider Name', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 10,
        end_long: 10,
        rider_name: 12,
        start_lat: 0,
        start_long: 0,
      });

      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'string',
        message: "The 'rider_name' field must be a string.",
        field: 'rider_name',
        actual: 12,
      });

      expect(res.status).to.be.equal(400);
    });

    it('Should return 400 Status', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: 75,
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 10,
        end_long: 10,
        rider_name: faker.name.firstName(),
        start_lat: 0,
        start_long: 0,
      });

      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'string',
        message: "The 'driver_name' field must be a string.",
        field: 'driver_name',
        actual: 75,
      });

      expect(res.status).to.be.equal(400);
    });

    it('Should return 400 Status', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: 13,
        end_lat: 10,
        end_long: 10,
        rider_name: faker.name.firstName(),
        start_lat: 0,
        start_long: 0,
      });

      expect(res.body.message).to.be.an('array').that.is.not.empty;

      expect(res.body.message[0]).to.be.deep.equal({
        type: 'string',
        message: "The 'driver_vehicle' field must be a string.",
        field: 'driver_vehicle',
        actual: 13,
      });

      expect(res.status).to.be.equal(400);
    });

    it('Should insert rides successfully', async () => {
      const res = await chai.request(app).post('/rides').set('Content-type', 'application/json').send({
        driver_name: faker.name.firstName(),
        driver_vehicle: faker.vehicle.vehicle(),
        end_lat: 10,
        end_long: 10,
        rider_name: faker.name.firstName(),
        start_lat: 0,
        start_long: 0,
      });
      expect(res.status).to.be.equal(201);
    });
  });

  describe('GET /rides/:id', async () => {
    it('Should return 404 not found', async () => {
      const res = await chai.request(app).get('/rides/9999');
      expect(res.status).to.be.equal(404);
    });

    it('Should return a ride', async () => {
      const res = await chai.request(app).get(`/rides/1`);
      await expect(res.status).to.be.equal(200);
    });
  });

  describe('GET /rides', async () => {
    it('Should return rides default pagination', async () => {
      const res = await chai.request(app).get('/rides');
      expect(res.status).to.be.equal(200);
    });

    it('Should return rides with custom pagination (page: 1, limit: 5)', async () => {
      const res = await chai.request(app).get('/rides?page=1&limit=5');
      expect(res.status).to.be.equal(200);
    });
  });
});
