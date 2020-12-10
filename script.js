"use strict";

const employers = [
  "АртеМ",
  "максим",
  "Владимир",
  "сергей",
  "НикиТа",
  "евГений",
  " Дарья",
  " ",
  "виктория ",
  "ЕкаТерина",
  "",
  " Андрей ",
  "КИРИЛЛ",
];

const nameCourse = "Базовый React";

const command = [];

employers.forEach((name) => {
  if (name.trim()) {
    const clearName = name.trim();

    return command.push(
      clearName[0].toUpperCase() + clearName.slice(1).toLowerCase()
    );
  }
});

const data = {
  cash: [3, 8, 3],
  react: ["JSX", "components", "props", "state", "hooks"],
  add: ["styled-components", "firebase"],
};

function calcCash(own) {
  return own.reduce((acc, count) => acc + count);
}

const lesson = calcCash(data.cash);

function makeBusiness(director, teacher, allModule, gang, course) {
  const teacherName = teacher ? teacher : "Максим";

  const sumTech = [...data.react, ...data.add, "и другие"];

  console.group("ES-6");
  console.log(
    `Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacherName}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`
  );

  console.log(
    `Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`
  );

  console.log("Технологии которые мы изучим: ");
  console.log(sumTech.join(" "));
  console.groupEnd();
}

makeBusiness("Артем", null, lesson, command, nameCourse);
