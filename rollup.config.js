import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import generatePackageJson from 'rollup-plugin-generate-package-json'
import alias from 'rollup-plugin-alias'
import path from 'path'

const root = path.resolve(__dirname)

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
	},
	external: ['react', 'react-dom', 'styled-components'],
	plugins: [
		nodeResolve({ extensions: ['.jsx', '.js', '.tsx'] }),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
			extensions: ['.jsx', '.js', '.tsx'],
		}),
		url(),
		svgr(),
		commonjs(),
		alias({
			resolve: ['*', '.js', '.jsx'],
			entries: [
				{
					find: '@',
					replacement: path.resolve(root, './src'),
				},
			],
		}),
		generatePackageJson({
			outputFolder: 'dist',
			baseContents: (el) => ({
				name: el.name,
				main: 'bundles/bundle.js',
				peerDependencies: {
					react: '^17.0.2',
				},
			}),
		}),
	],
}
