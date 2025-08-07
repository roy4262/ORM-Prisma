import { PrismaClient } from "@prisma/client";   //step 1

const client = new PrismaClient();     // step 2

async function createUser() {      //step 3
  await client.user.create({     //user === user table
    data: {
      username: "lakshman",
      password: "123",
      email: "123@gmail.com",
    },
  });
}

async function createTodo() {
  await client.todo.create({    //todo === todo table
    data: {
      title: "Learn Prisma",
      desc: "Complete the Prisma tutorial and build a simple app",
    },
  });
}

async function deleteUser() {
     client.user.delete({
        where:{
            id:1
        }
    }).then((res)=>console.log(res.id)).catch((err)=>console.log(err));
    
}

async function updateTodo() {
    client.todo.updateMany({
        where:{
            id:2
        },
        data:{
            title:"imao",
            desc:"okok"
        }
    }).then((res)=>console.log(res)).catch((err)=>console.log(err));
}
updateTodo();
// deleteUser();
// createUser();
// createTodo();
