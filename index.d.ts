export as namespace protobuf;

/**
 * Constructs a new message prototype for the specified reflected type and sets up its constructor.
 * @classdesc Runtime class providing the tools to create your own custom classes.
 * @constructor
 * @param {Type} type Reflected message type
 * @param {*} [ctor] Custom constructor to set up, defaults to create a generic one if omitted
 * @returns {Message} Message prototype
 */
export class Class {

    /**
     * Constructs a new message prototype for the specified reflected type and sets up its constructor.
     * @classdesc Runtime class providing the tools to create your own custom classes.
     * @constructor
     * @param {Type} type Reflected message type
     * @param {*} [ctor] Custom constructor to set up, defaults to create a generic one if omitted
     * @returns {Message} Message prototype
     */
    constructor(type: Type, ctor?: any);

    /**
     * Generates a constructor function for the specified type.
     * @param {Type} type Type to use
     * @returns {Codegen} Codegen instance
     */
    public static generate(type: Type): Codegen;

    /**
     * Constructs a new message prototype for the specified reflected type and sets up its constructor.
     * @function
     * @param {Type} type Reflected message type
     * @param {*} [ctor] Custom constructor to set up, defaults to create a generic one if omitted
     * @returns {Message} Message prototype
     */
    public static create(type: Type, ctor?: any): Message;

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * @name Class#fromObject
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message instance
     */
    public fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Class#fromObject}.
     * @name Class#from
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message instance
     */
    public from(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a message of this type. Also converts values to other types if specified.
     * @name Class#toObject
     * @function
     * @param {Message} message Message instance
     * @param {ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(message: Message, options?: ConversionOptions): { [k: string]: any };

    /**
     * Encodes a message of this type.
     * @name Class#encode
     * @function
     * @param {Message|Object} message Message to encode
     * @param {Writer} [writer] Writer to use
     * @returns {Writer} Writer
     */
    public encode(message: (Message|Object), writer?: Writer): Writer;

    /**
     * Encodes a message of this type preceeded by its length as a varint.
     * @name Class#encodeDelimited
     * @function
     * @param {Message|Object} message Message to encode
     * @param {Writer} [writer] Writer to use
     * @returns {Writer} Writer
     */
    public encodeDelimited(message: (Message|Object), writer?: Writer): Writer;

    /**
     * Decodes a message of this type.
     * @name Class#decode
     * @function
     * @param {Reader|Uint8Array} reader Reader or buffer to decode
     * @returns {Message} Decoded message
     */
    public decode(reader: (Reader|Uint8Array)): Message;

    /**
     * Decodes a message of this type preceeded by its length as a varint.
     * @name Class#decodeDelimited
     * @function
     * @param {Reader|Uint8Array} reader Reader or buffer to decode
     * @returns {Message} Decoded message
     */
    public decodeDelimited(reader: (Reader|Uint8Array)): Message;

    /**
     * Verifies a message of this type.
     * @name Class#verify
     * @function
     * @param {Message|Object} message Message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public verify(message: (Message|Object)): string;
}

/**
 * Provides common type definitions.
 * Can also be used to provide additional google types or your own custom types.
 * @param {string} name Short name as in `google/protobuf/[name].proto` or full file name
 * @param {Object.<string,*>} json JSON definition within `google.protobuf` if a short name, otherwise the file's root definition
 * @returns {undefined}
 * @property {Object.<string,*>} google/protobuf/any.proto Any
 * @property {Object.<string,*>} google/protobuf/duration.proto Duration
 * @property {Object.<string,*>} google/protobuf/empty.proto Empty
 * @property {Object.<string,*>} google/protobuf/struct.proto Struct, Value, NullValue and ListValue
 * @property {Object.<string,*>} google/protobuf/timestamp.proto Timestamp
 * @property {Object.<string,*>} google/protobuf/wrappers.proto Wrappers
 * @example
 * // manually provides descriptor.proto (assumes google/protobuf/ namespace and .proto extension)
 * protobuf.common("descriptor", descriptorJson);
 *
 * // manually provides a custom definition (uses my.foo namespace)
 * protobuf.common("my/foo/bar.proto", myFooBarJson);
 */
export function common(name: string, json: { [k: string]: any }): void;

/**
 * Runtime message from/to plain object converters.
 * @namespace
 */
export namespace converter {

    /**
     * Generates a plain object to runtime message converter specific to the specified message type.
     * @param {Type} mtype Message type
     * @returns {Codegen} Codegen instance
     */
    function fromObject(mtype: Type): Codegen;

    /**
     * Generates a runtime message to plain object converter specific to the specified message type.
     * @param {Type} mtype Message type
     * @returns {Codegen} Codegen instance
     */
    function toObject(mtype: Type): Codegen;
}

/**
 * Generates a decoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 * @property {boolean} compat=true Generates backward/forward compatible decoders (packed fields)
 */
export function decoder(mtype: Type): Codegen;

/**
 * Generates an encoder specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 * @property {boolean} compat=true Generates encoders serializing in ascending field order
 */
export function encoder(mtype: Type): Codegen;

/**
 * Constructs a new enum instance.
 * @classdesc Reflected enum.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {Object.<string,number>} [values] Enum values as an object, by name
 * @param {Object.<string,*>} [options] Declared options
 */
export class Enum extends ReflectionObject {

    /**
     * Constructs a new enum instance.
     * @classdesc Reflected enum.
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Unique name within its namespace
     * @param {Object.<string,number>} [values] Enum values as an object, by name
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, values?: { [k: string]: number }, options?: { [k: string]: any });

    /**
     * Enum values by id.
     * @type {Object.<number,string>}
     */
    public valuesById: { [k: number]: string };

    /**
     * Enum values by name.
     * @type {Object.<string,number>}
     */
    public values: { [k: string]: number };

    /**
     * Value comment texts, if any.
     * @type {Object.<string,string>}
     */
    public comments: { [k: string]: string };

    /**
     * Creates an enum from JSON.
     * @param {string} name Enum name
     * @param {Object.<string,*>} json JSON object
     * @returns {Enum} Created enum
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): Enum;

    /**
     * Adds a value to this enum.
     * @param {string} name Value name
     * @param {number} id Value id
     * @param {?string} comment Comment, if any
     * @returns {Enum} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If there is already a value with this name or id
     */
    public add(name: string, id: number, comment: string): Enum;

    /**
     * Removes a value from this enum
     * @param {string} name Value name
     * @returns {Enum} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If `name` is not a name of this enum
     */
    public remove(name: string): Enum;
}

/**
 * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
 * @classdesc Reflected message field.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} type Value type
 * @param {string|Object.<string,*>} [rule="optional"] Field rule
 * @param {string|Object.<string,*>} [extend] Extended type if different from parent
 * @param {Object.<string,*>} [options] Declared options
 */
export class Field extends ReflectionObject {

    /**
     * Constructs a new message field instance. Note that {@link MapField|map fields} have their own class.
     * @classdesc Reflected message field.
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Unique name within its namespace
     * @param {number} id Unique id within its namespace
     * @param {string} type Value type
     * @param {string|Object.<string,*>} [rule="optional"] Field rule
     * @param {string|Object.<string,*>} [extend] Extended type if different from parent
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, id: number, type: string, rule?: (string|{ [k: string]: any }), extend?: (string|{ [k: string]: any }), options?: { [k: string]: any });

    /**
     * Field rule, if any.
     * @type {string|undefined}
     */
    public rule?: string;

    /**
     * Field type.
     * @type {string}
     */
    public type: string;

    /**
     * Unique field id.
     * @type {number}
     */
    public id: number;

    /**
     * Extended type if different from parent.
     * @type {string|undefined}
     */
    public extend?: string;

    /**
     * Whether this field is required.
     * @type {boolean}
     */
    public required: boolean;

    /**
     * Whether this field is optional.
     * @type {boolean}
     */
    public optional: boolean;

    /**
     * Whether this field is repeated.
     * @type {boolean}
     */
    public repeated: boolean;

    /**
     * Whether this field is a map or not.
     * @type {boolean}
     */
    public map: boolean;

    /**
     * Message this field belongs to.
     * @type {?Type}
     */
    public message: Type;

    /**
     * OneOf this field belongs to, if any,
     * @type {?OneOf}
     */
    public partOf: OneOf;

    /**
     * The field type's default value.
     * @type {*}
     */
    public typeDefault: any;

    /**
     * The field's default value on prototypes.
     * @type {*}
     */
    public defaultValue: any;

    /**
     * Whether this field's value should be treated as a long.
     * @type {boolean}
     */
    public long: boolean;

    /**
     * Whether this field's value is a buffer.
     * @type {boolean}
     */
    public bytes: boolean;

    /**
     * Resolved type if not a basic type.
     * @type {?(Type|Enum)}
     */
    public resolvedType: (Type|Enum);

    /**
     * Sister-field within the extended type if a declaring extension field.
     * @type {?Field}
     */
    public extensionField: Field;

    /**
     * Sister-field within the declaring namespace if an extended field.
     * @type {?Field}
     */
    public declaringField: Field;

    /**
     * Determines whether this field is packed. Only relevant when repeated and working with proto2.
     * @name Field#packed
     * @type {boolean}
     * @readonly
     */
    public readonly packed: boolean;

    /**
     * Constructs a field from JSON.
     * @param {string} name Field name
     * @param {Object.<string,*>} json JSON object
     * @returns {Field} Created field
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): Field;

    /**
     * Resolves this field's type references.
     * @returns {Field} `this`
     * @throws {Error} If any reference cannot be resolved
     */
    public resolve(): Field;
}

/**
 * Debugging utility functions. Only present in debug builds.
 * @namespace
 */
export namespace debug {

    /**
     * Returns a list of unused types within the specified root.
     * @param {NamespaceBase} ns Namespace to search
     * @returns {Type[]} Unused types
     */
    function unusedTypes(ns: NamespaceBase): Type[];

    /**
     * Enables debugging extensions.
     * @returns {undefined}
     */
    function enable(): void;

    /**
     * Disables debugging extensions.
     * @returns {undefined}
     */
    function disable(): void;
}

/**
 * A node-style callback as used by {@link load} and {@link Root#load}.
 * @typedef LoadCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {Root} [root] Root, if there hasn't been an error
 * @returns {undefined}
 */
type LoadCallback = (error: Error, root?: Root) => void;

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} root Root namespace, defaults to create a new one if omitted.
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 */
export function load(filename: (string|string[]), root: Root, callback: LoadCallback): void;

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and calls the callback.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {LoadCallback} callback Callback function
 * @returns {undefined}
 * @see {@link Root#load}
 * @variation 2
 */
export function load(filename: (string|string[]), callback: LoadCallback): void;

/**
 * Loads one or multiple .proto or preprocessed .json files into a common root namespace and returns a promise.
 * @name load
 * @function
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Promise<Root>} Promise
 * @see {@link Root#load}
 * @variation 3
 */
export function load(filename: (string|string[]), root?: Root): Promise<Root>;

/**
 * Synchronously loads one or multiple .proto or preprocessed .json files into a common root namespace (node only).
 * @param {string|string[]} filename One or multiple files to load
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted.
 * @returns {Root} Root namespace
 * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
 * @see {@link Root#loadSync}
 */
export function loadSync(filename: (string|string[]), root?: Root): Root;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
export const build: string;

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */
export let roots: { [k: string]: Root };

/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
export function configure(): void;

/**
 * Constructs a new map field instance.
 * @classdesc Reflected map field.
 * @extends Field
 * @constructor
 * @param {string} name Unique name within its namespace
 * @param {number} id Unique id within its namespace
 * @param {string} keyType Key type
 * @param {string} type Value type
 * @param {Object.<string,*>} [options] Declared options
 */
export class MapField extends Field {

    /**
     * Constructs a new map field instance.
     * @classdesc Reflected map field.
     * @extends Field
     * @constructor
     * @param {string} name Unique name within its namespace
     * @param {number} id Unique id within its namespace
     * @param {string} keyType Key type
     * @param {string} type Value type
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, id: number, keyType: string, type: string, options?: { [k: string]: any });

    /**
     * Key type.
     * @type {string}
     */
    public keyType: string;

    /**
     * Resolved key type if not a basic type.
     * @type {?ReflectionObject}
     */
    public resolvedKeyType: ReflectionObject;

    /**
     * Constructs a map field from JSON.
     * @param {string} name Field name
     * @param {Object.<string,*>} json JSON object
     * @returns {MapField} Created map field
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): MapField;
}

/**
 * Constructs a new message instance.
 *
 * This function should also be called from your custom constructors, i.e. `Message.call(this, properties)`.
 * @classdesc Abstract runtime message.
 * @constructor
 * @param {Object.<string,*>} [properties] Properties to set
 * @see {@link Class.create}
 */
export class Message {

    /**
     * Constructs a new message instance.
     *
     * This function should also be called from your custom constructors, i.e. `Message.call(this, properties)`.
     * @classdesc Abstract runtime message.
     * @constructor
     * @param {Object.<string,*>} [properties] Properties to set
     * @see {@link Class.create}
     */
    constructor(properties?: { [k: string]: any });

    /**
     * Reference to the reflected type.
     * @name Message.$type
     * @type {Type}
     * @readonly
     */
    public static readonly $type: Type;

    /**
     * Reference to the reflected type.
     * @name Message#$type
     * @type {Type}
     * @readonly
     */
    public readonly $type: Type;

    /**
     * Encodes a message of this type.
     * @param {Message|Object} message Message to encode
     * @param {Writer} [writer] Writer to use
     * @returns {Writer} Writer
     */
    public static encode(message: (Message|Object), writer?: Writer): Writer;

    /**
     * Encodes a message of this type preceeded by its length as a varint.
     * @param {Message|Object} message Message to encode
     * @param {Writer} [writer] Writer to use
     * @returns {Writer} Writer
     */
    public static encodeDelimited(message: (Message|Object), writer?: Writer): Writer;

    /**
     * Decodes a message of this type.
     * @name Message.decode
     * @function
     * @param {Reader|Uint8Array} reader Reader or buffer to decode
     * @returns {Message} Decoded message
     */
    public static decode(reader: (Reader|Uint8Array)): Message;

    /**
     * Decodes a message of this type preceeded by its length as a varint.
     * @name Message.decodeDelimited
     * @function
     * @param {Reader|Uint8Array} reader Reader or buffer to decode
     * @returns {Message} Decoded message
     */
    public static decodeDelimited(reader: (Reader|Uint8Array)): Message;

    /**
     * Verifies a message of this type.
     * @name Message.verify
     * @function
     * @param {Message|Object} message Message or plain object to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: (Message|Object)): string;

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message instance
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Message.fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message instance
     */
    public static from(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a message of this type. Also converts values to other types if specified.
     * @param {Message} message Message instance
     * @param {ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public static toObject(message: Message, options?: ConversionOptions): { [k: string]: any };

    /**
     * Creates a plain object from this message. Also converts values to other types if specified.
     * @param {ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(options?: ConversionOptions): { [k: string]: any };

    /**
     * Converts this message to JSON.
     * @returns {Object.<string,*>} JSON object
     */
    public toJSON(): { [k: string]: any };
}

/**
 * Constructs a new service method instance.
 * @classdesc Reflected service method.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Method name
 * @param {string|undefined} type Method type, usually `"rpc"`
 * @param {string} requestType Request message type
 * @param {string} responseType Response message type
 * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
 * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
 * @param {Object.<string,*>} [options] Declared options
 */
export class Method extends ReflectionObject {

    /**
     * Constructs a new service method instance.
     * @classdesc Reflected service method.
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Method name
     * @param {string|undefined} type Method type, usually `"rpc"`
     * @param {string} requestType Request message type
     * @param {string} responseType Response message type
     * @param {boolean|Object.<string,*>} [requestStream] Whether the request is streamed
     * @param {boolean|Object.<string,*>} [responseStream] Whether the response is streamed
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, type: (string|undefined), requestType: string, responseType: string, requestStream?: (boolean|{ [k: string]: any }), responseStream?: (boolean|{ [k: string]: any }), options?: { [k: string]: any });

    /**
     * Method type.
     * @type {string}
     */
    public type: string;

    /**
     * Request type.
     * @type {string}
     */
    public requestType: string;

    /**
     * Whether requests are streamed or not.
     * @type {boolean|undefined}
     */
    public requestStream?: boolean;

    /**
     * Response type.
     * @type {string}
     */
    public responseType: string;

    /**
     * Whether responses are streamed or not.
     * @type {boolean|undefined}
     */
    public responseStream?: boolean;

    /**
     * Resolved request type.
     * @type {?Type}
     */
    public resolvedRequestType: Type;

    /**
     * Resolved response type.
     * @type {?Type}
     */
    public resolvedResponseType: Type;

    /**
     * Constructs a service method from JSON.
     * @param {string} name Method name
     * @param {Object.<string,*>} json JSON object
     * @returns {Method} Created method
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): Method;
}

/**
 * Constructs a new namespace instance.
 * @name Namespace
 * @classdesc Reflected namespace.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 */
export class Namespace extends NamespaceBase {

    /**
     * Constructs a new namespace instance.
     * @name Namespace
     * @classdesc Reflected namespace.
     * @extends NamespaceBase
     * @constructor
     * @param {string} name Namespace name
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, options?: { [k: string]: any });

    /**
     * Constructs a namespace from JSON.
     * @memberof Namespace
     * @function
     * @param {string} name Namespace name
     * @param {Object.<string,*>} json JSON object
     * @returns {Namespace} Created namespace
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): Namespace;

    /**
     * Converts an array of reflection objects to JSON.
     * @memberof Namespace
     * @param {ReflectionObject[]} array Object array
     * @returns {Object.<string,*>|undefined} JSON object or `undefined` when array is empty
     */
    public static arrayToJSON(array: ReflectionObject[]): ({ [k: string]: any }|undefined);
}

/**
 * Not an actual constructor. Use {@link Namespace} instead.
 * @classdesc Base class of all reflection objects containing nested objects. This is not an actual class but here for the sake of having consistent type definitions.
 * @exports NamespaceBase
 * @extends ReflectionObject
 * @abstract
 * @constructor
 * @param {string} name Namespace name
 * @param {Object.<string,*>} [options] Declared options
 * @see {@link Namespace}
 */
export abstract class NamespaceBase extends ReflectionObject {

    /**
     * Nested objects by name.
     * @type {Object.<string,ReflectionObject>|undefined}
     */
    public nested?: { [k: string]: ReflectionObject };

    /**
     * Nested objects of this namespace as an array for iteration.
     * @name NamespaceBase#nestedArray
     * @type {ReflectionObject[]}
     * @readonly
     */
    public readonly nestedArray: ReflectionObject[];

    /**
     * Adds nested elements to this namespace from JSON.
     * @param {Object.<string,*>} nestedJson Nested JSON
     * @returns {Namespace} `this`
     */
    public addJSON(nestedJson: { [k: string]: any }): Namespace;

    /**
     * Gets the nested object of the specified name.
     * @param {string} name Nested object name
     * @returns {?ReflectionObject} The reflection object or `null` if it doesn't exist
     */
    public get(name: string): ReflectionObject;

    /**
     * Gets the values of the nested {@link Enum|enum} of the specified name.
     * This methods differs from {@link Namespace#get|get} in that it returns an enum's values directly and throws instead of returning `null`.
     * @param {string} name Nested enum name
     * @returns {Object.<string,number>} Enum values
     * @throws {Error} If there is no such enum
     */
    public getEnum(name: string): { [k: string]: number };

    /**
     * Adds a nested object to this namespace.
     * @param {ReflectionObject} object Nested object to add
     * @returns {Namespace} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If there is already a nested object with this name
     */
    public add(object: ReflectionObject): Namespace;

    /**
     * Removes a nested object from this namespace.
     * @param {ReflectionObject} object Nested object to remove
     * @returns {Namespace} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If `object` is not a member of this namespace
     */
    public remove(object: ReflectionObject): Namespace;

    /**
     * Defines additial namespaces within this one if not yet existing.
     * @param {string|string[]} path Path to create
     * @param {*} [json] Nested types to create from JSON
     * @returns {Namespace} Pointer to the last namespace created or `this` if path is empty
     */
    public define(path: (string|string[]), json?: any): Namespace;

    /**
     * Resolves this namespace's and all its nested objects' type references. Useful to validate a reflection tree, but comes at a cost.
     * @returns {Namespace} `this`
     */
    public resolveAll(): Namespace;

    /**
     * Looks up the reflection object at the specified path, relative to this namespace.
     * @param {string|string[]} path Path to look up
     * @param {function(new: ReflectionObject)} filterType Filter type, one of `protobuf.Type`, `protobuf.Enum`, `protobuf.Service` etc.
     * @param {boolean} [parentAlreadyChecked=false] If known, whether the parent has already been checked
     * @returns {?ReflectionObject} Looked up object or `null` if none could be found
     */
    public lookup(path: (string|string[]), filterType: () => any, parentAlreadyChecked?: boolean): ReflectionObject;

    /**
     * Looks up the reflection object at the specified path, relative to this namespace.
     * @name NamespaceBase#lookup
     * @function
     * @param {string|string[]} path Path to look up
     * @param {boolean} [parentAlreadyChecked=false] Whether the parent has already been checked
     * @returns {?ReflectionObject} Looked up object or `null` if none could be found
     * @variation 2
     */
    public lookup(path: (string|string[]), parentAlreadyChecked?: boolean): ReflectionObject;

    /**
     * Looks up the {@link Type|type} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Type} Looked up type
     * @throws {Error} If `path` does not point to a type
     */
    public lookupType(path: (string|string[])): Type;

    /**
     * Looks up the {@link Service|service} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Service} Looked up service
     * @throws {Error} If `path` does not point to a service
     */
    public lookupService(path: (string|string[])): Service;

    /**
     * Looks up the values of the {@link Enum|enum} at the specified path, relative to this namespace.
     * Besides its signature, this methods differs from {@link Namespace#lookup|lookup} in that it returns the enum's values directly and throws instead of returning `null`.
     * @param {string|string[]} path Path to look up
     * @returns {Object.<string,number>} Enum values
     * @throws {Error} If `path` does not point to an enum
     */
    public lookupEnum(path: (string|string[])): { [k: string]: number };
}

/**
 * Constructs a new reflection object instance.
 * @classdesc Base class of all reflection objects.
 * @constructor
 * @param {string} name Object name
 * @param {Object.<string,*>} [options] Declared options
 * @abstract
 */
export abstract class ReflectionObject {

    /**
     * Options.
     * @type {Object.<string,*>|undefined}
     */
    public options?: { [k: string]: any };

    /**
     * Unique name within its namespace.
     * @type {string}
     */
    public name: string;

    /**
     * Parent namespace.
     * @type {?Namespace}
     */
    public parent: Namespace;

    /**
     * Whether already resolved or not.
     * @type {boolean}
     */
    public resolved: boolean;

    /**
     * Comment text, if any.
     * @type {?string}
     */
    public comment: string;

    /**
     * Defining file name.
     * @type {?string}
     */
    public filename: string;

    /**
     * Reference to the root namespace.
     * @name ReflectionObject#root
     * @type {Root}
     * @readonly
     */
    public readonly root: Root;

    /**
     * Full name including leading dot.
     * @name ReflectionObject#fullName
     * @type {string}
     * @readonly
     */
    public readonly fullName: string;

    /**
     * Converts this reflection object to its JSON representation.
     * @returns {Object.<string,*>} JSON object
     * @abstract
     */
    public toJSON(): { [k: string]: any };

    /**
     * Called when this object is added to a parent.
     * @param {ReflectionObject} parent Parent added to
     * @returns {undefined}
     */
    public onAdd(parent: ReflectionObject): void;

    /**
     * Called when this object is removed from a parent.
     * @param {ReflectionObject} parent Parent removed from
     * @returns {undefined}
     */
    public onRemove(parent: ReflectionObject): void;

    /**
     * Resolves this objects type references.
     * @returns {ReflectionObject} `this`
     */
    public resolve(): ReflectionObject;

    /**
     * Gets an option value.
     * @param {string} name Option name
     * @returns {*} Option value or `undefined` if not set
     */
    public getOption(name: string): any;

    /**
     * Sets an option.
     * @param {string} name Option name
     * @param {*} value Option value
     * @param {boolean} [ifNotSet] Sets the option only if it isn't currently set
     * @returns {ReflectionObject} `this`
     */
    public setOption(name: string, value: any, ifNotSet?: boolean): ReflectionObject;

    /**
     * Sets multiple options.
     * @param {Object.<string,*>} options Options to set
     * @param {boolean} [ifNotSet] Sets an option only if it isn't currently set
     * @returns {ReflectionObject} `this`
     */
    public setOptions(options: { [k: string]: any }, ifNotSet?: boolean): ReflectionObject;

    /**
     * Converts this instance to its string representation.
     * @returns {string} Class name[, space, full name]
     */
    public toString(): string;
}

/**
 * Constructs a new oneof instance.
 * @classdesc Reflected oneof.
 * @extends ReflectionObject
 * @constructor
 * @param {string} name Oneof name
 * @param {string[]|Object} [fieldNames] Field names
 * @param {Object.<string,*>} [options] Declared options
 */
export class OneOf extends ReflectionObject {

    /**
     * Constructs a new oneof instance.
     * @classdesc Reflected oneof.
     * @extends ReflectionObject
     * @constructor
     * @param {string} name Oneof name
     * @param {string[]|Object} [fieldNames] Field names
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, fieldNames?: (string[]|Object), options?: { [k: string]: any });

    /**
     * Field names that belong to this oneof.
     * @type {string[]}
     */
    public oneof: string[];

    /**
     * Fields that belong to this oneof as an array for iteration.
     * @type {Field[]}
     * @readonly
     */
    public readonly fieldsArray: Field[];

    /**
     * Constructs a oneof from JSON.
     * @param {string} name Oneof name
     * @param {Object.<string,*>} json JSON object
     * @returns {MapField} Created oneof
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): MapField;

    /**
     * Adds a field to this oneof and removes it from its current parent, if any.
     * @param {Field} field Field to add
     * @returns {OneOf} `this`
     */
    public add(field: Field): OneOf;

    /**
     * Removes a field from this oneof and puts it back to the oneof's parent.
     * @param {Field} field Field to remove
     * @returns {OneOf} `this`
     */
    public remove(field: Field): OneOf;
}

/**
 * Result object returned from {@link parse}.
 * @typedef ParserResult
 * @type {Object.<string,*>}
 * @property {string|undefined} package Package name, if declared
 * @property {string[]|undefined} imports Imports, if any
 * @property {string[]|undefined} weakImports Weak imports, if any
 * @property {string|undefined} syntax Syntax, if specified (either `"proto2"` or `"proto3"`)
 * @property {Root} root Populated root instance
 */
type ParserResult = { [k: string]: any };

/**
 * Options modifying the behavior of {@link parse}.
 * @typedef ParseOptions
 * @type {Object.<string,*>}
 * @property {boolean} [keepCase=false] Keeps field casing instead of converting to camel case
 */
type ParseOptions = { [k: string]: any };

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @function
 * @param {string} source Source contents
 * @param {Root} root Root to populate
 * @param {ParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {ParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {ParseOptions} defaults Default {@link ParseOptions}
 */
export function parse(source: string, root: Root, options?: ParseOptions): ParserResult;

/**
 * Parses the given .proto source and returns an object with the parsed contents.
 * @name parse
 * @function
 * @param {string} source Source contents
 * @param {ParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
 * @returns {ParserResult} Parser result
 * @property {string} filename=null Currently processing file name for error reporting, if known
 * @property {ParseOptions} defaults Default {@link ParseOptions}
 * @variation 2
 */
export function parse(source: string, options?: ParseOptions): ParserResult;

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
export class Reader {

    /**
     * Constructs a new reader instance using the specified buffer.
     * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
     * @constructor
     * @param {Uint8Array} buffer Buffer to read from
     */
    constructor(buffer: Uint8Array);

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    public buf: Uint8Array;

    /**
     * Read buffer position.
     * @type {number}
     */
    public pos: number;

    /**
     * Read buffer length.
     * @type {number}
     */
    public len: number;

    /**
     * Creates a new reader using the specified buffer.
     * @function
     * @param {Uint8Array|Buffer} buffer Buffer to read from
     * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
     * @throws {Error} If `buffer` is not a valid buffer
     */
    public static create(buffer: (Uint8Array|Buffer)): (Reader|BufferReader);

    /**
     * Reads a varint as an unsigned 32 bit value.
     * @function
     * @returns {number} Value read
     */
    public uint32(): number;

    /**
     * Reads a varint as a signed 32 bit value.
     * @returns {number} Value read
     */
    public int32(): number;

    /**
     * Reads a zig-zag encoded varint as a signed 32 bit value.
     * @returns {number} Value read
     */
    public sint32(): number;

    /**
     * Reads a varint as a signed 64 bit value.
     * @name Reader#int64
     * @function
     * @returns {Long|number} Value read
     */
    public int64(): (Long|number);

    /**
     * Reads a varint as an unsigned 64 bit value.
     * @name Reader#uint64
     * @function
     * @returns {Long|number} Value read
     */
    public uint64(): (Long|number);

    /**
     * Reads a zig-zag encoded varint as a signed 64 bit value.
     * @name Reader#sint64
     * @function
     * @returns {Long|number} Value read
     */
    public sint64(): (Long|number);

    /**
     * Reads a varint as a boolean.
     * @returns {boolean} Value read
     */
    public bool(): boolean;

    /**
     * Reads fixed 32 bits as an unsigned 32 bit integer.
     * @returns {number} Value read
     */
    public fixed32(): number;

    /**
     * Reads fixed 32 bits as a signed 32 bit integer.
     * @returns {number} Value read
     */
    public sfixed32(): number;

    /**
     * Reads fixed 64 bits.
     * @name Reader#fixed64
     * @function
     * @returns {Long|number} Value read
     */
    public fixed64(): (Long|number);

    /**
     * Reads zig-zag encoded fixed 64 bits.
     * @name Reader#sfixed64
     * @function
     * @returns {Long|number} Value read
     */
    public sfixed64(): (Long|number);

    /**
     * Reads a float (32 bit) as a number.
     * @function
     * @returns {number} Value read
     */
    public float(): number;

    /**
     * Reads a double (64 bit float) as a number.
     * @function
     * @returns {number} Value read
     */
    public double(): number;

    /**
     * Reads a sequence of bytes preceeded by its length as a varint.
     * @returns {Uint8Array} Value read
     */
    public bytes(): Uint8Array;

    /**
     * Reads a string preceeded by its byte length as a varint.
     * @returns {string} Value read
     */
    public string(): string;

    /**
     * Skips the specified number of bytes if specified, otherwise skips a varint.
     * @param {number} [length] Length if known, otherwise a varint is assumed
     * @returns {Reader} `this`
     */
    public skip(length?: number): Reader;

    /**
     * Skips the next element of the specified wire type.
     * @param {number} wireType Wire type received
     * @returns {Reader} `this`
     */
    public skipType(wireType: number): Reader;
}

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
export class BufferReader extends Reader {

    /**
     * Constructs a new buffer reader instance.
     * @classdesc Wire format reader using node buffers.
     * @extends Reader
     * @constructor
     * @param {Buffer} buffer Buffer to read from
     */
    constructor(buffer: Buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
    public buf: Buffer;

    /**
     * Reads a sequence of bytes preceeded by its length as a varint.
     * @name BufferReader#bytes
     * @function
     * @returns {Buffer} Value read
     */
    public bytes(): Buffer;
}

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */
export class Root extends NamespaceBase {

    /**
     * Constructs a new root namespace instance.
     * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
     * @extends NamespaceBase
     * @constructor
     * @param {Object.<string,*>} [options] Top level options
     */
    constructor(options?: { [k: string]: any });

    /**
     * Deferred extension fields.
     * @type {Field[]}
     */
    public deferred: Field[];

    /**
     * Resolved file names of loaded files.
     * @type {string[]}
     */
    public files: string[];

    /**
     * Loads a JSON definition into a root namespace.
     * @param {Object.<string,*>} json JSON definition
     * @param {Root} [root] Root namespace, defaults to create a new one if omitted
     * @returns {Root} Root namespace
     */
    public static fromJSON(json: { [k: string]: any }, root?: Root): Root;

    /**
     * Resolves the path of an imported file, relative to the importing origin.
     * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
     * @function
     * @param {string} origin The file name of the importing file
     * @param {string} target The file name being imported
     * @returns {?string} Resolved path to `target` or `null` to skip the file
     */
    public resolvePath(origin: string, target: string): string;

    /**
     * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {ParseOptions} options Parse options
     * @param {LoadCallback} callback Callback function
     * @returns {undefined}
     */
    public load(filename: (string|string[]), options: ParseOptions, callback: LoadCallback): void;

    /**
     * Loads one or multiple .proto or preprocessed .json files into this root namespace and returns a promise.
     * @name Root#load
     * @function
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {ParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
     * @returns {Promise<Root>} Promise
     * @variation 3
     */
    public load(filename: (string|string[]), options?: ParseOptions): Promise<Root>;

    /**
     * Synchronously loads one or multiple .proto or preprocessed .json files into this root namespace (node only).
     * @name Root#loadSync
     * @function
     * @param {string|string[]} filename Names of one or multiple files to load
     * @param {ParseOptions} [options] Parse options. Defaults to {@link parse.defaults} when omitted.
     * @returns {Root} Root namespace
     * @throws {Error} If synchronous fetching is not supported (i.e. in browsers) or if a file's syntax is invalid
     */
    public loadSync(filename: (string|string[]), options?: ParseOptions): Root;
}

/**
 * Streaming RPC helpers.
 * @namespace
 */
export namespace rpc {

    /**
     * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
     *
     * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
     * @typedef rpc.ServiceMethodCallback
     * @type {function}
     * @param {?Error} error Error, if any
     * @param {?Message} [response] Response message
     * @returns {undefined}
     */
    type ServiceMethodCallback = (error: Error, response?: Message) => void;

    /**
     * A service method part of a {@link rpc.ServiceMethodMixin|ServiceMethodMixin} and thus {@link rpc.Service} as created by {@link Service.create}.
     * @typedef rpc.ServiceMethod
     * @type {function}
     * @param {Message|Object} request Request message or plain object
     * @param {rpc.ServiceMethodCallback} [callback] Node-style callback called with the error, if any, and the response message
     * @returns {Promise<Message>} Promise if `callback` has been omitted, otherwise `undefined`
     */
    type ServiceMethod = (request: (Message|Object), callback?: rpc.ServiceMethodCallback) => Promise<Message>;

    /**
     * A service method mixin.
     *
     * When using TypeScript, mixed in service methods are only supported directly with a type definition of a static module (used with reflection). Otherwise, explicit casting is required.
     * @typedef rpc.ServiceMethodMixin
     * @type {Object.<string,rpc.ServiceMethod>}
     * @example
     * // Explicit casting with TypeScript
     * (myRpcService["myMethod"] as protobuf.rpc.ServiceMethod)(...)
     */
    type ServiceMethodMixin = { [k: string]: rpc.ServiceMethod };

    /**
     * Constructs a new RPC service instance.
     * @classdesc An RPC service as returned by {@link Service#create}.
     * @exports rpc.Service
     * @extends util.EventEmitter
     * @augments rpc.ServiceMethodMixin
     * @constructor
     * @param {RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    class Service extends util.EventEmitter {

        /**
         * Constructs a new RPC service instance.
         * @classdesc An RPC service as returned by {@link Service#create}.
         * @exports rpc.Service
         * @extends util.EventEmitter
         * @augments rpc.ServiceMethodMixin
         * @constructor
         * @param {RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * RPC implementation. Becomes `null` once the service is ended.
         * @type {?RPCImpl}
         */
        public rpcImpl: RPCImpl;

        /**
         * Whether requests are length-delimited.
         * @type {boolean}
         */
        public requestDelimited: boolean;

        /**
         * Whether responses are length-delimited.
         * @type {boolean}
         */
        public responseDelimited: boolean;

        /**
         * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
         * @param {Method|rpc.ServiceMethod} method Reflected or static method
         * @param {function} requestCtor Request constructor
         * @param {function} responseCtor Response constructor
         * @param {Message|Object} request Request message or plain object
         * @param {rpc.ServiceMethodCallback} callback Service callback
         * @returns {undefined}
         */
        public rpcCall(method: (Method|rpc.ServiceMethod), requestCtor: () => any, responseCtor: () => any, request: (Message|Object), callback: rpc.ServiceMethodCallback): void;

        /**
         * Ends this service and emits the `end` event.
         * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
         * @returns {rpc.Service} `this`
         */
        public end(endedByRPC?: boolean): rpc.Service;
    }
}

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */
type RPCImpl = (method: (Method|rpc.ServiceMethod), requestData: Uint8Array, callback: RPCImplCallback) => void;

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {?Uint8Array} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */
type RPCImplCallback = (error: Error, response?: Uint8Array) => void;

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
export class Service extends NamespaceBase {

    /**
     * Constructs a new service instance.
     * @classdesc Reflected service.
     * @extends NamespaceBase
     * @constructor
     * @param {string} name Service name
     * @param {Object.<string,*>} [options] Service options
     * @throws {TypeError} If arguments are invalid
     */
    constructor(name: string, options?: { [k: string]: any });

    /**
     * Service methods.
     * @type {Object.<string,Method>}
     */
    public methods: { [k: string]: Method };

    /**
     * Constructs a service from JSON.
     * @param {string} name Service name
     * @param {Object.<string,*>} json JSON object
     * @returns {Service} Created service
     * @throws {TypeError} If arguments are invalid
     */
    public static fromJSON(name: string, json: { [k: string]: any }): Service;

    /**
     * Methods of this service as an array for iteration.
     * @name Service#methodsArray
     * @type {Method[]}
     * @readonly
     */
    public readonly methodsArray: Method[];

    /**
     * Creates a runtime service using the specified rpc implementation.
     * @param {RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
     */
    public create(rpcImpl: RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): rpc.Service;
}

/**
 * Handle object returned from {@link tokenize}.
 * @typedef {Object.<string,*>} TokenizerHandle
 * @property {function():number} line Gets the current line number
 * @property {function():?string} next Gets the next token and advances (`null` on eof)
 * @property {function():?string} peek Peeks for the next token (`null` on eof)
 * @property {function(string)} push Pushes a token back to the stack
 * @property {function(string, boolean=):boolean} skip Skips a token, returns its presence and advances or, if non-optional and not present, throws
 * @property {function(number=):?string} cmnt Gets the comment on the previous line or the line comment on the specified line, if any
 */
type TokenizerHandle = { [k: string]: any };

/**
 * Tokenizes the given .proto source and returns an object with useful utility functions.
 * @param {string} source Source contents
 * @returns {TokenizerHandle} Tokenizer handle
 * @property {function(string):string} unescape Unescapes a string
 */
export function tokenize(source: string): TokenizerHandle;

/**
 * Constructs a new reflected message type instance.
 * @classdesc Reflected message type.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Message name
 * @param {Object.<string,*>} [options] Declared options
 */
export class Type extends NamespaceBase {

    /**
     * Constructs a new reflected message type instance.
     * @classdesc Reflected message type.
     * @extends NamespaceBase
     * @constructor
     * @param {string} name Message name
     * @param {Object.<string,*>} [options] Declared options
     */
    constructor(name: string, options?: { [k: string]: any });

    /**
     * Creates a type from JSON.
     * @param {string} name Message name
     * @param {Object.<string,*>} json JSON object
     * @returns {Type} Created message type
     */
    public static fromJSON(name: string, json: { [k: string]: any }): Type;

    /**
     * Message fields.
     * @type {Object.<string,Field>}
     */
    public fields: { [k: string]: Field };

    /**
     * Oneofs declared within this namespace, if any.
     * @type {Object.<string,OneOf>}
     */
    public oneofs: { [k: string]: OneOf };

    /**
     * Extension ranges, if any.
     * @type {number[][]}
     */
    public extensions: number[][];

    /**
     * Reserved ranges, if any.
     * @type {Array.<number[]|string>}
     */
    public reserved: (number[]|string)[];

    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {Object.<number,Field>}
     * @readonly
     */
    public readonly fieldsById: { [k: number]: Field };

    /**
     * Fields of this message as an array for iteration.
     * @name Type#fieldsArray
     * @type {Field[]}
     * @readonly
     */
    public readonly fieldsArray: Field[];

    /**
     * Oneofs of this message as an array for iteration.
     * @name Type#oneofsArray
     * @type {OneOf[]}
     * @readonly
     */
    public readonly oneofsArray: OneOf[];

    /**
     * The registered constructor, if any registered, otherwise a generic constructor.
     * @name Type#ctor
     * @type {Class}
     */
    public ctor: Class;

    /**
     * Adds a nested object to this type.
     * @param {ReflectionObject} object Nested object to add
     * @returns {Type} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If there is already a nested object with this name or, if a field, when there is already a field with this id
     */
    public add(object: ReflectionObject): Type;

    /**
     * Removes a nested object from this type.
     * @param {ReflectionObject} object Nested object to remove
     * @returns {Type} `this`
     * @throws {TypeError} If arguments are invalid
     * @throws {Error} If `object` is not a member of this type
     */
    public remove(object: ReflectionObject): Type;

    /**
     * Tests if the specified id is reserved.
     * @param {number} id Id to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    public isReservedId(id: number): boolean;

    /**
     * Tests if the specified name is reserved.
     * @param {string} name Name to test
     * @returns {boolean} `true` if reserved, otherwise `false`
     */
    public isReservedName(name: string): boolean;

    /**
     * Creates a new message of this type using the specified properties.
     * @param {Object.<string,*>} [properties] Properties to set
     * @returns {Message} Runtime message
     */
    public create(properties?: { [k: string]: any }): Message;

    /**
     * Sets up {@link Type#encode|encode}, {@link Type#decode|decode} and {@link Type#verify|verify}.
     * @returns {Type} `this`
     */
    public setup(): Type;

    /**
     * Encodes a message of this type. Does not implicitly {@link Type#verify|verify} messages.
     * @param {Message|Object} message Message instance or plain object
     * @param {Writer} [writer] Writer to encode to
     * @returns {Writer} writer
     */
    public encode(message: (Message|Object), writer?: Writer): Writer;

    /**
     * Encodes a message of this type preceeded by its byte length as a varint. Does not implicitly {@link Type#verify|verify} messages.
     * @param {Message|Object} message Message instance or plain object
     * @param {Writer} [writer] Writer to encode to
     * @returns {Writer} writer
     */
    public encodeDelimited(message: (Message|Object), writer?: Writer): Writer;

    /**
     * Decodes a message of this type.
     * @param {Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Length of the message, if known beforehand
     * @returns {Message} Decoded message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {util.ProtocolError} If required fields are missing
     */
    public decode(reader: (Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a message of this type preceeded by its byte length as a varint.
     * @param {Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Decoded message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {util.ProtocolError} If required fields are missing
     */
    public decodeDelimited(reader: (Reader|Uint8Array)): Message;

    /**
     * Verifies that field values are valid and that required fields are present.
     * @param {Message|Object} message Message to verify
     * @returns {?string} `null` if valid, otherwise the reason why it is not
     */
    public verify(message: (Message|Object)): string;

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message instance
     */
    public fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a new message of this type from a plain object. Also converts values to their respective internal types.
     * This is an alias of {@link Type#fromObject}.
     * @function
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message instance
     */
    public from(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a message of this type. Also converts values to other types if specified.
     * @param {Message} message Message instance
     * @param {ConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    public toObject(message: Message, options?: ConversionOptions): { [k: string]: any };
}

/**
 * Conversion options as used by {@link Type#toObject} and {@link Message.toObject}.
 * @typedef ConversionOptions
 * @type {Object}
 * @property {*} [longs] Long conversion type.
 * Valid values are `String` and `Number` (the global types).
 * Defaults to copy the present value, which is a possibly unsafe number without and a {@link Long} with a long library.
 * @property {*} [enums] Enum value conversion type.
 * Only valid value is `String` (the global type).
 * Defaults to copy the present value, which is the numeric id.
 * @property {*} [bytes] Bytes value conversion type.
 * Valid values are `Array` and (a base64 encoded) `String` (the global types).
 * Defaults to copy the present value, which usually is a Buffer under node and an Uint8Array in the browser.
 * @property {boolean} [defaults=false] Also sets default values on the resulting object
 * @property {boolean} [arrays=false] Sets empty arrays for missing repeated fields even if `defaults=false`
 * @property {boolean} [objects=false] Sets empty objects for missing map fields even if `defaults=false`
 */
interface ConversionOptions {
    longs?: any;
    enums?: any;
    bytes?: any;
    defaults?: boolean;
    arrays?: boolean;
    objects?: boolean;
}

/**
 * Common type constants.
 * @namespace
 */
export namespace types {

    /**
     * Basic type wire types.
     * @type {Object.<string,number>}
     * @property {number} double=1 Fixed64 wire type
     * @property {number} float=5 Fixed32 wire type
     * @property {number} int32=0 Varint wire type
     * @property {number} uint32=0 Varint wire type
     * @property {number} sint32=0 Varint wire type
     * @property {number} fixed32=5 Fixed32 wire type
     * @property {number} sfixed32=5 Fixed32 wire type
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     * @property {number} bool=0 Varint wire type
     * @property {number} string=2 Ldelim wire type
     * @property {number} bytes=2 Ldelim wire type
     */
    let basic: {
        "double": number,
        "float": number,
        "int32": number,
        "uint32": number,
        "sint32": number,
        "fixed32": number,
        "sfixed32": number,
        "int64": number,
        "uint64": number,
        "sint64": number,
        "fixed64": number,
        "sfixed64": number,
        "bool": number,
        "string": number,
        "bytes": number
    };

    /**
     * Basic type defaults.
     * @type {Object.<string,*>}
     * @property {number} double=0 Double default
     * @property {number} float=0 Float default
     * @property {number} int32=0 Int32 default
     * @property {number} uint32=0 Uint32 default
     * @property {number} sint32=0 Sint32 default
     * @property {number} fixed32=0 Fixed32 default
     * @property {number} sfixed32=0 Sfixed32 default
     * @property {number} int64=0 Int64 default
     * @property {number} uint64=0 Uint64 default
     * @property {number} sint64=0 Sint32 default
     * @property {number} fixed64=0 Fixed64 default
     * @property {number} sfixed64=0 Sfixed64 default
     * @property {boolean} bool=false Bool default
     * @property {string} string="" String default
     * @property {Array.<number>} bytes=Array(0) Bytes default
     * @property {Message} message=null Message default
     */
    let defaults: {
        "double": number,
        "float": number,
        "int32": number,
        "uint32": number,
        "sint32": number,
        "fixed32": number,
        "sfixed32": number,
        "int64": number,
        "uint64": number,
        "sint64": number,
        "fixed64": number,
        "sfixed64": number,
        "bool": boolean,
        "string": string,
        "bytes": number[],
        "message": Message
    };

    /**
     * Basic long type wire types.
     * @type {Object.<string,number>}
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     */
    let long: {
        "int64": number,
        "uint64": number,
        "sint64": number,
        "fixed64": number,
        "sfixed64": number
    };

    /**
     * Allowed types for map keys with their associated wire type.
     * @type {Object.<string,number>}
     * @property {number} int32=0 Varint wire type
     * @property {number} uint32=0 Varint wire type
     * @property {number} sint32=0 Varint wire type
     * @property {number} fixed32=5 Fixed32 wire type
     * @property {number} sfixed32=5 Fixed32 wire type
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     * @property {number} bool=0 Varint wire type
     * @property {number} string=2 Ldelim wire type
     */
    let mapKey: {
        "int32": number,
        "uint32": number,
        "sint32": number,
        "fixed32": number,
        "sfixed32": number,
        "int64": number,
        "uint64": number,
        "sint64": number,
        "fixed64": number,
        "sfixed64": number,
        "bool": number,
        "string": number
    };

    /**
     * Allowed types for packed repeated fields with their associated wire type.
     * @type {Object.<string,number>}
     * @property {number} double=1 Fixed64 wire type
     * @property {number} float=5 Fixed32 wire type
     * @property {number} int32=0 Varint wire type
     * @property {number} uint32=0 Varint wire type
     * @property {number} sint32=0 Varint wire type
     * @property {number} fixed32=5 Fixed32 wire type
     * @property {number} sfixed32=5 Fixed32 wire type
     * @property {number} int64=0 Varint wire type
     * @property {number} uint64=0 Varint wire type
     * @property {number} sint64=0 Varint wire type
     * @property {number} fixed64=1 Fixed64 wire type
     * @property {number} sfixed64=1 Fixed64 wire type
     * @property {number} bool=0 Varint wire type
     */
    let packed: {
        "double": number,
        "float": number,
        "int32": number,
        "uint32": number,
        "sint32": number,
        "fixed32": number,
        "sfixed32": number,
        "int64": number,
        "uint64": number,
        "sint64": number,
        "fixed64": number,
        "sfixed64": number,
        "bool": number
    };
}

/**
 * Any compatible Long instance.
 *
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @typedef Long
 * @type {Object}
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */
interface Long {
    low: number;
    high: number;
    unsigned: boolean;
}

/**
 * Various utility functions.
 * @namespace
 */
export namespace util {

    /**
     * Constructs new long bits.
     * @classdesc Helper class for working with the low and high bits of a 64 bit value.
     * @memberof util
     * @constructor
     * @param {number} lo Low 32 bits, unsigned
     * @param {number} hi High 32 bits, unsigned
     */
    class LongBits {

        /**
         * Constructs new long bits.
         * @classdesc Helper class for working with the low and high bits of a 64 bit value.
         * @memberof util
         * @constructor
         * @param {number} lo Low 32 bits, unsigned
         * @param {number} hi High 32 bits, unsigned
         */
        constructor(lo: number, hi: number);

        /**
         * Low bits.
         * @type {number}
         */
        public lo: number;

        /**
         * High bits.
         * @type {number}
         */
        public hi: number;

        /**
         * Zero bits.
         * @memberof util.LongBits
         * @type {util.LongBits}
         */
        public static zero: util.LongBits;

        /**
         * Zero hash.
         * @memberof util.LongBits
         * @type {string}
         */
        public static zeroHash: string;

        /**
         * Constructs new long bits from the specified number.
         * @param {number} value Value
         * @returns {util.LongBits} Instance
         */
        public static fromNumber(value: number): util.LongBits;

        /**
         * Constructs new long bits from a number, long or string.
         * @param {Long|number|string} value Value
         * @returns {util.LongBits} Instance
         */
        public static from(value: (Long|number|string)): util.LongBits;

        /**
         * Converts this long bits to a possibly unsafe JavaScript number.
         * @param {boolean} [unsigned=false] Whether unsigned or not
         * @returns {number} Possibly unsafe number
         */
        public toNumber(unsigned?: boolean): number;

        /**
         * Converts this long bits to a long.
         * @param {boolean} [unsigned=false] Whether unsigned or not
         * @returns {Long} Long
         */
        public toLong(unsigned?: boolean): Long;

        /**
         * Constructs new long bits from the specified 8 characters long hash.
         * @param {string} hash Hash
         * @returns {util.LongBits} Bits
         */
        public static fromHash(hash: string): util.LongBits;

        /**
         * Converts this long bits to a 8 characters long hash.
         * @returns {string} Hash
         */
        public toHash(): string;

        /**
         * Zig-zag encodes this long bits.
         * @returns {util.LongBits} `this`
         */
        public zzEncode(): util.LongBits;

        /**
         * Zig-zag decodes this long bits.
         * @returns {util.LongBits} `this`
         */
        public zzDecode(): util.LongBits;

        /**
         * Calculates the length of this longbits when encoded as a varint.
         * @returns {number} Length
         */
        public length(): number;
    }

    /**
     * An immuable empty array.
     * @memberof util
     * @type {Array.<*>}
     */
    let emptyArray: any[];

    /**
     * An immutable empty object.
     * @type {Object}
     */
    let emptyObject: Object;

    /**
     * Whether running within node or not.
     * @memberof util
     * @type {boolean}
     */
    let isNode: boolean;

    /**
     * Tests if the specified value is an integer.
     * @function
     * @param {*} value Value to test
     * @returns {boolean} `true` if the value is an integer
     */
    function isInteger(value: any): boolean;

    /**
     * Tests if the specified value is a string.
     * @param {*} value Value to test
     * @returns {boolean} `true` if the value is a string
     */
    function isString(value: any): boolean;

    /**
     * Tests if the specified value is a non-null object.
     * @param {*} value Value to test
     * @returns {boolean} `true` if the value is a non-null object
     */
    function isObject(value: any): boolean;

    /**
     * Node's Buffer class if available.
     * @type {?function(new: Buffer)}
     */
    let Buffer: () => any;

    /**
     * Creates a new buffer of whatever type supported by the environment.
     * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
     * @returns {Uint8Array|Buffer} Buffer
     */
    function newBuffer(sizeOrArray?: (number|number[])): (Uint8Array|Buffer);

    /**
     * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
     * @type {?function(new: Uint8Array, *)}
     */
    let Array: () => any;

    /**
     * Long.js's Long class if available.
     * @type {?function(new: Long)}
     */
    let Long: () => any;

    /**
     * Regular expression used to verify 2 bit (`bool`) map keys.
     * @type {RegExp}
     */
    let key2Re: RegExp;

    /**
     * Regular expression used to verify 32 bit (`int32` etc.) map keys.
     * @type {RegExp}
     */
    let key32Re: RegExp;

    /**
     * Regular expression used to verify 64 bit (`int64` etc.) map keys.
     * @type {RegExp}
     */
    let key64Re: RegExp;

    /**
     * Converts a number or long to an 8 characters long hash string.
     * @param {Long|number} value Value to convert
     * @returns {string} Hash
     */
    function longToHash(value: (Long|number)): string;

    /**
     * Converts an 8 characters long hash string to a long or number.
     * @param {string} hash Hash
     * @param {boolean} [unsigned=false] Whether unsigned or not
     * @returns {Long|number} Original value
     */
    function longFromHash(hash: string, unsigned?: boolean): (Long|number);

    /**
     * Merges the properties of the source object into the destination object.
     * @memberof util
     * @param {Object.<string,*>} dst Destination object
     * @param {Object.<string,*>} src Source object
     * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
     * @returns {Object.<string,*>} Destination object
     */
    function merge(dst: { [k: string]: any }, src: { [k: string]: any }, ifNotSet?: boolean): { [k: string]: any };

    /**
     * Converts the first character of a string to lower case.
     * @param {string} str String to convert
     * @returns {string} Converted string
     */
    function lcFirst(str: string): string;

    /**
     * Creates a custom error constructor.
     * @memberof util
     * @param {string} name Error name
     * @returns {function} Custom error constructor
     */
    function newError(name: string): () => any;

    /**
     * Constructs a new protocol error.
     * @classdesc Error subclass indicating a protocol specifc error.
     * @memberof util
     * @extends Error
     * @constructor
     * @param {string} message Error message
     * @param {Object.<string,*>=} properties Additional properties
     * @example
     * try {
     *     MyMessage.decode(someBuffer); // throws if required fields are missing
     * } catch (e) {
     *     if (e instanceof ProtocolError && e.instance)
     *         console.log("decoded so far: " + JSON.stringify(e.instance));
     * }
     */
    class ProtocolError extends Error {

        /**
         * Constructs a new protocol error.
         * @classdesc Error subclass indicating a protocol specifc error.
         * @memberof util
         * @extends Error
         * @constructor
         * @param {string} message Error message
         * @param {Object.<string,*>=} properties Additional properties
         * @example
         * try {
         *     MyMessage.decode(someBuffer); // throws if required fields are missing
         * } catch (e) {
         *     if (e instanceof ProtocolError && e.instance)
         *         console.log("decoded so far: " + JSON.stringify(e.instance));
         * }
         */
        constructor(message: string, properties?: { [k: string]: any });

        /**
         * So far decoded message instance.
         * @name util.ProtocolError#instance
         * @type {Message}
         */
        public instance: Message;
    }

    /**
     * Builds a getter for a oneof's present field name.
     * @param {string[]} fieldNames Field names
     * @returns {function():string|undefined} Unbound getter
     */
    function oneOfGetter(fieldNames: string[]): () => any;

    /**
     * Builds a setter for a oneof's present field name.
     * @param {string[]} fieldNames Field names
     * @returns {function(?string):undefined} Unbound setter
     */
    function oneOfSetter(fieldNames: string[]): () => any;

    /**
     * Lazily resolves fully qualified type names against the specified root.
     * @param {Root} root Root instanceof
     * @param {Object.<number,string|ReflectionObject>} lazyTypes Type names
     * @returns {undefined}
     */
    function lazyResolve(root: Root, lazyTypes: { [k: number]: (string|ReflectionObject) }): void;

    /**
     * Default conversion options used for toJSON implementations. Converts longs, enums and bytes to strings.
     * @type {ConversionOptions}
     */
    let toJSONOptions: ConversionOptions;

    /**
     * Node's fs module if available.
     * @type {Object.<string,*>}
     */
    let fs: { [k: string]: any };

    /**
     * Converts an object's values to an array.
     * @param {Object.<string,*>} object Object to convert
     * @returns {Array.<*>} Converted array
     */
    function toArray(object: { [k: string]: any }): any[];

    /**
     * Returns a safe property accessor for the specified properly name.
     * @param {string} prop Property name
     * @returns {string} Safe accessor
     */
    function safeProp(prop: string): string;

    /**
     * Converts the first character of a string to upper case.
     * @param {string} str String to convert
     * @returns {string} Converted string
     */
    function ucFirst(str: string): string;

    /**
     * Returns a promise from a node-style callback function.
     * @memberof util
     * @param {function(?Error, ...*)} fn Function to call
     * @param {*} ctx Function context
     * @param {...*} params Function arguments
     * @returns {Promise<*>} Promisified function
     */
    function asPromise(fn: () => any, ctx: any, ...params: any[]): Promise<any>;

    /**
     * A minimal base64 implementation for number arrays.
     * @memberof util
     * @namespace
     */
    namespace base64 {

        /**
         * Calculates the byte length of a base64 encoded string.
         * @param {string} string Base64 encoded string
         * @returns {number} Byte length
         */
        function length(string: string): number;

        /**
         * Encodes a buffer to a base64 encoded string.
         * @param {Uint8Array} buffer Source buffer
         * @param {number} start Source start
         * @param {number} end Source end
         * @returns {string} Base64 encoded string
         */
        function encode(buffer: Uint8Array, start: number, end: number): string;

        /**
         * Decodes a base64 encoded string to a buffer.
         * @param {string} string Source string
         * @param {Uint8Array} buffer Destination buffer
         * @param {number} offset Destination offset
         * @returns {number} Number of bytes written
         * @throws {Error} If encoding is invalid
         */
        function decode(string: string, buffer: Uint8Array, offset: number): number;

        /**
         * Tests if the specified string appears to be base64 encoded.
         * @param {string} string String to test
         * @returns {boolean} `true` if probably base64 encoded, otherwise false
         */
        function test(string: string): boolean;
    }

    /**
     * A closure for generating functions programmatically.
     * @memberof util
     * @namespace
     * @function
     * @param {...string} params Function parameter names
     * @returns {Codegen} Codegen instance
     * @property {boolean} supported Whether code generation is supported by the environment.
     * @property {boolean} verbose=false When set to true, codegen will log generated code to console. Useful for debugging.
     * @property {function(string, ...*):string} sprintf Underlying sprintf implementation
     */
    function codegen(...params: string[]): Codegen;

    /**
     * Constructs a new event emitter instance.
     * @classdesc A minimal event emitter.
     * @memberof util
     * @constructor
     */
    class EventEmitter {

        /**
         * Constructs a new event emitter instance.
         * @classdesc A minimal event emitter.
         * @memberof util
         * @constructor
         */
        constructor();

        /**
         * Registers an event listener.
         * @param {string} evt Event name
         * @param {function} fn Listener
         * @param {*} [ctx] Listener context
         * @returns {util.EventEmitter} `this`
         */
        public on(evt: string, fn: () => any, ctx?: any): util.EventEmitter;

        /**
         * Removes an event listener or any matching listeners if arguments are omitted.
         * @param {string} [evt] Event name. Removes all listeners if omitted.
         * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
         * @returns {util.EventEmitter} `this`
         */
        public off(evt?: string, fn?: () => any): util.EventEmitter;

        /**
         * Emits an event by calling its listeners with the specified arguments.
         * @param {string} evt Event name
         * @param {...*} args Arguments
         * @returns {util.EventEmitter} `this`
         */
        public emit(evt: string, ...args: any[]): util.EventEmitter;
    }

    /**
     * Fetches the contents of a file.
     * @memberof util
     * @param {string} filename File path or url
     * @param {FetchOptions} options Fetch options
     * @param {FetchCallback} callback Callback function
     * @returns {undefined}
     */
    function fetch(filename: string, options: FetchOptions, callback: FetchCallback): void;

    /**
     * Fetches the contents of a file.
     * @name util.fetch
     * @function
     * @param {string} path File path or url
     * @param {FetchCallback} callback Callback function
     * @returns {undefined}
     * @variation 2
     */
    function fetch(path: string, callback: FetchCallback): void;

    /**
     * Fetches the contents of a file.
     * @name util.fetch
     * @function
     * @param {string} path File path or url
     * @param {FetchOptions} [options] Fetch options
     * @returns {Promise<string|Uint8Array>} Promise
     * @variation 3
     */
    function fetch(path: string, options?: FetchOptions): Promise<(string|Uint8Array)>;

    /**
     * Requires a module only if available.
     * @memberof util
     * @param {string} moduleName Module to require
     * @returns {?Object} Required module if available and not empty, otherwise `null`
     */
    function inquire(moduleName: string): Object;

    /**
     * A minimal path module to resolve Unix, Windows and URL paths alike.
     * @memberof util
     * @namespace
     */
    namespace path {

        /**
         * Tests if the specified path is absolute.
         * @param {string} path Path to test
         * @returns {boolean} `true` if path is absolute
         */
        function isAbsolute(path: string): boolean;

        /**
         * Normalizes the specified path.
         * @param {string} path Path to normalize
         * @returns {string} Normalized path
         */
        function normalize(path: string): string;

        /**
         * Resolves the specified include path against the specified origin path.
         * @param {string} originPath Path to the origin file
         * @param {string} includePath Include path relative to origin path
         * @param {boolean} [alreadyNormalized=false] `true` if both paths are already known to be normalized
         * @returns {string} Path to the include file
         */
        function resolve(originPath: string, includePath: string, alreadyNormalized?: boolean): string;
    }

    /**
     * A general purpose buffer pool.
     * @memberof util
     * @function
     * @param {PoolAllocator} alloc Allocator
     * @param {PoolSlicer} slice Slicer
     * @param {number} [size=8192] Slab size
     * @returns {PoolAllocator} Pooled allocator
     */
    function pool(alloc: PoolAllocator, slice: PoolSlicer, size?: number): PoolAllocator;

    /**
     * A minimal UTF8 implementation for number arrays.
     * @memberof util
     * @namespace
     */
    namespace utf8 {

        /**
         * Calculates the UTF8 byte length of a string.
         * @param {string} string String
         * @returns {number} Byte length
         */
        function length(string: string): number;

        /**
         * Reads UTF8 bytes as a string.
         * @param {Uint8Array} buffer Source buffer
         * @param {number} start Source start
         * @param {number} end Source end
         * @returns {string} String read
         */
        function read(buffer: Uint8Array, start: number, end: number): string;

        /**
         * Writes a string as UTF8 bytes.
         * @param {string} string Source string
         * @param {Uint8Array} buffer Destination buffer
         * @param {number} offset Destination offset
         * @returns {number} Bytes written
         */
        function write(string: string, buffer: Uint8Array, offset: number): number;
    }
}

/**
 * Generates a verifier specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
export function verifier(mtype: Type): Codegen;

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
export class Writer {

    /**
     * Constructs a new writer instance.
     * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
     * @constructor
     */
    constructor();

    /**
     * Current length.
     * @type {number}
     */
    public len: number;

    /**
     * Operations head.
     * @type {Object}
     */
    public head: Object;

    /**
     * Operations tail
     * @type {Object}
     */
    public tail: Object;

    /**
     * Linked forked states.
     * @type {?Object}
     */
    public states: Object;

    /**
     * Creates a new writer.
     * @function
     * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
     */
    public static create(): (BufferWriter|Writer);

    /**
     * Allocates a buffer of the specified size.
     * @param {number} size Buffer size
     * @returns {Uint8Array} Buffer
     */
    public static alloc(size: number): Uint8Array;

    /**
     * Pushes a new operation to the queue.
     * @param {function(Uint8Array, number, *)} fn Function to call
     * @param {number} len Value byte length
     * @param {number} val Value to write
     * @returns {Writer} `this`
     */
    public push(fn: () => any, len: number, val: number): Writer;

    /**
     * Writes an unsigned 32 bit value as a varint.
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public uint32(value: number): Writer;

    /**
     * Writes a signed 32 bit value as a varint.
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public int32(value: number): Writer;

    /**
     * Writes a 32 bit value as a varint, zig-zag encoded.
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public sint32(value: number): Writer;

    /**
     * Writes an unsigned 64 bit value as a varint.
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public uint64(value: (Long|number|string)): Writer;

    /**
     * Writes a signed 64 bit value as a varint.
     * @function
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public int64(value: (Long|number|string)): Writer;

    /**
     * Writes a signed 64 bit value as a varint, zig-zag encoded.
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public sint64(value: (Long|number|string)): Writer;

    /**
     * Writes a boolish value as a varint.
     * @param {boolean} value Value to write
     * @returns {Writer} `this`
     */
    public bool(value: boolean): Writer;

    /**
     * Writes an unsigned 32 bit value as fixed 32 bits.
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public fixed32(value: number): Writer;

    /**
     * Writes a signed 32 bit value as fixed 32 bits.
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public sfixed32(value: number): Writer;

    /**
     * Writes an unsigned 64 bit value as fixed 64 bits.
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public fixed64(value: (Long|number|string)): Writer;

    /**
     * Writes a signed 64 bit value as fixed 64 bits.
     * @function
     * @param {Long|number|string} value Value to write
     * @returns {Writer} `this`
     * @throws {TypeError} If `value` is a string and no long library is present.
     */
    public sfixed64(value: (Long|number|string)): Writer;

    /**
     * Writes a float (32 bit).
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public float(value: number): Writer;

    /**
     * Writes a double (64 bit float).
     * @function
     * @param {number} value Value to write
     * @returns {Writer} `this`
     */
    public double(value: number): Writer;

    /**
     * Writes a sequence of bytes.
     * @param {Uint8Array|string} value Buffer or base64 encoded string to write
     * @returns {Writer} `this`
     */
    public bytes(value: (Uint8Array|string)): Writer;

    /**
     * Writes a string.
     * @param {string} value Value to write
     * @returns {Writer} `this`
     */
    public string(value: string): Writer;

    /**
     * Forks this writer's state by pushing it to a stack.
     * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
     * @returns {Writer} `this`
     */
    public fork(): Writer;

    /**
     * Resets this instance to the last state.
     * @returns {Writer} `this`
     */
    public reset(): Writer;

    /**
     * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
     * @returns {Writer} `this`
     */
    public ldelim(): Writer;

    /**
     * Finishes the write operation.
     * @returns {Uint8Array} Finished buffer
     */
    public finish(): Uint8Array;
}

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
export class BufferWriter extends Writer {

    /**
     * Constructs a new buffer writer instance.
     * @classdesc Wire format writer using node buffers.
     * @extends Writer
     * @constructor
     */
    constructor();

    /**
     * Allocates a buffer of the specified size.
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    public static alloc(size: number): Buffer;

    /**
     * Finishes the write operation.
     * @name BufferWriter#finish
     * @function
     * @returns {Buffer} Finished buffer
     */
    public finish(): Buffer;
}

/**
 * A codegen instance as returned by {@link codegen}, that also is a sprintf-like appender function.
 * @typedef Codegen
 * @type {function}
 * @param {string} format Format string
 * @param {...*} args Replacements
 * @returns {Codegen} Itself
 * @property {function(string=):string} str Stringifies the so far generated function source.
 * @property {function(string=, Object=):function} eof Ends generation and builds the function whilst applying a scope.
 */
type Codegen = (format: string, ...args: any[]) => Codegen;

/**
 * Node-style callback as used by {@link util.fetch}.
 * @typedef FetchCallback
 * @type {function}
 * @param {?Error} error Error, if any, otherwise `null`
 * @param {string} [contents] File contents, if there hasn't been an error
 * @returns {undefined}
 */
type FetchCallback = (error: Error, contents?: string) => void;

/**
 * Options as used by {@link util.fetch}.
 * @typedef FetchOptions
 * @type {Object}
 * @property {boolean} [binary=false] Whether expecting a binary response
 * @property {boolean} [xhr=false] If `true`, forces the use of XMLHttpRequest
 */
interface FetchOptions {
    binary?: boolean;
    xhr?: boolean;
}

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
type PoolAllocator = (size: number) => Uint8Array;

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */
type PoolSlicer = (this: Uint8Array, start: number, end: number) => Uint8Array;
