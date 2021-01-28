
 export interface IOptions {
  [key: string]: number | boolean|string|undefined;
  rangeContainer?:string,
  minVal?: number;
  maxVal?: number;
  toVal?: number;
  fromVal?: number;
  step?: number;
  units?: string;
  isGorizontal?: boolean;
  isInterval?: boolean;
  isShowVal?: boolean;
}

export interface IOptionsWithDef{
  [key: string]: number | boolean|string;
  rangeContainer:string,
  minVal: number;
  maxVal: number;
  toVal: number;
  fromVal: number;
  step: number;
  units: string;
  isGorizontal: boolean;
  isInterval: boolean;
  isShowVal: boolean;
}


const maxVal = 500;
const minVal = 100;

export const defOptions: IOptionsWithDef = {
  rangeContainer: '.range-here',
  minVal: minVal,
  maxVal: maxVal,
  toVal: maxVal,
  fromVal: minVal,
  step: 100,
  units: " ₽",
  isGorizontal: true,
  isInterval: true,
  isShowVal: true,
};