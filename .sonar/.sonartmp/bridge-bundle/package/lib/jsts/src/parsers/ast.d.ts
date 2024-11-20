import * as protobuf from 'protobufjs';
import { TSESTree } from '@typescript-eslint/utils';
export declare const NODE_TYPE_ENUM: protobuf.Enum;
export declare function serializeInProtobuf(ast: TSESTree.Program): Uint8Array;
/**
 * Only used for tests
 */
export declare function parseInProtobuf(ast: TSESTree.Program): protobuf.Message<{}>;
/**
 * Only used for tests
 */
export declare function deserializeProtobuf(serialized: Uint8Array): any;
type VisitNodeReturnType = {
    type: number;
    loc: TSESTree.SourceLocation;
    [key: string]: any;
};
export declare function visitNode(node: TSESTree.Node | undefined | null): VisitNodeReturnType | undefined;
export {};
