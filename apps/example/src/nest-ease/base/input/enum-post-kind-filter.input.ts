// This file is generated by @nest-ease/generator. DO NOT MODIFY!
import { InputType, Field } from '@nestjs/graphql';
import { PostKind } from '../enum';

@InputType()
export class EnumPostKindFilter {
  @Field(() => PostKind, { nullable: true, description: undefined })
  equals?: keyof typeof PostKind | null;
  @Field(() => [PostKind], { nullable: true, description: undefined })
  in?: Array<keyof typeof PostKind> | null;
  @Field(() => [PostKind], { nullable: true, description: undefined })
  notIn?: Array<keyof typeof PostKind> | null;
  @Field(() => PostKind, { nullable: true, description: undefined })
  not?: keyof typeof PostKind | null;
}
