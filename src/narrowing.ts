export {};

interface User {
  id: string;
  name: string;
  age?: number;
}

interface AdminUser extends User {
  role: "admin";
  adminThings: string[];
}

interface GuestUser extends User {
  role: "guest";
  guestThings: string[];
}

const doThing = (user: AdminUser | GuestUser) => {};
