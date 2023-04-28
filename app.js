import inquirer from 'inquirer';

const object = [
  {
  type: 'input',
  name: 'filename',
  message: '작성 될 HTML 파일의 이름을 입력하세요',
  },
  {
    type: 'confirm',
    name: 'useRoot',
    message: '#root div를 만드시겠습니까?',
  }
]

inquirer.prompt(object).then(answer => {
  console.log(answer);
})