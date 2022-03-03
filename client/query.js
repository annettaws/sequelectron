const Sequelize = require('sequelize')
const { User, Task } = require('./models')

const { Op } = Sequelize

// Find all users with their associated tasks
// Raw SQL: SELECT * FROM "Users" JOIN "Tasks" ON "Tasks"."userId" = "Users".id;

const findAllWithTasks = async () => {
  const users = await User.findAll({
    include: [{
      model: Task,
    }],
  })
  console.log('All users with their associated tasks:', JSON.stringify(users, null, 4))
}

// Find a task with its associated user
// Raw SQL: SELECT * FROM "Tasks" JOIN "Users" ON "Users"."id" = "Tasks"."userId";
const findTasksWithUser = async () => {
  const tasks = await Task.findAll({
    include: [{
      model: User,
    }],
  })
  console.log('All tasks with their associated user:', JSON.stringify(tasks, null, 4))
}

const findAllUsers = async () => {
  const users = await User.findAll()
  console.log('All users:', JSON.stringify(users, null, 4))
}

// Find all users where firstname is John
// Raw SQL: SELECT * FROM "Users" WHERE firstName = "John";
const findAllJohns = async () => {
  const johns = await User.findAll({
    where: {
      firstName: 'John',
    },
  })
  console.log('All users with first name John:', JSON.stringify(johns, null, 4))
}

// Create a new user
// Raw SQL: INSERT INTO "Users" (id, firstName, lastName, email, userName, password, jobTitle) VALUES (DEFAULT, 'Jane', 'Doe', 'jane@jane.com', 'janedoe', '123456789', 'Systems Analyst')
const createUser = async () => {
  const jane = await User.create({
    firstName: 'Jane', lastName: 'Doe', email: 'jane@jane.com', userName: 'janedoe', password: '123456789', jobTitle: 'Systems Analyst',
  })
  console.log("Jane's auto-generated ID:", jane.id)
}

// Delete everyone named "Jane"
// Raw SQL: DELETE FROM "Users" WHERE firstName = 'Jane'
const destroyUser = async () => {
  const destroyed = await User.destroy({
    where: {
      firstName: 'Jane',
    },
  })
  console.log('Destroyed:', destroyed)
}

// Change lastname "Doe" to "Smith"
// UPDATE "Users" SET lastName='Smith' WHERE lastName = 'Doe'
const updateUser = async () => {
  const updated = await User.update({ lastName: 'Smith' }, {
    where: {
      lastName: 'Doe',
    },
  })
  console.log('Updated:', updated)
}

// Find all users and only show their email
// Raw SQL: SELECT email FROM "Users";
const findAllEmails = async () => {
  const emails = await User.findAll({
    attributes: ['email'],
  })
  console.log('All user emails:', JSON.stringify(emails, null, 4))
}

// Find all users where firstname is either John or Jane
// Raw SQL: SELECT * FROM "Users" WHERE firstName = "John" OR firstName = "Jane";
const findAllJohnsOrJanes = async () => {
  const johnOrJanes = await User.findAll({
    where: {
      [Op.or]: [{ firstName: 'John' }, { firstName: 'Jane' }],
    },
  })
  console.log('All users with first name John or Jane:', JSON.stringify(johnOrJanes, null, 4))
}

const run = async () => {
  await findAllUsers()
  await findAllWithTasks()
  await findTasksWithUser()
  await process.exit()
}

run()
