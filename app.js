// import inquirer from 'inquirer';
const { program } = require('commander');
const fs = require('fs');

program
  .option('-f, --name <name>', 'set name')
  .option('-t, --title <title>', 'set title')
  .option('-c, --content <content>', 'set content')
  .parse(process.argv)

const value = program.opts();
console.log(value);

createHTML(value)

function createHTML(data) {
  const fileName = data.name;
  const title = data.title;
  const content = `<div id='root'>
    <p>${data.content}</p>
  </div>`;

  const bodyData = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  ${content}
</body>
</html>
`;

  fs.writeFile(`./result/${fileName}.html`, bodyData, (err) => {
    if (err) throw err;
    console.log('파일이 생성되었습니다')
  })
}