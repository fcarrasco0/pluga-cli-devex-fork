const fs = require('fs');
const mustache = require('mustache');
const { exec } = require('child_process');

const scaffold = require('./scaffold');
const mkdir = require('./mkdir');

function humanize(str) {
  return str
    .replace(/^\w/, (l) => l.toUpperCase())
    .replace(/[_-]+(\w)/g, (_, l) => l.toUpperCase());
}

function createAction(entityFolderName, cmd) {
  const actionName = cmd.entityName || humanize(entityFolderName);
  // 1 - verify if directory passed has the correct path on itself and save it as dirPath
  // 2 - if dir dont hava correct path, verify if inside the dir has the path and save it as dirPath
  // 3 - create the folderpath if 1 and 2 are not valid
  // 4 - create action folder wich will save index and meta js
  // 4.1 - copy files index.js and meta.js inside action folder
  // 5 - verify if directory has test path
  // 6 - create folderpath for test file if 5 not valid
  // 7 - copy action test file inside test folder
  return console.log(`Create Action Flow. Action Name = ${actionName}`);
}

module.exports = (entity, entityFolderName, cmd) => {
  console.log('entity', entity);
  console.log('entityFolderName =', entityFolderName);
  console.log('cmd =', cmd);
  const entityNormalizedValue = entity && entity.toLowerCase();

  switch (entityNormalizedValue) {
    case 'action':
      return createAction(entityFolderName, cmd);
    default:
      return console.log('Option not available. Current valid options are "action" and "trigger"');
  }
};
