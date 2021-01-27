
 export module OptionsModule{
  export interface IOptions {
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

  export const defOptions: IOptions = {
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
 }
