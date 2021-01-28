import {Model} from '../src/modules/model/model'
//const sum = require('../src/index/index.ts');
const options = {
    rangeContainer: '.range-1',
    minVal: 2000,
    maxVal:10000,
    toVal:7000,
    fromVal:2000,
    step: 100,
    units: '$',
    isGorizontal: true,
    isInterval: true,
    isShowVal: true,
}
const model=new Model(options)

test('Model.calcValFormula', () => {
    expect(model.calcValFormula(1)).toBe(10000);
    expect(model.calcValFormula(0)).toBe(2000);
    expect(model.calcValFormula(0.25)).toBe(4000);
    expect(model.calcValFormula(0.33)).toBe(4700);
    expect(model.calcValFormula(0.1)).toBe(2800);

  });

  test('Model.getPercentOfVal', () => {
    expect(model.getPercentOfVal(2000)).toBe(0);
    expect(model.getPercentOfVal(10000)).toBe(1);
    expect(model.getPercentOfVal(4000)).toBe(0.25);
    expect(model.getPercentOfVal(4700)).toBe(0.3375);
    expect(model.getPercentOfVal(2800)).toBe(0.1);

  });

  test('Model.getRangeTo & Model.getRangeFrom', () => {
    expect(model.getRangeTo()).toBe(options.toVal+options.units);
    expect(model.getRangeFrom()).toBe(options.fromVal+options.units);


  });
  //--метод не готов
//   test('Model.calcValFormula', () => {
//     expect(model.calcRangeValue(1)).toBe(10000);


//   });
