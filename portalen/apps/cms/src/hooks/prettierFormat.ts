import * as prettier from 'prettier';

// Complete list og available syntaxes:
// https://prismjs.com/#supported-languages
export const languageSupport = {
    Typescript: 'ts',
    'React TSX': 'tsx',
    Bash: 'sh',
    Sass: 'scss',
    CSS: 'css',
    Javascript: 'js',
    'React JSX': 'jsx',
    HTML: 'html',
    XML: 'xml',
    JSON: 'json',
    LESS: 'less',
    DIFF: 'diff',
};

interface Options {
    noinline?: boolean;
    language:
        | 'ts'
        | 'tsx'
        | 'sh'
        | 'scss'
        | 'css'
        | 'js'
        | 'jsx'
        | 'html'
        | 'xml'
        | 'json'
        | 'less'
        | 'diff';
}

const formattableLanguages = ['ts', 'tsx', 'js', 'jsx'];

export default function prettierFormat(value: string, options: Options) {
    if (!formattableLanguages.includes(options.language)) {
        return value;
    }
    try {
        const formatted = prettier.format(value, {
            parser: 'babel',
        });

        if (options?.noinline === false && formatted.endsWith(';\n')) {
            return formatted.substring(0, formatted.length - 2) + '\n';
        }
        return formatted;
    } catch (e: unknown) {
        // Ignore errors and let the user save their work
        return value;
    }
}
