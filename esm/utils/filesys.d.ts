/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import type { Mode, ObjectEncodingOptions, OpenMode } from "fs";
import type { Abortable } from "events";
export declare const createFile: (path: string, data: string | NodeJS.ArrayBufferView, options?: (ObjectEncodingOptions & {
    mode?: Mode | undefined;
    flag?: OpenMode | undefined;
} & Abortable) | BufferEncoding) => void;
//# sourceMappingURL=filesys.d.ts.map