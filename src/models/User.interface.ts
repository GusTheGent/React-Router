export interface User {
  id: number;
  name: string;
  surname: string;
  proName: string;
  active: boolean;
  details: {
    age: number;
    country: string;
    sport: string;
    image: string;
  };
}
