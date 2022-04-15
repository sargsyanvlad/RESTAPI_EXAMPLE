export const Rides = {
  create: {
    start_long: { type: 'number', max: 90, min: -90, optional: false },
    start_lat: { type: 'number', max: 90, min: -90, optional: false },
    end_lat: { type: 'number', max: 90, min: -90, optional: false },
    end_long: { type: 'number', max: 90, min: -90, optional: false },
    rider_name: { type: 'string', min: 1, max: 255, optional: false },
    driver_name: { type: 'string', min: 1, max: 255, optional: false },
    driver_vehicle: { type: 'string', min: 1, max: 255, optional: false },
  },
  get: {
    id: { type: 'number', convert: true, optional: false, positive: true },
  },
  delete: {
    id: { type: 'number', convert: true, optional: false, positive: true },
  },
};
