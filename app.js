import inquirer from 'inquirer';

const fileName = {
  type: 'input',
  name: 'name',
  message: '작성 될 HTML 파일의 이름을 입력하세요',
}

inquirer.prompt(fileName).then(answer => {
  console.log(answer);
})