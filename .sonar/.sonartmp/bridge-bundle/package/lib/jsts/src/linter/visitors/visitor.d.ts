import * as estree from 'estree';
import { SourceCode } from 'eslint';
/**
 * Visits the abstract syntax tree of an ESLint source code
 * @param sourceCode the source code to visit
 * @param callback a callback function invoked at each node visit
 */
export declare function visit(sourceCode: SourceCode, callback: (node: estree.Node) => void): void;
