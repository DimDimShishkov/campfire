export interface IRace {
  name: string;
  value: string;
  description: string;
  namesExample: string;
  advice: string;
  abilities: IRaceAbilities[];
}

export interface IRaceAbilities {
  name: string;
  description: string;
}

export interface IParameters {
  nameRU: string;
  nameEN: string;
  description: string;
  initialValue: number;
  value: number;
}

export interface IAbility {
  name: string;
  checked: boolean;
  value: string;
}

export interface IParameter {
  name: string;
  value: number;
  error?: string;
  bonus: string;
}

export interface IClass {
  name: string;
  value: string;
  description: string;
  advice: string;
}

export interface IAbilities {
  name: string;
  values: IAbilitiesValue[];
}
export interface IValue {
  name: string;
  value: number;
  level: number;
  description: string;
}
export interface IAbilitiesValue extends IValue {
  damage: string;
}

export interface ISubclassValue extends IValue {
  abilities: IValue[];
}

export interface ISubclass {
  name: string;
  values: ISubclassValue[];
}

export interface IRaceArray {
  race: IRace[];
  parameters: IParameters[];
  classes: IClass[];
  subclasses: ISubclass[];
  abilities: IAbilities[];
}
