export {};

// interface GetUser {
//   getId: () => string;
//   getName: () => string;
//   getAge?: () => number;
// }

type GetUser = Getter<User>;

export type Getter<Type extends object> = {
  [Key in keyof Type as `get${Capitalize<Key & string>}`]: () => Type[Key];
};

type Route = `/${string}`;

const postRoute = "/user/post/:44";
const jsonPostRoute = "/user/post/:{id:44}";
const badRoute = "/user/post/";

type ParsedRoute = ParseRoute<typeof postRoute>;
type JsonParsedRoute = ParseRoute<typeof jsonPostRoute>;
type BadParsedRoute = ParseRoute<typeof badRoute>;

type Param<Key, Value> = { key: Key; value: Value };
type URL<TURL extends string> = `/${TURL}`;

type ParseRoute<TRoute extends string> =
  TRoute extends `/${infer TURL}:${infer TParam}`
    ? TParam extends `{${infer Key}:${infer Value}}`
      ? { route: URL<TURL>; param: Param<Key, Value> }
      : { route: URL<TURL>; param: TParam }
    : { badRoute: TRoute };

interface User {
  id: string;
  name: { firstName: string; lastName: string; nickNames: string[] };
  age?: number;
}

type RequiredUser = Required<User>;
type PartialUser = Partial<User>;
type UserNameAndAge = Pick<User, "name" | "age">;
type UserNoNameOrAge = Omit<User, "name" | "age">;

type DeepPartialUser = DeepPartial<User>;

const jason: DeepPartialUser = {
  name: { firstName: "Jason", nickNames: ["bookworm", "sleepy"] },
};

type DeepPartial<Type> = Type extends Array<infer TArray>
  ? Array<DeepPartial<TArray>>
  : {
      [Key in keyof Type]?: DeepPartial<Type[Key]>;
    };

type UserKeys = keyof User;
type UserNameType = User["age"];

type NeverUser = OptionalNever<User>;

export type OptionalNever<Type extends object> = {
  [Key in keyof Type]?: never;
};

export type Dynamic<Type extends object> = Type | OptionalNever<Type>;
