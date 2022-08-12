module.exports = {
  '**/*.json': ['yarn prettier'],
  '**/*.{js,jsx,ts,tsx}': [
    (filenames) => `next lint --fix --file ${filenames.map((file) => file.split(process.cwd())[1]).join(' --file ')}`,
    'yarn prettier',
  ],
  '**/*.{css,sass,scss}': ['yarn stylelint'],
}
