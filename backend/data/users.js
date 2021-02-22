import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        cropSelection: '',
        isAdmin: true
    },
    {
        name: 'Yon',
        email: 'yon@gmail.com',
        cropSelection: '',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Test',
        email: 'test@gmail.com',
        cropSelection: '',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users