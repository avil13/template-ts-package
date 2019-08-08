// Setup browser environment
const hooks = require('require-extension-hooks');
const ts = require('typescript');

hooks('ts').push(function ({ content }) {
	let result = ts.transpileModule(content, {
		compilerOptions: { module: ts.ModuleKind.ESNext } // .CommonJS }
	});
	return result.outputText;
});
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['js', 'ts']).plugin('babel').push();
