
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
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>
/**
 * Model Identity
 * 
 */
export type Identity = $Result.DefaultSelection<Prisma.$IdentityPayload>
/**
 * Model GoldItem
 * 
 */
export type GoldItem = $Result.DefaultSelection<Prisma.$GoldItemPayload>
/**
 * Model GoldPrice
 * 
 */
export type GoldPrice = $Result.DefaultSelection<Prisma.$GoldPricePayload>
/**
 * Model GoldUnitMetadata
 * 
 */
export type GoldUnitMetadata = $Result.DefaultSelection<Prisma.$GoldUnitMetadataPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Holding
 * 
 */
export type Holding = $Result.DefaultSelection<Prisma.$HoldingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const TransactionType: {
  PURCHASE: 'PURCHASE',
  SALE: 'SALE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Currency: {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  KWD: 'KWD'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const AddressType: {
  RESIDENTIAL: 'RESIDENTIAL',
  MAILING: 'MAILING',
  BUSINESS: 'BUSINESS'
};

export type AddressType = (typeof AddressType)[keyof typeof AddressType]


export const GoldItemType: {
  BAR: 'BAR',
  COIN: 'COIN',
  JEWELRY: 'JEWELRY',
  OTHER: 'OTHER'
};

export type GoldItemType = (typeof GoldItemType)[keyof typeof GoldItemType]


export const DepositMethod: {
  PHYSICAL: 'PHYSICAL',
  ONLINE_PURCHASE: 'ONLINE_PURCHASE'
};

export type DepositMethod = (typeof DepositMethod)[keyof typeof DepositMethod]


export const TransactionSource: {
  ONLINE: 'ONLINE',
  PHYSICAL_DEPOSIT: 'PHYSICAL_DEPOSIT'
};

export type TransactionSource = (typeof TransactionSource)[keyof typeof TransactionSource]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type AddressType = $Enums.AddressType

export const AddressType: typeof $Enums.AddressType

export type GoldItemType = $Enums.GoldItemType

export const GoldItemType: typeof $Enums.GoldItemType

export type DepositMethod = $Enums.DepositMethod

export const DepositMethod: typeof $Enums.DepositMethod

export type TransactionSource = $Enums.TransactionSource

export const TransactionSource: typeof $Enums.TransactionSource

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identity`: Exposes CRUD operations for the **Identity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Identities
    * const identities = await prisma.identity.findMany()
    * ```
    */
  get identity(): Prisma.IdentityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goldItem`: Exposes CRUD operations for the **GoldItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoldItems
    * const goldItems = await prisma.goldItem.findMany()
    * ```
    */
  get goldItem(): Prisma.GoldItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goldPrice`: Exposes CRUD operations for the **GoldPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoldPrices
    * const goldPrices = await prisma.goldPrice.findMany()
    * ```
    */
  get goldPrice(): Prisma.GoldPriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goldUnitMetadata`: Exposes CRUD operations for the **GoldUnitMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoldUnitMetadata
    * const goldUnitMetadata = await prisma.goldUnitMetadata.findMany()
    * ```
    */
  get goldUnitMetadata(): Prisma.GoldUnitMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.holding`: Exposes CRUD operations for the **Holding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Holdings
    * const holdings = await prisma.holding.findMany()
    * ```
    */
  get holding(): Prisma.HoldingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Address: 'Address',
    Wallet: 'Wallet',
    Portfolio: 'Portfolio',
    Identity: 'Identity',
    GoldItem: 'GoldItem',
    GoldPrice: 'GoldPrice',
    GoldUnitMetadata: 'GoldUnitMetadata',
    Transaction: 'Transaction',
    Payment: 'Payment',
    Holding: 'Holding'
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
      modelProps: "user" | "address" | "wallet" | "portfolio" | "identity" | "goldItem" | "goldPrice" | "goldUnitMetadata" | "transaction" | "payment" | "holding"
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
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
      Identity: {
        payload: Prisma.$IdentityPayload<ExtArgs>
        fields: Prisma.IdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          findFirst: {
            args: Prisma.IdentityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          findMany: {
            args: Prisma.IdentityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>[]
          }
          create: {
            args: Prisma.IdentityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          createMany: {
            args: Prisma.IdentityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>[]
          }
          delete: {
            args: Prisma.IdentityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          update: {
            args: Prisma.IdentityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          deleteMany: {
            args: Prisma.IdentityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>[]
          }
          upsert: {
            args: Prisma.IdentityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          aggregate: {
            args: Prisma.IdentityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentity>
          }
          groupBy: {
            args: Prisma.IdentityGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentityCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityCountAggregateOutputType> | number
          }
        }
      }
      GoldItem: {
        payload: Prisma.$GoldItemPayload<ExtArgs>
        fields: Prisma.GoldItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoldItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoldItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>
          }
          findFirst: {
            args: Prisma.GoldItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoldItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>
          }
          findMany: {
            args: Prisma.GoldItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>[]
          }
          create: {
            args: Prisma.GoldItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>
          }
          createMany: {
            args: Prisma.GoldItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoldItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>[]
          }
          delete: {
            args: Prisma.GoldItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>
          }
          update: {
            args: Prisma.GoldItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>
          }
          deleteMany: {
            args: Prisma.GoldItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoldItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoldItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>[]
          }
          upsert: {
            args: Prisma.GoldItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldItemPayload>
          }
          aggregate: {
            args: Prisma.GoldItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoldItem>
          }
          groupBy: {
            args: Prisma.GoldItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoldItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoldItemCountArgs<ExtArgs>
            result: $Utils.Optional<GoldItemCountAggregateOutputType> | number
          }
        }
      }
      GoldPrice: {
        payload: Prisma.$GoldPricePayload<ExtArgs>
        fields: Prisma.GoldPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoldPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoldPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>
          }
          findFirst: {
            args: Prisma.GoldPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoldPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>
          }
          findMany: {
            args: Prisma.GoldPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>[]
          }
          create: {
            args: Prisma.GoldPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>
          }
          createMany: {
            args: Prisma.GoldPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoldPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>[]
          }
          delete: {
            args: Prisma.GoldPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>
          }
          update: {
            args: Prisma.GoldPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>
          }
          deleteMany: {
            args: Prisma.GoldPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoldPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoldPriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>[]
          }
          upsert: {
            args: Prisma.GoldPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldPricePayload>
          }
          aggregate: {
            args: Prisma.GoldPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoldPrice>
          }
          groupBy: {
            args: Prisma.GoldPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoldPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoldPriceCountArgs<ExtArgs>
            result: $Utils.Optional<GoldPriceCountAggregateOutputType> | number
          }
        }
      }
      GoldUnitMetadata: {
        payload: Prisma.$GoldUnitMetadataPayload<ExtArgs>
        fields: Prisma.GoldUnitMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoldUnitMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoldUnitMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>
          }
          findFirst: {
            args: Prisma.GoldUnitMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoldUnitMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>
          }
          findMany: {
            args: Prisma.GoldUnitMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>[]
          }
          create: {
            args: Prisma.GoldUnitMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>
          }
          createMany: {
            args: Prisma.GoldUnitMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoldUnitMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>[]
          }
          delete: {
            args: Prisma.GoldUnitMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>
          }
          update: {
            args: Prisma.GoldUnitMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>
          }
          deleteMany: {
            args: Prisma.GoldUnitMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoldUnitMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoldUnitMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>[]
          }
          upsert: {
            args: Prisma.GoldUnitMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoldUnitMetadataPayload>
          }
          aggregate: {
            args: Prisma.GoldUnitMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoldUnitMetadata>
          }
          groupBy: {
            args: Prisma.GoldUnitMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoldUnitMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoldUnitMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<GoldUnitMetadataCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Holding: {
        payload: Prisma.$HoldingPayload<ExtArgs>
        fields: Prisma.HoldingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HoldingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HoldingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          findFirst: {
            args: Prisma.HoldingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HoldingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          findMany: {
            args: Prisma.HoldingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>[]
          }
          create: {
            args: Prisma.HoldingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          createMany: {
            args: Prisma.HoldingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HoldingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>[]
          }
          delete: {
            args: Prisma.HoldingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          update: {
            args: Prisma.HoldingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          deleteMany: {
            args: Prisma.HoldingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HoldingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HoldingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>[]
          }
          upsert: {
            args: Prisma.HoldingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HoldingPayload>
          }
          aggregate: {
            args: Prisma.HoldingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHolding>
          }
          groupBy: {
            args: Prisma.HoldingGroupByArgs<ExtArgs>
            result: $Utils.Optional<HoldingGroupByOutputType>[]
          }
          count: {
            args: Prisma.HoldingCountArgs<ExtArgs>
            result: $Utils.Optional<HoldingCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    address?: AddressOmit
    wallet?: WalletOmit
    portfolio?: PortfolioOmit
    identity?: IdentityOmit
    goldItem?: GoldItemOmit
    goldPrice?: GoldPriceOmit
    goldUnitMetadata?: GoldUnitMetadataOmit
    transaction?: TransactionOmit
    payment?: PaymentOmit
    holding?: HoldingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    addresses: number
    transactions: number
    payments: number
    holdings: number
    goldItems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    holdings?: boolean | UserCountOutputTypeCountHoldingsArgs
    goldItems?: boolean | UserCountOutputTypeCountGoldItemsArgs
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
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoldItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoldItemWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    holdings: number
    goldItems: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    holdings?: boolean | TransactionCountOutputTypeCountHoldingsArgs
    goldItems?: boolean | TransactionCountOutputTypeCountGoldItemsArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountHoldingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingWhereInput
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountGoldItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoldItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    phoneNumber: string | null
    nationality: string | null
    country: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    gender: string | null
    phoneNumber: string | null
    nationality: string | null
    country: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    middleName: number
    lastName: number
    dateOfBirth: number
    gender: number
    phoneNumber: number
    nationality: number
    country: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    nationality?: true
    country?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    nationality?: true
    country?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    gender?: true
    phoneNumber?: true
    nationality?: true
    country?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    middleName: string | null
    lastName: string
    dateOfBirth: Date | null
    gender: string | null
    phoneNumber: string | null
    nationality: string | null
    country: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    nationality?: boolean
    country?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identity?: boolean | User$identityArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    holdings?: boolean | User$holdingsArgs<ExtArgs>
    goldItems?: boolean | User$goldItemsArgs<ExtArgs>
    Portfolio?: boolean | User$PortfolioArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    nationality?: boolean
    country?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    nationality?: boolean
    country?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    phoneNumber?: boolean
    nationality?: boolean
    country?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "middleName" | "lastName" | "dateOfBirth" | "gender" | "phoneNumber" | "nationality" | "country" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identity?: boolean | User$identityArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    holdings?: boolean | User$holdingsArgs<ExtArgs>
    goldItems?: boolean | User$goldItemsArgs<ExtArgs>
    Portfolio?: boolean | User$PortfolioArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      identity: Prisma.$IdentityPayload<ExtArgs> | null
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      holdings: Prisma.$HoldingPayload<ExtArgs>[]
      goldItems: Prisma.$GoldItemPayload<ExtArgs>[]
      Portfolio: Prisma.$PortfolioPayload<ExtArgs> | null
      wallet: Prisma.$WalletPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      middleName: string | null
      lastName: string
      dateOfBirth: Date | null
      gender: string | null
      phoneNumber: string | null
      nationality: string | null
      country: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    identity<T extends User$identityArgs<ExtArgs> = {}>(args?: Subset<T, User$identityArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    holdings<T extends User$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, User$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goldItems<T extends User$goldItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$goldItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Portfolio<T extends User$PortfolioArgs<ExtArgs> = {}>(args?: Subset<T, User$PortfolioArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly nationality: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.identity
   */
  export type User$identityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    where?: IdentityWhereInput
  }

  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.holdings
   */
  export type User$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    where?: HoldingWhereInput
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    cursor?: HoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * User.goldItems
   */
  export type User$goldItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    where?: GoldItemWhereInput
    orderBy?: GoldItemOrderByWithRelationInput | GoldItemOrderByWithRelationInput[]
    cursor?: GoldItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoldItemScalarFieldEnum | GoldItemScalarFieldEnum[]
  }

  /**
   * User.Portfolio
   */
  export type User$PortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
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
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AddressType | null
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.AddressType | null
    street: string | null
    city: string | null
    state: string | null
    postalCode: string | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    street: number
    city: number
    state: number
    postalCode: number
    country: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    street?: true
    city?: true
    state?: true
    postalCode?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.AddressType
    street: string
    city: string
    state: string | null
    postalCode: string
    country: string
    createdAt: Date
    updatedAt: Date
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    postalCode?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "street" | "city" | "state" | "postalCode" | "country" | "createdAt" | "updatedAt", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.AddressType
      street: string
      city: string
      state: string | null
      postalCode: string
      country: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly userId: FieldRef<"Address", 'Int'>
    readonly type: FieldRef<"Address", 'AddressType'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
  }

  export type WalletSumAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
    currency: $Enums.Currency | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    balance: number | null
    currency: $Enums.Currency | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    balance: number
    currency: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    balance?: true
    currency?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: number
    userId: number
    balance: number
    currency: $Enums.Currency
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    userId?: boolean
    balance?: boolean
    currency?: boolean
    updatedAt?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balance" | "currency" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      balance: number
      currency: $Enums.Currency
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'Int'>
    readonly userId: FieldRef<"Wallet", 'Int'>
    readonly balance: FieldRef<"Wallet", 'Float'>
    readonly currency: FieldRef<"Wallet", 'Currency'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    totalGrams: number | null
    totalInvested: number | null
    currentValue: number | null
    unrealizedGain: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    id: number | null
    userId: number | null
    totalGrams: number | null
    totalInvested: number | null
    currentValue: number | null
    unrealizedGain: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: number | null
    userId: number | null
    totalGrams: number | null
    totalInvested: number | null
    currentValue: number | null
    unrealizedGain: number | null
    lastCalculatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    totalGrams: number | null
    totalInvested: number | null
    currentValue: number | null
    unrealizedGain: number | null
    lastCalculatedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    userId: number
    totalGrams: number
    totalInvested: number
    currentValue: number
    unrealizedGain: number
    lastCalculatedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    id?: true
    userId?: true
    totalGrams?: true
    totalInvested?: true
    currentValue?: true
    unrealizedGain?: true
  }

  export type PortfolioSumAggregateInputType = {
    id?: true
    userId?: true
    totalGrams?: true
    totalInvested?: true
    currentValue?: true
    unrealizedGain?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    userId?: true
    totalGrams?: true
    totalInvested?: true
    currentValue?: true
    unrealizedGain?: true
    lastCalculatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    userId?: true
    totalGrams?: true
    totalInvested?: true
    currentValue?: true
    unrealizedGain?: true
    lastCalculatedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    userId?: true
    totalGrams?: true
    totalInvested?: true
    currentValue?: true
    unrealizedGain?: true
    lastCalculatedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: number
    userId: number
    totalGrams: number
    totalInvested: number
    currentValue: number
    unrealizedGain: number
    lastCalculatedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalGrams?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    unrealizedGain?: boolean
    lastCalculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalGrams?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    unrealizedGain?: boolean
    lastCalculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    totalGrams?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    unrealizedGain?: boolean
    lastCalculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    userId?: boolean
    totalGrams?: boolean
    totalInvested?: boolean
    currentValue?: boolean
    unrealizedGain?: boolean
    lastCalculatedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "totalGrams" | "totalInvested" | "currentValue" | "unrealizedGain" | "lastCalculatedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      totalGrams: number
      totalInvested: number
      currentValue: number
      unrealizedGain: number
      lastCalculatedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {PortfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
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
    updateManyAndReturn<T extends PortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
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
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Portfolio model
   */
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'Int'>
    readonly userId: FieldRef<"Portfolio", 'Int'>
    readonly totalGrams: FieldRef<"Portfolio", 'Float'>
    readonly totalInvested: FieldRef<"Portfolio", 'Float'>
    readonly currentValue: FieldRef<"Portfolio", 'Float'>
    readonly unrealizedGain: FieldRef<"Portfolio", 'Float'>
    readonly lastCalculatedAt: FieldRef<"Portfolio", 'DateTime'>
    readonly createdAt: FieldRef<"Portfolio", 'DateTime'>
    readonly updatedAt: FieldRef<"Portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio updateManyAndReturn
   */
  export type PortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Model Identity
   */

  export type AggregateIdentity = {
    _count: IdentityCountAggregateOutputType | null
    _avg: IdentityAvgAggregateOutputType | null
    _sum: IdentitySumAggregateOutputType | null
    _min: IdentityMinAggregateOutputType | null
    _max: IdentityMaxAggregateOutputType | null
  }

  export type IdentityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    verifiedBy: number | null
  }

  export type IdentitySumAggregateOutputType = {
    id: number | null
    userId: number | null
    verifiedBy: number | null
  }

  export type IdentityMinAggregateOutputType = {
    id: number | null
    userId: number | null
    documentType: string | null
    documentNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
    proofOfAddress: string | null
    verified: boolean | null
    verifiedAt: Date | null
    verifiedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    documentType: string | null
    documentNumber: string | null
    issueDate: Date | null
    expiryDate: Date | null
    proofOfAddress: string | null
    verified: boolean | null
    verifiedAt: Date | null
    verifiedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityCountAggregateOutputType = {
    id: number
    userId: number
    documentType: number
    documentNumber: number
    issueDate: number
    expiryDate: number
    proofOfAddress: number
    verified: number
    verifiedAt: number
    verifiedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IdentityAvgAggregateInputType = {
    id?: true
    userId?: true
    verifiedBy?: true
  }

  export type IdentitySumAggregateInputType = {
    id?: true
    userId?: true
    verifiedBy?: true
  }

  export type IdentityMinAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    documentNumber?: true
    issueDate?: true
    expiryDate?: true
    proofOfAddress?: true
    verified?: true
    verifiedAt?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityMaxAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    documentNumber?: true
    issueDate?: true
    expiryDate?: true
    proofOfAddress?: true
    verified?: true
    verifiedAt?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityCountAggregateInputType = {
    id?: true
    userId?: true
    documentType?: true
    documentNumber?: true
    issueDate?: true
    expiryDate?: true
    proofOfAddress?: true
    verified?: true
    verifiedAt?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Identity to aggregate.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Identities
    **/
    _count?: true | IdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityMaxAggregateInputType
  }

  export type GetIdentityAggregateType<T extends IdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentity[P]>
      : GetScalarType<T[P], AggregateIdentity[P]>
  }




  export type IdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityWhereInput
    orderBy?: IdentityOrderByWithAggregationInput | IdentityOrderByWithAggregationInput[]
    by: IdentityScalarFieldEnum[] | IdentityScalarFieldEnum
    having?: IdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityCountAggregateInputType | true
    _avg?: IdentityAvgAggregateInputType
    _sum?: IdentitySumAggregateInputType
    _min?: IdentityMinAggregateInputType
    _max?: IdentityMaxAggregateInputType
  }

  export type IdentityGroupByOutputType = {
    id: number
    userId: number
    documentType: string
    documentNumber: string
    issueDate: Date | null
    expiryDate: Date | null
    proofOfAddress: string | null
    verified: boolean
    verifiedAt: Date | null
    verifiedBy: number | null
    createdAt: Date
    updatedAt: Date
    _count: IdentityCountAggregateOutputType | null
    _avg: IdentityAvgAggregateOutputType | null
    _sum: IdentitySumAggregateOutputType | null
    _min: IdentityMinAggregateOutputType | null
    _max: IdentityMaxAggregateOutputType | null
  }

  type GetIdentityGroupByPayload<T extends IdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityGroupByOutputType[P]>
        }
      >
    >


  export type IdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    proofOfAddress?: boolean
    verified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identity"]>

  export type IdentitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    proofOfAddress?: boolean
    verified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identity"]>

  export type IdentitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    proofOfAddress?: boolean
    verified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identity"]>

  export type IdentitySelectScalar = {
    id?: boolean
    userId?: boolean
    documentType?: boolean
    documentNumber?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    proofOfAddress?: boolean
    verified?: boolean
    verifiedAt?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IdentityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "documentType" | "documentNumber" | "issueDate" | "expiryDate" | "proofOfAddress" | "verified" | "verifiedAt" | "verifiedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["identity"]>
  export type IdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdentityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdentityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Identity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      documentType: string
      documentNumber: string
      issueDate: Date | null
      expiryDate: Date | null
      proofOfAddress: string | null
      verified: boolean
      verifiedAt: Date | null
      verifiedBy: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["identity"]>
    composites: {}
  }

  type IdentityGetPayload<S extends boolean | null | undefined | IdentityDefaultArgs> = $Result.GetResult<Prisma.$IdentityPayload, S>

  type IdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityCountAggregateInputType | true
    }

  export interface IdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Identity'], meta: { name: 'Identity' } }
    /**
     * Find zero or one Identity that matches the filter.
     * @param {IdentityFindUniqueArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentityFindUniqueArgs>(args: SelectSubset<T, IdentityFindUniqueArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Identity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentityFindUniqueOrThrowArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentityFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Identity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityFindFirstArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentityFindFirstArgs>(args?: SelectSubset<T, IdentityFindFirstArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Identity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityFindFirstOrThrowArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentityFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Identities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Identities
     * const identities = await prisma.identity.findMany()
     * 
     * // Get first 10 Identities
     * const identities = await prisma.identity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityWithIdOnly = await prisma.identity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentityFindManyArgs>(args?: SelectSubset<T, IdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Identity.
     * @param {IdentityCreateArgs} args - Arguments to create a Identity.
     * @example
     * // Create one Identity
     * const Identity = await prisma.identity.create({
     *   data: {
     *     // ... data to create a Identity
     *   }
     * })
     * 
     */
    create<T extends IdentityCreateArgs>(args: SelectSubset<T, IdentityCreateArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Identities.
     * @param {IdentityCreateManyArgs} args - Arguments to create many Identities.
     * @example
     * // Create many Identities
     * const identity = await prisma.identity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentityCreateManyArgs>(args?: SelectSubset<T, IdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Identities and returns the data saved in the database.
     * @param {IdentityCreateManyAndReturnArgs} args - Arguments to create many Identities.
     * @example
     * // Create many Identities
     * const identity = await prisma.identity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Identities and only return the `id`
     * const identityWithIdOnly = await prisma.identity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentityCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Identity.
     * @param {IdentityDeleteArgs} args - Arguments to delete one Identity.
     * @example
     * // Delete one Identity
     * const Identity = await prisma.identity.delete({
     *   where: {
     *     // ... filter to delete one Identity
     *   }
     * })
     * 
     */
    delete<T extends IdentityDeleteArgs>(args: SelectSubset<T, IdentityDeleteArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Identity.
     * @param {IdentityUpdateArgs} args - Arguments to update one Identity.
     * @example
     * // Update one Identity
     * const identity = await prisma.identity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentityUpdateArgs>(args: SelectSubset<T, IdentityUpdateArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Identities.
     * @param {IdentityDeleteManyArgs} args - Arguments to filter Identities to delete.
     * @example
     * // Delete a few Identities
     * const { count } = await prisma.identity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentityDeleteManyArgs>(args?: SelectSubset<T, IdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Identities
     * const identity = await prisma.identity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentityUpdateManyArgs>(args: SelectSubset<T, IdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Identities and returns the data updated in the database.
     * @param {IdentityUpdateManyAndReturnArgs} args - Arguments to update many Identities.
     * @example
     * // Update many Identities
     * const identity = await prisma.identity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Identities and only return the `id`
     * const identityWithIdOnly = await prisma.identity.updateManyAndReturn({
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
    updateManyAndReturn<T extends IdentityUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Identity.
     * @param {IdentityUpsertArgs} args - Arguments to update or create a Identity.
     * @example
     * // Update or create a Identity
     * const identity = await prisma.identity.upsert({
     *   create: {
     *     // ... data to create a Identity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Identity we want to update
     *   }
     * })
     */
    upsert<T extends IdentityUpsertArgs>(args: SelectSubset<T, IdentityUpsertArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityCountArgs} args - Arguments to filter Identities to count.
     * @example
     * // Count the number of Identities
     * const count = await prisma.identity.count({
     *   where: {
     *     // ... the filter for the Identities we want to count
     *   }
     * })
    **/
    count<T extends IdentityCountArgs>(
      args?: Subset<T, IdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentityAggregateArgs>(args: Subset<T, IdentityAggregateArgs>): Prisma.PrismaPromise<GetIdentityAggregateType<T>>

    /**
     * Group by Identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityGroupByArgs} args - Group by arguments.
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
      T extends IdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentityGroupByArgs['orderBy'] }
        : { orderBy?: IdentityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Identity model
   */
  readonly fields: IdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Identity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Identity model
   */
  interface IdentityFieldRefs {
    readonly id: FieldRef<"Identity", 'Int'>
    readonly userId: FieldRef<"Identity", 'Int'>
    readonly documentType: FieldRef<"Identity", 'String'>
    readonly documentNumber: FieldRef<"Identity", 'String'>
    readonly issueDate: FieldRef<"Identity", 'DateTime'>
    readonly expiryDate: FieldRef<"Identity", 'DateTime'>
    readonly proofOfAddress: FieldRef<"Identity", 'String'>
    readonly verified: FieldRef<"Identity", 'Boolean'>
    readonly verifiedAt: FieldRef<"Identity", 'DateTime'>
    readonly verifiedBy: FieldRef<"Identity", 'Int'>
    readonly createdAt: FieldRef<"Identity", 'DateTime'>
    readonly updatedAt: FieldRef<"Identity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Identity findUnique
   */
  export type IdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity findUniqueOrThrow
   */
  export type IdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity findFirst
   */
  export type IdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Identities.
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identities.
     */
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * Identity findFirstOrThrow
   */
  export type IdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Identities.
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identities.
     */
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * Identity findMany
   */
  export type IdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identities to fetch.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Identities.
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * Identity create
   */
  export type IdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a Identity.
     */
    data: XOR<IdentityCreateInput, IdentityUncheckedCreateInput>
  }

  /**
   * Identity createMany
   */
  export type IdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Identities.
     */
    data: IdentityCreateManyInput | IdentityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Identity createManyAndReturn
   */
  export type IdentityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * The data used to create many Identities.
     */
    data: IdentityCreateManyInput | IdentityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Identity update
   */
  export type IdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a Identity.
     */
    data: XOR<IdentityUpdateInput, IdentityUncheckedUpdateInput>
    /**
     * Choose, which Identity to update.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity updateMany
   */
  export type IdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Identities.
     */
    data: XOR<IdentityUpdateManyMutationInput, IdentityUncheckedUpdateManyInput>
    /**
     * Filter which Identities to update
     */
    where?: IdentityWhereInput
    /**
     * Limit how many Identities to update.
     */
    limit?: number
  }

  /**
   * Identity updateManyAndReturn
   */
  export type IdentityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * The data used to update Identities.
     */
    data: XOR<IdentityUpdateManyMutationInput, IdentityUncheckedUpdateManyInput>
    /**
     * Filter which Identities to update
     */
    where?: IdentityWhereInput
    /**
     * Limit how many Identities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Identity upsert
   */
  export type IdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the Identity to update in case it exists.
     */
    where: IdentityWhereUniqueInput
    /**
     * In case the Identity found by the `where` argument doesn't exist, create a new Identity with this data.
     */
    create: XOR<IdentityCreateInput, IdentityUncheckedCreateInput>
    /**
     * In case the Identity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentityUpdateInput, IdentityUncheckedUpdateInput>
  }

  /**
   * Identity delete
   */
  export type IdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter which Identity to delete.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity deleteMany
   */
  export type IdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Identities to delete
     */
    where?: IdentityWhereInput
    /**
     * Limit how many Identities to delete.
     */
    limit?: number
  }

  /**
   * Identity without action
   */
  export type IdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
  }


  /**
   * Model GoldItem
   */

  export type AggregateGoldItem = {
    _count: GoldItemCountAggregateOutputType | null
    _avg: GoldItemAvgAggregateOutputType | null
    _sum: GoldItemSumAggregateOutputType | null
    _min: GoldItemMinAggregateOutputType | null
    _max: GoldItemMaxAggregateOutputType | null
  }

  export type GoldItemAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    karat: number | null
    purity: number | null
    weightGrams: number | null
    verifiedBy: number | null
  }

  export type GoldItemSumAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    karat: number | null
    purity: number | null
    weightGrams: number | null
    verifiedBy: number | null
  }

  export type GoldItemMinAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    type: $Enums.GoldItemType | null
    description: string | null
    serialNumber: string | null
    karat: number | null
    purity: number | null
    weightGrams: number | null
    origin: string | null
    storageLocation: string | null
    depositMethod: $Enums.DepositMethod | null
    verified: boolean | null
    verifiedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoldItemMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    type: $Enums.GoldItemType | null
    description: string | null
    serialNumber: string | null
    karat: number | null
    purity: number | null
    weightGrams: number | null
    origin: string | null
    storageLocation: string | null
    depositMethod: $Enums.DepositMethod | null
    verified: boolean | null
    verifiedBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoldItemCountAggregateOutputType = {
    id: number
    userId: number
    transactionId: number
    type: number
    description: number
    serialNumber: number
    karat: number
    purity: number
    weightGrams: number
    origin: number
    storageLocation: number
    depositMethod: number
    verified: number
    verifiedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoldItemAvgAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    karat?: true
    purity?: true
    weightGrams?: true
    verifiedBy?: true
  }

  export type GoldItemSumAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    karat?: true
    purity?: true
    weightGrams?: true
    verifiedBy?: true
  }

  export type GoldItemMinAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    type?: true
    description?: true
    serialNumber?: true
    karat?: true
    purity?: true
    weightGrams?: true
    origin?: true
    storageLocation?: true
    depositMethod?: true
    verified?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoldItemMaxAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    type?: true
    description?: true
    serialNumber?: true
    karat?: true
    purity?: true
    weightGrams?: true
    origin?: true
    storageLocation?: true
    depositMethod?: true
    verified?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoldItemCountAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    type?: true
    description?: true
    serialNumber?: true
    karat?: true
    purity?: true
    weightGrams?: true
    origin?: true
    storageLocation?: true
    depositMethod?: true
    verified?: true
    verifiedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoldItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoldItem to aggregate.
     */
    where?: GoldItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldItems to fetch.
     */
    orderBy?: GoldItemOrderByWithRelationInput | GoldItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoldItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoldItems
    **/
    _count?: true | GoldItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoldItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoldItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoldItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoldItemMaxAggregateInputType
  }

  export type GetGoldItemAggregateType<T extends GoldItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGoldItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoldItem[P]>
      : GetScalarType<T[P], AggregateGoldItem[P]>
  }




  export type GoldItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoldItemWhereInput
    orderBy?: GoldItemOrderByWithAggregationInput | GoldItemOrderByWithAggregationInput[]
    by: GoldItemScalarFieldEnum[] | GoldItemScalarFieldEnum
    having?: GoldItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoldItemCountAggregateInputType | true
    _avg?: GoldItemAvgAggregateInputType
    _sum?: GoldItemSumAggregateInputType
    _min?: GoldItemMinAggregateInputType
    _max?: GoldItemMaxAggregateInputType
  }

  export type GoldItemGroupByOutputType = {
    id: number
    userId: number
    transactionId: number
    type: $Enums.GoldItemType
    description: string | null
    serialNumber: string | null
    karat: number | null
    purity: number | null
    weightGrams: number
    origin: string | null
    storageLocation: string | null
    depositMethod: $Enums.DepositMethod
    verified: boolean
    verifiedBy: number | null
    createdAt: Date
    updatedAt: Date
    _count: GoldItemCountAggregateOutputType | null
    _avg: GoldItemAvgAggregateOutputType | null
    _sum: GoldItemSumAggregateOutputType | null
    _min: GoldItemMinAggregateOutputType | null
    _max: GoldItemMaxAggregateOutputType | null
  }

  type GetGoldItemGroupByPayload<T extends GoldItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoldItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoldItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoldItemGroupByOutputType[P]>
            : GetScalarType<T[P], GoldItemGroupByOutputType[P]>
        }
      >
    >


  export type GoldItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    type?: boolean
    description?: boolean
    serialNumber?: boolean
    karat?: boolean
    purity?: boolean
    weightGrams?: boolean
    origin?: boolean
    storageLocation?: boolean
    depositMethod?: boolean
    verified?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goldItem"]>

  export type GoldItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    type?: boolean
    description?: boolean
    serialNumber?: boolean
    karat?: boolean
    purity?: boolean
    weightGrams?: boolean
    origin?: boolean
    storageLocation?: boolean
    depositMethod?: boolean
    verified?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goldItem"]>

  export type GoldItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    type?: boolean
    description?: boolean
    serialNumber?: boolean
    karat?: boolean
    purity?: boolean
    weightGrams?: boolean
    origin?: boolean
    storageLocation?: boolean
    depositMethod?: boolean
    verified?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goldItem"]>

  export type GoldItemSelectScalar = {
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    type?: boolean
    description?: boolean
    serialNumber?: boolean
    karat?: boolean
    purity?: boolean
    weightGrams?: boolean
    origin?: boolean
    storageLocation?: boolean
    depositMethod?: boolean
    verified?: boolean
    verifiedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoldItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "transactionId" | "type" | "description" | "serialNumber" | "karat" | "purity" | "weightGrams" | "origin" | "storageLocation" | "depositMethod" | "verified" | "verifiedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["goldItem"]>
  export type GoldItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type GoldItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type GoldItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $GoldItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoldItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      transactionId: number
      type: $Enums.GoldItemType
      description: string | null
      serialNumber: string | null
      karat: number | null
      purity: number | null
      weightGrams: number
      origin: string | null
      storageLocation: string | null
      depositMethod: $Enums.DepositMethod
      verified: boolean
      verifiedBy: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goldItem"]>
    composites: {}
  }

  type GoldItemGetPayload<S extends boolean | null | undefined | GoldItemDefaultArgs> = $Result.GetResult<Prisma.$GoldItemPayload, S>

  type GoldItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoldItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoldItemCountAggregateInputType | true
    }

  export interface GoldItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoldItem'], meta: { name: 'GoldItem' } }
    /**
     * Find zero or one GoldItem that matches the filter.
     * @param {GoldItemFindUniqueArgs} args - Arguments to find a GoldItem
     * @example
     * // Get one GoldItem
     * const goldItem = await prisma.goldItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoldItemFindUniqueArgs>(args: SelectSubset<T, GoldItemFindUniqueArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoldItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoldItemFindUniqueOrThrowArgs} args - Arguments to find a GoldItem
     * @example
     * // Get one GoldItem
     * const goldItem = await prisma.goldItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoldItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GoldItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoldItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemFindFirstArgs} args - Arguments to find a GoldItem
     * @example
     * // Get one GoldItem
     * const goldItem = await prisma.goldItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoldItemFindFirstArgs>(args?: SelectSubset<T, GoldItemFindFirstArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoldItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemFindFirstOrThrowArgs} args - Arguments to find a GoldItem
     * @example
     * // Get one GoldItem
     * const goldItem = await prisma.goldItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoldItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GoldItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoldItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoldItems
     * const goldItems = await prisma.goldItem.findMany()
     * 
     * // Get first 10 GoldItems
     * const goldItems = await prisma.goldItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goldItemWithIdOnly = await prisma.goldItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoldItemFindManyArgs>(args?: SelectSubset<T, GoldItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoldItem.
     * @param {GoldItemCreateArgs} args - Arguments to create a GoldItem.
     * @example
     * // Create one GoldItem
     * const GoldItem = await prisma.goldItem.create({
     *   data: {
     *     // ... data to create a GoldItem
     *   }
     * })
     * 
     */
    create<T extends GoldItemCreateArgs>(args: SelectSubset<T, GoldItemCreateArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoldItems.
     * @param {GoldItemCreateManyArgs} args - Arguments to create many GoldItems.
     * @example
     * // Create many GoldItems
     * const goldItem = await prisma.goldItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoldItemCreateManyArgs>(args?: SelectSubset<T, GoldItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoldItems and returns the data saved in the database.
     * @param {GoldItemCreateManyAndReturnArgs} args - Arguments to create many GoldItems.
     * @example
     * // Create many GoldItems
     * const goldItem = await prisma.goldItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoldItems and only return the `id`
     * const goldItemWithIdOnly = await prisma.goldItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoldItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GoldItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoldItem.
     * @param {GoldItemDeleteArgs} args - Arguments to delete one GoldItem.
     * @example
     * // Delete one GoldItem
     * const GoldItem = await prisma.goldItem.delete({
     *   where: {
     *     // ... filter to delete one GoldItem
     *   }
     * })
     * 
     */
    delete<T extends GoldItemDeleteArgs>(args: SelectSubset<T, GoldItemDeleteArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoldItem.
     * @param {GoldItemUpdateArgs} args - Arguments to update one GoldItem.
     * @example
     * // Update one GoldItem
     * const goldItem = await prisma.goldItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoldItemUpdateArgs>(args: SelectSubset<T, GoldItemUpdateArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoldItems.
     * @param {GoldItemDeleteManyArgs} args - Arguments to filter GoldItems to delete.
     * @example
     * // Delete a few GoldItems
     * const { count } = await prisma.goldItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoldItemDeleteManyArgs>(args?: SelectSubset<T, GoldItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoldItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoldItems
     * const goldItem = await prisma.goldItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoldItemUpdateManyArgs>(args: SelectSubset<T, GoldItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoldItems and returns the data updated in the database.
     * @param {GoldItemUpdateManyAndReturnArgs} args - Arguments to update many GoldItems.
     * @example
     * // Update many GoldItems
     * const goldItem = await prisma.goldItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoldItems and only return the `id`
     * const goldItemWithIdOnly = await prisma.goldItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoldItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GoldItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoldItem.
     * @param {GoldItemUpsertArgs} args - Arguments to update or create a GoldItem.
     * @example
     * // Update or create a GoldItem
     * const goldItem = await prisma.goldItem.upsert({
     *   create: {
     *     // ... data to create a GoldItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoldItem we want to update
     *   }
     * })
     */
    upsert<T extends GoldItemUpsertArgs>(args: SelectSubset<T, GoldItemUpsertArgs<ExtArgs>>): Prisma__GoldItemClient<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoldItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemCountArgs} args - Arguments to filter GoldItems to count.
     * @example
     * // Count the number of GoldItems
     * const count = await prisma.goldItem.count({
     *   where: {
     *     // ... the filter for the GoldItems we want to count
     *   }
     * })
    **/
    count<T extends GoldItemCountArgs>(
      args?: Subset<T, GoldItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoldItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoldItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoldItemAggregateArgs>(args: Subset<T, GoldItemAggregateArgs>): Prisma.PrismaPromise<GetGoldItemAggregateType<T>>

    /**
     * Group by GoldItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldItemGroupByArgs} args - Group by arguments.
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
      T extends GoldItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoldItemGroupByArgs['orderBy'] }
        : { orderBy?: GoldItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoldItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoldItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoldItem model
   */
  readonly fields: GoldItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoldItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoldItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GoldItem model
   */
  interface GoldItemFieldRefs {
    readonly id: FieldRef<"GoldItem", 'Int'>
    readonly userId: FieldRef<"GoldItem", 'Int'>
    readonly transactionId: FieldRef<"GoldItem", 'Int'>
    readonly type: FieldRef<"GoldItem", 'GoldItemType'>
    readonly description: FieldRef<"GoldItem", 'String'>
    readonly serialNumber: FieldRef<"GoldItem", 'String'>
    readonly karat: FieldRef<"GoldItem", 'Float'>
    readonly purity: FieldRef<"GoldItem", 'Float'>
    readonly weightGrams: FieldRef<"GoldItem", 'Float'>
    readonly origin: FieldRef<"GoldItem", 'String'>
    readonly storageLocation: FieldRef<"GoldItem", 'String'>
    readonly depositMethod: FieldRef<"GoldItem", 'DepositMethod'>
    readonly verified: FieldRef<"GoldItem", 'Boolean'>
    readonly verifiedBy: FieldRef<"GoldItem", 'Int'>
    readonly createdAt: FieldRef<"GoldItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GoldItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoldItem findUnique
   */
  export type GoldItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * Filter, which GoldItem to fetch.
     */
    where: GoldItemWhereUniqueInput
  }

  /**
   * GoldItem findUniqueOrThrow
   */
  export type GoldItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * Filter, which GoldItem to fetch.
     */
    where: GoldItemWhereUniqueInput
  }

  /**
   * GoldItem findFirst
   */
  export type GoldItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * Filter, which GoldItem to fetch.
     */
    where?: GoldItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldItems to fetch.
     */
    orderBy?: GoldItemOrderByWithRelationInput | GoldItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoldItems.
     */
    cursor?: GoldItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoldItems.
     */
    distinct?: GoldItemScalarFieldEnum | GoldItemScalarFieldEnum[]
  }

  /**
   * GoldItem findFirstOrThrow
   */
  export type GoldItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * Filter, which GoldItem to fetch.
     */
    where?: GoldItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldItems to fetch.
     */
    orderBy?: GoldItemOrderByWithRelationInput | GoldItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoldItems.
     */
    cursor?: GoldItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoldItems.
     */
    distinct?: GoldItemScalarFieldEnum | GoldItemScalarFieldEnum[]
  }

  /**
   * GoldItem findMany
   */
  export type GoldItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * Filter, which GoldItems to fetch.
     */
    where?: GoldItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldItems to fetch.
     */
    orderBy?: GoldItemOrderByWithRelationInput | GoldItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoldItems.
     */
    cursor?: GoldItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldItems.
     */
    skip?: number
    distinct?: GoldItemScalarFieldEnum | GoldItemScalarFieldEnum[]
  }

  /**
   * GoldItem create
   */
  export type GoldItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GoldItem.
     */
    data: XOR<GoldItemCreateInput, GoldItemUncheckedCreateInput>
  }

  /**
   * GoldItem createMany
   */
  export type GoldItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoldItems.
     */
    data: GoldItemCreateManyInput | GoldItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoldItem createManyAndReturn
   */
  export type GoldItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * The data used to create many GoldItems.
     */
    data: GoldItemCreateManyInput | GoldItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoldItem update
   */
  export type GoldItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GoldItem.
     */
    data: XOR<GoldItemUpdateInput, GoldItemUncheckedUpdateInput>
    /**
     * Choose, which GoldItem to update.
     */
    where: GoldItemWhereUniqueInput
  }

  /**
   * GoldItem updateMany
   */
  export type GoldItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoldItems.
     */
    data: XOR<GoldItemUpdateManyMutationInput, GoldItemUncheckedUpdateManyInput>
    /**
     * Filter which GoldItems to update
     */
    where?: GoldItemWhereInput
    /**
     * Limit how many GoldItems to update.
     */
    limit?: number
  }

  /**
   * GoldItem updateManyAndReturn
   */
  export type GoldItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * The data used to update GoldItems.
     */
    data: XOR<GoldItemUpdateManyMutationInput, GoldItemUncheckedUpdateManyInput>
    /**
     * Filter which GoldItems to update
     */
    where?: GoldItemWhereInput
    /**
     * Limit how many GoldItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GoldItem upsert
   */
  export type GoldItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GoldItem to update in case it exists.
     */
    where: GoldItemWhereUniqueInput
    /**
     * In case the GoldItem found by the `where` argument doesn't exist, create a new GoldItem with this data.
     */
    create: XOR<GoldItemCreateInput, GoldItemUncheckedCreateInput>
    /**
     * In case the GoldItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoldItemUpdateInput, GoldItemUncheckedUpdateInput>
  }

  /**
   * GoldItem delete
   */
  export type GoldItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    /**
     * Filter which GoldItem to delete.
     */
    where: GoldItemWhereUniqueInput
  }

  /**
   * GoldItem deleteMany
   */
  export type GoldItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoldItems to delete
     */
    where?: GoldItemWhereInput
    /**
     * Limit how many GoldItems to delete.
     */
    limit?: number
  }

  /**
   * GoldItem without action
   */
  export type GoldItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
  }


  /**
   * Model GoldPrice
   */

  export type AggregateGoldPrice = {
    _count: GoldPriceCountAggregateOutputType | null
    _avg: GoldPriceAvgAggregateOutputType | null
    _sum: GoldPriceSumAggregateOutputType | null
    _min: GoldPriceMinAggregateOutputType | null
    _max: GoldPriceMaxAggregateOutputType | null
  }

  export type GoldPriceAvgAggregateOutputType = {
    id: number | null
    pricePerGram: number | null
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    prevPrice: number | null
    askPrice: number | null
    bidPrice: number | null
    priceChange: number | null
    priceChangePercent: number | null
    price24k: number | null
    price22k: number | null
    price21k: number | null
    price20k: number | null
    price18k: number | null
    price16k: number | null
    price14k: number | null
    price10k: number | null
    apiTimestamp: number | null
  }

  export type GoldPriceSumAggregateOutputType = {
    id: number | null
    pricePerGram: number | null
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    prevPrice: number | null
    askPrice: number | null
    bidPrice: number | null
    priceChange: number | null
    priceChangePercent: number | null
    price24k: number | null
    price22k: number | null
    price21k: number | null
    price20k: number | null
    price18k: number | null
    price16k: number | null
    price14k: number | null
    price10k: number | null
    apiTimestamp: bigint | null
  }

  export type GoldPriceMinAggregateOutputType = {
    id: number | null
    pricePerGram: number | null
    currency: $Enums.Currency | null
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    prevPrice: number | null
    askPrice: number | null
    bidPrice: number | null
    priceChange: number | null
    priceChangePercent: number | null
    price24k: number | null
    price22k: number | null
    price21k: number | null
    price20k: number | null
    price18k: number | null
    price16k: number | null
    price14k: number | null
    price10k: number | null
    baseCurrency: string | null
    weightUnit: string | null
    weightName: string | null
    source: string | null
    apiTimestamp: bigint | null
    recordedAt: Date | null
    isActive: boolean | null
  }

  export type GoldPriceMaxAggregateOutputType = {
    id: number | null
    pricePerGram: number | null
    currency: $Enums.Currency | null
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    prevPrice: number | null
    askPrice: number | null
    bidPrice: number | null
    priceChange: number | null
    priceChangePercent: number | null
    price24k: number | null
    price22k: number | null
    price21k: number | null
    price20k: number | null
    price18k: number | null
    price16k: number | null
    price14k: number | null
    price10k: number | null
    baseCurrency: string | null
    weightUnit: string | null
    weightName: string | null
    source: string | null
    apiTimestamp: bigint | null
    recordedAt: Date | null
    isActive: boolean | null
  }

  export type GoldPriceCountAggregateOutputType = {
    id: number
    pricePerGram: number
    currency: number
    openPrice: number
    highPrice: number
    lowPrice: number
    prevPrice: number
    askPrice: number
    bidPrice: number
    priceChange: number
    priceChangePercent: number
    price24k: number
    price22k: number
    price21k: number
    price20k: number
    price18k: number
    price16k: number
    price14k: number
    price10k: number
    baseCurrency: number
    weightUnit: number
    weightName: number
    source: number
    apiTimestamp: number
    recordedAt: number
    isActive: number
    _all: number
  }


  export type GoldPriceAvgAggregateInputType = {
    id?: true
    pricePerGram?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    prevPrice?: true
    askPrice?: true
    bidPrice?: true
    priceChange?: true
    priceChangePercent?: true
    price24k?: true
    price22k?: true
    price21k?: true
    price20k?: true
    price18k?: true
    price16k?: true
    price14k?: true
    price10k?: true
    apiTimestamp?: true
  }

  export type GoldPriceSumAggregateInputType = {
    id?: true
    pricePerGram?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    prevPrice?: true
    askPrice?: true
    bidPrice?: true
    priceChange?: true
    priceChangePercent?: true
    price24k?: true
    price22k?: true
    price21k?: true
    price20k?: true
    price18k?: true
    price16k?: true
    price14k?: true
    price10k?: true
    apiTimestamp?: true
  }

  export type GoldPriceMinAggregateInputType = {
    id?: true
    pricePerGram?: true
    currency?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    prevPrice?: true
    askPrice?: true
    bidPrice?: true
    priceChange?: true
    priceChangePercent?: true
    price24k?: true
    price22k?: true
    price21k?: true
    price20k?: true
    price18k?: true
    price16k?: true
    price14k?: true
    price10k?: true
    baseCurrency?: true
    weightUnit?: true
    weightName?: true
    source?: true
    apiTimestamp?: true
    recordedAt?: true
    isActive?: true
  }

  export type GoldPriceMaxAggregateInputType = {
    id?: true
    pricePerGram?: true
    currency?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    prevPrice?: true
    askPrice?: true
    bidPrice?: true
    priceChange?: true
    priceChangePercent?: true
    price24k?: true
    price22k?: true
    price21k?: true
    price20k?: true
    price18k?: true
    price16k?: true
    price14k?: true
    price10k?: true
    baseCurrency?: true
    weightUnit?: true
    weightName?: true
    source?: true
    apiTimestamp?: true
    recordedAt?: true
    isActive?: true
  }

  export type GoldPriceCountAggregateInputType = {
    id?: true
    pricePerGram?: true
    currency?: true
    openPrice?: true
    highPrice?: true
    lowPrice?: true
    prevPrice?: true
    askPrice?: true
    bidPrice?: true
    priceChange?: true
    priceChangePercent?: true
    price24k?: true
    price22k?: true
    price21k?: true
    price20k?: true
    price18k?: true
    price16k?: true
    price14k?: true
    price10k?: true
    baseCurrency?: true
    weightUnit?: true
    weightName?: true
    source?: true
    apiTimestamp?: true
    recordedAt?: true
    isActive?: true
    _all?: true
  }

  export type GoldPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoldPrice to aggregate.
     */
    where?: GoldPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldPrices to fetch.
     */
    orderBy?: GoldPriceOrderByWithRelationInput | GoldPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoldPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoldPrices
    **/
    _count?: true | GoldPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoldPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoldPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoldPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoldPriceMaxAggregateInputType
  }

  export type GetGoldPriceAggregateType<T extends GoldPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateGoldPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoldPrice[P]>
      : GetScalarType<T[P], AggregateGoldPrice[P]>
  }




  export type GoldPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoldPriceWhereInput
    orderBy?: GoldPriceOrderByWithAggregationInput | GoldPriceOrderByWithAggregationInput[]
    by: GoldPriceScalarFieldEnum[] | GoldPriceScalarFieldEnum
    having?: GoldPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoldPriceCountAggregateInputType | true
    _avg?: GoldPriceAvgAggregateInputType
    _sum?: GoldPriceSumAggregateInputType
    _min?: GoldPriceMinAggregateInputType
    _max?: GoldPriceMaxAggregateInputType
  }

  export type GoldPriceGroupByOutputType = {
    id: number
    pricePerGram: number
    currency: $Enums.Currency
    openPrice: number | null
    highPrice: number | null
    lowPrice: number | null
    prevPrice: number | null
    askPrice: number | null
    bidPrice: number | null
    priceChange: number | null
    priceChangePercent: number | null
    price24k: number | null
    price22k: number | null
    price21k: number | null
    price20k: number | null
    price18k: number | null
    price16k: number | null
    price14k: number | null
    price10k: number | null
    baseCurrency: string | null
    weightUnit: string | null
    weightName: string | null
    source: string | null
    apiTimestamp: bigint | null
    recordedAt: Date
    isActive: boolean
    _count: GoldPriceCountAggregateOutputType | null
    _avg: GoldPriceAvgAggregateOutputType | null
    _sum: GoldPriceSumAggregateOutputType | null
    _min: GoldPriceMinAggregateOutputType | null
    _max: GoldPriceMaxAggregateOutputType | null
  }

  type GetGoldPriceGroupByPayload<T extends GoldPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoldPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoldPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoldPriceGroupByOutputType[P]>
            : GetScalarType<T[P], GoldPriceGroupByOutputType[P]>
        }
      >
    >


  export type GoldPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerGram?: boolean
    currency?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    prevPrice?: boolean
    askPrice?: boolean
    bidPrice?: boolean
    priceChange?: boolean
    priceChangePercent?: boolean
    price24k?: boolean
    price22k?: boolean
    price21k?: boolean
    price20k?: boolean
    price18k?: boolean
    price16k?: boolean
    price14k?: boolean
    price10k?: boolean
    baseCurrency?: boolean
    weightUnit?: boolean
    weightName?: boolean
    source?: boolean
    apiTimestamp?: boolean
    recordedAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["goldPrice"]>

  export type GoldPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerGram?: boolean
    currency?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    prevPrice?: boolean
    askPrice?: boolean
    bidPrice?: boolean
    priceChange?: boolean
    priceChangePercent?: boolean
    price24k?: boolean
    price22k?: boolean
    price21k?: boolean
    price20k?: boolean
    price18k?: boolean
    price16k?: boolean
    price14k?: boolean
    price10k?: boolean
    baseCurrency?: boolean
    weightUnit?: boolean
    weightName?: boolean
    source?: boolean
    apiTimestamp?: boolean
    recordedAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["goldPrice"]>

  export type GoldPriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerGram?: boolean
    currency?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    prevPrice?: boolean
    askPrice?: boolean
    bidPrice?: boolean
    priceChange?: boolean
    priceChangePercent?: boolean
    price24k?: boolean
    price22k?: boolean
    price21k?: boolean
    price20k?: boolean
    price18k?: boolean
    price16k?: boolean
    price14k?: boolean
    price10k?: boolean
    baseCurrency?: boolean
    weightUnit?: boolean
    weightName?: boolean
    source?: boolean
    apiTimestamp?: boolean
    recordedAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["goldPrice"]>

  export type GoldPriceSelectScalar = {
    id?: boolean
    pricePerGram?: boolean
    currency?: boolean
    openPrice?: boolean
    highPrice?: boolean
    lowPrice?: boolean
    prevPrice?: boolean
    askPrice?: boolean
    bidPrice?: boolean
    priceChange?: boolean
    priceChangePercent?: boolean
    price24k?: boolean
    price22k?: boolean
    price21k?: boolean
    price20k?: boolean
    price18k?: boolean
    price16k?: boolean
    price14k?: boolean
    price10k?: boolean
    baseCurrency?: boolean
    weightUnit?: boolean
    weightName?: boolean
    source?: boolean
    apiTimestamp?: boolean
    recordedAt?: boolean
    isActive?: boolean
  }

  export type GoldPriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pricePerGram" | "currency" | "openPrice" | "highPrice" | "lowPrice" | "prevPrice" | "askPrice" | "bidPrice" | "priceChange" | "priceChangePercent" | "price24k" | "price22k" | "price21k" | "price20k" | "price18k" | "price16k" | "price14k" | "price10k" | "baseCurrency" | "weightUnit" | "weightName" | "source" | "apiTimestamp" | "recordedAt" | "isActive", ExtArgs["result"]["goldPrice"]>

  export type $GoldPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoldPrice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pricePerGram: number
      currency: $Enums.Currency
      openPrice: number | null
      highPrice: number | null
      lowPrice: number | null
      prevPrice: number | null
      askPrice: number | null
      bidPrice: number | null
      priceChange: number | null
      priceChangePercent: number | null
      price24k: number | null
      price22k: number | null
      price21k: number | null
      price20k: number | null
      price18k: number | null
      price16k: number | null
      price14k: number | null
      price10k: number | null
      baseCurrency: string | null
      weightUnit: string | null
      weightName: string | null
      source: string | null
      apiTimestamp: bigint | null
      recordedAt: Date
      isActive: boolean
    }, ExtArgs["result"]["goldPrice"]>
    composites: {}
  }

  type GoldPriceGetPayload<S extends boolean | null | undefined | GoldPriceDefaultArgs> = $Result.GetResult<Prisma.$GoldPricePayload, S>

  type GoldPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoldPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoldPriceCountAggregateInputType | true
    }

  export interface GoldPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoldPrice'], meta: { name: 'GoldPrice' } }
    /**
     * Find zero or one GoldPrice that matches the filter.
     * @param {GoldPriceFindUniqueArgs} args - Arguments to find a GoldPrice
     * @example
     * // Get one GoldPrice
     * const goldPrice = await prisma.goldPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoldPriceFindUniqueArgs>(args: SelectSubset<T, GoldPriceFindUniqueArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoldPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoldPriceFindUniqueOrThrowArgs} args - Arguments to find a GoldPrice
     * @example
     * // Get one GoldPrice
     * const goldPrice = await prisma.goldPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoldPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, GoldPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoldPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceFindFirstArgs} args - Arguments to find a GoldPrice
     * @example
     * // Get one GoldPrice
     * const goldPrice = await prisma.goldPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoldPriceFindFirstArgs>(args?: SelectSubset<T, GoldPriceFindFirstArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoldPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceFindFirstOrThrowArgs} args - Arguments to find a GoldPrice
     * @example
     * // Get one GoldPrice
     * const goldPrice = await prisma.goldPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoldPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, GoldPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoldPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoldPrices
     * const goldPrices = await prisma.goldPrice.findMany()
     * 
     * // Get first 10 GoldPrices
     * const goldPrices = await prisma.goldPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goldPriceWithIdOnly = await prisma.goldPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoldPriceFindManyArgs>(args?: SelectSubset<T, GoldPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoldPrice.
     * @param {GoldPriceCreateArgs} args - Arguments to create a GoldPrice.
     * @example
     * // Create one GoldPrice
     * const GoldPrice = await prisma.goldPrice.create({
     *   data: {
     *     // ... data to create a GoldPrice
     *   }
     * })
     * 
     */
    create<T extends GoldPriceCreateArgs>(args: SelectSubset<T, GoldPriceCreateArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoldPrices.
     * @param {GoldPriceCreateManyArgs} args - Arguments to create many GoldPrices.
     * @example
     * // Create many GoldPrices
     * const goldPrice = await prisma.goldPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoldPriceCreateManyArgs>(args?: SelectSubset<T, GoldPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoldPrices and returns the data saved in the database.
     * @param {GoldPriceCreateManyAndReturnArgs} args - Arguments to create many GoldPrices.
     * @example
     * // Create many GoldPrices
     * const goldPrice = await prisma.goldPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoldPrices and only return the `id`
     * const goldPriceWithIdOnly = await prisma.goldPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoldPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, GoldPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoldPrice.
     * @param {GoldPriceDeleteArgs} args - Arguments to delete one GoldPrice.
     * @example
     * // Delete one GoldPrice
     * const GoldPrice = await prisma.goldPrice.delete({
     *   where: {
     *     // ... filter to delete one GoldPrice
     *   }
     * })
     * 
     */
    delete<T extends GoldPriceDeleteArgs>(args: SelectSubset<T, GoldPriceDeleteArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoldPrice.
     * @param {GoldPriceUpdateArgs} args - Arguments to update one GoldPrice.
     * @example
     * // Update one GoldPrice
     * const goldPrice = await prisma.goldPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoldPriceUpdateArgs>(args: SelectSubset<T, GoldPriceUpdateArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoldPrices.
     * @param {GoldPriceDeleteManyArgs} args - Arguments to filter GoldPrices to delete.
     * @example
     * // Delete a few GoldPrices
     * const { count } = await prisma.goldPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoldPriceDeleteManyArgs>(args?: SelectSubset<T, GoldPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoldPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoldPrices
     * const goldPrice = await prisma.goldPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoldPriceUpdateManyArgs>(args: SelectSubset<T, GoldPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoldPrices and returns the data updated in the database.
     * @param {GoldPriceUpdateManyAndReturnArgs} args - Arguments to update many GoldPrices.
     * @example
     * // Update many GoldPrices
     * const goldPrice = await prisma.goldPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoldPrices and only return the `id`
     * const goldPriceWithIdOnly = await prisma.goldPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoldPriceUpdateManyAndReturnArgs>(args: SelectSubset<T, GoldPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoldPrice.
     * @param {GoldPriceUpsertArgs} args - Arguments to update or create a GoldPrice.
     * @example
     * // Update or create a GoldPrice
     * const goldPrice = await prisma.goldPrice.upsert({
     *   create: {
     *     // ... data to create a GoldPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoldPrice we want to update
     *   }
     * })
     */
    upsert<T extends GoldPriceUpsertArgs>(args: SelectSubset<T, GoldPriceUpsertArgs<ExtArgs>>): Prisma__GoldPriceClient<$Result.GetResult<Prisma.$GoldPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoldPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceCountArgs} args - Arguments to filter GoldPrices to count.
     * @example
     * // Count the number of GoldPrices
     * const count = await prisma.goldPrice.count({
     *   where: {
     *     // ... the filter for the GoldPrices we want to count
     *   }
     * })
    **/
    count<T extends GoldPriceCountArgs>(
      args?: Subset<T, GoldPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoldPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoldPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoldPriceAggregateArgs>(args: Subset<T, GoldPriceAggregateArgs>): Prisma.PrismaPromise<GetGoldPriceAggregateType<T>>

    /**
     * Group by GoldPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldPriceGroupByArgs} args - Group by arguments.
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
      T extends GoldPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoldPriceGroupByArgs['orderBy'] }
        : { orderBy?: GoldPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoldPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoldPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoldPrice model
   */
  readonly fields: GoldPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoldPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoldPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GoldPrice model
   */
  interface GoldPriceFieldRefs {
    readonly id: FieldRef<"GoldPrice", 'Int'>
    readonly pricePerGram: FieldRef<"GoldPrice", 'Float'>
    readonly currency: FieldRef<"GoldPrice", 'Currency'>
    readonly openPrice: FieldRef<"GoldPrice", 'Float'>
    readonly highPrice: FieldRef<"GoldPrice", 'Float'>
    readonly lowPrice: FieldRef<"GoldPrice", 'Float'>
    readonly prevPrice: FieldRef<"GoldPrice", 'Float'>
    readonly askPrice: FieldRef<"GoldPrice", 'Float'>
    readonly bidPrice: FieldRef<"GoldPrice", 'Float'>
    readonly priceChange: FieldRef<"GoldPrice", 'Float'>
    readonly priceChangePercent: FieldRef<"GoldPrice", 'Float'>
    readonly price24k: FieldRef<"GoldPrice", 'Float'>
    readonly price22k: FieldRef<"GoldPrice", 'Float'>
    readonly price21k: FieldRef<"GoldPrice", 'Float'>
    readonly price20k: FieldRef<"GoldPrice", 'Float'>
    readonly price18k: FieldRef<"GoldPrice", 'Float'>
    readonly price16k: FieldRef<"GoldPrice", 'Float'>
    readonly price14k: FieldRef<"GoldPrice", 'Float'>
    readonly price10k: FieldRef<"GoldPrice", 'Float'>
    readonly baseCurrency: FieldRef<"GoldPrice", 'String'>
    readonly weightUnit: FieldRef<"GoldPrice", 'String'>
    readonly weightName: FieldRef<"GoldPrice", 'String'>
    readonly source: FieldRef<"GoldPrice", 'String'>
    readonly apiTimestamp: FieldRef<"GoldPrice", 'BigInt'>
    readonly recordedAt: FieldRef<"GoldPrice", 'DateTime'>
    readonly isActive: FieldRef<"GoldPrice", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GoldPrice findUnique
   */
  export type GoldPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * Filter, which GoldPrice to fetch.
     */
    where: GoldPriceWhereUniqueInput
  }

  /**
   * GoldPrice findUniqueOrThrow
   */
  export type GoldPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * Filter, which GoldPrice to fetch.
     */
    where: GoldPriceWhereUniqueInput
  }

  /**
   * GoldPrice findFirst
   */
  export type GoldPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * Filter, which GoldPrice to fetch.
     */
    where?: GoldPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldPrices to fetch.
     */
    orderBy?: GoldPriceOrderByWithRelationInput | GoldPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoldPrices.
     */
    cursor?: GoldPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoldPrices.
     */
    distinct?: GoldPriceScalarFieldEnum | GoldPriceScalarFieldEnum[]
  }

  /**
   * GoldPrice findFirstOrThrow
   */
  export type GoldPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * Filter, which GoldPrice to fetch.
     */
    where?: GoldPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldPrices to fetch.
     */
    orderBy?: GoldPriceOrderByWithRelationInput | GoldPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoldPrices.
     */
    cursor?: GoldPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoldPrices.
     */
    distinct?: GoldPriceScalarFieldEnum | GoldPriceScalarFieldEnum[]
  }

  /**
   * GoldPrice findMany
   */
  export type GoldPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * Filter, which GoldPrices to fetch.
     */
    where?: GoldPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldPrices to fetch.
     */
    orderBy?: GoldPriceOrderByWithRelationInput | GoldPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoldPrices.
     */
    cursor?: GoldPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldPrices.
     */
    skip?: number
    distinct?: GoldPriceScalarFieldEnum | GoldPriceScalarFieldEnum[]
  }

  /**
   * GoldPrice create
   */
  export type GoldPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * The data needed to create a GoldPrice.
     */
    data: XOR<GoldPriceCreateInput, GoldPriceUncheckedCreateInput>
  }

  /**
   * GoldPrice createMany
   */
  export type GoldPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoldPrices.
     */
    data: GoldPriceCreateManyInput | GoldPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoldPrice createManyAndReturn
   */
  export type GoldPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * The data used to create many GoldPrices.
     */
    data: GoldPriceCreateManyInput | GoldPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoldPrice update
   */
  export type GoldPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * The data needed to update a GoldPrice.
     */
    data: XOR<GoldPriceUpdateInput, GoldPriceUncheckedUpdateInput>
    /**
     * Choose, which GoldPrice to update.
     */
    where: GoldPriceWhereUniqueInput
  }

  /**
   * GoldPrice updateMany
   */
  export type GoldPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoldPrices.
     */
    data: XOR<GoldPriceUpdateManyMutationInput, GoldPriceUncheckedUpdateManyInput>
    /**
     * Filter which GoldPrices to update
     */
    where?: GoldPriceWhereInput
    /**
     * Limit how many GoldPrices to update.
     */
    limit?: number
  }

  /**
   * GoldPrice updateManyAndReturn
   */
  export type GoldPriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * The data used to update GoldPrices.
     */
    data: XOR<GoldPriceUpdateManyMutationInput, GoldPriceUncheckedUpdateManyInput>
    /**
     * Filter which GoldPrices to update
     */
    where?: GoldPriceWhereInput
    /**
     * Limit how many GoldPrices to update.
     */
    limit?: number
  }

  /**
   * GoldPrice upsert
   */
  export type GoldPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * The filter to search for the GoldPrice to update in case it exists.
     */
    where: GoldPriceWhereUniqueInput
    /**
     * In case the GoldPrice found by the `where` argument doesn't exist, create a new GoldPrice with this data.
     */
    create: XOR<GoldPriceCreateInput, GoldPriceUncheckedCreateInput>
    /**
     * In case the GoldPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoldPriceUpdateInput, GoldPriceUncheckedUpdateInput>
  }

  /**
   * GoldPrice delete
   */
  export type GoldPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
    /**
     * Filter which GoldPrice to delete.
     */
    where: GoldPriceWhereUniqueInput
  }

  /**
   * GoldPrice deleteMany
   */
  export type GoldPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoldPrices to delete
     */
    where?: GoldPriceWhereInput
    /**
     * Limit how many GoldPrices to delete.
     */
    limit?: number
  }

  /**
   * GoldPrice without action
   */
  export type GoldPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldPrice
     */
    select?: GoldPriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldPrice
     */
    omit?: GoldPriceOmit<ExtArgs> | null
  }


  /**
   * Model GoldUnitMetadata
   */

  export type AggregateGoldUnitMetadata = {
    _count: GoldUnitMetadataCountAggregateOutputType | null
    _avg: GoldUnitMetadataAvgAggregateOutputType | null
    _sum: GoldUnitMetadataSumAggregateOutputType | null
    _min: GoldUnitMetadataMinAggregateOutputType | null
    _max: GoldUnitMetadataMaxAggregateOutputType | null
  }

  export type GoldUnitMetadataAvgAggregateOutputType = {
    id: number | null
    gramsPerUnit: number | null
  }

  export type GoldUnitMetadataSumAggregateOutputType = {
    id: number | null
    gramsPerUnit: number | null
  }

  export type GoldUnitMetadataMinAggregateOutputType = {
    id: number | null
    unitName: string | null
    gramsPerUnit: number | null
    symbol: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoldUnitMetadataMaxAggregateOutputType = {
    id: number | null
    unitName: string | null
    gramsPerUnit: number | null
    symbol: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoldUnitMetadataCountAggregateOutputType = {
    id: number
    unitName: number
    gramsPerUnit: number
    symbol: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoldUnitMetadataAvgAggregateInputType = {
    id?: true
    gramsPerUnit?: true
  }

  export type GoldUnitMetadataSumAggregateInputType = {
    id?: true
    gramsPerUnit?: true
  }

  export type GoldUnitMetadataMinAggregateInputType = {
    id?: true
    unitName?: true
    gramsPerUnit?: true
    symbol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoldUnitMetadataMaxAggregateInputType = {
    id?: true
    unitName?: true
    gramsPerUnit?: true
    symbol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoldUnitMetadataCountAggregateInputType = {
    id?: true
    unitName?: true
    gramsPerUnit?: true
    symbol?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoldUnitMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoldUnitMetadata to aggregate.
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldUnitMetadata to fetch.
     */
    orderBy?: GoldUnitMetadataOrderByWithRelationInput | GoldUnitMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoldUnitMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldUnitMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldUnitMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoldUnitMetadata
    **/
    _count?: true | GoldUnitMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoldUnitMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoldUnitMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoldUnitMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoldUnitMetadataMaxAggregateInputType
  }

  export type GetGoldUnitMetadataAggregateType<T extends GoldUnitMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateGoldUnitMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoldUnitMetadata[P]>
      : GetScalarType<T[P], AggregateGoldUnitMetadata[P]>
  }




  export type GoldUnitMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoldUnitMetadataWhereInput
    orderBy?: GoldUnitMetadataOrderByWithAggregationInput | GoldUnitMetadataOrderByWithAggregationInput[]
    by: GoldUnitMetadataScalarFieldEnum[] | GoldUnitMetadataScalarFieldEnum
    having?: GoldUnitMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoldUnitMetadataCountAggregateInputType | true
    _avg?: GoldUnitMetadataAvgAggregateInputType
    _sum?: GoldUnitMetadataSumAggregateInputType
    _min?: GoldUnitMetadataMinAggregateInputType
    _max?: GoldUnitMetadataMaxAggregateInputType
  }

  export type GoldUnitMetadataGroupByOutputType = {
    id: number
    unitName: string
    gramsPerUnit: number
    symbol: string
    createdAt: Date
    updatedAt: Date
    _count: GoldUnitMetadataCountAggregateOutputType | null
    _avg: GoldUnitMetadataAvgAggregateOutputType | null
    _sum: GoldUnitMetadataSumAggregateOutputType | null
    _min: GoldUnitMetadataMinAggregateOutputType | null
    _max: GoldUnitMetadataMaxAggregateOutputType | null
  }

  type GetGoldUnitMetadataGroupByPayload<T extends GoldUnitMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoldUnitMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoldUnitMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoldUnitMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], GoldUnitMetadataGroupByOutputType[P]>
        }
      >
    >


  export type GoldUnitMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitName?: boolean
    gramsPerUnit?: boolean
    symbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goldUnitMetadata"]>

  export type GoldUnitMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitName?: boolean
    gramsPerUnit?: boolean
    symbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goldUnitMetadata"]>

  export type GoldUnitMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitName?: boolean
    gramsPerUnit?: boolean
    symbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["goldUnitMetadata"]>

  export type GoldUnitMetadataSelectScalar = {
    id?: boolean
    unitName?: boolean
    gramsPerUnit?: boolean
    symbol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GoldUnitMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitName" | "gramsPerUnit" | "symbol" | "createdAt" | "updatedAt", ExtArgs["result"]["goldUnitMetadata"]>

  export type $GoldUnitMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoldUnitMetadata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      unitName: string
      gramsPerUnit: number
      symbol: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goldUnitMetadata"]>
    composites: {}
  }

  type GoldUnitMetadataGetPayload<S extends boolean | null | undefined | GoldUnitMetadataDefaultArgs> = $Result.GetResult<Prisma.$GoldUnitMetadataPayload, S>

  type GoldUnitMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoldUnitMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoldUnitMetadataCountAggregateInputType | true
    }

  export interface GoldUnitMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoldUnitMetadata'], meta: { name: 'GoldUnitMetadata' } }
    /**
     * Find zero or one GoldUnitMetadata that matches the filter.
     * @param {GoldUnitMetadataFindUniqueArgs} args - Arguments to find a GoldUnitMetadata
     * @example
     * // Get one GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoldUnitMetadataFindUniqueArgs>(args: SelectSubset<T, GoldUnitMetadataFindUniqueArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoldUnitMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoldUnitMetadataFindUniqueOrThrowArgs} args - Arguments to find a GoldUnitMetadata
     * @example
     * // Get one GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoldUnitMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, GoldUnitMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoldUnitMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataFindFirstArgs} args - Arguments to find a GoldUnitMetadata
     * @example
     * // Get one GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoldUnitMetadataFindFirstArgs>(args?: SelectSubset<T, GoldUnitMetadataFindFirstArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoldUnitMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataFindFirstOrThrowArgs} args - Arguments to find a GoldUnitMetadata
     * @example
     * // Get one GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoldUnitMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, GoldUnitMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoldUnitMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.findMany()
     * 
     * // Get first 10 GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goldUnitMetadataWithIdOnly = await prisma.goldUnitMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoldUnitMetadataFindManyArgs>(args?: SelectSubset<T, GoldUnitMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoldUnitMetadata.
     * @param {GoldUnitMetadataCreateArgs} args - Arguments to create a GoldUnitMetadata.
     * @example
     * // Create one GoldUnitMetadata
     * const GoldUnitMetadata = await prisma.goldUnitMetadata.create({
     *   data: {
     *     // ... data to create a GoldUnitMetadata
     *   }
     * })
     * 
     */
    create<T extends GoldUnitMetadataCreateArgs>(args: SelectSubset<T, GoldUnitMetadataCreateArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoldUnitMetadata.
     * @param {GoldUnitMetadataCreateManyArgs} args - Arguments to create many GoldUnitMetadata.
     * @example
     * // Create many GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoldUnitMetadataCreateManyArgs>(args?: SelectSubset<T, GoldUnitMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoldUnitMetadata and returns the data saved in the database.
     * @param {GoldUnitMetadataCreateManyAndReturnArgs} args - Arguments to create many GoldUnitMetadata.
     * @example
     * // Create many GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoldUnitMetadata and only return the `id`
     * const goldUnitMetadataWithIdOnly = await prisma.goldUnitMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoldUnitMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, GoldUnitMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoldUnitMetadata.
     * @param {GoldUnitMetadataDeleteArgs} args - Arguments to delete one GoldUnitMetadata.
     * @example
     * // Delete one GoldUnitMetadata
     * const GoldUnitMetadata = await prisma.goldUnitMetadata.delete({
     *   where: {
     *     // ... filter to delete one GoldUnitMetadata
     *   }
     * })
     * 
     */
    delete<T extends GoldUnitMetadataDeleteArgs>(args: SelectSubset<T, GoldUnitMetadataDeleteArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoldUnitMetadata.
     * @param {GoldUnitMetadataUpdateArgs} args - Arguments to update one GoldUnitMetadata.
     * @example
     * // Update one GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoldUnitMetadataUpdateArgs>(args: SelectSubset<T, GoldUnitMetadataUpdateArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoldUnitMetadata.
     * @param {GoldUnitMetadataDeleteManyArgs} args - Arguments to filter GoldUnitMetadata to delete.
     * @example
     * // Delete a few GoldUnitMetadata
     * const { count } = await prisma.goldUnitMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoldUnitMetadataDeleteManyArgs>(args?: SelectSubset<T, GoldUnitMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoldUnitMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoldUnitMetadataUpdateManyArgs>(args: SelectSubset<T, GoldUnitMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoldUnitMetadata and returns the data updated in the database.
     * @param {GoldUnitMetadataUpdateManyAndReturnArgs} args - Arguments to update many GoldUnitMetadata.
     * @example
     * // Update many GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoldUnitMetadata and only return the `id`
     * const goldUnitMetadataWithIdOnly = await prisma.goldUnitMetadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoldUnitMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, GoldUnitMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoldUnitMetadata.
     * @param {GoldUnitMetadataUpsertArgs} args - Arguments to update or create a GoldUnitMetadata.
     * @example
     * // Update or create a GoldUnitMetadata
     * const goldUnitMetadata = await prisma.goldUnitMetadata.upsert({
     *   create: {
     *     // ... data to create a GoldUnitMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoldUnitMetadata we want to update
     *   }
     * })
     */
    upsert<T extends GoldUnitMetadataUpsertArgs>(args: SelectSubset<T, GoldUnitMetadataUpsertArgs<ExtArgs>>): Prisma__GoldUnitMetadataClient<$Result.GetResult<Prisma.$GoldUnitMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoldUnitMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataCountArgs} args - Arguments to filter GoldUnitMetadata to count.
     * @example
     * // Count the number of GoldUnitMetadata
     * const count = await prisma.goldUnitMetadata.count({
     *   where: {
     *     // ... the filter for the GoldUnitMetadata we want to count
     *   }
     * })
    **/
    count<T extends GoldUnitMetadataCountArgs>(
      args?: Subset<T, GoldUnitMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoldUnitMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoldUnitMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoldUnitMetadataAggregateArgs>(args: Subset<T, GoldUnitMetadataAggregateArgs>): Prisma.PrismaPromise<GetGoldUnitMetadataAggregateType<T>>

    /**
     * Group by GoldUnitMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoldUnitMetadataGroupByArgs} args - Group by arguments.
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
      T extends GoldUnitMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoldUnitMetadataGroupByArgs['orderBy'] }
        : { orderBy?: GoldUnitMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoldUnitMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoldUnitMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoldUnitMetadata model
   */
  readonly fields: GoldUnitMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoldUnitMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoldUnitMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GoldUnitMetadata model
   */
  interface GoldUnitMetadataFieldRefs {
    readonly id: FieldRef<"GoldUnitMetadata", 'Int'>
    readonly unitName: FieldRef<"GoldUnitMetadata", 'String'>
    readonly gramsPerUnit: FieldRef<"GoldUnitMetadata", 'Float'>
    readonly symbol: FieldRef<"GoldUnitMetadata", 'String'>
    readonly createdAt: FieldRef<"GoldUnitMetadata", 'DateTime'>
    readonly updatedAt: FieldRef<"GoldUnitMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoldUnitMetadata findUnique
   */
  export type GoldUnitMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * Filter, which GoldUnitMetadata to fetch.
     */
    where: GoldUnitMetadataWhereUniqueInput
  }

  /**
   * GoldUnitMetadata findUniqueOrThrow
   */
  export type GoldUnitMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * Filter, which GoldUnitMetadata to fetch.
     */
    where: GoldUnitMetadataWhereUniqueInput
  }

  /**
   * GoldUnitMetadata findFirst
   */
  export type GoldUnitMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * Filter, which GoldUnitMetadata to fetch.
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldUnitMetadata to fetch.
     */
    orderBy?: GoldUnitMetadataOrderByWithRelationInput | GoldUnitMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoldUnitMetadata.
     */
    cursor?: GoldUnitMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldUnitMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldUnitMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoldUnitMetadata.
     */
    distinct?: GoldUnitMetadataScalarFieldEnum | GoldUnitMetadataScalarFieldEnum[]
  }

  /**
   * GoldUnitMetadata findFirstOrThrow
   */
  export type GoldUnitMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * Filter, which GoldUnitMetadata to fetch.
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldUnitMetadata to fetch.
     */
    orderBy?: GoldUnitMetadataOrderByWithRelationInput | GoldUnitMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoldUnitMetadata.
     */
    cursor?: GoldUnitMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldUnitMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldUnitMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoldUnitMetadata.
     */
    distinct?: GoldUnitMetadataScalarFieldEnum | GoldUnitMetadataScalarFieldEnum[]
  }

  /**
   * GoldUnitMetadata findMany
   */
  export type GoldUnitMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * Filter, which GoldUnitMetadata to fetch.
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoldUnitMetadata to fetch.
     */
    orderBy?: GoldUnitMetadataOrderByWithRelationInput | GoldUnitMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoldUnitMetadata.
     */
    cursor?: GoldUnitMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoldUnitMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoldUnitMetadata.
     */
    skip?: number
    distinct?: GoldUnitMetadataScalarFieldEnum | GoldUnitMetadataScalarFieldEnum[]
  }

  /**
   * GoldUnitMetadata create
   */
  export type GoldUnitMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * The data needed to create a GoldUnitMetadata.
     */
    data: XOR<GoldUnitMetadataCreateInput, GoldUnitMetadataUncheckedCreateInput>
  }

  /**
   * GoldUnitMetadata createMany
   */
  export type GoldUnitMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoldUnitMetadata.
     */
    data: GoldUnitMetadataCreateManyInput | GoldUnitMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoldUnitMetadata createManyAndReturn
   */
  export type GoldUnitMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many GoldUnitMetadata.
     */
    data: GoldUnitMetadataCreateManyInput | GoldUnitMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoldUnitMetadata update
   */
  export type GoldUnitMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * The data needed to update a GoldUnitMetadata.
     */
    data: XOR<GoldUnitMetadataUpdateInput, GoldUnitMetadataUncheckedUpdateInput>
    /**
     * Choose, which GoldUnitMetadata to update.
     */
    where: GoldUnitMetadataWhereUniqueInput
  }

  /**
   * GoldUnitMetadata updateMany
   */
  export type GoldUnitMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoldUnitMetadata.
     */
    data: XOR<GoldUnitMetadataUpdateManyMutationInput, GoldUnitMetadataUncheckedUpdateManyInput>
    /**
     * Filter which GoldUnitMetadata to update
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * Limit how many GoldUnitMetadata to update.
     */
    limit?: number
  }

  /**
   * GoldUnitMetadata updateManyAndReturn
   */
  export type GoldUnitMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * The data used to update GoldUnitMetadata.
     */
    data: XOR<GoldUnitMetadataUpdateManyMutationInput, GoldUnitMetadataUncheckedUpdateManyInput>
    /**
     * Filter which GoldUnitMetadata to update
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * Limit how many GoldUnitMetadata to update.
     */
    limit?: number
  }

  /**
   * GoldUnitMetadata upsert
   */
  export type GoldUnitMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * The filter to search for the GoldUnitMetadata to update in case it exists.
     */
    where: GoldUnitMetadataWhereUniqueInput
    /**
     * In case the GoldUnitMetadata found by the `where` argument doesn't exist, create a new GoldUnitMetadata with this data.
     */
    create: XOR<GoldUnitMetadataCreateInput, GoldUnitMetadataUncheckedCreateInput>
    /**
     * In case the GoldUnitMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoldUnitMetadataUpdateInput, GoldUnitMetadataUncheckedUpdateInput>
  }

  /**
   * GoldUnitMetadata delete
   */
  export type GoldUnitMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
    /**
     * Filter which GoldUnitMetadata to delete.
     */
    where: GoldUnitMetadataWhereUniqueInput
  }

  /**
   * GoldUnitMetadata deleteMany
   */
  export type GoldUnitMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoldUnitMetadata to delete
     */
    where?: GoldUnitMetadataWhereInput
    /**
     * Limit how many GoldUnitMetadata to delete.
     */
    limit?: number
  }

  /**
   * GoldUnitMetadata without action
   */
  export type GoldUnitMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldUnitMetadata
     */
    select?: GoldUnitMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldUnitMetadata
     */
    omit?: GoldUnitMetadataOmit<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    gramsPurchased: number | null
    pricePerGram: number | null
    totalCost: number | null
    fee: number | null
    paymentId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    gramsPurchased: number | null
    pricePerGram: number | null
    totalCost: number | null
    fee: number | null
    paymentId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    referenceNumber: string | null
    userId: number | null
    type: $Enums.TransactionType | null
    source: $Enums.TransactionSource | null
    status: $Enums.TransactionStatus | null
    gramsPurchased: number | null
    pricePerGram: number | null
    totalCost: number | null
    fee: number | null
    currency: $Enums.Currency | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    referenceNumber: string | null
    userId: number | null
    type: $Enums.TransactionType | null
    source: $Enums.TransactionSource | null
    status: $Enums.TransactionStatus | null
    gramsPurchased: number | null
    pricePerGram: number | null
    totalCost: number | null
    fee: number | null
    currency: $Enums.Currency | null
    createdAt: Date | null
    updatedAt: Date | null
    paymentId: number | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    referenceNumber: number
    userId: number
    type: number
    source: number
    status: number
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee: number
    currency: number
    createdAt: number
    updatedAt: number
    paymentId: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    gramsPurchased?: true
    pricePerGram?: true
    totalCost?: true
    fee?: true
    paymentId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    userId?: true
    gramsPurchased?: true
    pricePerGram?: true
    totalCost?: true
    fee?: true
    paymentId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    referenceNumber?: true
    userId?: true
    type?: true
    source?: true
    status?: true
    gramsPurchased?: true
    pricePerGram?: true
    totalCost?: true
    fee?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    referenceNumber?: true
    userId?: true
    type?: true
    source?: true
    status?: true
    gramsPurchased?: true
    pricePerGram?: true
    totalCost?: true
    fee?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    referenceNumber?: true
    userId?: true
    type?: true
    source?: true
    status?: true
    gramsPurchased?: true
    pricePerGram?: true
    totalCost?: true
    fee?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    paymentId?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    referenceNumber: string
    userId: number
    type: $Enums.TransactionType
    source: $Enums.TransactionSource
    status: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee: number | null
    currency: $Enums.Currency
    createdAt: Date
    updatedAt: Date
    paymentId: number | null
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNumber?: boolean
    userId?: boolean
    type?: boolean
    source?: boolean
    status?: boolean
    gramsPurchased?: boolean
    pricePerGram?: boolean
    totalCost?: boolean
    fee?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
    holdings?: boolean | Transaction$holdingsArgs<ExtArgs>
    goldItems?: boolean | Transaction$goldItemsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNumber?: boolean
    userId?: boolean
    type?: boolean
    source?: boolean
    status?: boolean
    gramsPurchased?: boolean
    pricePerGram?: boolean
    totalCost?: boolean
    fee?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNumber?: boolean
    userId?: boolean
    type?: boolean
    source?: boolean
    status?: boolean
    gramsPurchased?: boolean
    pricePerGram?: boolean
    totalCost?: boolean
    fee?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    referenceNumber?: boolean
    userId?: boolean
    type?: boolean
    source?: boolean
    status?: boolean
    gramsPurchased?: boolean
    pricePerGram?: boolean
    totalCost?: boolean
    fee?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paymentId?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceNumber" | "userId" | "type" | "source" | "status" | "gramsPurchased" | "pricePerGram" | "totalCost" | "fee" | "currency" | "createdAt" | "updatedAt" | "paymentId", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
    holdings?: boolean | Transaction$holdingsArgs<ExtArgs>
    goldItems?: boolean | Transaction$goldItemsArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Transaction$paymentArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      holdings: Prisma.$HoldingPayload<ExtArgs>[]
      goldItems: Prisma.$GoldItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      referenceNumber: string
      userId: number
      type: $Enums.TransactionType
      source: $Enums.TransactionSource
      status: $Enums.TransactionStatus
      gramsPurchased: number
      pricePerGram: number
      totalCost: number
      fee: number | null
      currency: $Enums.Currency
      createdAt: Date
      updatedAt: Date
      paymentId: number | null
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Transaction$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    holdings<T extends Transaction$holdingsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$holdingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goldItems<T extends Transaction$goldItemsArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$goldItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoldItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly referenceNumber: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly source: FieldRef<"Transaction", 'TransactionSource'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly gramsPurchased: FieldRef<"Transaction", 'Float'>
    readonly pricePerGram: FieldRef<"Transaction", 'Float'>
    readonly totalCost: FieldRef<"Transaction", 'Float'>
    readonly fee: FieldRef<"Transaction", 'Float'>
    readonly currency: FieldRef<"Transaction", 'Currency'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
    readonly paymentId: FieldRef<"Transaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.payment
   */
  export type Transaction$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Transaction.holdings
   */
  export type Transaction$holdingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    where?: HoldingWhereInput
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    cursor?: HoldingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Transaction.goldItems
   */
  export type Transaction$goldItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoldItem
     */
    select?: GoldItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoldItem
     */
    omit?: GoldItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoldItemInclude<ExtArgs> | null
    where?: GoldItemWhereInput
    orderBy?: GoldItemOrderByWithRelationInput | GoldItemOrderByWithRelationInput[]
    cursor?: GoldItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoldItemScalarFieldEnum | GoldItemScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    method: string | null
    reference: string | null
    amount: number | null
    currency: $Enums.Currency | null
    status: string | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    method: string | null
    reference: string | null
    amount: number | null
    currency: $Enums.Currency | null
    status: string | null
    processedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    method: number
    reference: number
    amount: number
    currency: number
    status: number
    processedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    reference?: true
    amount?: true
    currency?: true
    status?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    reference?: true
    amount?: true
    currency?: true
    status?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    method?: true
    reference?: true
    amount?: true
    currency?: true
    status?: true
    processedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    userId: number
    method: string
    reference: string | null
    amount: number
    currency: $Enums.Currency
    status: string
    processedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | Payment$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    method?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    method?: boolean
    reference?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    processedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "method" | "reference" | "amount" | "currency" | "status" | "processedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | Payment$transactionArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      method: string
      reference: string | null
      amount: number
      currency: $Enums.Currency
      status: string
      processedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends Payment$transactionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly userId: FieldRef<"Payment", 'Int'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'Currency'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly processedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.transaction
   */
  export type Payment$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Holding
   */

  export type AggregateHolding = {
    _count: HoldingCountAggregateOutputType | null
    _avg: HoldingAvgAggregateOutputType | null
    _sum: HoldingSumAggregateOutputType | null
    _min: HoldingMinAggregateOutputType | null
    _max: HoldingMaxAggregateOutputType | null
  }

  export type HoldingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    amount: number | null
  }

  export type HoldingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    amount: number | null
  }

  export type HoldingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HoldingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    transactionId: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HoldingCountAggregateOutputType = {
    id: number
    userId: number
    transactionId: number
    amount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HoldingAvgAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    amount?: true
  }

  export type HoldingSumAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    amount?: true
  }

  export type HoldingMinAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HoldingMaxAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HoldingCountAggregateInputType = {
    id?: true
    userId?: true
    transactionId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HoldingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holding to aggregate.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Holdings
    **/
    _count?: true | HoldingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HoldingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HoldingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HoldingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HoldingMaxAggregateInputType
  }

  export type GetHoldingAggregateType<T extends HoldingAggregateArgs> = {
        [P in keyof T & keyof AggregateHolding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHolding[P]>
      : GetScalarType<T[P], AggregateHolding[P]>
  }




  export type HoldingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HoldingWhereInput
    orderBy?: HoldingOrderByWithAggregationInput | HoldingOrderByWithAggregationInput[]
    by: HoldingScalarFieldEnum[] | HoldingScalarFieldEnum
    having?: HoldingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HoldingCountAggregateInputType | true
    _avg?: HoldingAvgAggregateInputType
    _sum?: HoldingSumAggregateInputType
    _min?: HoldingMinAggregateInputType
    _max?: HoldingMaxAggregateInputType
  }

  export type HoldingGroupByOutputType = {
    id: number
    userId: number
    transactionId: number
    amount: number
    createdAt: Date
    updatedAt: Date
    _count: HoldingCountAggregateOutputType | null
    _avg: HoldingAvgAggregateOutputType | null
    _sum: HoldingSumAggregateOutputType | null
    _min: HoldingMinAggregateOutputType | null
    _max: HoldingMaxAggregateOutputType | null
  }

  type GetHoldingGroupByPayload<T extends HoldingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HoldingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HoldingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HoldingGroupByOutputType[P]>
            : GetScalarType<T[P], HoldingGroupByOutputType[P]>
        }
      >
    >


  export type HoldingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holding"]>

  export type HoldingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holding"]>

  export type HoldingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["holding"]>

  export type HoldingSelectScalar = {
    id?: boolean
    userId?: boolean
    transactionId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HoldingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "transactionId" | "amount" | "createdAt" | "updatedAt", ExtArgs["result"]["holding"]>
  export type HoldingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type HoldingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }
  export type HoldingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
  }

  export type $HoldingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Holding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      transactionId: number
      amount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["holding"]>
    composites: {}
  }

  type HoldingGetPayload<S extends boolean | null | undefined | HoldingDefaultArgs> = $Result.GetResult<Prisma.$HoldingPayload, S>

  type HoldingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HoldingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HoldingCountAggregateInputType | true
    }

  export interface HoldingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Holding'], meta: { name: 'Holding' } }
    /**
     * Find zero or one Holding that matches the filter.
     * @param {HoldingFindUniqueArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HoldingFindUniqueArgs>(args: SelectSubset<T, HoldingFindUniqueArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Holding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HoldingFindUniqueOrThrowArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HoldingFindUniqueOrThrowArgs>(args: SelectSubset<T, HoldingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingFindFirstArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HoldingFindFirstArgs>(args?: SelectSubset<T, HoldingFindFirstArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Holding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingFindFirstOrThrowArgs} args - Arguments to find a Holding
     * @example
     * // Get one Holding
     * const holding = await prisma.holding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HoldingFindFirstOrThrowArgs>(args?: SelectSubset<T, HoldingFindFirstOrThrowArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Holdings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Holdings
     * const holdings = await prisma.holding.findMany()
     * 
     * // Get first 10 Holdings
     * const holdings = await prisma.holding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const holdingWithIdOnly = await prisma.holding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HoldingFindManyArgs>(args?: SelectSubset<T, HoldingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Holding.
     * @param {HoldingCreateArgs} args - Arguments to create a Holding.
     * @example
     * // Create one Holding
     * const Holding = await prisma.holding.create({
     *   data: {
     *     // ... data to create a Holding
     *   }
     * })
     * 
     */
    create<T extends HoldingCreateArgs>(args: SelectSubset<T, HoldingCreateArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Holdings.
     * @param {HoldingCreateManyArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holding = await prisma.holding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HoldingCreateManyArgs>(args?: SelectSubset<T, HoldingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Holdings and returns the data saved in the database.
     * @param {HoldingCreateManyAndReturnArgs} args - Arguments to create many Holdings.
     * @example
     * // Create many Holdings
     * const holding = await prisma.holding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Holdings and only return the `id`
     * const holdingWithIdOnly = await prisma.holding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HoldingCreateManyAndReturnArgs>(args?: SelectSubset<T, HoldingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Holding.
     * @param {HoldingDeleteArgs} args - Arguments to delete one Holding.
     * @example
     * // Delete one Holding
     * const Holding = await prisma.holding.delete({
     *   where: {
     *     // ... filter to delete one Holding
     *   }
     * })
     * 
     */
    delete<T extends HoldingDeleteArgs>(args: SelectSubset<T, HoldingDeleteArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Holding.
     * @param {HoldingUpdateArgs} args - Arguments to update one Holding.
     * @example
     * // Update one Holding
     * const holding = await prisma.holding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HoldingUpdateArgs>(args: SelectSubset<T, HoldingUpdateArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Holdings.
     * @param {HoldingDeleteManyArgs} args - Arguments to filter Holdings to delete.
     * @example
     * // Delete a few Holdings
     * const { count } = await prisma.holding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HoldingDeleteManyArgs>(args?: SelectSubset<T, HoldingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Holdings
     * const holding = await prisma.holding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HoldingUpdateManyArgs>(args: SelectSubset<T, HoldingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Holdings and returns the data updated in the database.
     * @param {HoldingUpdateManyAndReturnArgs} args - Arguments to update many Holdings.
     * @example
     * // Update many Holdings
     * const holding = await prisma.holding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Holdings and only return the `id`
     * const holdingWithIdOnly = await prisma.holding.updateManyAndReturn({
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
    updateManyAndReturn<T extends HoldingUpdateManyAndReturnArgs>(args: SelectSubset<T, HoldingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Holding.
     * @param {HoldingUpsertArgs} args - Arguments to update or create a Holding.
     * @example
     * // Update or create a Holding
     * const holding = await prisma.holding.upsert({
     *   create: {
     *     // ... data to create a Holding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Holding we want to update
     *   }
     * })
     */
    upsert<T extends HoldingUpsertArgs>(args: SelectSubset<T, HoldingUpsertArgs<ExtArgs>>): Prisma__HoldingClient<$Result.GetResult<Prisma.$HoldingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Holdings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingCountArgs} args - Arguments to filter Holdings to count.
     * @example
     * // Count the number of Holdings
     * const count = await prisma.holding.count({
     *   where: {
     *     // ... the filter for the Holdings we want to count
     *   }
     * })
    **/
    count<T extends HoldingCountArgs>(
      args?: Subset<T, HoldingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HoldingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Holding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HoldingAggregateArgs>(args: Subset<T, HoldingAggregateArgs>): Prisma.PrismaPromise<GetHoldingAggregateType<T>>

    /**
     * Group by Holding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HoldingGroupByArgs} args - Group by arguments.
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
      T extends HoldingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HoldingGroupByArgs['orderBy'] }
        : { orderBy?: HoldingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HoldingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHoldingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Holding model
   */
  readonly fields: HoldingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Holding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HoldingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Holding model
   */
  interface HoldingFieldRefs {
    readonly id: FieldRef<"Holding", 'Int'>
    readonly userId: FieldRef<"Holding", 'Int'>
    readonly transactionId: FieldRef<"Holding", 'Int'>
    readonly amount: FieldRef<"Holding", 'Float'>
    readonly createdAt: FieldRef<"Holding", 'DateTime'>
    readonly updatedAt: FieldRef<"Holding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Holding findUnique
   */
  export type HoldingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding findUniqueOrThrow
   */
  export type HoldingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding findFirst
   */
  export type HoldingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Holding findFirstOrThrow
   */
  export type HoldingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holding to fetch.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Holdings.
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Holdings.
     */
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Holding findMany
   */
  export type HoldingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter, which Holdings to fetch.
     */
    where?: HoldingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Holdings to fetch.
     */
    orderBy?: HoldingOrderByWithRelationInput | HoldingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Holdings.
     */
    cursor?: HoldingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Holdings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Holdings.
     */
    skip?: number
    distinct?: HoldingScalarFieldEnum | HoldingScalarFieldEnum[]
  }

  /**
   * Holding create
   */
  export type HoldingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * The data needed to create a Holding.
     */
    data: XOR<HoldingCreateInput, HoldingUncheckedCreateInput>
  }

  /**
   * Holding createMany
   */
  export type HoldingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Holdings.
     */
    data: HoldingCreateManyInput | HoldingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Holding createManyAndReturn
   */
  export type HoldingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * The data used to create many Holdings.
     */
    data: HoldingCreateManyInput | HoldingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holding update
   */
  export type HoldingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * The data needed to update a Holding.
     */
    data: XOR<HoldingUpdateInput, HoldingUncheckedUpdateInput>
    /**
     * Choose, which Holding to update.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding updateMany
   */
  export type HoldingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingUpdateManyMutationInput, HoldingUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
  }

  /**
   * Holding updateManyAndReturn
   */
  export type HoldingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * The data used to update Holdings.
     */
    data: XOR<HoldingUpdateManyMutationInput, HoldingUncheckedUpdateManyInput>
    /**
     * Filter which Holdings to update
     */
    where?: HoldingWhereInput
    /**
     * Limit how many Holdings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Holding upsert
   */
  export type HoldingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * The filter to search for the Holding to update in case it exists.
     */
    where: HoldingWhereUniqueInput
    /**
     * In case the Holding found by the `where` argument doesn't exist, create a new Holding with this data.
     */
    create: XOR<HoldingCreateInput, HoldingUncheckedCreateInput>
    /**
     * In case the Holding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HoldingUpdateInput, HoldingUncheckedUpdateInput>
  }

  /**
   * Holding delete
   */
  export type HoldingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
    /**
     * Filter which Holding to delete.
     */
    where: HoldingWhereUniqueInput
  }

  /**
   * Holding deleteMany
   */
  export type HoldingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Holdings to delete
     */
    where?: HoldingWhereInput
    /**
     * Limit how many Holdings to delete.
     */
    limit?: number
  }

  /**
   * Holding without action
   */
  export type HoldingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Holding
     */
    select?: HoldingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Holding
     */
    omit?: HoldingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HoldingInclude<ExtArgs> | null
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
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    phoneNumber: 'phoneNumber',
    nationality: 'nationality',
    country: 'country',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    street: 'street',
    city: 'city',
    state: 'state',
    postalCode: 'postalCode',
    country: 'country',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balance: 'balance',
    currency: 'currency',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    totalGrams: 'totalGrams',
    totalInvested: 'totalInvested',
    currentValue: 'currentValue',
    unrealizedGain: 'unrealizedGain',
    lastCalculatedAt: 'lastCalculatedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const IdentityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    documentType: 'documentType',
    documentNumber: 'documentNumber',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    proofOfAddress: 'proofOfAddress',
    verified: 'verified',
    verifiedAt: 'verifiedAt',
    verifiedBy: 'verifiedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IdentityScalarFieldEnum = (typeof IdentityScalarFieldEnum)[keyof typeof IdentityScalarFieldEnum]


  export const GoldItemScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    transactionId: 'transactionId',
    type: 'type',
    description: 'description',
    serialNumber: 'serialNumber',
    karat: 'karat',
    purity: 'purity',
    weightGrams: 'weightGrams',
    origin: 'origin',
    storageLocation: 'storageLocation',
    depositMethod: 'depositMethod',
    verified: 'verified',
    verifiedBy: 'verifiedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoldItemScalarFieldEnum = (typeof GoldItemScalarFieldEnum)[keyof typeof GoldItemScalarFieldEnum]


  export const GoldPriceScalarFieldEnum: {
    id: 'id',
    pricePerGram: 'pricePerGram',
    currency: 'currency',
    openPrice: 'openPrice',
    highPrice: 'highPrice',
    lowPrice: 'lowPrice',
    prevPrice: 'prevPrice',
    askPrice: 'askPrice',
    bidPrice: 'bidPrice',
    priceChange: 'priceChange',
    priceChangePercent: 'priceChangePercent',
    price24k: 'price24k',
    price22k: 'price22k',
    price21k: 'price21k',
    price20k: 'price20k',
    price18k: 'price18k',
    price16k: 'price16k',
    price14k: 'price14k',
    price10k: 'price10k',
    baseCurrency: 'baseCurrency',
    weightUnit: 'weightUnit',
    weightName: 'weightName',
    source: 'source',
    apiTimestamp: 'apiTimestamp',
    recordedAt: 'recordedAt',
    isActive: 'isActive'
  };

  export type GoldPriceScalarFieldEnum = (typeof GoldPriceScalarFieldEnum)[keyof typeof GoldPriceScalarFieldEnum]


  export const GoldUnitMetadataScalarFieldEnum: {
    id: 'id',
    unitName: 'unitName',
    gramsPerUnit: 'gramsPerUnit',
    symbol: 'symbol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoldUnitMetadataScalarFieldEnum = (typeof GoldUnitMetadataScalarFieldEnum)[keyof typeof GoldUnitMetadataScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    referenceNumber: 'referenceNumber',
    userId: 'userId',
    type: 'type',
    source: 'source',
    status: 'status',
    gramsPurchased: 'gramsPurchased',
    pricePerGram: 'pricePerGram',
    totalCost: 'totalCost',
    fee: 'fee',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    paymentId: 'paymentId'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    method: 'method',
    reference: 'reference',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    processedAt: 'processedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const HoldingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    transactionId: 'transactionId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HoldingScalarFieldEnum = (typeof HoldingScalarFieldEnum)[keyof typeof HoldingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AddressType'
   */
  export type EnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType'>
    


  /**
   * Reference to a field of type 'AddressType[]'
   */
  export type ListEnumAddressTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AddressType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GoldItemType'
   */
  export type EnumGoldItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoldItemType'>
    


  /**
   * Reference to a field of type 'GoldItemType[]'
   */
  export type ListEnumGoldItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoldItemType[]'>
    


  /**
   * Reference to a field of type 'DepositMethod'
   */
  export type EnumDepositMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositMethod'>
    


  /**
   * Reference to a field of type 'DepositMethod[]'
   */
  export type ListEnumDepositMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepositMethod[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionSource'
   */
  export type EnumTransactionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionSource'>
    


  /**
   * Reference to a field of type 'TransactionSource[]'
   */
  export type ListEnumTransactionSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionSource[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    identity?: XOR<IdentityNullableScalarRelationFilter, IdentityWhereInput> | null
    addresses?: AddressListRelationFilter
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    holdings?: HoldingListRelationFilter
    goldItems?: GoldItemListRelationFilter
    Portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    country?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    identity?: IdentityOrderByWithRelationInput
    addresses?: AddressOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    holdings?: HoldingOrderByRelationAggregateInput
    goldItems?: GoldItemOrderByRelationAggregateInput
    Portfolio?: PortfolioOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringFilter<"User"> | string
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    nationality?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    identity?: XOR<IdentityNullableScalarRelationFilter, IdentityWhereInput> | null
    addresses?: AddressListRelationFilter
    transactions?: TransactionListRelationFilter
    payments?: PaymentListRelationFilter
    holdings?: HoldingListRelationFilter
    goldItems?: GoldItemListRelationFilter
    Portfolio?: XOR<PortfolioNullableScalarRelationFilter, PortfolioWhereInput> | null
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    country?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringWithAggregatesFilter<"User"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    userId?: IntFilter<"Address"> | number
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    userId?: IntFilter<"Address"> | number
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    userId?: IntWithAggregatesFilter<"Address"> | number
    type?: EnumAddressTypeWithAggregatesFilter<"Address"> | $Enums.AddressType
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    postalCode?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: IntFilter<"Wallet"> | number
    userId?: IntFilter<"Wallet"> | number
    balance?: FloatFilter<"Wallet"> | number
    currency?: EnumCurrencyFilter<"Wallet"> | $Enums.Currency
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    balance?: FloatFilter<"Wallet"> | number
    currency?: EnumCurrencyFilter<"Wallet"> | $Enums.Currency
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Wallet"> | number
    userId?: IntWithAggregatesFilter<"Wallet"> | number
    balance?: FloatWithAggregatesFilter<"Wallet"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Wallet"> | $Enums.Currency
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: IntFilter<"Portfolio"> | number
    userId?: IntFilter<"Portfolio"> | number
    totalGrams?: FloatFilter<"Portfolio"> | number
    totalInvested?: FloatFilter<"Portfolio"> | number
    currentValue?: FloatFilter<"Portfolio"> | number
    unrealizedGain?: FloatFilter<"Portfolio"> | number
    lastCalculatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
    lastCalculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    totalGrams?: FloatFilter<"Portfolio"> | number
    totalInvested?: FloatFilter<"Portfolio"> | number
    currentValue?: FloatFilter<"Portfolio"> | number
    unrealizedGain?: FloatFilter<"Portfolio"> | number
    lastCalculatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    createdAt?: DateTimeFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeFilter<"Portfolio"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
    lastCalculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _avg?: PortfolioAvgOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
    _sum?: PortfolioSumOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portfolio"> | number
    userId?: IntWithAggregatesFilter<"Portfolio"> | number
    totalGrams?: FloatWithAggregatesFilter<"Portfolio"> | number
    totalInvested?: FloatWithAggregatesFilter<"Portfolio"> | number
    currentValue?: FloatWithAggregatesFilter<"Portfolio"> | number
    unrealizedGain?: FloatWithAggregatesFilter<"Portfolio"> | number
    lastCalculatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
  }

  export type IdentityWhereInput = {
    AND?: IdentityWhereInput | IdentityWhereInput[]
    OR?: IdentityWhereInput[]
    NOT?: IdentityWhereInput | IdentityWhereInput[]
    id?: IntFilter<"Identity"> | number
    userId?: IntFilter<"Identity"> | number
    documentType?: StringFilter<"Identity"> | string
    documentNumber?: StringFilter<"Identity"> | string
    issueDate?: DateTimeNullableFilter<"Identity"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Identity"> | Date | string | null
    proofOfAddress?: StringNullableFilter<"Identity"> | string | null
    verified?: BoolFilter<"Identity"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Identity"> | Date | string | null
    verifiedBy?: IntNullableFilter<"Identity"> | number | null
    createdAt?: DateTimeFilter<"Identity"> | Date | string
    updatedAt?: DateTimeFilter<"Identity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IdentityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    proofOfAddress?: SortOrderInput | SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    documentNumber?: string
    AND?: IdentityWhereInput | IdentityWhereInput[]
    OR?: IdentityWhereInput[]
    NOT?: IdentityWhereInput | IdentityWhereInput[]
    documentType?: StringFilter<"Identity"> | string
    issueDate?: DateTimeNullableFilter<"Identity"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Identity"> | Date | string | null
    proofOfAddress?: StringNullableFilter<"Identity"> | string | null
    verified?: BoolFilter<"Identity"> | boolean
    verifiedAt?: DateTimeNullableFilter<"Identity"> | Date | string | null
    verifiedBy?: IntNullableFilter<"Identity"> | number | null
    createdAt?: DateTimeFilter<"Identity"> | Date | string
    updatedAt?: DateTimeFilter<"Identity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "documentNumber">

  export type IdentityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    proofOfAddress?: SortOrderInput | SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IdentityCountOrderByAggregateInput
    _avg?: IdentityAvgOrderByAggregateInput
    _max?: IdentityMaxOrderByAggregateInput
    _min?: IdentityMinOrderByAggregateInput
    _sum?: IdentitySumOrderByAggregateInput
  }

  export type IdentityScalarWhereWithAggregatesInput = {
    AND?: IdentityScalarWhereWithAggregatesInput | IdentityScalarWhereWithAggregatesInput[]
    OR?: IdentityScalarWhereWithAggregatesInput[]
    NOT?: IdentityScalarWhereWithAggregatesInput | IdentityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Identity"> | number
    userId?: IntWithAggregatesFilter<"Identity"> | number
    documentType?: StringWithAggregatesFilter<"Identity"> | string
    documentNumber?: StringWithAggregatesFilter<"Identity"> | string
    issueDate?: DateTimeNullableWithAggregatesFilter<"Identity"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"Identity"> | Date | string | null
    proofOfAddress?: StringNullableWithAggregatesFilter<"Identity"> | string | null
    verified?: BoolWithAggregatesFilter<"Identity"> | boolean
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"Identity"> | Date | string | null
    verifiedBy?: IntNullableWithAggregatesFilter<"Identity"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Identity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Identity"> | Date | string
  }

  export type GoldItemWhereInput = {
    AND?: GoldItemWhereInput | GoldItemWhereInput[]
    OR?: GoldItemWhereInput[]
    NOT?: GoldItemWhereInput | GoldItemWhereInput[]
    id?: IntFilter<"GoldItem"> | number
    userId?: IntFilter<"GoldItem"> | number
    transactionId?: IntFilter<"GoldItem"> | number
    type?: EnumGoldItemTypeFilter<"GoldItem"> | $Enums.GoldItemType
    description?: StringNullableFilter<"GoldItem"> | string | null
    serialNumber?: StringNullableFilter<"GoldItem"> | string | null
    karat?: FloatNullableFilter<"GoldItem"> | number | null
    purity?: FloatNullableFilter<"GoldItem"> | number | null
    weightGrams?: FloatFilter<"GoldItem"> | number
    origin?: StringNullableFilter<"GoldItem"> | string | null
    storageLocation?: StringNullableFilter<"GoldItem"> | string | null
    depositMethod?: EnumDepositMethodFilter<"GoldItem"> | $Enums.DepositMethod
    verified?: BoolFilter<"GoldItem"> | boolean
    verifiedBy?: IntNullableFilter<"GoldItem"> | number | null
    createdAt?: DateTimeFilter<"GoldItem"> | Date | string
    updatedAt?: DateTimeFilter<"GoldItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type GoldItemOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    karat?: SortOrderInput | SortOrder
    purity?: SortOrderInput | SortOrder
    weightGrams?: SortOrder
    origin?: SortOrderInput | SortOrder
    storageLocation?: SortOrderInput | SortOrder
    depositMethod?: SortOrder
    verified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type GoldItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serialNumber?: string
    AND?: GoldItemWhereInput | GoldItemWhereInput[]
    OR?: GoldItemWhereInput[]
    NOT?: GoldItemWhereInput | GoldItemWhereInput[]
    userId?: IntFilter<"GoldItem"> | number
    transactionId?: IntFilter<"GoldItem"> | number
    type?: EnumGoldItemTypeFilter<"GoldItem"> | $Enums.GoldItemType
    description?: StringNullableFilter<"GoldItem"> | string | null
    karat?: FloatNullableFilter<"GoldItem"> | number | null
    purity?: FloatNullableFilter<"GoldItem"> | number | null
    weightGrams?: FloatFilter<"GoldItem"> | number
    origin?: StringNullableFilter<"GoldItem"> | string | null
    storageLocation?: StringNullableFilter<"GoldItem"> | string | null
    depositMethod?: EnumDepositMethodFilter<"GoldItem"> | $Enums.DepositMethod
    verified?: BoolFilter<"GoldItem"> | boolean
    verifiedBy?: IntNullableFilter<"GoldItem"> | number | null
    createdAt?: DateTimeFilter<"GoldItem"> | Date | string
    updatedAt?: DateTimeFilter<"GoldItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id" | "serialNumber">

  export type GoldItemOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    karat?: SortOrderInput | SortOrder
    purity?: SortOrderInput | SortOrder
    weightGrams?: SortOrder
    origin?: SortOrderInput | SortOrder
    storageLocation?: SortOrderInput | SortOrder
    depositMethod?: SortOrder
    verified?: SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoldItemCountOrderByAggregateInput
    _avg?: GoldItemAvgOrderByAggregateInput
    _max?: GoldItemMaxOrderByAggregateInput
    _min?: GoldItemMinOrderByAggregateInput
    _sum?: GoldItemSumOrderByAggregateInput
  }

  export type GoldItemScalarWhereWithAggregatesInput = {
    AND?: GoldItemScalarWhereWithAggregatesInput | GoldItemScalarWhereWithAggregatesInput[]
    OR?: GoldItemScalarWhereWithAggregatesInput[]
    NOT?: GoldItemScalarWhereWithAggregatesInput | GoldItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GoldItem"> | number
    userId?: IntWithAggregatesFilter<"GoldItem"> | number
    transactionId?: IntWithAggregatesFilter<"GoldItem"> | number
    type?: EnumGoldItemTypeWithAggregatesFilter<"GoldItem"> | $Enums.GoldItemType
    description?: StringNullableWithAggregatesFilter<"GoldItem"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"GoldItem"> | string | null
    karat?: FloatNullableWithAggregatesFilter<"GoldItem"> | number | null
    purity?: FloatNullableWithAggregatesFilter<"GoldItem"> | number | null
    weightGrams?: FloatWithAggregatesFilter<"GoldItem"> | number
    origin?: StringNullableWithAggregatesFilter<"GoldItem"> | string | null
    storageLocation?: StringNullableWithAggregatesFilter<"GoldItem"> | string | null
    depositMethod?: EnumDepositMethodWithAggregatesFilter<"GoldItem"> | $Enums.DepositMethod
    verified?: BoolWithAggregatesFilter<"GoldItem"> | boolean
    verifiedBy?: IntNullableWithAggregatesFilter<"GoldItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"GoldItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoldItem"> | Date | string
  }

  export type GoldPriceWhereInput = {
    AND?: GoldPriceWhereInput | GoldPriceWhereInput[]
    OR?: GoldPriceWhereInput[]
    NOT?: GoldPriceWhereInput | GoldPriceWhereInput[]
    id?: IntFilter<"GoldPrice"> | number
    pricePerGram?: FloatFilter<"GoldPrice"> | number
    currency?: EnumCurrencyFilter<"GoldPrice"> | $Enums.Currency
    openPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    highPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    lowPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    prevPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    askPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    bidPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    priceChange?: FloatNullableFilter<"GoldPrice"> | number | null
    priceChangePercent?: FloatNullableFilter<"GoldPrice"> | number | null
    price24k?: FloatNullableFilter<"GoldPrice"> | number | null
    price22k?: FloatNullableFilter<"GoldPrice"> | number | null
    price21k?: FloatNullableFilter<"GoldPrice"> | number | null
    price20k?: FloatNullableFilter<"GoldPrice"> | number | null
    price18k?: FloatNullableFilter<"GoldPrice"> | number | null
    price16k?: FloatNullableFilter<"GoldPrice"> | number | null
    price14k?: FloatNullableFilter<"GoldPrice"> | number | null
    price10k?: FloatNullableFilter<"GoldPrice"> | number | null
    baseCurrency?: StringNullableFilter<"GoldPrice"> | string | null
    weightUnit?: StringNullableFilter<"GoldPrice"> | string | null
    weightName?: StringNullableFilter<"GoldPrice"> | string | null
    source?: StringNullableFilter<"GoldPrice"> | string | null
    apiTimestamp?: BigIntNullableFilter<"GoldPrice"> | bigint | number | null
    recordedAt?: DateTimeFilter<"GoldPrice"> | Date | string
    isActive?: BoolFilter<"GoldPrice"> | boolean
  }

  export type GoldPriceOrderByWithRelationInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    currency?: SortOrder
    openPrice?: SortOrderInput | SortOrder
    highPrice?: SortOrderInput | SortOrder
    lowPrice?: SortOrderInput | SortOrder
    prevPrice?: SortOrderInput | SortOrder
    askPrice?: SortOrderInput | SortOrder
    bidPrice?: SortOrderInput | SortOrder
    priceChange?: SortOrderInput | SortOrder
    priceChangePercent?: SortOrderInput | SortOrder
    price24k?: SortOrderInput | SortOrder
    price22k?: SortOrderInput | SortOrder
    price21k?: SortOrderInput | SortOrder
    price20k?: SortOrderInput | SortOrder
    price18k?: SortOrderInput | SortOrder
    price16k?: SortOrderInput | SortOrder
    price14k?: SortOrderInput | SortOrder
    price10k?: SortOrderInput | SortOrder
    baseCurrency?: SortOrderInput | SortOrder
    weightUnit?: SortOrderInput | SortOrder
    weightName?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    apiTimestamp?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    isActive?: SortOrder
  }

  export type GoldPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GoldPriceWhereInput | GoldPriceWhereInput[]
    OR?: GoldPriceWhereInput[]
    NOT?: GoldPriceWhereInput | GoldPriceWhereInput[]
    pricePerGram?: FloatFilter<"GoldPrice"> | number
    currency?: EnumCurrencyFilter<"GoldPrice"> | $Enums.Currency
    openPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    highPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    lowPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    prevPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    askPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    bidPrice?: FloatNullableFilter<"GoldPrice"> | number | null
    priceChange?: FloatNullableFilter<"GoldPrice"> | number | null
    priceChangePercent?: FloatNullableFilter<"GoldPrice"> | number | null
    price24k?: FloatNullableFilter<"GoldPrice"> | number | null
    price22k?: FloatNullableFilter<"GoldPrice"> | number | null
    price21k?: FloatNullableFilter<"GoldPrice"> | number | null
    price20k?: FloatNullableFilter<"GoldPrice"> | number | null
    price18k?: FloatNullableFilter<"GoldPrice"> | number | null
    price16k?: FloatNullableFilter<"GoldPrice"> | number | null
    price14k?: FloatNullableFilter<"GoldPrice"> | number | null
    price10k?: FloatNullableFilter<"GoldPrice"> | number | null
    baseCurrency?: StringNullableFilter<"GoldPrice"> | string | null
    weightUnit?: StringNullableFilter<"GoldPrice"> | string | null
    weightName?: StringNullableFilter<"GoldPrice"> | string | null
    source?: StringNullableFilter<"GoldPrice"> | string | null
    apiTimestamp?: BigIntNullableFilter<"GoldPrice"> | bigint | number | null
    recordedAt?: DateTimeFilter<"GoldPrice"> | Date | string
    isActive?: BoolFilter<"GoldPrice"> | boolean
  }, "id">

  export type GoldPriceOrderByWithAggregationInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    currency?: SortOrder
    openPrice?: SortOrderInput | SortOrder
    highPrice?: SortOrderInput | SortOrder
    lowPrice?: SortOrderInput | SortOrder
    prevPrice?: SortOrderInput | SortOrder
    askPrice?: SortOrderInput | SortOrder
    bidPrice?: SortOrderInput | SortOrder
    priceChange?: SortOrderInput | SortOrder
    priceChangePercent?: SortOrderInput | SortOrder
    price24k?: SortOrderInput | SortOrder
    price22k?: SortOrderInput | SortOrder
    price21k?: SortOrderInput | SortOrder
    price20k?: SortOrderInput | SortOrder
    price18k?: SortOrderInput | SortOrder
    price16k?: SortOrderInput | SortOrder
    price14k?: SortOrderInput | SortOrder
    price10k?: SortOrderInput | SortOrder
    baseCurrency?: SortOrderInput | SortOrder
    weightUnit?: SortOrderInput | SortOrder
    weightName?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    apiTimestamp?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    isActive?: SortOrder
    _count?: GoldPriceCountOrderByAggregateInput
    _avg?: GoldPriceAvgOrderByAggregateInput
    _max?: GoldPriceMaxOrderByAggregateInput
    _min?: GoldPriceMinOrderByAggregateInput
    _sum?: GoldPriceSumOrderByAggregateInput
  }

  export type GoldPriceScalarWhereWithAggregatesInput = {
    AND?: GoldPriceScalarWhereWithAggregatesInput | GoldPriceScalarWhereWithAggregatesInput[]
    OR?: GoldPriceScalarWhereWithAggregatesInput[]
    NOT?: GoldPriceScalarWhereWithAggregatesInput | GoldPriceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GoldPrice"> | number
    pricePerGram?: FloatWithAggregatesFilter<"GoldPrice"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"GoldPrice"> | $Enums.Currency
    openPrice?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    highPrice?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    lowPrice?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    prevPrice?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    askPrice?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    bidPrice?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    priceChange?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    priceChangePercent?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price24k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price22k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price21k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price20k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price18k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price16k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price14k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    price10k?: FloatNullableWithAggregatesFilter<"GoldPrice"> | number | null
    baseCurrency?: StringNullableWithAggregatesFilter<"GoldPrice"> | string | null
    weightUnit?: StringNullableWithAggregatesFilter<"GoldPrice"> | string | null
    weightName?: StringNullableWithAggregatesFilter<"GoldPrice"> | string | null
    source?: StringNullableWithAggregatesFilter<"GoldPrice"> | string | null
    apiTimestamp?: BigIntNullableWithAggregatesFilter<"GoldPrice"> | bigint | number | null
    recordedAt?: DateTimeWithAggregatesFilter<"GoldPrice"> | Date | string
    isActive?: BoolWithAggregatesFilter<"GoldPrice"> | boolean
  }

  export type GoldUnitMetadataWhereInput = {
    AND?: GoldUnitMetadataWhereInput | GoldUnitMetadataWhereInput[]
    OR?: GoldUnitMetadataWhereInput[]
    NOT?: GoldUnitMetadataWhereInput | GoldUnitMetadataWhereInput[]
    id?: IntFilter<"GoldUnitMetadata"> | number
    unitName?: StringFilter<"GoldUnitMetadata"> | string
    gramsPerUnit?: FloatFilter<"GoldUnitMetadata"> | number
    symbol?: StringFilter<"GoldUnitMetadata"> | string
    createdAt?: DateTimeFilter<"GoldUnitMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"GoldUnitMetadata"> | Date | string
  }

  export type GoldUnitMetadataOrderByWithRelationInput = {
    id?: SortOrder
    unitName?: SortOrder
    gramsPerUnit?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldUnitMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GoldUnitMetadataWhereInput | GoldUnitMetadataWhereInput[]
    OR?: GoldUnitMetadataWhereInput[]
    NOT?: GoldUnitMetadataWhereInput | GoldUnitMetadataWhereInput[]
    unitName?: StringFilter<"GoldUnitMetadata"> | string
    gramsPerUnit?: FloatFilter<"GoldUnitMetadata"> | number
    symbol?: StringFilter<"GoldUnitMetadata"> | string
    createdAt?: DateTimeFilter<"GoldUnitMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"GoldUnitMetadata"> | Date | string
  }, "id">

  export type GoldUnitMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    unitName?: SortOrder
    gramsPerUnit?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoldUnitMetadataCountOrderByAggregateInput
    _avg?: GoldUnitMetadataAvgOrderByAggregateInput
    _max?: GoldUnitMetadataMaxOrderByAggregateInput
    _min?: GoldUnitMetadataMinOrderByAggregateInput
    _sum?: GoldUnitMetadataSumOrderByAggregateInput
  }

  export type GoldUnitMetadataScalarWhereWithAggregatesInput = {
    AND?: GoldUnitMetadataScalarWhereWithAggregatesInput | GoldUnitMetadataScalarWhereWithAggregatesInput[]
    OR?: GoldUnitMetadataScalarWhereWithAggregatesInput[]
    NOT?: GoldUnitMetadataScalarWhereWithAggregatesInput | GoldUnitMetadataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GoldUnitMetadata"> | number
    unitName?: StringWithAggregatesFilter<"GoldUnitMetadata"> | string
    gramsPerUnit?: FloatWithAggregatesFilter<"GoldUnitMetadata"> | number
    symbol?: StringWithAggregatesFilter<"GoldUnitMetadata"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GoldUnitMetadata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoldUnitMetadata"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    referenceNumber?: StringFilter<"Transaction"> | string
    userId?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    gramsPurchased?: FloatFilter<"Transaction"> | number
    pricePerGram?: FloatFilter<"Transaction"> | number
    totalCost?: FloatFilter<"Transaction"> | number
    fee?: FloatNullableFilter<"Transaction"> | number | null
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    paymentId?: IntNullableFilter<"Transaction"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    holdings?: HoldingListRelationFilter
    goldItems?: GoldItemListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    status?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrderInput | SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    holdings?: HoldingOrderByRelationAggregateInput
    goldItems?: GoldItemOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    referenceNumber?: string
    paymentId?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    gramsPurchased?: FloatFilter<"Transaction"> | number
    pricePerGram?: FloatFilter<"Transaction"> | number
    totalCost?: FloatFilter<"Transaction"> | number
    fee?: FloatNullableFilter<"Transaction"> | number | null
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    holdings?: HoldingListRelationFilter
    goldItems?: GoldItemListRelationFilter
  }, "id" | "referenceNumber" | "paymentId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    status?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrderInput | SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrderInput | SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    referenceNumber?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    source?: EnumTransactionSourceWithAggregatesFilter<"Transaction"> | $Enums.TransactionSource
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    gramsPurchased?: FloatWithAggregatesFilter<"Transaction"> | number
    pricePerGram?: FloatWithAggregatesFilter<"Transaction"> | number
    totalCost?: FloatWithAggregatesFilter<"Transaction"> | number
    fee?: FloatNullableWithAggregatesFilter<"Transaction"> | number | null
    currency?: EnumCurrencyWithAggregatesFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    paymentId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    status?: StringFilter<"Payment"> | string
    processedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: IntFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    status?: StringFilter<"Payment"> | string
    processedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, TransactionWhereInput> | null
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    reference?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    processedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    userId?: IntWithAggregatesFilter<"Payment"> | number
    method?: StringWithAggregatesFilter<"Payment"> | string
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: EnumCurrencyWithAggregatesFilter<"Payment"> | $Enums.Currency
    status?: StringWithAggregatesFilter<"Payment"> | string
    processedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type HoldingWhereInput = {
    AND?: HoldingWhereInput | HoldingWhereInput[]
    OR?: HoldingWhereInput[]
    NOT?: HoldingWhereInput | HoldingWhereInput[]
    id?: IntFilter<"Holding"> | number
    userId?: IntFilter<"Holding"> | number
    transactionId?: IntFilter<"Holding"> | number
    amount?: FloatFilter<"Holding"> | number
    createdAt?: DateTimeFilter<"Holding"> | Date | string
    updatedAt?: DateTimeFilter<"Holding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }

  export type HoldingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
  }

  export type HoldingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HoldingWhereInput | HoldingWhereInput[]
    OR?: HoldingWhereInput[]
    NOT?: HoldingWhereInput | HoldingWhereInput[]
    userId?: IntFilter<"Holding"> | number
    transactionId?: IntFilter<"Holding"> | number
    amount?: FloatFilter<"Holding"> | number
    createdAt?: DateTimeFilter<"Holding"> | Date | string
    updatedAt?: DateTimeFilter<"Holding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
  }, "id">

  export type HoldingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HoldingCountOrderByAggregateInput
    _avg?: HoldingAvgOrderByAggregateInput
    _max?: HoldingMaxOrderByAggregateInput
    _min?: HoldingMinOrderByAggregateInput
    _sum?: HoldingSumOrderByAggregateInput
  }

  export type HoldingScalarWhereWithAggregatesInput = {
    AND?: HoldingScalarWhereWithAggregatesInput | HoldingScalarWhereWithAggregatesInput[]
    OR?: HoldingScalarWhereWithAggregatesInput[]
    NOT?: HoldingScalarWhereWithAggregatesInput | HoldingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Holding"> | number
    userId?: IntWithAggregatesFilter<"Holding"> | number
    transactionId?: IntWithAggregatesFilter<"Holding"> | number
    amount?: FloatWithAggregatesFilter<"Holding"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Holding"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Holding"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    type?: $Enums.AddressType
    street: string
    city: string
    state?: string | null
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    userId: number
    type?: $Enums.AddressType
    street: string
    city: string
    state?: string | null
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateManyInput = {
    id?: number
    userId: number
    type?: $Enums.AddressType
    street: string
    city: string
    state?: string | null
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateManyMutationInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    balance?: number
    currency?: $Enums.Currency
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: number
    userId: number
    balance?: number
    currency?: $Enums.Currency
    updatedAt?: Date | string
  }

  export type WalletUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    id?: number
    userId: number
    balance?: number
    currency?: $Enums.Currency
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    totalGrams?: number
    totalInvested?: number
    currentValue?: number
    unrealizedGain?: number
    lastCalculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: number
    userId: number
    totalGrams?: number
    totalInvested?: number
    currentValue?: number
    unrealizedGain?: number
    lastCalculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateInput = {
    totalGrams?: FloatFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unrealizedGain?: FloatFieldUpdateOperationsInput | number
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalGrams?: FloatFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unrealizedGain?: FloatFieldUpdateOperationsInput | number
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateManyInput = {
    id?: number
    userId: number
    totalGrams?: number
    totalInvested?: number
    currentValue?: number
    unrealizedGain?: number
    lastCalculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUpdateManyMutationInput = {
    totalGrams?: FloatFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unrealizedGain?: FloatFieldUpdateOperationsInput | number
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    totalGrams?: FloatFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unrealizedGain?: FloatFieldUpdateOperationsInput | number
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityCreateInput = {
    documentType: string
    documentNumber: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    proofOfAddress?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIdentityInput
  }

  export type IdentityUncheckedCreateInput = {
    id?: number
    userId: number
    documentType: string
    documentNumber: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    proofOfAddress?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityUpdateInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proofOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proofOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityCreateManyInput = {
    id?: number
    userId: number
    documentType: string
    documentNumber: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    proofOfAddress?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityUpdateManyMutationInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proofOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proofOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemCreateInput = {
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoldItemsInput
    transaction: TransactionCreateNestedOneWithoutGoldItemsInput
  }

  export type GoldItemUncheckedCreateInput = {
    id?: number
    userId: number
    transactionId: number
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldItemUpdateInput = {
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoldItemsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutGoldItemsNestedInput
  }

  export type GoldItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemCreateManyInput = {
    id?: number
    userId: number
    transactionId: number
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldItemUpdateManyMutationInput = {
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldPriceCreateInput = {
    pricePerGram: number
    currency?: $Enums.Currency
    openPrice?: number | null
    highPrice?: number | null
    lowPrice?: number | null
    prevPrice?: number | null
    askPrice?: number | null
    bidPrice?: number | null
    priceChange?: number | null
    priceChangePercent?: number | null
    price24k?: number | null
    price22k?: number | null
    price21k?: number | null
    price20k?: number | null
    price18k?: number | null
    price16k?: number | null
    price14k?: number | null
    price10k?: number | null
    baseCurrency?: string | null
    weightUnit?: string | null
    weightName?: string | null
    source?: string | null
    apiTimestamp?: bigint | number | null
    recordedAt?: Date | string
    isActive?: boolean
  }

  export type GoldPriceUncheckedCreateInput = {
    id?: number
    pricePerGram: number
    currency?: $Enums.Currency
    openPrice?: number | null
    highPrice?: number | null
    lowPrice?: number | null
    prevPrice?: number | null
    askPrice?: number | null
    bidPrice?: number | null
    priceChange?: number | null
    priceChangePercent?: number | null
    price24k?: number | null
    price22k?: number | null
    price21k?: number | null
    price20k?: number | null
    price18k?: number | null
    price16k?: number | null
    price14k?: number | null
    price10k?: number | null
    baseCurrency?: string | null
    weightUnit?: string | null
    weightName?: string | null
    source?: string | null
    apiTimestamp?: bigint | number | null
    recordedAt?: Date | string
    isActive?: boolean
  }

  export type GoldPriceUpdateInput = {
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    openPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    highPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    askPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    bidPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChange?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChangePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    price24k?: NullableFloatFieldUpdateOperationsInput | number | null
    price22k?: NullableFloatFieldUpdateOperationsInput | number | null
    price21k?: NullableFloatFieldUpdateOperationsInput | number | null
    price20k?: NullableFloatFieldUpdateOperationsInput | number | null
    price18k?: NullableFloatFieldUpdateOperationsInput | number | null
    price16k?: NullableFloatFieldUpdateOperationsInput | number | null
    price14k?: NullableFloatFieldUpdateOperationsInput | number | null
    price10k?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    weightName?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiTimestamp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoldPriceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    openPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    highPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    askPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    bidPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChange?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChangePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    price24k?: NullableFloatFieldUpdateOperationsInput | number | null
    price22k?: NullableFloatFieldUpdateOperationsInput | number | null
    price21k?: NullableFloatFieldUpdateOperationsInput | number | null
    price20k?: NullableFloatFieldUpdateOperationsInput | number | null
    price18k?: NullableFloatFieldUpdateOperationsInput | number | null
    price16k?: NullableFloatFieldUpdateOperationsInput | number | null
    price14k?: NullableFloatFieldUpdateOperationsInput | number | null
    price10k?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    weightName?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiTimestamp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoldPriceCreateManyInput = {
    id?: number
    pricePerGram: number
    currency?: $Enums.Currency
    openPrice?: number | null
    highPrice?: number | null
    lowPrice?: number | null
    prevPrice?: number | null
    askPrice?: number | null
    bidPrice?: number | null
    priceChange?: number | null
    priceChangePercent?: number | null
    price24k?: number | null
    price22k?: number | null
    price21k?: number | null
    price20k?: number | null
    price18k?: number | null
    price16k?: number | null
    price14k?: number | null
    price10k?: number | null
    baseCurrency?: string | null
    weightUnit?: string | null
    weightName?: string | null
    source?: string | null
    apiTimestamp?: bigint | number | null
    recordedAt?: Date | string
    isActive?: boolean
  }

  export type GoldPriceUpdateManyMutationInput = {
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    openPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    highPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    askPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    bidPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChange?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChangePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    price24k?: NullableFloatFieldUpdateOperationsInput | number | null
    price22k?: NullableFloatFieldUpdateOperationsInput | number | null
    price21k?: NullableFloatFieldUpdateOperationsInput | number | null
    price20k?: NullableFloatFieldUpdateOperationsInput | number | null
    price18k?: NullableFloatFieldUpdateOperationsInput | number | null
    price16k?: NullableFloatFieldUpdateOperationsInput | number | null
    price14k?: NullableFloatFieldUpdateOperationsInput | number | null
    price10k?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    weightName?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiTimestamp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoldPriceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    openPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    highPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    lowPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    prevPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    askPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    bidPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChange?: NullableFloatFieldUpdateOperationsInput | number | null
    priceChangePercent?: NullableFloatFieldUpdateOperationsInput | number | null
    price24k?: NullableFloatFieldUpdateOperationsInput | number | null
    price22k?: NullableFloatFieldUpdateOperationsInput | number | null
    price21k?: NullableFloatFieldUpdateOperationsInput | number | null
    price20k?: NullableFloatFieldUpdateOperationsInput | number | null
    price18k?: NullableFloatFieldUpdateOperationsInput | number | null
    price16k?: NullableFloatFieldUpdateOperationsInput | number | null
    price14k?: NullableFloatFieldUpdateOperationsInput | number | null
    price10k?: NullableFloatFieldUpdateOperationsInput | number | null
    baseCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    weightName?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    apiTimestamp?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GoldUnitMetadataCreateInput = {
    unitName: string
    gramsPerUnit: number
    symbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldUnitMetadataUncheckedCreateInput = {
    id?: number
    unitName: string
    gramsPerUnit: number
    symbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldUnitMetadataUpdateInput = {
    unitName?: StringFieldUpdateOperationsInput | string
    gramsPerUnit?: FloatFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldUnitMetadataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    unitName?: StringFieldUpdateOperationsInput | string
    gramsPerUnit?: FloatFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldUnitMetadataCreateManyInput = {
    id?: number
    unitName: string
    gramsPerUnit: number
    symbol: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldUnitMetadataUpdateManyMutationInput = {
    unitName?: StringFieldUpdateOperationsInput | string
    gramsPerUnit?: FloatFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldUnitMetadataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    unitName?: StringFieldUpdateOperationsInput | string
    gramsPerUnit?: FloatFieldUpdateOperationsInput | number
    symbol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
    holdings?: HoldingCreateNestedManyWithoutTransactionInput
    goldItems?: GoldItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    referenceNumber: string
    userId: number
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId?: number | null
    holdings?: HoldingUncheckedCreateNestedManyWithoutTransactionInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
    holdings?: HoldingUpdateManyWithoutTransactionNestedInput
    goldItems?: GoldItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    holdings?: HoldingUncheckedUpdateManyWithoutTransactionNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: number
    referenceNumber: string
    userId: number
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId?: number | null
  }

  export type TransactionUpdateManyMutationInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateInput = {
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
    transaction?: TransactionCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    userId: number
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    transaction?: TransactionUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: number
    userId: number
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingCreateInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHoldingsInput
    transaction: TransactionCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingUncheckedCreateInput = {
    id?: number
    userId: number
    transactionId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHoldingsNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingCreateManyInput = {
    id?: number
    userId: number
    transactionId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type IdentityNullableScalarRelationFilter = {
    is?: IdentityWhereInput | null
    isNot?: IdentityWhereInput | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type HoldingListRelationFilter = {
    every?: HoldingWhereInput
    some?: HoldingWhereInput
    none?: HoldingWhereInput
  }

  export type GoldItemListRelationFilter = {
    every?: GoldItemWhereInput
    some?: GoldItemWhereInput
    none?: GoldItemWhereInput
  }

  export type PortfolioNullableScalarRelationFilter = {
    is?: PortfolioWhereInput | null
    isNot?: PortfolioWhereInput | null
  }

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HoldingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoldItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    nationality?: SortOrder
    country?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    nationality?: SortOrder
    country?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    phoneNumber?: SortOrder
    nationality?: SortOrder
    country?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postalCode?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
    currency?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
    lastCalculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
    lastCalculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
    lastCalculatedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortfolioSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    totalGrams?: SortOrder
    totalInvested?: SortOrder
    currentValue?: SortOrder
    unrealizedGain?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type IdentityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    proofOfAddress?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    verifiedBy?: SortOrder
  }

  export type IdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    proofOfAddress?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    proofOfAddress?: SortOrder
    verified?: SortOrder
    verifiedAt?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    verifiedBy?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGoldItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoldItemType | EnumGoldItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoldItemTypeFilter<$PrismaModel> | $Enums.GoldItemType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumDepositMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositMethod | EnumDepositMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositMethodFilter<$PrismaModel> | $Enums.DepositMethod
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type GoldItemCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    karat?: SortOrder
    purity?: SortOrder
    weightGrams?: SortOrder
    origin?: SortOrder
    storageLocation?: SortOrder
    depositMethod?: SortOrder
    verified?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldItemAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    karat?: SortOrder
    purity?: SortOrder
    weightGrams?: SortOrder
    verifiedBy?: SortOrder
  }

  export type GoldItemMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    karat?: SortOrder
    purity?: SortOrder
    weightGrams?: SortOrder
    origin?: SortOrder
    storageLocation?: SortOrder
    depositMethod?: SortOrder
    verified?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldItemMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    karat?: SortOrder
    purity?: SortOrder
    weightGrams?: SortOrder
    origin?: SortOrder
    storageLocation?: SortOrder
    depositMethod?: SortOrder
    verified?: SortOrder
    verifiedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldItemSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    karat?: SortOrder
    purity?: SortOrder
    weightGrams?: SortOrder
    verifiedBy?: SortOrder
  }

  export type EnumGoldItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoldItemType | EnumGoldItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoldItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoldItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoldItemTypeFilter<$PrismaModel>
    _max?: NestedEnumGoldItemTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumDepositMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositMethod | EnumDepositMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositMethodWithAggregatesFilter<$PrismaModel> | $Enums.DepositMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositMethodFilter<$PrismaModel>
    _max?: NestedEnumDepositMethodFilter<$PrismaModel>
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type GoldPriceCountOrderByAggregateInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    currency?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    prevPrice?: SortOrder
    askPrice?: SortOrder
    bidPrice?: SortOrder
    priceChange?: SortOrder
    priceChangePercent?: SortOrder
    price24k?: SortOrder
    price22k?: SortOrder
    price21k?: SortOrder
    price20k?: SortOrder
    price18k?: SortOrder
    price16k?: SortOrder
    price14k?: SortOrder
    price10k?: SortOrder
    baseCurrency?: SortOrder
    weightUnit?: SortOrder
    weightName?: SortOrder
    source?: SortOrder
    apiTimestamp?: SortOrder
    recordedAt?: SortOrder
    isActive?: SortOrder
  }

  export type GoldPriceAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    prevPrice?: SortOrder
    askPrice?: SortOrder
    bidPrice?: SortOrder
    priceChange?: SortOrder
    priceChangePercent?: SortOrder
    price24k?: SortOrder
    price22k?: SortOrder
    price21k?: SortOrder
    price20k?: SortOrder
    price18k?: SortOrder
    price16k?: SortOrder
    price14k?: SortOrder
    price10k?: SortOrder
    apiTimestamp?: SortOrder
  }

  export type GoldPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    currency?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    prevPrice?: SortOrder
    askPrice?: SortOrder
    bidPrice?: SortOrder
    priceChange?: SortOrder
    priceChangePercent?: SortOrder
    price24k?: SortOrder
    price22k?: SortOrder
    price21k?: SortOrder
    price20k?: SortOrder
    price18k?: SortOrder
    price16k?: SortOrder
    price14k?: SortOrder
    price10k?: SortOrder
    baseCurrency?: SortOrder
    weightUnit?: SortOrder
    weightName?: SortOrder
    source?: SortOrder
    apiTimestamp?: SortOrder
    recordedAt?: SortOrder
    isActive?: SortOrder
  }

  export type GoldPriceMinOrderByAggregateInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    currency?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    prevPrice?: SortOrder
    askPrice?: SortOrder
    bidPrice?: SortOrder
    priceChange?: SortOrder
    priceChangePercent?: SortOrder
    price24k?: SortOrder
    price22k?: SortOrder
    price21k?: SortOrder
    price20k?: SortOrder
    price18k?: SortOrder
    price16k?: SortOrder
    price14k?: SortOrder
    price10k?: SortOrder
    baseCurrency?: SortOrder
    weightUnit?: SortOrder
    weightName?: SortOrder
    source?: SortOrder
    apiTimestamp?: SortOrder
    recordedAt?: SortOrder
    isActive?: SortOrder
  }

  export type GoldPriceSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerGram?: SortOrder
    openPrice?: SortOrder
    highPrice?: SortOrder
    lowPrice?: SortOrder
    prevPrice?: SortOrder
    askPrice?: SortOrder
    bidPrice?: SortOrder
    priceChange?: SortOrder
    priceChangePercent?: SortOrder
    price24k?: SortOrder
    price22k?: SortOrder
    price21k?: SortOrder
    price20k?: SortOrder
    price18k?: SortOrder
    price16k?: SortOrder
    price14k?: SortOrder
    price10k?: SortOrder
    apiTimestamp?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type GoldUnitMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    unitName?: SortOrder
    gramsPerUnit?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldUnitMetadataAvgOrderByAggregateInput = {
    id?: SortOrder
    gramsPerUnit?: SortOrder
  }

  export type GoldUnitMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    unitName?: SortOrder
    gramsPerUnit?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldUnitMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    unitName?: SortOrder
    gramsPerUnit?: SortOrder
    symbol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoldUnitMetadataSumOrderByAggregateInput = {
    id?: SortOrder
    gramsPerUnit?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceFilter<$PrismaModel> | $Enums.TransactionSource
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    status?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrder
    paymentId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    status?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNumber?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    source?: SortOrder
    status?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paymentId?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    gramsPurchased?: SortOrder
    pricePerGram?: SortOrder
    totalCost?: SortOrder
    fee?: SortOrder
    paymentId?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel> | $Enums.TransactionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionSourceFilter<$PrismaModel>
    _max?: NestedEnumTransactionSourceFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    method?: SortOrder
    reference?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    processedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type HoldingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
  }

  export type HoldingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HoldingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    transactionId?: SortOrder
    amount?: SortOrder
  }

  export type IdentityCreateNestedOneWithoutUserInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput
    connect?: IdentityWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type HoldingCreateNestedManyWithoutUserInput = {
    create?: XOR<HoldingCreateWithoutUserInput, HoldingUncheckedCreateWithoutUserInput> | HoldingCreateWithoutUserInput[] | HoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutUserInput | HoldingCreateOrConnectWithoutUserInput[]
    createMany?: HoldingCreateManyUserInputEnvelope
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
  }

  export type GoldItemCreateNestedManyWithoutUserInput = {
    create?: XOR<GoldItemCreateWithoutUserInput, GoldItemUncheckedCreateWithoutUserInput> | GoldItemCreateWithoutUserInput[] | GoldItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutUserInput | GoldItemCreateOrConnectWithoutUserInput[]
    createMany?: GoldItemCreateManyUserInputEnvelope
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
  }

  export type PortfolioCreateNestedOneWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput
    connect?: PortfolioWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type IdentityUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput
    connect?: IdentityWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type HoldingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HoldingCreateWithoutUserInput, HoldingUncheckedCreateWithoutUserInput> | HoldingCreateWithoutUserInput[] | HoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutUserInput | HoldingCreateOrConnectWithoutUserInput[]
    createMany?: HoldingCreateManyUserInputEnvelope
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
  }

  export type GoldItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoldItemCreateWithoutUserInput, GoldItemUncheckedCreateWithoutUserInput> | GoldItemCreateWithoutUserInput[] | GoldItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutUserInput | GoldItemCreateOrConnectWithoutUserInput[]
    createMany?: GoldItemCreateManyUserInputEnvelope
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput
    connect?: PortfolioWhereUniqueInput
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IdentityUpdateOneWithoutUserNestedInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput
    upsert?: IdentityUpsertWithoutUserInput
    disconnect?: IdentityWhereInput | boolean
    delete?: IdentityWhereInput | boolean
    connect?: IdentityWhereUniqueInput
    update?: XOR<XOR<IdentityUpdateToOneWithWhereWithoutUserInput, IdentityUpdateWithoutUserInput>, IdentityUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type HoldingUpdateManyWithoutUserNestedInput = {
    create?: XOR<HoldingCreateWithoutUserInput, HoldingUncheckedCreateWithoutUserInput> | HoldingCreateWithoutUserInput[] | HoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutUserInput | HoldingCreateOrConnectWithoutUserInput[]
    upsert?: HoldingUpsertWithWhereUniqueWithoutUserInput | HoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HoldingCreateManyUserInputEnvelope
    set?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    disconnect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    delete?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    update?: HoldingUpdateWithWhereUniqueWithoutUserInput | HoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HoldingUpdateManyWithWhereWithoutUserInput | HoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
  }

  export type GoldItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoldItemCreateWithoutUserInput, GoldItemUncheckedCreateWithoutUserInput> | GoldItemCreateWithoutUserInput[] | GoldItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutUserInput | GoldItemCreateOrConnectWithoutUserInput[]
    upsert?: GoldItemUpsertWithWhereUniqueWithoutUserInput | GoldItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoldItemCreateManyUserInputEnvelope
    set?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    disconnect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    delete?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    update?: GoldItemUpdateWithWhereUniqueWithoutUserInput | GoldItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoldItemUpdateManyWithWhereWithoutUserInput | GoldItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoldItemScalarWhereInput | GoldItemScalarWhereInput[]
  }

  export type PortfolioUpdateOneWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput
    upsert?: PortfolioUpsertWithoutUserInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutUserInput, PortfolioUpdateWithoutUserInput>, PortfolioUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IdentityUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput
    upsert?: IdentityUpsertWithoutUserInput
    disconnect?: IdentityWhereInput | boolean
    delete?: IdentityWhereInput | boolean
    connect?: IdentityWhereUniqueInput
    update?: XOR<XOR<IdentityUpdateToOneWithWhereWithoutUserInput, IdentityUpdateWithoutUserInput>, IdentityUncheckedUpdateWithoutUserInput>
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type HoldingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HoldingCreateWithoutUserInput, HoldingUncheckedCreateWithoutUserInput> | HoldingCreateWithoutUserInput[] | HoldingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutUserInput | HoldingCreateOrConnectWithoutUserInput[]
    upsert?: HoldingUpsertWithWhereUniqueWithoutUserInput | HoldingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HoldingCreateManyUserInputEnvelope
    set?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    disconnect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    delete?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    update?: HoldingUpdateWithWhereUniqueWithoutUserInput | HoldingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HoldingUpdateManyWithWhereWithoutUserInput | HoldingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
  }

  export type GoldItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoldItemCreateWithoutUserInput, GoldItemUncheckedCreateWithoutUserInput> | GoldItemCreateWithoutUserInput[] | GoldItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutUserInput | GoldItemCreateOrConnectWithoutUserInput[]
    upsert?: GoldItemUpsertWithWhereUniqueWithoutUserInput | GoldItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoldItemCreateManyUserInputEnvelope
    set?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    disconnect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    delete?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    update?: GoldItemUpdateWithWhereUniqueWithoutUserInput | GoldItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoldItemUpdateManyWithWhereWithoutUserInput | GoldItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoldItemScalarWhereInput | GoldItemScalarWhereInput[]
  }

  export type PortfolioUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
    connectOrCreate?: PortfolioCreateOrConnectWithoutUserInput
    upsert?: PortfolioUpsertWithoutUserInput
    disconnect?: PortfolioWhereInput | boolean
    delete?: PortfolioWhereInput | boolean
    connect?: PortfolioWhereUniqueInput
    update?: XOR<XOR<PortfolioUpdateToOneWithWhereWithoutUserInput, PortfolioUpdateWithoutUserInput>, PortfolioUncheckedUpdateWithoutUserInput>
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAddressTypeFieldUpdateOperationsInput = {
    set?: $Enums.AddressType
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfolioInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: UserCreateOrConnectWithoutPortfolioInput
    upsert?: UserUpsertWithoutPortfolioInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPortfolioInput, UserUpdateWithoutPortfolioInput>, UserUncheckedUpdateWithoutPortfolioInput>
  }

  export type UserCreateNestedOneWithoutIdentityInput = {
    create?: XOR<UserCreateWithoutIdentityInput, UserUncheckedCreateWithoutIdentityInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdentityInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutIdentityNestedInput = {
    create?: XOR<UserCreateWithoutIdentityInput, UserUncheckedCreateWithoutIdentityInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdentityInput
    upsert?: UserUpsertWithoutIdentityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIdentityInput, UserUpdateWithoutIdentityInput>, UserUncheckedUpdateWithoutIdentityInput>
  }

  export type UserCreateNestedOneWithoutGoldItemsInput = {
    create?: XOR<UserCreateWithoutGoldItemsInput, UserUncheckedCreateWithoutGoldItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoldItemsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutGoldItemsInput = {
    create?: XOR<TransactionCreateWithoutGoldItemsInput, TransactionUncheckedCreateWithoutGoldItemsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutGoldItemsInput
    connect?: TransactionWhereUniqueInput
  }

  export type EnumGoldItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.GoldItemType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDepositMethodFieldUpdateOperationsInput = {
    set?: $Enums.DepositMethod
  }

  export type UserUpdateOneRequiredWithoutGoldItemsNestedInput = {
    create?: XOR<UserCreateWithoutGoldItemsInput, UserUncheckedCreateWithoutGoldItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoldItemsInput
    upsert?: UserUpsertWithoutGoldItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoldItemsInput, UserUpdateWithoutGoldItemsInput>, UserUncheckedUpdateWithoutGoldItemsInput>
  }

  export type TransactionUpdateOneRequiredWithoutGoldItemsNestedInput = {
    create?: XOR<TransactionCreateWithoutGoldItemsInput, TransactionUncheckedCreateWithoutGoldItemsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutGoldItemsInput
    upsert?: TransactionUpsertWithoutGoldItemsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutGoldItemsInput, TransactionUpdateWithoutGoldItemsInput>, TransactionUncheckedUpdateWithoutGoldItemsInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutTransactionInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput
    connect?: PaymentWhereUniqueInput
  }

  export type HoldingCreateNestedManyWithoutTransactionInput = {
    create?: XOR<HoldingCreateWithoutTransactionInput, HoldingUncheckedCreateWithoutTransactionInput> | HoldingCreateWithoutTransactionInput[] | HoldingUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutTransactionInput | HoldingCreateOrConnectWithoutTransactionInput[]
    createMany?: HoldingCreateManyTransactionInputEnvelope
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
  }

  export type GoldItemCreateNestedManyWithoutTransactionInput = {
    create?: XOR<GoldItemCreateWithoutTransactionInput, GoldItemUncheckedCreateWithoutTransactionInput> | GoldItemCreateWithoutTransactionInput[] | GoldItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutTransactionInput | GoldItemCreateOrConnectWithoutTransactionInput[]
    createMany?: GoldItemCreateManyTransactionInputEnvelope
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
  }

  export type HoldingUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<HoldingCreateWithoutTransactionInput, HoldingUncheckedCreateWithoutTransactionInput> | HoldingCreateWithoutTransactionInput[] | HoldingUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutTransactionInput | HoldingCreateOrConnectWithoutTransactionInput[]
    createMany?: HoldingCreateManyTransactionInputEnvelope
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
  }

  export type GoldItemUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<GoldItemCreateWithoutTransactionInput, GoldItemUncheckedCreateWithoutTransactionInput> | GoldItemCreateWithoutTransactionInput[] | GoldItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutTransactionInput | GoldItemCreateOrConnectWithoutTransactionInput[]
    createMany?: GoldItemCreateManyTransactionInputEnvelope
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionSourceFieldUpdateOperationsInput = {
    set?: $Enums.TransactionSource
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type PaymentUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutTransactionInput
    upsert?: PaymentUpsertWithoutTransactionInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutTransactionInput, PaymentUpdateWithoutTransactionInput>, PaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type HoldingUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<HoldingCreateWithoutTransactionInput, HoldingUncheckedCreateWithoutTransactionInput> | HoldingCreateWithoutTransactionInput[] | HoldingUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutTransactionInput | HoldingCreateOrConnectWithoutTransactionInput[]
    upsert?: HoldingUpsertWithWhereUniqueWithoutTransactionInput | HoldingUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: HoldingCreateManyTransactionInputEnvelope
    set?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    disconnect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    delete?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    update?: HoldingUpdateWithWhereUniqueWithoutTransactionInput | HoldingUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: HoldingUpdateManyWithWhereWithoutTransactionInput | HoldingUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
  }

  export type GoldItemUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<GoldItemCreateWithoutTransactionInput, GoldItemUncheckedCreateWithoutTransactionInput> | GoldItemCreateWithoutTransactionInput[] | GoldItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutTransactionInput | GoldItemCreateOrConnectWithoutTransactionInput[]
    upsert?: GoldItemUpsertWithWhereUniqueWithoutTransactionInput | GoldItemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: GoldItemCreateManyTransactionInputEnvelope
    set?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    disconnect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    delete?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    update?: GoldItemUpdateWithWhereUniqueWithoutTransactionInput | GoldItemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: GoldItemUpdateManyWithWhereWithoutTransactionInput | GoldItemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: GoldItemScalarWhereInput | GoldItemScalarWhereInput[]
  }

  export type HoldingUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<HoldingCreateWithoutTransactionInput, HoldingUncheckedCreateWithoutTransactionInput> | HoldingCreateWithoutTransactionInput[] | HoldingUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: HoldingCreateOrConnectWithoutTransactionInput | HoldingCreateOrConnectWithoutTransactionInput[]
    upsert?: HoldingUpsertWithWhereUniqueWithoutTransactionInput | HoldingUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: HoldingCreateManyTransactionInputEnvelope
    set?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    disconnect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    delete?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    connect?: HoldingWhereUniqueInput | HoldingWhereUniqueInput[]
    update?: HoldingUpdateWithWhereUniqueWithoutTransactionInput | HoldingUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: HoldingUpdateManyWithWhereWithoutTransactionInput | HoldingUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
  }

  export type GoldItemUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<GoldItemCreateWithoutTransactionInput, GoldItemUncheckedCreateWithoutTransactionInput> | GoldItemCreateWithoutTransactionInput[] | GoldItemUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: GoldItemCreateOrConnectWithoutTransactionInput | GoldItemCreateOrConnectWithoutTransactionInput[]
    upsert?: GoldItemUpsertWithWhereUniqueWithoutTransactionInput | GoldItemUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: GoldItemCreateManyTransactionInputEnvelope
    set?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    disconnect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    delete?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    connect?: GoldItemWhereUniqueInput | GoldItemWhereUniqueInput[]
    update?: GoldItemUpdateWithWhereUniqueWithoutTransactionInput | GoldItemUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: GoldItemUpdateManyWithWhereWithoutTransactionInput | GoldItemUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: GoldItemScalarWhereInput | GoldItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    connect?: TransactionWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    connect?: TransactionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type TransactionUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    upsert?: TransactionUpsertWithoutPaymentInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPaymentInput, TransactionUpdateWithoutPaymentInput>, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type TransactionUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPaymentInput
    upsert?: TransactionUpsertWithoutPaymentInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPaymentInput, TransactionUpdateWithoutPaymentInput>, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type UserCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoldingsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutHoldingsInput = {
    create?: XOR<TransactionCreateWithoutHoldingsInput, TransactionUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutHoldingsInput
    connect?: TransactionWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHoldingsInput
    upsert?: UserUpsertWithoutHoldingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHoldingsInput, UserUpdateWithoutHoldingsInput>, UserUncheckedUpdateWithoutHoldingsInput>
  }

  export type TransactionUpdateOneRequiredWithoutHoldingsNestedInput = {
    create?: XOR<TransactionCreateWithoutHoldingsInput, TransactionUncheckedCreateWithoutHoldingsInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutHoldingsInput
    upsert?: TransactionUpsertWithoutHoldingsInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutHoldingsInput, TransactionUpdateWithoutHoldingsInput>, TransactionUncheckedUpdateWithoutHoldingsInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumAddressTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeFilter<$PrismaModel> | $Enums.AddressType
  }

  export type NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AddressType | EnumAddressTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AddressType[] | ListEnumAddressTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAddressTypeWithAggregatesFilter<$PrismaModel> | $Enums.AddressType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAddressTypeFilter<$PrismaModel>
    _max?: NestedEnumAddressTypeFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGoldItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GoldItemType | EnumGoldItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoldItemTypeFilter<$PrismaModel> | $Enums.GoldItemType
  }

  export type NestedEnumDepositMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositMethod | EnumDepositMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositMethodFilter<$PrismaModel> | $Enums.DepositMethod
  }

  export type NestedEnumGoldItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoldItemType | EnumGoldItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoldItemType[] | ListEnumGoldItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGoldItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.GoldItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoldItemTypeFilter<$PrismaModel>
    _max?: NestedEnumGoldItemTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumDepositMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepositMethod | EnumDepositMethodFieldRefInput<$PrismaModel>
    in?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepositMethod[] | ListEnumDepositMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumDepositMethodWithAggregatesFilter<$PrismaModel> | $Enums.DepositMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepositMethodFilter<$PrismaModel>
    _max?: NestedEnumDepositMethodFilter<$PrismaModel>
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceFilter<$PrismaModel> | $Enums.TransactionSource
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionSource | EnumTransactionSourceFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionSource[] | ListEnumTransactionSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionSourceWithAggregatesFilter<$PrismaModel> | $Enums.TransactionSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionSourceFilter<$PrismaModel>
    _max?: NestedEnumTransactionSourceFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type IdentityCreateWithoutUserInput = {
    documentType: string
    documentNumber: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    proofOfAddress?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityUncheckedCreateWithoutUserInput = {
    id?: number
    documentType: string
    documentNumber: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    proofOfAddress?: string | null
    verified?: boolean
    verifiedAt?: Date | string | null
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityCreateOrConnectWithoutUserInput = {
    where: IdentityWhereUniqueInput
    create: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateWithoutUserInput = {
    type?: $Enums.AddressType
    street: string
    city: string
    state?: string | null
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    type?: $Enums.AddressType
    street: string
    city: string
    state?: string | null
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PaymentCreateNestedOneWithoutTransactionInput
    holdings?: HoldingCreateNestedManyWithoutTransactionInput
    goldItems?: GoldItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId?: number | null
    holdings?: HoldingUncheckedCreateNestedManyWithoutTransactionInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutUserInput = {
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: number
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HoldingCreateWithoutUserInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingUncheckedCreateWithoutUserInput = {
    id?: number
    transactionId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingCreateOrConnectWithoutUserInput = {
    where: HoldingWhereUniqueInput
    create: XOR<HoldingCreateWithoutUserInput, HoldingUncheckedCreateWithoutUserInput>
  }

  export type HoldingCreateManyUserInputEnvelope = {
    data: HoldingCreateManyUserInput | HoldingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoldItemCreateWithoutUserInput = {
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutGoldItemsInput
  }

  export type GoldItemUncheckedCreateWithoutUserInput = {
    id?: number
    transactionId: number
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldItemCreateOrConnectWithoutUserInput = {
    where: GoldItemWhereUniqueInput
    create: XOR<GoldItemCreateWithoutUserInput, GoldItemUncheckedCreateWithoutUserInput>
  }

  export type GoldItemCreateManyUserInputEnvelope = {
    data: GoldItemCreateManyUserInput | GoldItemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutUserInput = {
    totalGrams?: number
    totalInvested?: number
    currentValue?: number
    unrealizedGain?: number
    lastCalculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioUncheckedCreateWithoutUserInput = {
    id?: number
    totalGrams?: number
    totalInvested?: number
    currentValue?: number
    unrealizedGain?: number
    lastCalculatedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortfolioCreateOrConnectWithoutUserInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateWithoutUserInput = {
    balance?: number
    currency?: $Enums.Currency
    updatedAt?: Date | string
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: number
    balance?: number
    currency?: $Enums.Currency
    updatedAt?: Date | string
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type IdentityUpsertWithoutUserInput = {
    update: XOR<IdentityUpdateWithoutUserInput, IdentityUncheckedUpdateWithoutUserInput>
    create: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
    where?: IdentityWhereInput
  }

  export type IdentityUpdateToOneWithWhereWithoutUserInput = {
    where?: IdentityWhereInput
    data: XOR<IdentityUpdateWithoutUserInput, IdentityUncheckedUpdateWithoutUserInput>
  }

  export type IdentityUpdateWithoutUserInput = {
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proofOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentType?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    proofOfAddress?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    userId?: IntFilter<"Address"> | number
    type?: EnumAddressTypeFilter<"Address"> | $Enums.AddressType
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringNullableFilter<"Address"> | string | null
    postalCode?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    referenceNumber?: StringFilter<"Transaction"> | string
    userId?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    source?: EnumTransactionSourceFilter<"Transaction"> | $Enums.TransactionSource
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    gramsPurchased?: FloatFilter<"Transaction"> | number
    pricePerGram?: FloatFilter<"Transaction"> | number
    totalCost?: FloatFilter<"Transaction"> | number
    fee?: FloatNullableFilter<"Transaction"> | number | null
    currency?: EnumCurrencyFilter<"Transaction"> | $Enums.Currency
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    paymentId?: IntNullableFilter<"Transaction"> | number | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    userId?: IntFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: EnumCurrencyFilter<"Payment"> | $Enums.Currency
    status?: StringFilter<"Payment"> | string
    processedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type HoldingUpsertWithWhereUniqueWithoutUserInput = {
    where: HoldingWhereUniqueInput
    update: XOR<HoldingUpdateWithoutUserInput, HoldingUncheckedUpdateWithoutUserInput>
    create: XOR<HoldingCreateWithoutUserInput, HoldingUncheckedCreateWithoutUserInput>
  }

  export type HoldingUpdateWithWhereUniqueWithoutUserInput = {
    where: HoldingWhereUniqueInput
    data: XOR<HoldingUpdateWithoutUserInput, HoldingUncheckedUpdateWithoutUserInput>
  }

  export type HoldingUpdateManyWithWhereWithoutUserInput = {
    where: HoldingScalarWhereInput
    data: XOR<HoldingUpdateManyMutationInput, HoldingUncheckedUpdateManyWithoutUserInput>
  }

  export type HoldingScalarWhereInput = {
    AND?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
    OR?: HoldingScalarWhereInput[]
    NOT?: HoldingScalarWhereInput | HoldingScalarWhereInput[]
    id?: IntFilter<"Holding"> | number
    userId?: IntFilter<"Holding"> | number
    transactionId?: IntFilter<"Holding"> | number
    amount?: FloatFilter<"Holding"> | number
    createdAt?: DateTimeFilter<"Holding"> | Date | string
    updatedAt?: DateTimeFilter<"Holding"> | Date | string
  }

  export type GoldItemUpsertWithWhereUniqueWithoutUserInput = {
    where: GoldItemWhereUniqueInput
    update: XOR<GoldItemUpdateWithoutUserInput, GoldItemUncheckedUpdateWithoutUserInput>
    create: XOR<GoldItemCreateWithoutUserInput, GoldItemUncheckedCreateWithoutUserInput>
  }

  export type GoldItemUpdateWithWhereUniqueWithoutUserInput = {
    where: GoldItemWhereUniqueInput
    data: XOR<GoldItemUpdateWithoutUserInput, GoldItemUncheckedUpdateWithoutUserInput>
  }

  export type GoldItemUpdateManyWithWhereWithoutUserInput = {
    where: GoldItemScalarWhereInput
    data: XOR<GoldItemUpdateManyMutationInput, GoldItemUncheckedUpdateManyWithoutUserInput>
  }

  export type GoldItemScalarWhereInput = {
    AND?: GoldItemScalarWhereInput | GoldItemScalarWhereInput[]
    OR?: GoldItemScalarWhereInput[]
    NOT?: GoldItemScalarWhereInput | GoldItemScalarWhereInput[]
    id?: IntFilter<"GoldItem"> | number
    userId?: IntFilter<"GoldItem"> | number
    transactionId?: IntFilter<"GoldItem"> | number
    type?: EnumGoldItemTypeFilter<"GoldItem"> | $Enums.GoldItemType
    description?: StringNullableFilter<"GoldItem"> | string | null
    serialNumber?: StringNullableFilter<"GoldItem"> | string | null
    karat?: FloatNullableFilter<"GoldItem"> | number | null
    purity?: FloatNullableFilter<"GoldItem"> | number | null
    weightGrams?: FloatFilter<"GoldItem"> | number
    origin?: StringNullableFilter<"GoldItem"> | string | null
    storageLocation?: StringNullableFilter<"GoldItem"> | string | null
    depositMethod?: EnumDepositMethodFilter<"GoldItem"> | $Enums.DepositMethod
    verified?: BoolFilter<"GoldItem"> | boolean
    verifiedBy?: IntNullableFilter<"GoldItem"> | number | null
    createdAt?: DateTimeFilter<"GoldItem"> | Date | string
    updatedAt?: DateTimeFilter<"GoldItem"> | Date | string
  }

  export type PortfolioUpsertWithoutUserInput = {
    update: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
    create: XOR<PortfolioCreateWithoutUserInput, PortfolioUncheckedCreateWithoutUserInput>
    where?: PortfolioWhereInput
  }

  export type PortfolioUpdateToOneWithWhereWithoutUserInput = {
    where?: PortfolioWhereInput
    data: XOR<PortfolioUpdateWithoutUserInput, PortfolioUncheckedUpdateWithoutUserInput>
  }

  export type PortfolioUpdateWithoutUserInput = {
    totalGrams?: FloatFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unrealizedGain?: FloatFieldUpdateOperationsInput | number
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalGrams?: FloatFieldUpdateOperationsInput | number
    totalInvested?: FloatFieldUpdateOperationsInput | number
    currentValue?: FloatFieldUpdateOperationsInput | number
    unrealizedGain?: FloatFieldUpdateOperationsInput | number
    lastCalculatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAddressesInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutWalletInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPortfolioInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPortfolioInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPortfolioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
  }

  export type UserUpsertWithoutPortfolioInput = {
    update: XOR<UserUpdateWithoutPortfolioInput, UserUncheckedUpdateWithoutPortfolioInput>
    create: XOR<UserCreateWithoutPortfolioInput, UserUncheckedCreateWithoutPortfolioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPortfolioInput, UserUncheckedUpdateWithoutPortfolioInput>
  }

  export type UserUpdateWithoutPortfolioInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutIdentityInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIdentityInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIdentityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdentityInput, UserUncheckedCreateWithoutIdentityInput>
  }

  export type UserUpsertWithoutIdentityInput = {
    update: XOR<UserUpdateWithoutIdentityInput, UserUncheckedUpdateWithoutIdentityInput>
    create: XOR<UserCreateWithoutIdentityInput, UserUncheckedCreateWithoutIdentityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdentityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdentityInput, UserUncheckedUpdateWithoutIdentityInput>
  }

  export type UserUpdateWithoutIdentityInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutGoldItemsInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoldItemsInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoldItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoldItemsInput, UserUncheckedCreateWithoutGoldItemsInput>
  }

  export type TransactionCreateWithoutGoldItemsInput = {
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
    holdings?: HoldingCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutGoldItemsInput = {
    id?: number
    referenceNumber: string
    userId: number
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId?: number | null
    holdings?: HoldingUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutGoldItemsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutGoldItemsInput, TransactionUncheckedCreateWithoutGoldItemsInput>
  }

  export type UserUpsertWithoutGoldItemsInput = {
    update: XOR<UserUpdateWithoutGoldItemsInput, UserUncheckedUpdateWithoutGoldItemsInput>
    create: XOR<UserCreateWithoutGoldItemsInput, UserUncheckedCreateWithoutGoldItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoldItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoldItemsInput, UserUncheckedUpdateWithoutGoldItemsInput>
  }

  export type UserUpdateWithoutGoldItemsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoldItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TransactionUpsertWithoutGoldItemsInput = {
    update: XOR<TransactionUpdateWithoutGoldItemsInput, TransactionUncheckedUpdateWithoutGoldItemsInput>
    create: XOR<TransactionCreateWithoutGoldItemsInput, TransactionUncheckedCreateWithoutGoldItemsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutGoldItemsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutGoldItemsInput, TransactionUncheckedUpdateWithoutGoldItemsInput>
  }

  export type TransactionUpdateWithoutGoldItemsInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
    holdings?: HoldingUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutGoldItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    holdings?: HoldingUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type PaymentCreateWithoutTransactionInput = {
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutTransactionInput = {
    id?: number
    userId: number
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutTransactionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
  }

  export type HoldingCreateWithoutTransactionInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHoldingsInput
  }

  export type HoldingUncheckedCreateWithoutTransactionInput = {
    id?: number
    userId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingCreateOrConnectWithoutTransactionInput = {
    where: HoldingWhereUniqueInput
    create: XOR<HoldingCreateWithoutTransactionInput, HoldingUncheckedCreateWithoutTransactionInput>
  }

  export type HoldingCreateManyTransactionInputEnvelope = {
    data: HoldingCreateManyTransactionInput | HoldingCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type GoldItemCreateWithoutTransactionInput = {
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoldItemsInput
  }

  export type GoldItemUncheckedCreateWithoutTransactionInput = {
    id?: number
    userId: number
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldItemCreateOrConnectWithoutTransactionInput = {
    where: GoldItemWhereUniqueInput
    create: XOR<GoldItemCreateWithoutTransactionInput, GoldItemUncheckedCreateWithoutTransactionInput>
  }

  export type GoldItemCreateManyTransactionInputEnvelope = {
    data: GoldItemCreateManyTransactionInput | GoldItemCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PaymentUpsertWithoutTransactionInput = {
    update: XOR<PaymentUpdateWithoutTransactionInput, PaymentUncheckedUpdateWithoutTransactionInput>
    create: XOR<PaymentCreateWithoutTransactionInput, PaymentUncheckedCreateWithoutTransactionInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutTransactionInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutTransactionInput, PaymentUncheckedUpdateWithoutTransactionInput>
  }

  export type PaymentUpdateWithoutTransactionInput = {
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUpsertWithWhereUniqueWithoutTransactionInput = {
    where: HoldingWhereUniqueInput
    update: XOR<HoldingUpdateWithoutTransactionInput, HoldingUncheckedUpdateWithoutTransactionInput>
    create: XOR<HoldingCreateWithoutTransactionInput, HoldingUncheckedCreateWithoutTransactionInput>
  }

  export type HoldingUpdateWithWhereUniqueWithoutTransactionInput = {
    where: HoldingWhereUniqueInput
    data: XOR<HoldingUpdateWithoutTransactionInput, HoldingUncheckedUpdateWithoutTransactionInput>
  }

  export type HoldingUpdateManyWithWhereWithoutTransactionInput = {
    where: HoldingScalarWhereInput
    data: XOR<HoldingUpdateManyMutationInput, HoldingUncheckedUpdateManyWithoutTransactionInput>
  }

  export type GoldItemUpsertWithWhereUniqueWithoutTransactionInput = {
    where: GoldItemWhereUniqueInput
    update: XOR<GoldItemUpdateWithoutTransactionInput, GoldItemUncheckedUpdateWithoutTransactionInput>
    create: XOR<GoldItemCreateWithoutTransactionInput, GoldItemUncheckedCreateWithoutTransactionInput>
  }

  export type GoldItemUpdateWithWhereUniqueWithoutTransactionInput = {
    where: GoldItemWhereUniqueInput
    data: XOR<GoldItemUpdateWithoutTransactionInput, GoldItemUncheckedUpdateWithoutTransactionInput>
  }

  export type GoldItemUpdateManyWithWhereWithoutTransactionInput = {
    where: GoldItemScalarWhereInput
    data: XOR<GoldItemUpdateManyMutationInput, GoldItemUncheckedUpdateManyWithoutTransactionInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    holdings?: HoldingCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    holdings?: HoldingUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type TransactionCreateWithoutPaymentInput = {
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    holdings?: HoldingCreateNestedManyWithoutTransactionInput
    goldItems?: GoldItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPaymentInput = {
    id?: number
    referenceNumber: string
    userId: number
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    holdings?: HoldingUncheckedCreateNestedManyWithoutTransactionInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPaymentInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    holdings?: HoldingUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    holdings?: HoldingUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TransactionUpsertWithoutPaymentInput = {
    update: XOR<TransactionUpdateWithoutPaymentInput, TransactionUncheckedUpdateWithoutPaymentInput>
    create: XOR<TransactionCreateWithoutPaymentInput, TransactionUncheckedCreateWithoutPaymentInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutPaymentInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutPaymentInput, TransactionUncheckedUpdateWithoutPaymentInput>
  }

  export type TransactionUpdateWithoutPaymentInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    holdings?: HoldingUpdateManyWithoutTransactionNestedInput
    goldItems?: GoldItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPaymentInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    holdings?: HoldingUncheckedUpdateManyWithoutTransactionNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type UserCreateWithoutHoldingsInput = {
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityCreateNestedOneWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    goldItems?: GoldItemCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHoldingsInput = {
    id?: number
    email: string
    password: string
    firstName: string
    middleName?: string | null
    lastName: string
    dateOfBirth?: Date | string | null
    gender?: string | null
    phoneNumber?: string | null
    nationality?: string | null
    country: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    identity?: IdentityUncheckedCreateNestedOneWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutUserInput
    Portfolio?: PortfolioUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHoldingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
  }

  export type TransactionCreateWithoutHoldingsInput = {
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    payment?: PaymentCreateNestedOneWithoutTransactionInput
    goldItems?: GoldItemCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutHoldingsInput = {
    id?: number
    referenceNumber: string
    userId: number
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId?: number | null
    goldItems?: GoldItemUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutHoldingsInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutHoldingsInput, TransactionUncheckedCreateWithoutHoldingsInput>
  }

  export type UserUpsertWithoutHoldingsInput = {
    update: XOR<UserUpdateWithoutHoldingsInput, UserUncheckedUpdateWithoutHoldingsInput>
    create: XOR<UserCreateWithoutHoldingsInput, UserUncheckedCreateWithoutHoldingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHoldingsInput, UserUncheckedUpdateWithoutHoldingsInput>
  }

  export type UserUpdateWithoutHoldingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHoldingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUncheckedUpdateOneWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutUserNestedInput
    Portfolio?: PortfolioUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TransactionUpsertWithoutHoldingsInput = {
    update: XOR<TransactionUpdateWithoutHoldingsInput, TransactionUncheckedUpdateWithoutHoldingsInput>
    create: XOR<TransactionCreateWithoutHoldingsInput, TransactionUncheckedCreateWithoutHoldingsInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutHoldingsInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutHoldingsInput, TransactionUncheckedUpdateWithoutHoldingsInput>
  }

  export type TransactionUpdateWithoutHoldingsInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
    goldItems?: GoldItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutHoldingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    goldItems?: GoldItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type AddressCreateManyUserInput = {
    id?: number
    type?: $Enums.AddressType
    street: string
    city: string
    state?: string | null
    postalCode: string
    country: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    referenceNumber: string
    type: $Enums.TransactionType
    source?: $Enums.TransactionSource
    status?: $Enums.TransactionStatus
    gramsPurchased: number
    pricePerGram: number
    totalCost: number
    fee?: number | null
    currency?: $Enums.Currency
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentId?: number | null
  }

  export type PaymentCreateManyUserInput = {
    id?: number
    method: string
    reference?: string | null
    amount: number
    currency?: $Enums.Currency
    status?: string
    processedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingCreateManyUserInput = {
    id?: number
    transactionId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldItemCreateManyUserInput = {
    id?: number
    transactionId: number
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumAddressTypeFieldUpdateOperationsInput | $Enums.AddressType
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    postalCode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneWithoutTransactionNestedInput
    holdings?: HoldingUpdateManyWithoutTransactionNestedInput
    goldItems?: GoldItemUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
    holdings?: HoldingUncheckedUpdateManyWithoutTransactionNestedInput
    goldItems?: GoldItemUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    referenceNumber?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    source?: EnumTransactionSourceFieldUpdateOperationsInput | $Enums.TransactionSource
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    gramsPurchased?: FloatFieldUpdateOperationsInput | number
    pricePerGram?: FloatFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentUpdateWithoutUserInput = {
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    status?: StringFieldUpdateOperationsInput | string
    processedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemUpdateWithoutUserInput = {
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutGoldItemsNestedInput
  }

  export type GoldItemUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingCreateManyTransactionInput = {
    id?: number
    userId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoldItemCreateManyTransactionInput = {
    id?: number
    userId: number
    type: $Enums.GoldItemType
    description?: string | null
    serialNumber?: string | null
    karat?: number | null
    purity?: number | null
    weightGrams: number
    origin?: string | null
    storageLocation?: string | null
    depositMethod?: $Enums.DepositMethod
    verified?: boolean
    verifiedBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HoldingUpdateWithoutTransactionInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHoldingsNestedInput
  }

  export type HoldingUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HoldingUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemUpdateWithoutTransactionInput = {
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoldItemsNestedInput
  }

  export type GoldItemUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoldItemUncheckedUpdateManyWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumGoldItemTypeFieldUpdateOperationsInput | $Enums.GoldItemType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    karat?: NullableFloatFieldUpdateOperationsInput | number | null
    purity?: NullableFloatFieldUpdateOperationsInput | number | null
    weightGrams?: FloatFieldUpdateOperationsInput | number
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    depositMethod?: EnumDepositMethodFieldUpdateOperationsInput | $Enums.DepositMethod
    verified?: BoolFieldUpdateOperationsInput | boolean
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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