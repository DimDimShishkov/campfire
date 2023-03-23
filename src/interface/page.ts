export interface ICard {
  id: number;
  name: string;
  year: number;
  description: string;
  genre: number[];
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IData {
  card: ICard;
  isLiked: boolean;
  likeToggleEvent: (card: ICard) => void;
}

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
  bonus: string;
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
  hitDice: string;
  hitPerLvl: string;
  armors: string;
  weapons: string;
  skills: string;
  feature: string;
  featureDesc: string;
  evolutionName: string;
  evolution: IEvolution[];
  abilities: IAbilities[];
  peculiaritiesName: string;
  peculiarities: IPeculiarities[];
}
interface IEvolution {
  level: number;
  profBonus: string;
  featureBonus: string;
  abilities: string;
}
interface IPeculiarities {
  name: string;
  description: string;
  abilities: IAbilities[];
}
export interface IAbilities {
  name: string;
  availableFrom: string;
  description: string;
}
