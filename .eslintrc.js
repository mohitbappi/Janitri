module.exports = {
	plugins: [
	  "@typescript-eslint",
	  "eslint-comments",
	  "promise",
	  "unicorn",
	],
	extends: [
	  "airbnb-base",
	  "airbnb-typescript/base",
	  "plugin:@typescript-eslint/recommended",
	  "plugin:@typescript-eslint/recommended-requiring-type-checking",
	  "plugin:eslint-comments/recommended",
	  "plugin:promise/recommended",
	  "plugin:unicorn/recommended",
	],
	env: {
	  node: true,
	  browser: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
	  project: "./tsconfig.json",
	  tsconfigRootDir: "./"
	},
	rules: {
	  indent: [2, 2, { SwitchCase: 1}],
	  "unicorn/new-for-builtins": "off",
	  "unicorn/numeric-separators-style": "off",
	  "max-len": ["error", { "code": 150 }],
		// Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
	  "no-prototype-builtins": "off",
	  "key-spacing": ["error", { "afterColon": true }],
	  "@typescript-eslint/no-unused-vars": ["error"],
	  // https://github.com/basarat/typescript-book/blob/master/docs/tips/defaultIsBad.md
	  "import/prefer-default-export": "off",
	  "import/no-default-export": "error",
	  // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
	  "react/destructuring-assignment": "off",
	  // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
	  "react/jsx-filename-extension": "off",
	  // Use function hoisting to improve code readability
	  "no-use-before-define": [
		"error",
		{ functions: false, classes: true, variables: true },
	  ],
	  // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
	  "@typescript-eslint/explicit-function-return-type": "off",
	  "@typescript-eslint/no-use-before-define": [
		"error",
		{ functions: false, classes: true, variables: true, typedefs: true },
	  ],
	  // Common abbreviations are known and readable
	  "unicorn/prevent-abbreviations": "off",
	  // Airbnb prefers forEach
	  "unicorn/no-array-for-each": "off",
	  "unicorn/no-null": "off",
	  // It's not accurate in the monorepo style
	  "import/no-extraneous-dependencies": "off",
	  "@typescript-eslint/no-floating-promises": "off",
	  "import/extensions": [
		"error",
		"ignorePackages",
		{
		  "": "never",
		  "js": "never",
		  "jsx": "never",
		  "ts": "never",
		  "tsx": "never"
		}
	 ]
	},
	overrides: [
	  {
		files: ["*.js"],
		rules: {
		  // Allow CJS until ESM support improves
		  "@typescript-eslint/no-var-requires": "off",
		  "unicorn/prefer-module": "off",
		},
	  },
	],
  };
  