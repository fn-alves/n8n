const { writeFileSync } = require('fs');
const { resolve } = require('path');
const baseDir = resolve(__dirname, '../..');

const ensure = (packageName) => {
	const filePath = resolve(baseDir, 'packages', packageName, 'package.json');
	const { name, ...packageJson } = require(
		filePath,
	);
	packageJson.name = `fxn8n`;
	writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n', 'utf-8');
};

ensure('cli');
