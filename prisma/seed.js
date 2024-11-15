const prisma = require("../prisma");
const seed = async () => {
  const employees = [
    { id: 1, name: "Carolynn McGinlay" },
    { id: 2, name: "Lodovico Filon" },
    { id: 3, name: "Jefferey Wahlberg" },
    { id: 4, name: "Kayley Tures" },
    { id: 5, name: "Rickard Carver" },
    { id: 6, name: "Michael Stryde" },
    { id: 7, name: "Averell Santino" },
    { id: 8, name: "Constantina Connue" },
    { id: 9, name: "Verile Bondesen" },
    { id: 10, name: "Gwen Grollmann" },
  ];
  for (let i = 0; i < 10; i++) {
    employees.push({ name: `Employee ${i}` });
  }
  await prisma.employee.createMany({ data: employees });
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });