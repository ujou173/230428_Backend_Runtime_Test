import inquirer from 'inquirer';
import fs from 'fs';

const object = [
  {
  type: 'input',
  name: 'fileName',
  message: '작성 될 HTML 파일의 이름을 입력하세요',
  },
  {
    type: 'confirm',
    name: 'useRoot',
    message: '#root div를 만드시겠습니까?',
  },
  {
    type: 'input',
    name: 'titleName',
    message: '문서의 제목을 입력하세요'
  },
  {
    type: 'input',
    name: 'content',
    message: '본문 내용을 입력하세요'
  }
];

function createHTML(data) {
  const fileName = data.fileName;
  const title = data.titleName;
  let content;

  if(data.useRoot === true) {
    content = `<div id='root'>
        <p>${data.content}</p>
      </div>`
  } else {
    content = `<p>${data.content}</p>`
  }

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

inquirer.prompt(object).then(answer => {
  createHTML(answer);
})