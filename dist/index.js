import express from "express";
import { PrismaClient } from "@prisma/client"; //step 1
const client = new PrismaClient(); // step 2
const app = express();
app.get("/api/user/:id", async (req, res) => {
    const id = req.params.id;
    const resp = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            id: true,
            username: true,
            email: true
        }
    });
    res.json({
        data: resp
    });
});
app.listen(3000);
async function createUser() {
    await client.user.create({
        data: {
            username: "lakshman",
            password: "123",
            email: "123@gmail.com",
        },
    });
}
async function createTodo() {
    await client.todo.create({
        data: {
            title: "Learn Prisma",
            desc: "Complete the Prisma tutorial and build a simple app",
        },
    });
}
async function deleteUser() {
    client.user.delete({
        where: {
            id: 1
        }
    }).then((res) => console.log(res.id)).catch((err) => console.log(err));
}
async function updateTodo() {
    client.todo.updateMany({
        where: {
            id: 2
        },
        data: {
            title: "imao",
            desc: "okok"
        }
    }).then((res) => console.log(res)).catch((err) => console.log(err));
}
async function findUser() {
    client.user.findFirst({
        where: {
            id: 4
        },
        select: {
            id: true,
            username: true,
            email: true
        }
    }).then((res) => console.log(res)).catch((err) => console.log(err));
}
// findUser();
// updateTodo();
// deleteUser();
// createUser();
// createTodo();
//# sourceMappingURL=index.js.map