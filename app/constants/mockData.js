const list = [
  {
    dt: 1585224000,
    main: {
      temp: 283.67,
      feels_like: 277.07,
      temp_min: 281.48,
      temp_max: 283.67,
      pressure: 1032,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: { all: 96 },
    wind: { speed: 6.64, deg: 104 },
    sys: { pod: 'd' },
    dt_txt: '2020-03-26 12:00:00',
  },
  {
    dt: 1585234800,
    main: {
      temp: 283.11,
      feels_like: 276.89,
      temp_min: 281.47,
      temp_max: 283.11,
      pressure: 1030,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
    clouds: { all: 97 },
    wind: { speed: 6.05, deg: 108 },
    sys: { pod: 'd' },
    dt_txt: '2020-03-26 15:00:00',
  },
  {
    dt: 1585245600,
    main: {
      temp: 278.85,
      feels_like: 273.64,
      temp_min: 277.75,
      temp_max: 278.85,
      pressure: 1030,
    },
    weather: [
      { id: 804, main: 'Clouds', description: 'overcast clouds', icon: '04n' },
    ],
    clouds: { all: 98 },
    wind: { speed: 4.53, deg: 97 },
    sys: { pod: 'n' },
    dt_txt: '2020-03-26 18:00:00',
  },
];
const mockData = {
  list,
};
export default mockData;
