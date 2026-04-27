const VALID_COMMIT_MESSAGE_EXAMPLE = `
Valid commit message example:
feat: add auth

Read more: https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13
`

module.exports = (report) => {
  if (report.errorCount === 0) return '';
  let message = '❌ Commit message error:\n'
  report.results.forEach(result => {
    result.errors.forEach(error => {
      message += `\t${error.name}: ${error.message}\n`
    })
  })

  return `${message}\n${VALID_COMMIT_MESSAGE_EXAMPLE}`;
};