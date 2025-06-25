
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Rectangle
 * 
 */
export type Rectangle = $Result.DefaultSelection<Prisma.$RectanglePayload>
/**
 * Model Circle
 * 
 */
export type Circle = $Result.DefaultSelection<Prisma.$CirclePayload>
/**
 * Model Line
 * 
 */
export type Line = $Result.DefaultSelection<Prisma.$LinePayload>
/**
 * Model Shape
 * 
 */
export type Shape = $Result.DefaultSelection<Prisma.$ShapePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StringType: {
  Rectangle: 'Rectangle',
  Circle: 'Circle',
  Line: 'Line'
};

export type StringType = (typeof StringType)[keyof typeof StringType]

}

export type StringType = $Enums.StringType

export const StringType: typeof $Enums.StringType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rectangle`: Exposes CRUD operations for the **Rectangle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rectangles
    * const rectangles = await prisma.rectangle.findMany()
    * ```
    */
  get rectangle(): Prisma.RectangleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.circle`: Exposes CRUD operations for the **Circle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Circles
    * const circles = await prisma.circle.findMany()
    * ```
    */
  get circle(): Prisma.CircleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.line`: Exposes CRUD operations for the **Line** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lines
    * const lines = await prisma.line.findMany()
    * ```
    */
  get line(): Prisma.LineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shape`: Exposes CRUD operations for the **Shape** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shapes
    * const shapes = await prisma.shape.findMany()
    * ```
    */
  get shape(): Prisma.ShapeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Room: 'Room',
    Rectangle: 'Rectangle',
    Circle: 'Circle',
    Line: 'Line',
    Shape: 'Shape'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "room" | "rectangle" | "circle" | "line" | "shape"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Rectangle: {
        payload: Prisma.$RectanglePayload<ExtArgs>
        fields: Prisma.RectangleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RectangleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RectangleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          findFirst: {
            args: Prisma.RectangleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RectangleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          findMany: {
            args: Prisma.RectangleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>[]
          }
          create: {
            args: Prisma.RectangleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          createMany: {
            args: Prisma.RectangleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RectangleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>[]
          }
          delete: {
            args: Prisma.RectangleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          update: {
            args: Prisma.RectangleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          deleteMany: {
            args: Prisma.RectangleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RectangleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RectangleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>[]
          }
          upsert: {
            args: Prisma.RectangleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RectanglePayload>
          }
          aggregate: {
            args: Prisma.RectangleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRectangle>
          }
          groupBy: {
            args: Prisma.RectangleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RectangleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RectangleCountArgs<ExtArgs>
            result: $Utils.Optional<RectangleCountAggregateOutputType> | number
          }
        }
      }
      Circle: {
        payload: Prisma.$CirclePayload<ExtArgs>
        fields: Prisma.CircleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CircleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CircleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findFirst: {
            args: Prisma.CircleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CircleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          findMany: {
            args: Prisma.CircleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          create: {
            args: Prisma.CircleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          createMany: {
            args: Prisma.CircleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CircleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          delete: {
            args: Prisma.CircleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          update: {
            args: Prisma.CircleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          deleteMany: {
            args: Prisma.CircleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CircleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CircleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>[]
          }
          upsert: {
            args: Prisma.CircleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CirclePayload>
          }
          aggregate: {
            args: Prisma.CircleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCircle>
          }
          groupBy: {
            args: Prisma.CircleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CircleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CircleCountArgs<ExtArgs>
            result: $Utils.Optional<CircleCountAggregateOutputType> | number
          }
        }
      }
      Line: {
        payload: Prisma.$LinePayload<ExtArgs>
        fields: Prisma.LineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findFirst: {
            args: Prisma.LineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          findMany: {
            args: Prisma.LineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          create: {
            args: Prisma.LineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          createMany: {
            args: Prisma.LineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          delete: {
            args: Prisma.LineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          update: {
            args: Prisma.LineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          deleteMany: {
            args: Prisma.LineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>[]
          }
          upsert: {
            args: Prisma.LineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinePayload>
          }
          aggregate: {
            args: Prisma.LineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLine>
          }
          groupBy: {
            args: Prisma.LineGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineCountArgs<ExtArgs>
            result: $Utils.Optional<LineCountAggregateOutputType> | number
          }
        }
      }
      Shape: {
        payload: Prisma.$ShapePayload<ExtArgs>
        fields: Prisma.ShapeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShapeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShapeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          findFirst: {
            args: Prisma.ShapeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShapeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          findMany: {
            args: Prisma.ShapeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>[]
          }
          create: {
            args: Prisma.ShapeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          createMany: {
            args: Prisma.ShapeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShapeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>[]
          }
          delete: {
            args: Prisma.ShapeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          update: {
            args: Prisma.ShapeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          deleteMany: {
            args: Prisma.ShapeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShapeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShapeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>[]
          }
          upsert: {
            args: Prisma.ShapeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShapePayload>
          }
          aggregate: {
            args: Prisma.ShapeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShape>
          }
          groupBy: {
            args: Prisma.ShapeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShapeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShapeCountArgs<ExtArgs>
            result: $Utils.Optional<ShapeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    room?: RoomOmit
    rectangle?: RectangleOmit
    circle?: CircleOmit
    line?: LineOmit
    shape?: ShapeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rooms: number
    Shape: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
    Shape?: boolean | UserCountOutputTypeCountShapeArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShapeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShapeWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    Shape: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Shape?: boolean | RoomCountOutputTypeCountShapeArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountShapeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShapeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    photo: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    photo: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    photo: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photo?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photo?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    photo?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    photo: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photo?: boolean
    rooms?: boolean | User$roomsArgs<ExtArgs>
    Shape?: boolean | User$ShapeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photo?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    photo?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "photo", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | User$roomsArgs<ExtArgs>
    Shape?: boolean | User$ShapeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      Shape: Prisma.$ShapePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      photo: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Shape<T extends User$ShapeArgs<ExtArgs> = {}>(args?: Subset<T, User$ShapeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * User.Shape
   */
  export type User$ShapeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    where?: ShapeWhereInput
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    cursor?: ShapeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    slug: string | null
    createdAt: Date | null
    adminId: string | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    createdAt: Date | null
    adminId: string | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    slug: number
    createdAt: number
    adminId: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    adminId?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    adminId?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    adminId?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    slug: string
    createdAt: Date
    adminId: string
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Shape?: boolean | Room$ShapeArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    adminId?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "createdAt" | "adminId", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
    Shape?: boolean | Room$ShapeArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      admin: Prisma.$UserPayload<ExtArgs>
      Shape: Prisma.$ShapePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slug: string
      createdAt: Date
      adminId: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Shape<T extends Room$ShapeArgs<ExtArgs> = {}>(args?: Subset<T, Room$ShapeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly slug: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly adminId: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.Shape
   */
  export type Room$ShapeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    where?: ShapeWhereInput
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    cursor?: ShapeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Rectangle
   */

  export type AggregateRectangle = {
    _count: RectangleCountAggregateOutputType | null
    _avg: RectangleAvgAggregateOutputType | null
    _sum: RectangleSumAggregateOutputType | null
    _min: RectangleMinAggregateOutputType | null
    _max: RectangleMaxAggregateOutputType | null
  }

  export type RectangleAvgAggregateOutputType = {
    startX: number | null
    startY: number | null
    width: number | null
    height: number | null
  }

  export type RectangleSumAggregateOutputType = {
    startX: number | null
    startY: number | null
    width: number | null
    height: number | null
  }

  export type RectangleMinAggregateOutputType = {
    id: string | null
    shapeId: string | null
    startX: number | null
    startY: number | null
    width: number | null
    height: number | null
  }

  export type RectangleMaxAggregateOutputType = {
    id: string | null
    shapeId: string | null
    startX: number | null
    startY: number | null
    width: number | null
    height: number | null
  }

  export type RectangleCountAggregateOutputType = {
    id: number
    shapeId: number
    startX: number
    startY: number
    width: number
    height: number
    _all: number
  }


  export type RectangleAvgAggregateInputType = {
    startX?: true
    startY?: true
    width?: true
    height?: true
  }

  export type RectangleSumAggregateInputType = {
    startX?: true
    startY?: true
    width?: true
    height?: true
  }

  export type RectangleMinAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    width?: true
    height?: true
  }

  export type RectangleMaxAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    width?: true
    height?: true
  }

  export type RectangleCountAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    width?: true
    height?: true
    _all?: true
  }

  export type RectangleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rectangle to aggregate.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rectangles
    **/
    _count?: true | RectangleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RectangleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RectangleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RectangleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RectangleMaxAggregateInputType
  }

  export type GetRectangleAggregateType<T extends RectangleAggregateArgs> = {
        [P in keyof T & keyof AggregateRectangle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRectangle[P]>
      : GetScalarType<T[P], AggregateRectangle[P]>
  }




  export type RectangleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RectangleWhereInput
    orderBy?: RectangleOrderByWithAggregationInput | RectangleOrderByWithAggregationInput[]
    by: RectangleScalarFieldEnum[] | RectangleScalarFieldEnum
    having?: RectangleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RectangleCountAggregateInputType | true
    _avg?: RectangleAvgAggregateInputType
    _sum?: RectangleSumAggregateInputType
    _min?: RectangleMinAggregateInputType
    _max?: RectangleMaxAggregateInputType
  }

  export type RectangleGroupByOutputType = {
    id: string
    shapeId: string
    startX: number
    startY: number
    width: number
    height: number
    _count: RectangleCountAggregateOutputType | null
    _avg: RectangleAvgAggregateOutputType | null
    _sum: RectangleSumAggregateOutputType | null
    _min: RectangleMinAggregateOutputType | null
    _max: RectangleMaxAggregateOutputType | null
  }

  type GetRectangleGroupByPayload<T extends RectangleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RectangleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RectangleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RectangleGroupByOutputType[P]>
            : GetScalarType<T[P], RectangleGroupByOutputType[P]>
        }
      >
    >


  export type RectangleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    width?: boolean
    height?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rectangle"]>

  export type RectangleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    width?: boolean
    height?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rectangle"]>

  export type RectangleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    width?: boolean
    height?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rectangle"]>

  export type RectangleSelectScalar = {
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    width?: boolean
    height?: boolean
  }

  export type RectangleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shapeId" | "startX" | "startY" | "width" | "height", ExtArgs["result"]["rectangle"]>
  export type RectangleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type RectangleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type RectangleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $RectanglePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rectangle"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shapeId: string
      startX: number
      startY: number
      width: number
      height: number
    }, ExtArgs["result"]["rectangle"]>
    composites: {}
  }

  type RectangleGetPayload<S extends boolean | null | undefined | RectangleDefaultArgs> = $Result.GetResult<Prisma.$RectanglePayload, S>

  type RectangleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RectangleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RectangleCountAggregateInputType | true
    }

  export interface RectangleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rectangle'], meta: { name: 'Rectangle' } }
    /**
     * Find zero or one Rectangle that matches the filter.
     * @param {RectangleFindUniqueArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RectangleFindUniqueArgs>(args: SelectSubset<T, RectangleFindUniqueArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rectangle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RectangleFindUniqueOrThrowArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RectangleFindUniqueOrThrowArgs>(args: SelectSubset<T, RectangleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rectangle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleFindFirstArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RectangleFindFirstArgs>(args?: SelectSubset<T, RectangleFindFirstArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rectangle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleFindFirstOrThrowArgs} args - Arguments to find a Rectangle
     * @example
     * // Get one Rectangle
     * const rectangle = await prisma.rectangle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RectangleFindFirstOrThrowArgs>(args?: SelectSubset<T, RectangleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rectangles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rectangles
     * const rectangles = await prisma.rectangle.findMany()
     * 
     * // Get first 10 Rectangles
     * const rectangles = await prisma.rectangle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rectangleWithIdOnly = await prisma.rectangle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RectangleFindManyArgs>(args?: SelectSubset<T, RectangleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rectangle.
     * @param {RectangleCreateArgs} args - Arguments to create a Rectangle.
     * @example
     * // Create one Rectangle
     * const Rectangle = await prisma.rectangle.create({
     *   data: {
     *     // ... data to create a Rectangle
     *   }
     * })
     * 
     */
    create<T extends RectangleCreateArgs>(args: SelectSubset<T, RectangleCreateArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rectangles.
     * @param {RectangleCreateManyArgs} args - Arguments to create many Rectangles.
     * @example
     * // Create many Rectangles
     * const rectangle = await prisma.rectangle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RectangleCreateManyArgs>(args?: SelectSubset<T, RectangleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rectangles and returns the data saved in the database.
     * @param {RectangleCreateManyAndReturnArgs} args - Arguments to create many Rectangles.
     * @example
     * // Create many Rectangles
     * const rectangle = await prisma.rectangle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rectangles and only return the `id`
     * const rectangleWithIdOnly = await prisma.rectangle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RectangleCreateManyAndReturnArgs>(args?: SelectSubset<T, RectangleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rectangle.
     * @param {RectangleDeleteArgs} args - Arguments to delete one Rectangle.
     * @example
     * // Delete one Rectangle
     * const Rectangle = await prisma.rectangle.delete({
     *   where: {
     *     // ... filter to delete one Rectangle
     *   }
     * })
     * 
     */
    delete<T extends RectangleDeleteArgs>(args: SelectSubset<T, RectangleDeleteArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rectangle.
     * @param {RectangleUpdateArgs} args - Arguments to update one Rectangle.
     * @example
     * // Update one Rectangle
     * const rectangle = await prisma.rectangle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RectangleUpdateArgs>(args: SelectSubset<T, RectangleUpdateArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rectangles.
     * @param {RectangleDeleteManyArgs} args - Arguments to filter Rectangles to delete.
     * @example
     * // Delete a few Rectangles
     * const { count } = await prisma.rectangle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RectangleDeleteManyArgs>(args?: SelectSubset<T, RectangleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rectangles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rectangles
     * const rectangle = await prisma.rectangle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RectangleUpdateManyArgs>(args: SelectSubset<T, RectangleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rectangles and returns the data updated in the database.
     * @param {RectangleUpdateManyAndReturnArgs} args - Arguments to update many Rectangles.
     * @example
     * // Update many Rectangles
     * const rectangle = await prisma.rectangle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rectangles and only return the `id`
     * const rectangleWithIdOnly = await prisma.rectangle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RectangleUpdateManyAndReturnArgs>(args: SelectSubset<T, RectangleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rectangle.
     * @param {RectangleUpsertArgs} args - Arguments to update or create a Rectangle.
     * @example
     * // Update or create a Rectangle
     * const rectangle = await prisma.rectangle.upsert({
     *   create: {
     *     // ... data to create a Rectangle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rectangle we want to update
     *   }
     * })
     */
    upsert<T extends RectangleUpsertArgs>(args: SelectSubset<T, RectangleUpsertArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rectangles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleCountArgs} args - Arguments to filter Rectangles to count.
     * @example
     * // Count the number of Rectangles
     * const count = await prisma.rectangle.count({
     *   where: {
     *     // ... the filter for the Rectangles we want to count
     *   }
     * })
    **/
    count<T extends RectangleCountArgs>(
      args?: Subset<T, RectangleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RectangleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rectangle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RectangleAggregateArgs>(args: Subset<T, RectangleAggregateArgs>): Prisma.PrismaPromise<GetRectangleAggregateType<T>>

    /**
     * Group by Rectangle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RectangleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RectangleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RectangleGroupByArgs['orderBy'] }
        : { orderBy?: RectangleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RectangleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRectangleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rectangle model
   */
  readonly fields: RectangleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rectangle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RectangleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rectangle model
   */
  interface RectangleFieldRefs {
    readonly id: FieldRef<"Rectangle", 'String'>
    readonly shapeId: FieldRef<"Rectangle", 'String'>
    readonly startX: FieldRef<"Rectangle", 'Int'>
    readonly startY: FieldRef<"Rectangle", 'Int'>
    readonly width: FieldRef<"Rectangle", 'Int'>
    readonly height: FieldRef<"Rectangle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rectangle findUnique
   */
  export type RectangleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle findUniqueOrThrow
   */
  export type RectangleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle findFirst
   */
  export type RectangleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rectangles.
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rectangles.
     */
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Rectangle findFirstOrThrow
   */
  export type RectangleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangle to fetch.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rectangles.
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rectangles.
     */
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Rectangle findMany
   */
  export type RectangleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter, which Rectangles to fetch.
     */
    where?: RectangleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rectangles to fetch.
     */
    orderBy?: RectangleOrderByWithRelationInput | RectangleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rectangles.
     */
    cursor?: RectangleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rectangles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rectangles.
     */
    skip?: number
    distinct?: RectangleScalarFieldEnum | RectangleScalarFieldEnum[]
  }

  /**
   * Rectangle create
   */
  export type RectangleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rectangle.
     */
    data: XOR<RectangleCreateInput, RectangleUncheckedCreateInput>
  }

  /**
   * Rectangle createMany
   */
  export type RectangleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rectangles.
     */
    data: RectangleCreateManyInput | RectangleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rectangle createManyAndReturn
   */
  export type RectangleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * The data used to create many Rectangles.
     */
    data: RectangleCreateManyInput | RectangleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rectangle update
   */
  export type RectangleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rectangle.
     */
    data: XOR<RectangleUpdateInput, RectangleUncheckedUpdateInput>
    /**
     * Choose, which Rectangle to update.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle updateMany
   */
  export type RectangleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rectangles.
     */
    data: XOR<RectangleUpdateManyMutationInput, RectangleUncheckedUpdateManyInput>
    /**
     * Filter which Rectangles to update
     */
    where?: RectangleWhereInput
    /**
     * Limit how many Rectangles to update.
     */
    limit?: number
  }

  /**
   * Rectangle updateManyAndReturn
   */
  export type RectangleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * The data used to update Rectangles.
     */
    data: XOR<RectangleUpdateManyMutationInput, RectangleUncheckedUpdateManyInput>
    /**
     * Filter which Rectangles to update
     */
    where?: RectangleWhereInput
    /**
     * Limit how many Rectangles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rectangle upsert
   */
  export type RectangleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rectangle to update in case it exists.
     */
    where: RectangleWhereUniqueInput
    /**
     * In case the Rectangle found by the `where` argument doesn't exist, create a new Rectangle with this data.
     */
    create: XOR<RectangleCreateInput, RectangleUncheckedCreateInput>
    /**
     * In case the Rectangle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RectangleUpdateInput, RectangleUncheckedUpdateInput>
  }

  /**
   * Rectangle delete
   */
  export type RectangleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    /**
     * Filter which Rectangle to delete.
     */
    where: RectangleWhereUniqueInput
  }

  /**
   * Rectangle deleteMany
   */
  export type RectangleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rectangles to delete
     */
    where?: RectangleWhereInput
    /**
     * Limit how many Rectangles to delete.
     */
    limit?: number
  }

  /**
   * Rectangle without action
   */
  export type RectangleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
  }


  /**
   * Model Circle
   */

  export type AggregateCircle = {
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  export type CircleAvgAggregateOutputType = {
    startX: number | null
    startY: number | null
    radius: number | null
  }

  export type CircleSumAggregateOutputType = {
    startX: number | null
    startY: number | null
    radius: number | null
  }

  export type CircleMinAggregateOutputType = {
    id: string | null
    shapeId: string | null
    startX: number | null
    startY: number | null
    radius: number | null
  }

  export type CircleMaxAggregateOutputType = {
    id: string | null
    shapeId: string | null
    startX: number | null
    startY: number | null
    radius: number | null
  }

  export type CircleCountAggregateOutputType = {
    id: number
    shapeId: number
    startX: number
    startY: number
    radius: number
    _all: number
  }


  export type CircleAvgAggregateInputType = {
    startX?: true
    startY?: true
    radius?: true
  }

  export type CircleSumAggregateInputType = {
    startX?: true
    startY?: true
    radius?: true
  }

  export type CircleMinAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    radius?: true
  }

  export type CircleMaxAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    radius?: true
  }

  export type CircleCountAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    radius?: true
    _all?: true
  }

  export type CircleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circle to aggregate.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Circles
    **/
    _count?: true | CircleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CircleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CircleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CircleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CircleMaxAggregateInputType
  }

  export type GetCircleAggregateType<T extends CircleAggregateArgs> = {
        [P in keyof T & keyof AggregateCircle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCircle[P]>
      : GetScalarType<T[P], AggregateCircle[P]>
  }




  export type CircleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CircleWhereInput
    orderBy?: CircleOrderByWithAggregationInput | CircleOrderByWithAggregationInput[]
    by: CircleScalarFieldEnum[] | CircleScalarFieldEnum
    having?: CircleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CircleCountAggregateInputType | true
    _avg?: CircleAvgAggregateInputType
    _sum?: CircleSumAggregateInputType
    _min?: CircleMinAggregateInputType
    _max?: CircleMaxAggregateInputType
  }

  export type CircleGroupByOutputType = {
    id: string
    shapeId: string
    startX: number
    startY: number
    radius: number
    _count: CircleCountAggregateOutputType | null
    _avg: CircleAvgAggregateOutputType | null
    _sum: CircleSumAggregateOutputType | null
    _min: CircleMinAggregateOutputType | null
    _max: CircleMaxAggregateOutputType | null
  }

  type GetCircleGroupByPayload<T extends CircleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CircleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CircleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CircleGroupByOutputType[P]>
            : GetScalarType<T[P], CircleGroupByOutputType[P]>
        }
      >
    >


  export type CircleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    radius?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    radius?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    radius?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["circle"]>

  export type CircleSelectScalar = {
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    radius?: boolean
  }

  export type CircleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shapeId" | "startX" | "startY" | "radius", ExtArgs["result"]["circle"]>
  export type CircleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type CircleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type CircleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $CirclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Circle"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shapeId: string
      startX: number
      startY: number
      radius: number
    }, ExtArgs["result"]["circle"]>
    composites: {}
  }

  type CircleGetPayload<S extends boolean | null | undefined | CircleDefaultArgs> = $Result.GetResult<Prisma.$CirclePayload, S>

  type CircleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CircleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CircleCountAggregateInputType | true
    }

  export interface CircleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Circle'], meta: { name: 'Circle' } }
    /**
     * Find zero or one Circle that matches the filter.
     * @param {CircleFindUniqueArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CircleFindUniqueArgs>(args: SelectSubset<T, CircleFindUniqueArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Circle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CircleFindUniqueOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CircleFindUniqueOrThrowArgs>(args: SelectSubset<T, CircleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CircleFindFirstArgs>(args?: SelectSubset<T, CircleFindFirstArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Circle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindFirstOrThrowArgs} args - Arguments to find a Circle
     * @example
     * // Get one Circle
     * const circle = await prisma.circle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CircleFindFirstOrThrowArgs>(args?: SelectSubset<T, CircleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Circles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Circles
     * const circles = await prisma.circle.findMany()
     * 
     * // Get first 10 Circles
     * const circles = await prisma.circle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const circleWithIdOnly = await prisma.circle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CircleFindManyArgs>(args?: SelectSubset<T, CircleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Circle.
     * @param {CircleCreateArgs} args - Arguments to create a Circle.
     * @example
     * // Create one Circle
     * const Circle = await prisma.circle.create({
     *   data: {
     *     // ... data to create a Circle
     *   }
     * })
     * 
     */
    create<T extends CircleCreateArgs>(args: SelectSubset<T, CircleCreateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Circles.
     * @param {CircleCreateManyArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CircleCreateManyArgs>(args?: SelectSubset<T, CircleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Circles and returns the data saved in the database.
     * @param {CircleCreateManyAndReturnArgs} args - Arguments to create many Circles.
     * @example
     * // Create many Circles
     * const circle = await prisma.circle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CircleCreateManyAndReturnArgs>(args?: SelectSubset<T, CircleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Circle.
     * @param {CircleDeleteArgs} args - Arguments to delete one Circle.
     * @example
     * // Delete one Circle
     * const Circle = await prisma.circle.delete({
     *   where: {
     *     // ... filter to delete one Circle
     *   }
     * })
     * 
     */
    delete<T extends CircleDeleteArgs>(args: SelectSubset<T, CircleDeleteArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Circle.
     * @param {CircleUpdateArgs} args - Arguments to update one Circle.
     * @example
     * // Update one Circle
     * const circle = await prisma.circle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CircleUpdateArgs>(args: SelectSubset<T, CircleUpdateArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Circles.
     * @param {CircleDeleteManyArgs} args - Arguments to filter Circles to delete.
     * @example
     * // Delete a few Circles
     * const { count } = await prisma.circle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CircleDeleteManyArgs>(args?: SelectSubset<T, CircleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CircleUpdateManyArgs>(args: SelectSubset<T, CircleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Circles and returns the data updated in the database.
     * @param {CircleUpdateManyAndReturnArgs} args - Arguments to update many Circles.
     * @example
     * // Update many Circles
     * const circle = await prisma.circle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Circles and only return the `id`
     * const circleWithIdOnly = await prisma.circle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CircleUpdateManyAndReturnArgs>(args: SelectSubset<T, CircleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Circle.
     * @param {CircleUpsertArgs} args - Arguments to update or create a Circle.
     * @example
     * // Update or create a Circle
     * const circle = await prisma.circle.upsert({
     *   create: {
     *     // ... data to create a Circle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Circle we want to update
     *   }
     * })
     */
    upsert<T extends CircleUpsertArgs>(args: SelectSubset<T, CircleUpsertArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Circles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleCountArgs} args - Arguments to filter Circles to count.
     * @example
     * // Count the number of Circles
     * const count = await prisma.circle.count({
     *   where: {
     *     // ... the filter for the Circles we want to count
     *   }
     * })
    **/
    count<T extends CircleCountArgs>(
      args?: Subset<T, CircleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CircleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CircleAggregateArgs>(args: Subset<T, CircleAggregateArgs>): Prisma.PrismaPromise<GetCircleAggregateType<T>>

    /**
     * Group by Circle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CircleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CircleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CircleGroupByArgs['orderBy'] }
        : { orderBy?: CircleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CircleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCircleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Circle model
   */
  readonly fields: CircleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Circle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CircleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Circle model
   */
  interface CircleFieldRefs {
    readonly id: FieldRef<"Circle", 'String'>
    readonly shapeId: FieldRef<"Circle", 'String'>
    readonly startX: FieldRef<"Circle", 'Int'>
    readonly startY: FieldRef<"Circle", 'Int'>
    readonly radius: FieldRef<"Circle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Circle findUnique
   */
  export type CircleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findUniqueOrThrow
   */
  export type CircleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle findFirst
   */
  export type CircleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findFirstOrThrow
   */
  export type CircleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circle to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Circles.
     */
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle findMany
   */
  export type CircleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter, which Circles to fetch.
     */
    where?: CircleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Circles to fetch.
     */
    orderBy?: CircleOrderByWithRelationInput | CircleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Circles.
     */
    cursor?: CircleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Circles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Circles.
     */
    skip?: number
    distinct?: CircleScalarFieldEnum | CircleScalarFieldEnum[]
  }

  /**
   * Circle create
   */
  export type CircleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to create a Circle.
     */
    data: XOR<CircleCreateInput, CircleUncheckedCreateInput>
  }

  /**
   * Circle createMany
   */
  export type CircleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Circle createManyAndReturn
   */
  export type CircleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to create many Circles.
     */
    data: CircleCreateManyInput | CircleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle update
   */
  export type CircleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The data needed to update a Circle.
     */
    data: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
    /**
     * Choose, which Circle to update.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle updateMany
   */
  export type CircleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
  }

  /**
   * Circle updateManyAndReturn
   */
  export type CircleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * The data used to update Circles.
     */
    data: XOR<CircleUpdateManyMutationInput, CircleUncheckedUpdateManyInput>
    /**
     * Filter which Circles to update
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Circle upsert
   */
  export type CircleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * The filter to search for the Circle to update in case it exists.
     */
    where: CircleWhereUniqueInput
    /**
     * In case the Circle found by the `where` argument doesn't exist, create a new Circle with this data.
     */
    create: XOR<CircleCreateInput, CircleUncheckedCreateInput>
    /**
     * In case the Circle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CircleUpdateInput, CircleUncheckedUpdateInput>
  }

  /**
   * Circle delete
   */
  export type CircleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    /**
     * Filter which Circle to delete.
     */
    where: CircleWhereUniqueInput
  }

  /**
   * Circle deleteMany
   */
  export type CircleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Circles to delete
     */
    where?: CircleWhereInput
    /**
     * Limit how many Circles to delete.
     */
    limit?: number
  }

  /**
   * Circle without action
   */
  export type CircleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
  }


  /**
   * Model Line
   */

  export type AggregateLine = {
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  export type LineAvgAggregateOutputType = {
    startX: number | null
    startY: number | null
    endX: number | null
    endY: number | null
  }

  export type LineSumAggregateOutputType = {
    startX: number | null
    startY: number | null
    endX: number | null
    endY: number | null
  }

  export type LineMinAggregateOutputType = {
    id: string | null
    shapeId: string | null
    startX: number | null
    startY: number | null
    endX: number | null
    endY: number | null
  }

  export type LineMaxAggregateOutputType = {
    id: string | null
    shapeId: string | null
    startX: number | null
    startY: number | null
    endX: number | null
    endY: number | null
  }

  export type LineCountAggregateOutputType = {
    id: number
    shapeId: number
    startX: number
    startY: number
    endX: number
    endY: number
    _all: number
  }


  export type LineAvgAggregateInputType = {
    startX?: true
    startY?: true
    endX?: true
    endY?: true
  }

  export type LineSumAggregateInputType = {
    startX?: true
    startY?: true
    endX?: true
    endY?: true
  }

  export type LineMinAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    endX?: true
    endY?: true
  }

  export type LineMaxAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    endX?: true
    endY?: true
  }

  export type LineCountAggregateInputType = {
    id?: true
    shapeId?: true
    startX?: true
    startY?: true
    endX?: true
    endY?: true
    _all?: true
  }

  export type LineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Line to aggregate.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lines
    **/
    _count?: true | LineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineMaxAggregateInputType
  }

  export type GetLineAggregateType<T extends LineAggregateArgs> = {
        [P in keyof T & keyof AggregateLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLine[P]>
      : GetScalarType<T[P], AggregateLine[P]>
  }




  export type LineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineWhereInput
    orderBy?: LineOrderByWithAggregationInput | LineOrderByWithAggregationInput[]
    by: LineScalarFieldEnum[] | LineScalarFieldEnum
    having?: LineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineCountAggregateInputType | true
    _avg?: LineAvgAggregateInputType
    _sum?: LineSumAggregateInputType
    _min?: LineMinAggregateInputType
    _max?: LineMaxAggregateInputType
  }

  export type LineGroupByOutputType = {
    id: string
    shapeId: string
    startX: number
    startY: number
    endX: number
    endY: number
    _count: LineCountAggregateOutputType | null
    _avg: LineAvgAggregateOutputType | null
    _sum: LineSumAggregateOutputType | null
    _min: LineMinAggregateOutputType | null
    _max: LineMaxAggregateOutputType | null
  }

  type GetLineGroupByPayload<T extends LineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineGroupByOutputType[P]>
            : GetScalarType<T[P], LineGroupByOutputType[P]>
        }
      >
    >


  export type LineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    endX?: boolean
    endY?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    endX?: boolean
    endY?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    endX?: boolean
    endY?: boolean
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["line"]>

  export type LineSelectScalar = {
    id?: boolean
    shapeId?: boolean
    startX?: boolean
    startY?: boolean
    endX?: boolean
    endY?: boolean
  }

  export type LineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shapeId" | "startX" | "startY" | "endX" | "endY", ExtArgs["result"]["line"]>
  export type LineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type LineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }
  export type LineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shape?: boolean | ShapeDefaultArgs<ExtArgs>
  }

  export type $LinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Line"
    objects: {
      shape: Prisma.$ShapePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shapeId: string
      startX: number
      startY: number
      endX: number
      endY: number
    }, ExtArgs["result"]["line"]>
    composites: {}
  }

  type LineGetPayload<S extends boolean | null | undefined | LineDefaultArgs> = $Result.GetResult<Prisma.$LinePayload, S>

  type LineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineCountAggregateInputType | true
    }

  export interface LineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Line'], meta: { name: 'Line' } }
    /**
     * Find zero or one Line that matches the filter.
     * @param {LineFindUniqueArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineFindUniqueArgs>(args: SelectSubset<T, LineFindUniqueArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Line that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineFindUniqueOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineFindUniqueOrThrowArgs>(args: SelectSubset<T, LineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineFindFirstArgs>(args?: SelectSubset<T, LineFindFirstArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Line that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindFirstOrThrowArgs} args - Arguments to find a Line
     * @example
     * // Get one Line
     * const line = await prisma.line.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineFindFirstOrThrowArgs>(args?: SelectSubset<T, LineFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lines
     * const lines = await prisma.line.findMany()
     * 
     * // Get first 10 Lines
     * const lines = await prisma.line.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineWithIdOnly = await prisma.line.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineFindManyArgs>(args?: SelectSubset<T, LineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Line.
     * @param {LineCreateArgs} args - Arguments to create a Line.
     * @example
     * // Create one Line
     * const Line = await prisma.line.create({
     *   data: {
     *     // ... data to create a Line
     *   }
     * })
     * 
     */
    create<T extends LineCreateArgs>(args: SelectSubset<T, LineCreateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lines.
     * @param {LineCreateManyArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineCreateManyArgs>(args?: SelectSubset<T, LineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lines and returns the data saved in the database.
     * @param {LineCreateManyAndReturnArgs} args - Arguments to create many Lines.
     * @example
     * // Create many Lines
     * const line = await prisma.line.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineCreateManyAndReturnArgs>(args?: SelectSubset<T, LineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Line.
     * @param {LineDeleteArgs} args - Arguments to delete one Line.
     * @example
     * // Delete one Line
     * const Line = await prisma.line.delete({
     *   where: {
     *     // ... filter to delete one Line
     *   }
     * })
     * 
     */
    delete<T extends LineDeleteArgs>(args: SelectSubset<T, LineDeleteArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Line.
     * @param {LineUpdateArgs} args - Arguments to update one Line.
     * @example
     * // Update one Line
     * const line = await prisma.line.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineUpdateArgs>(args: SelectSubset<T, LineUpdateArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lines.
     * @param {LineDeleteManyArgs} args - Arguments to filter Lines to delete.
     * @example
     * // Delete a few Lines
     * const { count } = await prisma.line.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineDeleteManyArgs>(args?: SelectSubset<T, LineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineUpdateManyArgs>(args: SelectSubset<T, LineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lines and returns the data updated in the database.
     * @param {LineUpdateManyAndReturnArgs} args - Arguments to update many Lines.
     * @example
     * // Update many Lines
     * const line = await prisma.line.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lines and only return the `id`
     * const lineWithIdOnly = await prisma.line.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LineUpdateManyAndReturnArgs>(args: SelectSubset<T, LineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Line.
     * @param {LineUpsertArgs} args - Arguments to update or create a Line.
     * @example
     * // Update or create a Line
     * const line = await prisma.line.upsert({
     *   create: {
     *     // ... data to create a Line
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Line we want to update
     *   }
     * })
     */
    upsert<T extends LineUpsertArgs>(args: SelectSubset<T, LineUpsertArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineCountArgs} args - Arguments to filter Lines to count.
     * @example
     * // Count the number of Lines
     * const count = await prisma.line.count({
     *   where: {
     *     // ... the filter for the Lines we want to count
     *   }
     * })
    **/
    count<T extends LineCountArgs>(
      args?: Subset<T, LineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LineAggregateArgs>(args: Subset<T, LineAggregateArgs>): Prisma.PrismaPromise<GetLineAggregateType<T>>

    /**
     * Group by Line.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineGroupByArgs['orderBy'] }
        : { orderBy?: LineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Line model
   */
  readonly fields: LineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Line.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shape<T extends ShapeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShapeDefaultArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Line model
   */
  interface LineFieldRefs {
    readonly id: FieldRef<"Line", 'String'>
    readonly shapeId: FieldRef<"Line", 'String'>
    readonly startX: FieldRef<"Line", 'Int'>
    readonly startY: FieldRef<"Line", 'Int'>
    readonly endX: FieldRef<"Line", 'Int'>
    readonly endY: FieldRef<"Line", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Line findUnique
   */
  export type LineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findUniqueOrThrow
   */
  export type LineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line findFirst
   */
  export type LineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findFirstOrThrow
   */
  export type LineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Line to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lines.
     */
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line findMany
   */
  export type LineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter, which Lines to fetch.
     */
    where?: LineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lines to fetch.
     */
    orderBy?: LineOrderByWithRelationInput | LineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lines.
     */
    cursor?: LineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lines.
     */
    skip?: number
    distinct?: LineScalarFieldEnum | LineScalarFieldEnum[]
  }

  /**
   * Line create
   */
  export type LineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to create a Line.
     */
    data: XOR<LineCreateInput, LineUncheckedCreateInput>
  }

  /**
   * Line createMany
   */
  export type LineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Line createManyAndReturn
   */
  export type LineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to create many Lines.
     */
    data: LineCreateManyInput | LineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Line update
   */
  export type LineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The data needed to update a Line.
     */
    data: XOR<LineUpdateInput, LineUncheckedUpdateInput>
    /**
     * Choose, which Line to update.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line updateMany
   */
  export type LineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
  }

  /**
   * Line updateManyAndReturn
   */
  export type LineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * The data used to update Lines.
     */
    data: XOR<LineUpdateManyMutationInput, LineUncheckedUpdateManyInput>
    /**
     * Filter which Lines to update
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Line upsert
   */
  export type LineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * The filter to search for the Line to update in case it exists.
     */
    where: LineWhereUniqueInput
    /**
     * In case the Line found by the `where` argument doesn't exist, create a new Line with this data.
     */
    create: XOR<LineCreateInput, LineUncheckedCreateInput>
    /**
     * In case the Line was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineUpdateInput, LineUncheckedUpdateInput>
  }

  /**
   * Line delete
   */
  export type LineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    /**
     * Filter which Line to delete.
     */
    where: LineWhereUniqueInput
  }

  /**
   * Line deleteMany
   */
  export type LineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lines to delete
     */
    where?: LineWhereInput
    /**
     * Limit how many Lines to delete.
     */
    limit?: number
  }

  /**
   * Line without action
   */
  export type LineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
  }


  /**
   * Model Shape
   */

  export type AggregateShape = {
    _count: ShapeCountAggregateOutputType | null
    _avg: ShapeAvgAggregateOutputType | null
    _sum: ShapeSumAggregateOutputType | null
    _min: ShapeMinAggregateOutputType | null
    _max: ShapeMaxAggregateOutputType | null
  }

  export type ShapeAvgAggregateOutputType = {
    roomId: number | null
  }

  export type ShapeSumAggregateOutputType = {
    roomId: number | null
  }

  export type ShapeMinAggregateOutputType = {
    id: string | null
    type: $Enums.StringType | null
    userId: string | null
    roomId: number | null
  }

  export type ShapeMaxAggregateOutputType = {
    id: string | null
    type: $Enums.StringType | null
    userId: string | null
    roomId: number | null
  }

  export type ShapeCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    roomId: number
    _all: number
  }


  export type ShapeAvgAggregateInputType = {
    roomId?: true
  }

  export type ShapeSumAggregateInputType = {
    roomId?: true
  }

  export type ShapeMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    roomId?: true
  }

  export type ShapeMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    roomId?: true
  }

  export type ShapeCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    roomId?: true
    _all?: true
  }

  export type ShapeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shape to aggregate.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shapes
    **/
    _count?: true | ShapeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShapeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShapeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShapeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShapeMaxAggregateInputType
  }

  export type GetShapeAggregateType<T extends ShapeAggregateArgs> = {
        [P in keyof T & keyof AggregateShape]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShape[P]>
      : GetScalarType<T[P], AggregateShape[P]>
  }




  export type ShapeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShapeWhereInput
    orderBy?: ShapeOrderByWithAggregationInput | ShapeOrderByWithAggregationInput[]
    by: ShapeScalarFieldEnum[] | ShapeScalarFieldEnum
    having?: ShapeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShapeCountAggregateInputType | true
    _avg?: ShapeAvgAggregateInputType
    _sum?: ShapeSumAggregateInputType
    _min?: ShapeMinAggregateInputType
    _max?: ShapeMaxAggregateInputType
  }

  export type ShapeGroupByOutputType = {
    id: string
    type: $Enums.StringType
    userId: string
    roomId: number
    _count: ShapeCountAggregateOutputType | null
    _avg: ShapeAvgAggregateOutputType | null
    _sum: ShapeSumAggregateOutputType | null
    _min: ShapeMinAggregateOutputType | null
    _max: ShapeMaxAggregateOutputType | null
  }

  type GetShapeGroupByPayload<T extends ShapeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShapeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShapeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShapeGroupByOutputType[P]>
            : GetScalarType<T[P], ShapeGroupByOutputType[P]>
        }
      >
    >


  export type ShapeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    roomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    Rectangle?: boolean | Shape$RectangleArgs<ExtArgs>
    Circle?: boolean | Shape$CircleArgs<ExtArgs>
    Line?: boolean | Shape$LineArgs<ExtArgs>
  }, ExtArgs["result"]["shape"]>

  export type ShapeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    roomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shape"]>

  export type ShapeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    roomId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shape"]>

  export type ShapeSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    roomId?: boolean
  }

  export type ShapeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "userId" | "roomId", ExtArgs["result"]["shape"]>
  export type ShapeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    Rectangle?: boolean | Shape$RectangleArgs<ExtArgs>
    Circle?: boolean | Shape$CircleArgs<ExtArgs>
    Line?: boolean | Shape$LineArgs<ExtArgs>
  }
  export type ShapeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type ShapeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $ShapePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shape"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      Rectangle: Prisma.$RectanglePayload<ExtArgs> | null
      Circle: Prisma.$CirclePayload<ExtArgs> | null
      Line: Prisma.$LinePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.StringType
      userId: string
      roomId: number
    }, ExtArgs["result"]["shape"]>
    composites: {}
  }

  type ShapeGetPayload<S extends boolean | null | undefined | ShapeDefaultArgs> = $Result.GetResult<Prisma.$ShapePayload, S>

  type ShapeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShapeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShapeCountAggregateInputType | true
    }

  export interface ShapeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shape'], meta: { name: 'Shape' } }
    /**
     * Find zero or one Shape that matches the filter.
     * @param {ShapeFindUniqueArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShapeFindUniqueArgs>(args: SelectSubset<T, ShapeFindUniqueArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shape that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShapeFindUniqueOrThrowArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShapeFindUniqueOrThrowArgs>(args: SelectSubset<T, ShapeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shape that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeFindFirstArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShapeFindFirstArgs>(args?: SelectSubset<T, ShapeFindFirstArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shape that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeFindFirstOrThrowArgs} args - Arguments to find a Shape
     * @example
     * // Get one Shape
     * const shape = await prisma.shape.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShapeFindFirstOrThrowArgs>(args?: SelectSubset<T, ShapeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shapes
     * const shapes = await prisma.shape.findMany()
     * 
     * // Get first 10 Shapes
     * const shapes = await prisma.shape.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shapeWithIdOnly = await prisma.shape.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShapeFindManyArgs>(args?: SelectSubset<T, ShapeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shape.
     * @param {ShapeCreateArgs} args - Arguments to create a Shape.
     * @example
     * // Create one Shape
     * const Shape = await prisma.shape.create({
     *   data: {
     *     // ... data to create a Shape
     *   }
     * })
     * 
     */
    create<T extends ShapeCreateArgs>(args: SelectSubset<T, ShapeCreateArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shapes.
     * @param {ShapeCreateManyArgs} args - Arguments to create many Shapes.
     * @example
     * // Create many Shapes
     * const shape = await prisma.shape.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShapeCreateManyArgs>(args?: SelectSubset<T, ShapeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shapes and returns the data saved in the database.
     * @param {ShapeCreateManyAndReturnArgs} args - Arguments to create many Shapes.
     * @example
     * // Create many Shapes
     * const shape = await prisma.shape.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shapes and only return the `id`
     * const shapeWithIdOnly = await prisma.shape.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShapeCreateManyAndReturnArgs>(args?: SelectSubset<T, ShapeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shape.
     * @param {ShapeDeleteArgs} args - Arguments to delete one Shape.
     * @example
     * // Delete one Shape
     * const Shape = await prisma.shape.delete({
     *   where: {
     *     // ... filter to delete one Shape
     *   }
     * })
     * 
     */
    delete<T extends ShapeDeleteArgs>(args: SelectSubset<T, ShapeDeleteArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shape.
     * @param {ShapeUpdateArgs} args - Arguments to update one Shape.
     * @example
     * // Update one Shape
     * const shape = await prisma.shape.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShapeUpdateArgs>(args: SelectSubset<T, ShapeUpdateArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shapes.
     * @param {ShapeDeleteManyArgs} args - Arguments to filter Shapes to delete.
     * @example
     * // Delete a few Shapes
     * const { count } = await prisma.shape.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShapeDeleteManyArgs>(args?: SelectSubset<T, ShapeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shapes
     * const shape = await prisma.shape.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShapeUpdateManyArgs>(args: SelectSubset<T, ShapeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shapes and returns the data updated in the database.
     * @param {ShapeUpdateManyAndReturnArgs} args - Arguments to update many Shapes.
     * @example
     * // Update many Shapes
     * const shape = await prisma.shape.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shapes and only return the `id`
     * const shapeWithIdOnly = await prisma.shape.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShapeUpdateManyAndReturnArgs>(args: SelectSubset<T, ShapeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shape.
     * @param {ShapeUpsertArgs} args - Arguments to update or create a Shape.
     * @example
     * // Update or create a Shape
     * const shape = await prisma.shape.upsert({
     *   create: {
     *     // ... data to create a Shape
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shape we want to update
     *   }
     * })
     */
    upsert<T extends ShapeUpsertArgs>(args: SelectSubset<T, ShapeUpsertArgs<ExtArgs>>): Prisma__ShapeClient<$Result.GetResult<Prisma.$ShapePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeCountArgs} args - Arguments to filter Shapes to count.
     * @example
     * // Count the number of Shapes
     * const count = await prisma.shape.count({
     *   where: {
     *     // ... the filter for the Shapes we want to count
     *   }
     * })
    **/
    count<T extends ShapeCountArgs>(
      args?: Subset<T, ShapeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShapeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShapeAggregateArgs>(args: Subset<T, ShapeAggregateArgs>): Prisma.PrismaPromise<GetShapeAggregateType<T>>

    /**
     * Group by Shape.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShapeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShapeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShapeGroupByArgs['orderBy'] }
        : { orderBy?: ShapeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShapeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShapeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shape model
   */
  readonly fields: ShapeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shape.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShapeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Rectangle<T extends Shape$RectangleArgs<ExtArgs> = {}>(args?: Subset<T, Shape$RectangleArgs<ExtArgs>>): Prisma__RectangleClient<$Result.GetResult<Prisma.$RectanglePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Circle<T extends Shape$CircleArgs<ExtArgs> = {}>(args?: Subset<T, Shape$CircleArgs<ExtArgs>>): Prisma__CircleClient<$Result.GetResult<Prisma.$CirclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Line<T extends Shape$LineArgs<ExtArgs> = {}>(args?: Subset<T, Shape$LineArgs<ExtArgs>>): Prisma__LineClient<$Result.GetResult<Prisma.$LinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shape model
   */
  interface ShapeFieldRefs {
    readonly id: FieldRef<"Shape", 'String'>
    readonly type: FieldRef<"Shape", 'StringType'>
    readonly userId: FieldRef<"Shape", 'String'>
    readonly roomId: FieldRef<"Shape", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Shape findUnique
   */
  export type ShapeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape findUniqueOrThrow
   */
  export type ShapeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape findFirst
   */
  export type ShapeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shapes.
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shapes.
     */
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Shape findFirstOrThrow
   */
  export type ShapeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shape to fetch.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shapes.
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shapes.
     */
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Shape findMany
   */
  export type ShapeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter, which Shapes to fetch.
     */
    where?: ShapeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shapes to fetch.
     */
    orderBy?: ShapeOrderByWithRelationInput | ShapeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shapes.
     */
    cursor?: ShapeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shapes.
     */
    skip?: number
    distinct?: ShapeScalarFieldEnum | ShapeScalarFieldEnum[]
  }

  /**
   * Shape create
   */
  export type ShapeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * The data needed to create a Shape.
     */
    data: XOR<ShapeCreateInput, ShapeUncheckedCreateInput>
  }

  /**
   * Shape createMany
   */
  export type ShapeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shapes.
     */
    data: ShapeCreateManyInput | ShapeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shape createManyAndReturn
   */
  export type ShapeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * The data used to create many Shapes.
     */
    data: ShapeCreateManyInput | ShapeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shape update
   */
  export type ShapeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * The data needed to update a Shape.
     */
    data: XOR<ShapeUpdateInput, ShapeUncheckedUpdateInput>
    /**
     * Choose, which Shape to update.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape updateMany
   */
  export type ShapeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shapes.
     */
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyInput>
    /**
     * Filter which Shapes to update
     */
    where?: ShapeWhereInput
    /**
     * Limit how many Shapes to update.
     */
    limit?: number
  }

  /**
   * Shape updateManyAndReturn
   */
  export type ShapeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * The data used to update Shapes.
     */
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyInput>
    /**
     * Filter which Shapes to update
     */
    where?: ShapeWhereInput
    /**
     * Limit how many Shapes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shape upsert
   */
  export type ShapeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * The filter to search for the Shape to update in case it exists.
     */
    where: ShapeWhereUniqueInput
    /**
     * In case the Shape found by the `where` argument doesn't exist, create a new Shape with this data.
     */
    create: XOR<ShapeCreateInput, ShapeUncheckedCreateInput>
    /**
     * In case the Shape was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShapeUpdateInput, ShapeUncheckedUpdateInput>
  }

  /**
   * Shape delete
   */
  export type ShapeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
    /**
     * Filter which Shape to delete.
     */
    where: ShapeWhereUniqueInput
  }

  /**
   * Shape deleteMany
   */
  export type ShapeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shapes to delete
     */
    where?: ShapeWhereInput
    /**
     * Limit how many Shapes to delete.
     */
    limit?: number
  }

  /**
   * Shape.Rectangle
   */
  export type Shape$RectangleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rectangle
     */
    select?: RectangleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rectangle
     */
    omit?: RectangleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RectangleInclude<ExtArgs> | null
    where?: RectangleWhereInput
  }

  /**
   * Shape.Circle
   */
  export type Shape$CircleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Circle
     */
    select?: CircleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Circle
     */
    omit?: CircleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CircleInclude<ExtArgs> | null
    where?: CircleWhereInput
  }

  /**
   * Shape.Line
   */
  export type Shape$LineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Line
     */
    select?: LineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Line
     */
    omit?: LineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineInclude<ExtArgs> | null
    where?: LineWhereInput
  }

  /**
   * Shape without action
   */
  export type ShapeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shape
     */
    select?: ShapeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shape
     */
    omit?: ShapeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShapeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    photo: 'photo'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    createdAt: 'createdAt',
    adminId: 'adminId'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RectangleScalarFieldEnum: {
    id: 'id',
    shapeId: 'shapeId',
    startX: 'startX',
    startY: 'startY',
    width: 'width',
    height: 'height'
  };

  export type RectangleScalarFieldEnum = (typeof RectangleScalarFieldEnum)[keyof typeof RectangleScalarFieldEnum]


  export const CircleScalarFieldEnum: {
    id: 'id',
    shapeId: 'shapeId',
    startX: 'startX',
    startY: 'startY',
    radius: 'radius'
  };

  export type CircleScalarFieldEnum = (typeof CircleScalarFieldEnum)[keyof typeof CircleScalarFieldEnum]


  export const LineScalarFieldEnum: {
    id: 'id',
    shapeId: 'shapeId',
    startX: 'startX',
    startY: 'startY',
    endX: 'endX',
    endY: 'endY'
  };

  export type LineScalarFieldEnum = (typeof LineScalarFieldEnum)[keyof typeof LineScalarFieldEnum]


  export const ShapeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    roomId: 'roomId'
  };

  export type ShapeScalarFieldEnum = (typeof ShapeScalarFieldEnum)[keyof typeof ShapeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StringType'
   */
  export type EnumStringTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StringType'>
    


  /**
   * Reference to a field of type 'StringType[]'
   */
  export type ListEnumStringTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StringType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    rooms?: RoomListRelationFilter
    Shape?: ShapeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    Shape?: ShapeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    photo?: StringNullableFilter<"User"> | string | null
    rooms?: RoomListRelationFilter
    Shape?: ShapeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    slug?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    adminId?: StringFilter<"Room"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    Shape?: ShapeListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    admin?: UserOrderByWithRelationInput
    Shape?: ShapeOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    createdAt?: DateTimeFilter<"Room"> | Date | string
    adminId?: StringFilter<"Room"> | string
    admin?: XOR<UserScalarRelationFilter, UserWhereInput>
    Shape?: ShapeListRelationFilter
  }, "id" | "slug">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    slug?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    adminId?: StringWithAggregatesFilter<"Room"> | string
  }

  export type RectangleWhereInput = {
    AND?: RectangleWhereInput | RectangleWhereInput[]
    OR?: RectangleWhereInput[]
    NOT?: RectangleWhereInput | RectangleWhereInput[]
    id?: StringFilter<"Rectangle"> | string
    shapeId?: StringFilter<"Rectangle"> | string
    startX?: IntFilter<"Rectangle"> | number
    startY?: IntFilter<"Rectangle"> | number
    width?: IntFilter<"Rectangle"> | number
    height?: IntFilter<"Rectangle"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type RectangleOrderByWithRelationInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type RectangleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shapeId?: string
    AND?: RectangleWhereInput | RectangleWhereInput[]
    OR?: RectangleWhereInput[]
    NOT?: RectangleWhereInput | RectangleWhereInput[]
    startX?: IntFilter<"Rectangle"> | number
    startY?: IntFilter<"Rectangle"> | number
    width?: IntFilter<"Rectangle"> | number
    height?: IntFilter<"Rectangle"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "id" | "shapeId">

  export type RectangleOrderByWithAggregationInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
    _count?: RectangleCountOrderByAggregateInput
    _avg?: RectangleAvgOrderByAggregateInput
    _max?: RectangleMaxOrderByAggregateInput
    _min?: RectangleMinOrderByAggregateInput
    _sum?: RectangleSumOrderByAggregateInput
  }

  export type RectangleScalarWhereWithAggregatesInput = {
    AND?: RectangleScalarWhereWithAggregatesInput | RectangleScalarWhereWithAggregatesInput[]
    OR?: RectangleScalarWhereWithAggregatesInput[]
    NOT?: RectangleScalarWhereWithAggregatesInput | RectangleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rectangle"> | string
    shapeId?: StringWithAggregatesFilter<"Rectangle"> | string
    startX?: IntWithAggregatesFilter<"Rectangle"> | number
    startY?: IntWithAggregatesFilter<"Rectangle"> | number
    width?: IntWithAggregatesFilter<"Rectangle"> | number
    height?: IntWithAggregatesFilter<"Rectangle"> | number
  }

  export type CircleWhereInput = {
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    id?: StringFilter<"Circle"> | string
    shapeId?: StringFilter<"Circle"> | string
    startX?: IntFilter<"Circle"> | number
    startY?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type CircleOrderByWithRelationInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type CircleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shapeId?: string
    AND?: CircleWhereInput | CircleWhereInput[]
    OR?: CircleWhereInput[]
    NOT?: CircleWhereInput | CircleWhereInput[]
    startX?: IntFilter<"Circle"> | number
    startY?: IntFilter<"Circle"> | number
    radius?: IntFilter<"Circle"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "id" | "shapeId">

  export type CircleOrderByWithAggregationInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
    _count?: CircleCountOrderByAggregateInput
    _avg?: CircleAvgOrderByAggregateInput
    _max?: CircleMaxOrderByAggregateInput
    _min?: CircleMinOrderByAggregateInput
    _sum?: CircleSumOrderByAggregateInput
  }

  export type CircleScalarWhereWithAggregatesInput = {
    AND?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    OR?: CircleScalarWhereWithAggregatesInput[]
    NOT?: CircleScalarWhereWithAggregatesInput | CircleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Circle"> | string
    shapeId?: StringWithAggregatesFilter<"Circle"> | string
    startX?: IntWithAggregatesFilter<"Circle"> | number
    startY?: IntWithAggregatesFilter<"Circle"> | number
    radius?: IntWithAggregatesFilter<"Circle"> | number
  }

  export type LineWhereInput = {
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    id?: StringFilter<"Line"> | string
    shapeId?: StringFilter<"Line"> | string
    startX?: IntFilter<"Line"> | number
    startY?: IntFilter<"Line"> | number
    endX?: IntFilter<"Line"> | number
    endY?: IntFilter<"Line"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }

  export type LineOrderByWithRelationInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
    shape?: ShapeOrderByWithRelationInput
  }

  export type LineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shapeId?: string
    AND?: LineWhereInput | LineWhereInput[]
    OR?: LineWhereInput[]
    NOT?: LineWhereInput | LineWhereInput[]
    startX?: IntFilter<"Line"> | number
    startY?: IntFilter<"Line"> | number
    endX?: IntFilter<"Line"> | number
    endY?: IntFilter<"Line"> | number
    shape?: XOR<ShapeScalarRelationFilter, ShapeWhereInput>
  }, "id" | "shapeId">

  export type LineOrderByWithAggregationInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
    _count?: LineCountOrderByAggregateInput
    _avg?: LineAvgOrderByAggregateInput
    _max?: LineMaxOrderByAggregateInput
    _min?: LineMinOrderByAggregateInput
    _sum?: LineSumOrderByAggregateInput
  }

  export type LineScalarWhereWithAggregatesInput = {
    AND?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    OR?: LineScalarWhereWithAggregatesInput[]
    NOT?: LineScalarWhereWithAggregatesInput | LineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Line"> | string
    shapeId?: StringWithAggregatesFilter<"Line"> | string
    startX?: IntWithAggregatesFilter<"Line"> | number
    startY?: IntWithAggregatesFilter<"Line"> | number
    endX?: IntWithAggregatesFilter<"Line"> | number
    endY?: IntWithAggregatesFilter<"Line"> | number
  }

  export type ShapeWhereInput = {
    AND?: ShapeWhereInput | ShapeWhereInput[]
    OR?: ShapeWhereInput[]
    NOT?: ShapeWhereInput | ShapeWhereInput[]
    id?: StringFilter<"Shape"> | string
    type?: EnumStringTypeFilter<"Shape"> | $Enums.StringType
    userId?: StringFilter<"Shape"> | string
    roomId?: IntFilter<"Shape"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    Rectangle?: XOR<RectangleNullableScalarRelationFilter, RectangleWhereInput> | null
    Circle?: XOR<CircleNullableScalarRelationFilter, CircleWhereInput> | null
    Line?: XOR<LineNullableScalarRelationFilter, LineWhereInput> | null
  }

  export type ShapeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    Rectangle?: RectangleOrderByWithRelationInput
    Circle?: CircleOrderByWithRelationInput
    Line?: LineOrderByWithRelationInput
  }

  export type ShapeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShapeWhereInput | ShapeWhereInput[]
    OR?: ShapeWhereInput[]
    NOT?: ShapeWhereInput | ShapeWhereInput[]
    type?: EnumStringTypeFilter<"Shape"> | $Enums.StringType
    userId?: StringFilter<"Shape"> | string
    roomId?: IntFilter<"Shape"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    Rectangle?: XOR<RectangleNullableScalarRelationFilter, RectangleWhereInput> | null
    Circle?: XOR<CircleNullableScalarRelationFilter, CircleWhereInput> | null
    Line?: XOR<LineNullableScalarRelationFilter, LineWhereInput> | null
  }, "id">

  export type ShapeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    _count?: ShapeCountOrderByAggregateInput
    _avg?: ShapeAvgOrderByAggregateInput
    _max?: ShapeMaxOrderByAggregateInput
    _min?: ShapeMinOrderByAggregateInput
    _sum?: ShapeSumOrderByAggregateInput
  }

  export type ShapeScalarWhereWithAggregatesInput = {
    AND?: ShapeScalarWhereWithAggregatesInput | ShapeScalarWhereWithAggregatesInput[]
    OR?: ShapeScalarWhereWithAggregatesInput[]
    NOT?: ShapeScalarWhereWithAggregatesInput | ShapeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shape"> | string
    type?: EnumStringTypeWithAggregatesFilter<"Shape"> | $Enums.StringType
    userId?: StringWithAggregatesFilter<"Shape"> | string
    roomId?: IntWithAggregatesFilter<"Shape"> | number
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
    rooms?: RoomCreateNestedManyWithoutAdminInput
    Shape?: ShapeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutAdminInput
    Shape?: ShapeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUpdateManyWithoutAdminNestedInput
    Shape?: ShapeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUncheckedUpdateManyWithoutAdminNestedInput
    Shape?: ShapeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoomCreateInput = {
    slug: string
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutRoomsInput
    Shape?: ShapeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    adminId: string
    Shape?: ShapeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutRoomsNestedInput
    Shape?: ShapeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
    Shape?: ShapeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    adminId: string
  }

  export type RoomUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type RectangleCreateInput = {
    id?: string
    startX: number
    startY: number
    width: number
    height: number
    shape: ShapeCreateNestedOneWithoutRectangleInput
  }

  export type RectangleUncheckedCreateInput = {
    id?: string
    shapeId: string
    startX: number
    startY: number
    width: number
    height: number
  }

  export type RectangleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutRectangleNestedInput
  }

  export type RectangleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shapeId?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type RectangleCreateManyInput = {
    id?: string
    shapeId: string
    startX: number
    startY: number
    width: number
    height: number
  }

  export type RectangleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type RectangleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shapeId?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type CircleCreateInput = {
    id?: string
    startX: number
    startY: number
    radius: number
    shape: ShapeCreateNestedOneWithoutCircleInput
  }

  export type CircleUncheckedCreateInput = {
    id?: string
    shapeId: string
    startX: number
    startY: number
    radius: number
  }

  export type CircleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutCircleNestedInput
  }

  export type CircleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shapeId?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type CircleCreateManyInput = {
    id?: string
    shapeId: string
    startX: number
    startY: number
    radius: number
  }

  export type CircleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type CircleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shapeId?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateInput = {
    id?: string
    startX: number
    startY: number
    endX: number
    endY: number
    shape: ShapeCreateNestedOneWithoutLineInput
  }

  export type LineUncheckedCreateInput = {
    id?: string
    shapeId: string
    startX: number
    startY: number
    endX: number
    endY: number
  }

  export type LineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    endX?: IntFieldUpdateOperationsInput | number
    endY?: IntFieldUpdateOperationsInput | number
    shape?: ShapeUpdateOneRequiredWithoutLineNestedInput
  }

  export type LineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shapeId?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    endX?: IntFieldUpdateOperationsInput | number
    endY?: IntFieldUpdateOperationsInput | number
  }

  export type LineCreateManyInput = {
    id?: string
    shapeId: string
    startX: number
    startY: number
    endX: number
    endY: number
  }

  export type LineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    endX?: IntFieldUpdateOperationsInput | number
    endY?: IntFieldUpdateOperationsInput | number
  }

  export type LineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shapeId?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    endX?: IntFieldUpdateOperationsInput | number
    endY?: IntFieldUpdateOperationsInput | number
  }

  export type ShapeCreateInput = {
    id?: string
    type: $Enums.StringType
    user: UserCreateNestedOneWithoutShapeInput
    room: RoomCreateNestedOneWithoutShapeInput
    Rectangle?: RectangleCreateNestedOneWithoutShapeInput
    Circle?: CircleCreateNestedOneWithoutShapeInput
    Line?: LineCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateInput = {
    id?: string
    type: $Enums.StringType
    userId: string
    roomId: number
    Rectangle?: RectangleUncheckedCreateNestedOneWithoutShapeInput
    Circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    Line?: LineUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    user?: UserUpdateOneRequiredWithoutShapeNestedInput
    room?: RoomUpdateOneRequiredWithoutShapeNestedInput
    Rectangle?: RectangleUpdateOneWithoutShapeNestedInput
    Circle?: CircleUpdateOneWithoutShapeNestedInput
    Line?: LineUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    Rectangle?: RectangleUncheckedUpdateOneWithoutShapeNestedInput
    Circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    Line?: LineUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeCreateManyInput = {
    id?: string
    type: $Enums.StringType
    userId: string
    roomId: number
  }

  export type ShapeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
  }

  export type ShapeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type ShapeListRelationFilter = {
    every?: ShapeWhereInput
    some?: ShapeWhereInput
    none?: ShapeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShapeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photo?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photo?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    photo?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    adminId?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShapeScalarRelationFilter = {
    is?: ShapeWhereInput
    isNot?: ShapeWhereInput
  }

  export type RectangleCountOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectangleAvgOrderByAggregateInput = {
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectangleMaxOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectangleMinOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type RectangleSumOrderByAggregateInput = {
    startX?: SortOrder
    startY?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type CircleCountOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
  }

  export type CircleAvgOrderByAggregateInput = {
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
  }

  export type CircleMaxOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
  }

  export type CircleMinOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
  }

  export type CircleSumOrderByAggregateInput = {
    startX?: SortOrder
    startY?: SortOrder
    radius?: SortOrder
  }

  export type LineCountOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
  }

  export type LineAvgOrderByAggregateInput = {
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
  }

  export type LineMaxOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
  }

  export type LineMinOrderByAggregateInput = {
    id?: SortOrder
    shapeId?: SortOrder
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
  }

  export type LineSumOrderByAggregateInput = {
    startX?: SortOrder
    startY?: SortOrder
    endX?: SortOrder
    endY?: SortOrder
  }

  export type EnumStringTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StringType | EnumStringTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStringTypeFilter<$PrismaModel> | $Enums.StringType
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RectangleNullableScalarRelationFilter = {
    is?: RectangleWhereInput | null
    isNot?: RectangleWhereInput | null
  }

  export type CircleNullableScalarRelationFilter = {
    is?: CircleWhereInput | null
    isNot?: CircleWhereInput | null
  }

  export type LineNullableScalarRelationFilter = {
    is?: LineWhereInput | null
    isNot?: LineWhereInput | null
  }

  export type ShapeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type ShapeAvgOrderByAggregateInput = {
    roomId?: SortOrder
  }

  export type ShapeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type ShapeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
  }

  export type ShapeSumOrderByAggregateInput = {
    roomId?: SortOrder
  }

  export type EnumStringTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StringType | EnumStringTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStringTypeWithAggregatesFilter<$PrismaModel> | $Enums.StringType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStringTypeFilter<$PrismaModel>
    _max?: NestedEnumStringTypeFilter<$PrismaModel>
  }

  export type RoomCreateNestedManyWithoutAdminInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ShapeCreateNestedManyWithoutUserInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type ShapeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RoomUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAdminInput | RoomUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAdminInput | RoomUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAdminInput | RoomUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ShapeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutUserInput | ShapeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutUserInput | ShapeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutUserInput | ShapeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput> | RoomCreateWithoutAdminInput[] | RoomUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutAdminInput | RoomCreateOrConnectWithoutAdminInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutAdminInput | RoomUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: RoomCreateManyAdminInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutAdminInput | RoomUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutAdminInput | RoomUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type ShapeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput> | ShapeCreateWithoutUserInput[] | ShapeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutUserInput | ShapeCreateOrConnectWithoutUserInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutUserInput | ShapeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShapeCreateManyUserInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutUserInput | ShapeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutUserInput | ShapeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type ShapeCreateNestedManyWithoutRoomInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type ShapeUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type ShapeUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutRoomInput | ShapeUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutRoomInput | ShapeUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutRoomInput | ShapeUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShapeUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput> | ShapeCreateWithoutRoomInput[] | ShapeUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ShapeCreateOrConnectWithoutRoomInput | ShapeCreateOrConnectWithoutRoomInput[]
    upsert?: ShapeUpsertWithWhereUniqueWithoutRoomInput | ShapeUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ShapeCreateManyRoomInputEnvelope
    set?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    disconnect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    delete?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    connect?: ShapeWhereUniqueInput | ShapeWhereUniqueInput[]
    update?: ShapeUpdateWithWhereUniqueWithoutRoomInput | ShapeUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ShapeUpdateManyWithWhereWithoutRoomInput | ShapeUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
  }

  export type ShapeCreateNestedOneWithoutRectangleInput = {
    create?: XOR<ShapeCreateWithoutRectangleInput, ShapeUncheckedCreateWithoutRectangleInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutRectangleInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutRectangleNestedInput = {
    create?: XOR<ShapeCreateWithoutRectangleInput, ShapeUncheckedCreateWithoutRectangleInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutRectangleInput
    upsert?: ShapeUpsertWithoutRectangleInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutRectangleInput, ShapeUpdateWithoutRectangleInput>, ShapeUncheckedUpdateWithoutRectangleInput>
  }

  export type ShapeCreateNestedOneWithoutCircleInput = {
    create?: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutCircleInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutCircleNestedInput = {
    create?: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutCircleInput
    upsert?: ShapeUpsertWithoutCircleInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutCircleInput, ShapeUpdateWithoutCircleInput>, ShapeUncheckedUpdateWithoutCircleInput>
  }

  export type ShapeCreateNestedOneWithoutLineInput = {
    create?: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutLineInput
    connect?: ShapeWhereUniqueInput
  }

  export type ShapeUpdateOneRequiredWithoutLineNestedInput = {
    create?: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
    connectOrCreate?: ShapeCreateOrConnectWithoutLineInput
    upsert?: ShapeUpsertWithoutLineInput
    connect?: ShapeWhereUniqueInput
    update?: XOR<XOR<ShapeUpdateToOneWithWhereWithoutLineInput, ShapeUpdateWithoutLineInput>, ShapeUncheckedUpdateWithoutLineInput>
  }

  export type UserCreateNestedOneWithoutShapeInput = {
    create?: XOR<UserCreateWithoutShapeInput, UserUncheckedCreateWithoutShapeInput>
    connectOrCreate?: UserCreateOrConnectWithoutShapeInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutShapeInput = {
    create?: XOR<RoomCreateWithoutShapeInput, RoomUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RoomCreateOrConnectWithoutShapeInput
    connect?: RoomWhereUniqueInput
  }

  export type RectangleCreateNestedOneWithoutShapeInput = {
    create?: XOR<RectangleCreateWithoutShapeInput, RectangleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectangleCreateOrConnectWithoutShapeInput
    connect?: RectangleWhereUniqueInput
  }

  export type CircleCreateNestedOneWithoutShapeInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    connect?: CircleWhereUniqueInput
  }

  export type LineCreateNestedOneWithoutShapeInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    connect?: LineWhereUniqueInput
  }

  export type RectangleUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<RectangleCreateWithoutShapeInput, RectangleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectangleCreateOrConnectWithoutShapeInput
    connect?: RectangleWhereUniqueInput
  }

  export type CircleUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    connect?: CircleWhereUniqueInput
  }

  export type LineUncheckedCreateNestedOneWithoutShapeInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    connect?: LineWhereUniqueInput
  }

  export type EnumStringTypeFieldUpdateOperationsInput = {
    set?: $Enums.StringType
  }

  export type UserUpdateOneRequiredWithoutShapeNestedInput = {
    create?: XOR<UserCreateWithoutShapeInput, UserUncheckedCreateWithoutShapeInput>
    connectOrCreate?: UserCreateOrConnectWithoutShapeInput
    upsert?: UserUpsertWithoutShapeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShapeInput, UserUpdateWithoutShapeInput>, UserUncheckedUpdateWithoutShapeInput>
  }

  export type RoomUpdateOneRequiredWithoutShapeNestedInput = {
    create?: XOR<RoomCreateWithoutShapeInput, RoomUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RoomCreateOrConnectWithoutShapeInput
    upsert?: RoomUpsertWithoutShapeInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutShapeInput, RoomUpdateWithoutShapeInput>, RoomUncheckedUpdateWithoutShapeInput>
  }

  export type RectangleUpdateOneWithoutShapeNestedInput = {
    create?: XOR<RectangleCreateWithoutShapeInput, RectangleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectangleCreateOrConnectWithoutShapeInput
    upsert?: RectangleUpsertWithoutShapeInput
    disconnect?: RectangleWhereInput | boolean
    delete?: RectangleWhereInput | boolean
    connect?: RectangleWhereUniqueInput
    update?: XOR<XOR<RectangleUpdateToOneWithWhereWithoutShapeInput, RectangleUpdateWithoutShapeInput>, RectangleUncheckedUpdateWithoutShapeInput>
  }

  export type CircleUpdateOneWithoutShapeNestedInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    upsert?: CircleUpsertWithoutShapeInput
    disconnect?: CircleWhereInput | boolean
    delete?: CircleWhereInput | boolean
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutShapeInput, CircleUpdateWithoutShapeInput>, CircleUncheckedUpdateWithoutShapeInput>
  }

  export type LineUpdateOneWithoutShapeNestedInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    upsert?: LineUpsertWithoutShapeInput
    disconnect?: LineWhereInput | boolean
    delete?: LineWhereInput | boolean
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutShapeInput, LineUpdateWithoutShapeInput>, LineUncheckedUpdateWithoutShapeInput>
  }

  export type RectangleUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<RectangleCreateWithoutShapeInput, RectangleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: RectangleCreateOrConnectWithoutShapeInput
    upsert?: RectangleUpsertWithoutShapeInput
    disconnect?: RectangleWhereInput | boolean
    delete?: RectangleWhereInput | boolean
    connect?: RectangleWhereUniqueInput
    update?: XOR<XOR<RectangleUpdateToOneWithWhereWithoutShapeInput, RectangleUpdateWithoutShapeInput>, RectangleUncheckedUpdateWithoutShapeInput>
  }

  export type CircleUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    connectOrCreate?: CircleCreateOrConnectWithoutShapeInput
    upsert?: CircleUpsertWithoutShapeInput
    disconnect?: CircleWhereInput | boolean
    delete?: CircleWhereInput | boolean
    connect?: CircleWhereUniqueInput
    update?: XOR<XOR<CircleUpdateToOneWithWhereWithoutShapeInput, CircleUpdateWithoutShapeInput>, CircleUncheckedUpdateWithoutShapeInput>
  }

  export type LineUncheckedUpdateOneWithoutShapeNestedInput = {
    create?: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    connectOrCreate?: LineCreateOrConnectWithoutShapeInput
    upsert?: LineUpsertWithoutShapeInput
    disconnect?: LineWhereInput | boolean
    delete?: LineWhereInput | boolean
    connect?: LineWhereUniqueInput
    update?: XOR<XOR<LineUpdateToOneWithWhereWithoutShapeInput, LineUpdateWithoutShapeInput>, LineUncheckedUpdateWithoutShapeInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStringTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StringType | EnumStringTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStringTypeFilter<$PrismaModel> | $Enums.StringType
  }

  export type NestedEnumStringTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StringType | EnumStringTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StringType[] | ListEnumStringTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStringTypeWithAggregatesFilter<$PrismaModel> | $Enums.StringType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStringTypeFilter<$PrismaModel>
    _max?: NestedEnumStringTypeFilter<$PrismaModel>
  }

  export type RoomCreateWithoutAdminInput = {
    slug: string
    createdAt?: Date | string
    Shape?: ShapeCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAdminInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    Shape?: ShapeUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAdminInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput>
  }

  export type RoomCreateManyAdminInputEnvelope = {
    data: RoomCreateManyAdminInput | RoomCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ShapeCreateWithoutUserInput = {
    id?: string
    type: $Enums.StringType
    room: RoomCreateNestedOneWithoutShapeInput
    Rectangle?: RectangleCreateNestedOneWithoutShapeInput
    Circle?: CircleCreateNestedOneWithoutShapeInput
    Line?: LineCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.StringType
    roomId: number
    Rectangle?: RectangleUncheckedCreateNestedOneWithoutShapeInput
    Circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    Line?: LineUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutUserInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput>
  }

  export type ShapeCreateManyUserInputEnvelope = {
    data: ShapeCreateManyUserInput | ShapeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutAdminInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutAdminInput, RoomUncheckedUpdateWithoutAdminInput>
    create: XOR<RoomCreateWithoutAdminInput, RoomUncheckedCreateWithoutAdminInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutAdminInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutAdminInput, RoomUncheckedUpdateWithoutAdminInput>
  }

  export type RoomUpdateManyWithWhereWithoutAdminInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutAdminInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    slug?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    adminId?: StringFilter<"Room"> | string
  }

  export type ShapeUpsertWithWhereUniqueWithoutUserInput = {
    where: ShapeWhereUniqueInput
    update: XOR<ShapeUpdateWithoutUserInput, ShapeUncheckedUpdateWithoutUserInput>
    create: XOR<ShapeCreateWithoutUserInput, ShapeUncheckedCreateWithoutUserInput>
  }

  export type ShapeUpdateWithWhereUniqueWithoutUserInput = {
    where: ShapeWhereUniqueInput
    data: XOR<ShapeUpdateWithoutUserInput, ShapeUncheckedUpdateWithoutUserInput>
  }

  export type ShapeUpdateManyWithWhereWithoutUserInput = {
    where: ShapeScalarWhereInput
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyWithoutUserInput>
  }

  export type ShapeScalarWhereInput = {
    AND?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
    OR?: ShapeScalarWhereInput[]
    NOT?: ShapeScalarWhereInput | ShapeScalarWhereInput[]
    id?: StringFilter<"Shape"> | string
    type?: EnumStringTypeFilter<"Shape"> | $Enums.StringType
    userId?: StringFilter<"Shape"> | string
    roomId?: IntFilter<"Shape"> | number
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
    Shape?: ShapeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
    Shape?: ShapeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type ShapeCreateWithoutRoomInput = {
    id?: string
    type: $Enums.StringType
    user: UserCreateNestedOneWithoutShapeInput
    Rectangle?: RectangleCreateNestedOneWithoutShapeInput
    Circle?: CircleCreateNestedOneWithoutShapeInput
    Line?: LineCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutRoomInput = {
    id?: string
    type: $Enums.StringType
    userId: string
    Rectangle?: RectangleUncheckedCreateNestedOneWithoutShapeInput
    Circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    Line?: LineUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutRoomInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput>
  }

  export type ShapeCreateManyRoomInputEnvelope = {
    data: ShapeCreateManyRoomInput | ShapeCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Shape?: ShapeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Shape?: ShapeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShapeUpsertWithWhereUniqueWithoutRoomInput = {
    where: ShapeWhereUniqueInput
    update: XOR<ShapeUpdateWithoutRoomInput, ShapeUncheckedUpdateWithoutRoomInput>
    create: XOR<ShapeCreateWithoutRoomInput, ShapeUncheckedCreateWithoutRoomInput>
  }

  export type ShapeUpdateWithWhereUniqueWithoutRoomInput = {
    where: ShapeWhereUniqueInput
    data: XOR<ShapeUpdateWithoutRoomInput, ShapeUncheckedUpdateWithoutRoomInput>
  }

  export type ShapeUpdateManyWithWhereWithoutRoomInput = {
    where: ShapeScalarWhereInput
    data: XOR<ShapeUpdateManyMutationInput, ShapeUncheckedUpdateManyWithoutRoomInput>
  }

  export type ShapeCreateWithoutRectangleInput = {
    id?: string
    type: $Enums.StringType
    user: UserCreateNestedOneWithoutShapeInput
    room: RoomCreateNestedOneWithoutShapeInput
    Circle?: CircleCreateNestedOneWithoutShapeInput
    Line?: LineCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutRectangleInput = {
    id?: string
    type: $Enums.StringType
    userId: string
    roomId: number
    Circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
    Line?: LineUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutRectangleInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutRectangleInput, ShapeUncheckedCreateWithoutRectangleInput>
  }

  export type ShapeUpsertWithoutRectangleInput = {
    update: XOR<ShapeUpdateWithoutRectangleInput, ShapeUncheckedUpdateWithoutRectangleInput>
    create: XOR<ShapeCreateWithoutRectangleInput, ShapeUncheckedCreateWithoutRectangleInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutRectangleInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutRectangleInput, ShapeUncheckedUpdateWithoutRectangleInput>
  }

  export type ShapeUpdateWithoutRectangleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    user?: UserUpdateOneRequiredWithoutShapeNestedInput
    room?: RoomUpdateOneRequiredWithoutShapeNestedInput
    Circle?: CircleUpdateOneWithoutShapeNestedInput
    Line?: LineUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutRectangleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    Circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    Line?: LineUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeCreateWithoutCircleInput = {
    id?: string
    type: $Enums.StringType
    user: UserCreateNestedOneWithoutShapeInput
    room: RoomCreateNestedOneWithoutShapeInput
    Rectangle?: RectangleCreateNestedOneWithoutShapeInput
    Line?: LineCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutCircleInput = {
    id?: string
    type: $Enums.StringType
    userId: string
    roomId: number
    Rectangle?: RectangleUncheckedCreateNestedOneWithoutShapeInput
    Line?: LineUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutCircleInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
  }

  export type ShapeUpsertWithoutCircleInput = {
    update: XOR<ShapeUpdateWithoutCircleInput, ShapeUncheckedUpdateWithoutCircleInput>
    create: XOR<ShapeCreateWithoutCircleInput, ShapeUncheckedCreateWithoutCircleInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutCircleInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutCircleInput, ShapeUncheckedUpdateWithoutCircleInput>
  }

  export type ShapeUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    user?: UserUpdateOneRequiredWithoutShapeNestedInput
    room?: RoomUpdateOneRequiredWithoutShapeNestedInput
    Rectangle?: RectangleUpdateOneWithoutShapeNestedInput
    Line?: LineUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutCircleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    Rectangle?: RectangleUncheckedUpdateOneWithoutShapeNestedInput
    Line?: LineUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeCreateWithoutLineInput = {
    id?: string
    type: $Enums.StringType
    user: UserCreateNestedOneWithoutShapeInput
    room: RoomCreateNestedOneWithoutShapeInput
    Rectangle?: RectangleCreateNestedOneWithoutShapeInput
    Circle?: CircleCreateNestedOneWithoutShapeInput
  }

  export type ShapeUncheckedCreateWithoutLineInput = {
    id?: string
    type: $Enums.StringType
    userId: string
    roomId: number
    Rectangle?: RectangleUncheckedCreateNestedOneWithoutShapeInput
    Circle?: CircleUncheckedCreateNestedOneWithoutShapeInput
  }

  export type ShapeCreateOrConnectWithoutLineInput = {
    where: ShapeWhereUniqueInput
    create: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
  }

  export type ShapeUpsertWithoutLineInput = {
    update: XOR<ShapeUpdateWithoutLineInput, ShapeUncheckedUpdateWithoutLineInput>
    create: XOR<ShapeCreateWithoutLineInput, ShapeUncheckedCreateWithoutLineInput>
    where?: ShapeWhereInput
  }

  export type ShapeUpdateToOneWithWhereWithoutLineInput = {
    where?: ShapeWhereInput
    data: XOR<ShapeUpdateWithoutLineInput, ShapeUncheckedUpdateWithoutLineInput>
  }

  export type ShapeUpdateWithoutLineInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    user?: UserUpdateOneRequiredWithoutShapeNestedInput
    room?: RoomUpdateOneRequiredWithoutShapeNestedInput
    Rectangle?: RectangleUpdateOneWithoutShapeNestedInput
    Circle?: CircleUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutLineInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: IntFieldUpdateOperationsInput | number
    Rectangle?: RectangleUncheckedUpdateOneWithoutShapeNestedInput
    Circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type UserCreateWithoutShapeInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
    rooms?: RoomCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutShapeInput = {
    id?: string
    email: string
    password: string
    name: string
    photo?: string | null
    rooms?: RoomUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutShapeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShapeInput, UserUncheckedCreateWithoutShapeInput>
  }

  export type RoomCreateWithoutShapeInput = {
    slug: string
    createdAt?: Date | string
    admin: UserCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutShapeInput = {
    id?: number
    slug: string
    createdAt?: Date | string
    adminId: string
  }

  export type RoomCreateOrConnectWithoutShapeInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutShapeInput, RoomUncheckedCreateWithoutShapeInput>
  }

  export type RectangleCreateWithoutShapeInput = {
    id?: string
    startX: number
    startY: number
    width: number
    height: number
  }

  export type RectangleUncheckedCreateWithoutShapeInput = {
    id?: string
    startX: number
    startY: number
    width: number
    height: number
  }

  export type RectangleCreateOrConnectWithoutShapeInput = {
    where: RectangleWhereUniqueInput
    create: XOR<RectangleCreateWithoutShapeInput, RectangleUncheckedCreateWithoutShapeInput>
  }

  export type CircleCreateWithoutShapeInput = {
    id?: string
    startX: number
    startY: number
    radius: number
  }

  export type CircleUncheckedCreateWithoutShapeInput = {
    id?: string
    startX: number
    startY: number
    radius: number
  }

  export type CircleCreateOrConnectWithoutShapeInput = {
    where: CircleWhereUniqueInput
    create: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
  }

  export type LineCreateWithoutShapeInput = {
    id?: string
    startX: number
    startY: number
    endX: number
    endY: number
  }

  export type LineUncheckedCreateWithoutShapeInput = {
    id?: string
    startX: number
    startY: number
    endX: number
    endY: number
  }

  export type LineCreateOrConnectWithoutShapeInput = {
    where: LineWhereUniqueInput
    create: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
  }

  export type UserUpsertWithoutShapeInput = {
    update: XOR<UserUpdateWithoutShapeInput, UserUncheckedUpdateWithoutShapeInput>
    create: XOR<UserCreateWithoutShapeInput, UserUncheckedCreateWithoutShapeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShapeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShapeInput, UserUncheckedUpdateWithoutShapeInput>
  }

  export type UserUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    rooms?: RoomUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type RoomUpsertWithoutShapeInput = {
    update: XOR<RoomUpdateWithoutShapeInput, RoomUncheckedUpdateWithoutShapeInput>
    create: XOR<RoomCreateWithoutShapeInput, RoomUncheckedCreateWithoutShapeInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutShapeInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutShapeInput, RoomUncheckedUpdateWithoutShapeInput>
  }

  export type RoomUpdateWithoutShapeInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutShapeInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adminId?: StringFieldUpdateOperationsInput | string
  }

  export type RectangleUpsertWithoutShapeInput = {
    update: XOR<RectangleUpdateWithoutShapeInput, RectangleUncheckedUpdateWithoutShapeInput>
    create: XOR<RectangleCreateWithoutShapeInput, RectangleUncheckedCreateWithoutShapeInput>
    where?: RectangleWhereInput
  }

  export type RectangleUpdateToOneWithWhereWithoutShapeInput = {
    where?: RectangleWhereInput
    data: XOR<RectangleUpdateWithoutShapeInput, RectangleUncheckedUpdateWithoutShapeInput>
  }

  export type RectangleUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type RectangleUncheckedUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
  }

  export type CircleUpsertWithoutShapeInput = {
    update: XOR<CircleUpdateWithoutShapeInput, CircleUncheckedUpdateWithoutShapeInput>
    create: XOR<CircleCreateWithoutShapeInput, CircleUncheckedCreateWithoutShapeInput>
    where?: CircleWhereInput
  }

  export type CircleUpdateToOneWithWhereWithoutShapeInput = {
    where?: CircleWhereInput
    data: XOR<CircleUpdateWithoutShapeInput, CircleUncheckedUpdateWithoutShapeInput>
  }

  export type CircleUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type CircleUncheckedUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    radius?: IntFieldUpdateOperationsInput | number
  }

  export type LineUpsertWithoutShapeInput = {
    update: XOR<LineUpdateWithoutShapeInput, LineUncheckedUpdateWithoutShapeInput>
    create: XOR<LineCreateWithoutShapeInput, LineUncheckedCreateWithoutShapeInput>
    where?: LineWhereInput
  }

  export type LineUpdateToOneWithWhereWithoutShapeInput = {
    where?: LineWhereInput
    data: XOR<LineUpdateWithoutShapeInput, LineUncheckedUpdateWithoutShapeInput>
  }

  export type LineUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    endX?: IntFieldUpdateOperationsInput | number
    endY?: IntFieldUpdateOperationsInput | number
  }

  export type LineUncheckedUpdateWithoutShapeInput = {
    id?: StringFieldUpdateOperationsInput | string
    startX?: IntFieldUpdateOperationsInput | number
    startY?: IntFieldUpdateOperationsInput | number
    endX?: IntFieldUpdateOperationsInput | number
    endY?: IntFieldUpdateOperationsInput | number
  }

  export type RoomCreateManyAdminInput = {
    id?: number
    slug: string
    createdAt?: Date | string
  }

  export type ShapeCreateManyUserInput = {
    id?: string
    type: $Enums.StringType
    roomId: number
  }

  export type RoomUpdateWithoutAdminInput = {
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Shape?: ShapeUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Shape?: ShapeUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShapeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    room?: RoomUpdateOneRequiredWithoutShapeNestedInput
    Rectangle?: RectangleUpdateOneWithoutShapeNestedInput
    Circle?: CircleUpdateOneWithoutShapeNestedInput
    Line?: LineUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    roomId?: IntFieldUpdateOperationsInput | number
    Rectangle?: RectangleUncheckedUpdateOneWithoutShapeNestedInput
    Circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    Line?: LineUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    roomId?: IntFieldUpdateOperationsInput | number
  }

  export type ShapeCreateManyRoomInput = {
    id?: string
    type: $Enums.StringType
    userId: string
  }

  export type ShapeUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    user?: UserUpdateOneRequiredWithoutShapeNestedInput
    Rectangle?: RectangleUpdateOneWithoutShapeNestedInput
    Circle?: CircleUpdateOneWithoutShapeNestedInput
    Line?: LineUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
    Rectangle?: RectangleUncheckedUpdateOneWithoutShapeNestedInput
    Circle?: CircleUncheckedUpdateOneWithoutShapeNestedInput
    Line?: LineUncheckedUpdateOneWithoutShapeNestedInput
  }

  export type ShapeUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumStringTypeFieldUpdateOperationsInput | $Enums.StringType
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}