export type PredeterminedSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';

export type Unit = 'px' | 'rem' | 'em' | 'vw' | 'vh' | '%' | 'ch' | 'ex' | 'cm' | 'mm' | 'in' | 'pt' | 'pc';
export type NumericWithUnit = `${number}${Unit}`;
export type CalcExpressionChar = number | '.' | '+' | '-' | '*' | '/' | '(' | ')' | '_'
export type NonEmptyCalcContentString = `${CalcExpressionChar}${string}` | CalcExpressionChar;
export type ValidCalc = `calc(${NonEmptyCalcContentString})`;
export type ValidBracketContent = NumericWithUnit | ValidCalc;

export type ComponentSizeValue<
    Prefix extends string,
    Value extends PredeterminedSize = PredeterminedSize
> = `${Prefix}-${Value}` | `${Prefix}-${number}` | `${Prefix}-[${ValidBracketContent}]`;

export type ComponentSize<
    Prefix extends string,
    Value extends PredeterminedSize = PredeterminedSize
> = ComponentSizeValue<Prefix, Value> | Partial<Record<ComponentSizeValue<Prefix, Value>, boolean>>;