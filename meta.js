const path = require('path')
const fs = require('fs')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')
const pkg = require('./template/package.json')

const templateVersion = pkg.version

const { addTestAnswers } = require('./scenarios')

module.exports = {
  metalsmith: {
    // When running tests for the template, this adds answers for the selected scenario
    before: addTestAnswers
  },
  helpers: {
    if_or(v1, v2, options) {

      if (v1 || v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    },
    template_version() {
      return templateVersion
    },
  },
  
  prompts: {
    name: {
      type: 'input',
      required: true,
      message: '项目名',
    },
    description: {
      type: 'input',
      required: false,
      message: '项目描述',
      default: '一个vue项目',
    },
    author: {
      type: 'input',
      message: '作者',
    },
    autoInstall: {
      when: 'isNotTest',
      type: 'list',
      message: '项目创建后自动安装依赖吗？',
      choices: [
        {
          name: '使用npm安装',
          value: 'npm',
          short: '自动安装',
        },
        {
          name: '不用自动安装，我自己手动安装',
          value: false,
          short: '不自动安装',
        },
      ],
    },
  },
  complete: function(data, { chalk }) {
    const green = chalk.green

    sortDependencies(data, green)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    if (data.autoInstall) {
      installDependencies(cwd, data.autoInstall, green)
        .then(() => {
          return runLintFix(cwd, data, green)
        })
        .then(() => {
          printMessage(data, green)
        })
        .catch(e => {
          console.log(chalk.red('Error:'), e)
        })
    } else {
      printMessage(data, chalk)
    }
  }
}
