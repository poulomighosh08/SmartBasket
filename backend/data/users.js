import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Poulomi',
    email: 'poulomi@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'William',
    email: 'william@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
