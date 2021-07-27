export declare function Entity(x?: any, y?: (x: any) => any): ClassDecorator;
export declare function Column(x?: any, y?: (x: any) => any): PropertyDecorator;
export declare function ViewColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function DeleteDateColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function CreateDateColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function ObjectIdColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function PrimaryColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function PrimaryGeneratedColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function UpdateDateColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function VersionColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function AfterInsert(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function AfterLoad(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function AfterRemove(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function AfterUpdate(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function BeforeInsert(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function BeforeRemove(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function BeforeUpdate(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function EventSubscriber(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function JoinColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function JoinTable(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function ManyToMany(
  x?: any,
  y?: any,
  z?: any
): PropertyDecorator;
export declare function ManyToOne(x?: any, y?: any, z?: any): PropertyDecorator;
export declare function OneToMany(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function OneToOne(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function RelationCount(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function RelationId(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function ChildEntity(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function ViewEntity(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function TableInheritance(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;

export declare function Tree(x?: any, y?: (x: any) => any): PropertyDecorator;
export declare function TreeChildren(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function TreeChildrenCount(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function TreeLevelColumn(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function TreeParent(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function Generated(
  x?: any,
  y?: (x: any) => any,
  z?: any
): PropertyDecorator;
export declare function Index(x?: any, y?: (x: any) => any): PropertyDecorator;

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

import { EntityFieldsNames } from "../common/EntityFieldsNames";
import { JoinOptions } from "./JoinOptions";
import { ObjectLiteral } from "../common/ObjectLiteral";
import { FindConditions } from "./FindConditions";
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
    [P in EntityFieldsNames<Entity>]?: "ASC" | "DESC" | 1 | -1;
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
