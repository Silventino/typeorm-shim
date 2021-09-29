export declare function Entity(...args: any): ClassDecorator;
export declare function Column(...args: any): PropertyDecorator;
export declare function ViewColumn(...args: any): PropertyDecorator;
export declare function DeleteDateColumn(...args: any): PropertyDecorator;
export declare function CreateDateColumn(...args: any): PropertyDecorator;
export declare function ObjectIdColumn(...args: any): PropertyDecorator;
export declare function PrimaryColumn(...args: any): PropertyDecorator;
export declare function PrimaryGeneratedColumn(...args: any): PropertyDecorator;
export declare function UpdateDateColumn(...args: any): PropertyDecorator;
export declare function VersionColumn(...args: any): PropertyDecorator;
export declare function AfterInsert(...args: any): PropertyDecorator;
export declare function AfterLoad(...args: any): PropertyDecorator;
export declare function AfterRemove(...args: any): PropertyDecorator;
export declare function AfterUpdate(...args: any): PropertyDecorator;
export declare function BeforeInsert(...args: any): PropertyDecorator;
export declare function BeforeRemove(...args: any): PropertyDecorator;
export declare function BeforeUpdate(...args: any): PropertyDecorator;
export declare function EventSubscriber(...args: any): PropertyDecorator;
export declare function JoinColumn(...args: any): PropertyDecorator;
export declare function JoinTable(...args: any): PropertyDecorator;
export declare function ManyToMany(...args: any): PropertyDecorator;
export declare function ManyToOne(...args:any): PropertyDecorator;
export declare function OneToMany(...args: any): PropertyDecorator;
export declare function OneToOne(...args: any): PropertyDecorator;
export declare function RelationCount(...args: any): PropertyDecorator;
export declare function RelationId(...args: any): PropertyDecorator;
export declare function ChildEntity(...args: any): PropertyDecorator;
export declare function ViewEntity(...args: any): PropertyDecorator;
export declare function TableInheritance(...args: any): PropertyDecorator;

export declare function Tree(...args: any): PropertyDecorator;
export declare function TreeChildren(...args: any): PropertyDecorator;
export declare function TreeChildrenCount(...args: any): PropertyDecorator;
export declare function TreeLevelColumn(...args: any): PropertyDecorator;
export declare function TreeParent(...args: any): PropertyDecorator;
export declare function Generated(...args: any): PropertyDecorator;
export declare function Index(...args: any): PropertyDecorator;

//////////////////////////////////////////////////////////////////////

export interface MigrationInterface {
  name?: string;
  up(queryRunner: any): Promise<any>;
  down(queryRunner: any): Promise<any>;
}

export type QueryRunner = any;

export declare type FindConditions<T> = {
  [P in keyof T]?: T[P] extends never
    ? FindConditions<T[P]> | FindOperator<FindConditions<T[P]>>
    : FindConditions<T[P]> | FindOperator<FindConditions<T[P]>>;
};

declare type SqlGeneratorType = (aliasPath: string) => string;
/**
 * Find Operator used in Find Conditions.
 */
export declare class FindOperator<T> {
  /**
   * Operator type.
   */
  private _type;
  /**
   * Parameter value.
   */
  private _value;
  /**
   * ObjectLiteral parameters.
   */
  private _objectLiteralParameters;
  /**
   * Indicates if parameter is used or not for this operator.
   */
  private _useParameter;
  /**
   * Indicates if multiple parameters must be used for this operator.
   */
  private _multipleParameters;
  /**
   * SQL generator
   */
  private _getSql;
  constructor(
    type: FindOperatorType,
    value: T | FindOperator<T>,
    useParameter?: boolean,
    multipleParameters?: boolean,
    getSql?: SqlGeneratorType,
    objectLiteralParameters?: ObjectLiteral
  );
  /**
   * Indicates if parameter is used or not for this operator.
   * Extracts final value if value is another find operator.
   */
  get useParameter(): boolean;
  /**
   * Indicates if multiple parameters must be used for this operator.
   * Extracts final value if value is another find operator.
   */
  get multipleParameters(): boolean;
  /**
   * Gets the Type of this FindOperator
   */
  get type(): string;
  /**
   * Gets the final value needs to be used as parameter value.
   */
  get value(): T;
  /**
   * Gets ObjectLiteral parameters.
   */
  get objectLiteralParameters(): ObjectLiteral | undefined;
  /**
   * Gets the child FindOperator if it exists
   */
  get child(): FindOperator<T> | undefined;
  /**
   * Gets the SQL generator
   */
  get getSql(): SqlGeneratorType | undefined;
}

export interface ObjectLiteral {
  [key: string]: any;
}

/**
 * List of types that FindOperator can be.
 */
export declare type FindOperatorType =
  | "not"
  | "lessThan"
  | "lessThanOrEqual"
  | "moreThan"
  | "moreThanOrEqual"
  | "equal"
  | "between"
  | "in"
  | "any"
  | "isNull"
  | "ilike"
  | "like"
  | "raw";

export interface JoinOptions {
  alias: string;
  leftJoinAndSelect?: {
    [key: string]: string;
  };
  innerJoinAndSelect?: {
    [key: string]: string;
  };
  leftJoin?: {
    [key: string]: string;
  };
  innerJoin?: {
    [key: string]: string;
  };
}

// import { EntityFieldsNames } from "../common/EntityFieldsNames";
// import { JoinOptions } from "./JoinOptions";
// import { ObjectLiteral } from "../common/ObjectLiteral";
// import { FindConditions } from "./FindConditions";
/**
 * Defines a special criteria to find specific entity.
 */
export interface FindOneOptions<Entity = any> {
  select?: (keyof Entity)[];
  where?:
    | FindConditions<Entity>[]
    | FindConditions<Entity>
    | ObjectLiteral
    | string;
  relations?: string[];
  join?: JoinOptions;
  order?: {
    [P in keyof Entity]?: "ASC" | "DESC" | 1 | -1;
  };
  cache?:
    | boolean
    | number
    | {
        id: any;
        milliseconds: number;
      };
  lock?:
    | {
        mode: "optimistic";
        version: number | Date;
      }
    | {
        mode:
          | "pessimistic_read"
          | "pessimistic_write"
          | "dirty_read"
          | "pessimistic_partial_write"
          | "pessimistic_write_or_fail"
          | "for_no_key_update";
        tables?: string[];
      };
  withDeleted?: boolean;
  loadRelationIds?:
    | boolean
    | {
        relations?: string[];
        disableMixedMap?: boolean;
      };
  loadEagerRelations?: boolean;
  transaction?: boolean;
}

export interface FindManyOptions<Entity = any> extends FindOneOptions<Entity> {
  skip?: number;
  take?: number;
}
