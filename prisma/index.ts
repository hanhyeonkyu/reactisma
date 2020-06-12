import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
async function main() {
    // await createTest();
    await updateTest();
    // await deleteTest();
    await getTests();

}
main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })

async function getTests() {
    const allTests = await prisma.test.findMany()
    console.log(allTests)
}

async function createTest() {
    await prisma.test.create({
        data: {
            title: "post",
            log: "success"
        }
    })
}

async function updateTest() {
    await prisma.test.update({
        where: { id: 1 },
        data: {
            log: "fail"
        }
    })
}

async function deleteTest() {
    await prisma.test.delete({
        where: { id: 1 }
    })
}