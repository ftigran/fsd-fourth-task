import './index.scss'
'use strict';


let view = {
    createElements: function(elem,rangeValueFrom,rangeValueTo){
        let rangeSlider = document.createElement('div');
        rangeSlider.className = 'range';
        let rangeValue = document.createElement('p');
        rangeValue.className = 'range__value';
        rangeValue.innerHTML=rangeValueFrom + rangeValueTo;
        rangeSlider.append(rangeValue);


        let rangeRange = document.createElement('div');
        rangeRange.className = 'range__range';

        let rangeBorder = document.createElement('div');
        rangeBorder.className = 'range__border';

        let rangeProgressBar = document.createElement('div');
        rangeProgressBar.className = 'range__progress-bar';

        let rangeFrom = document.createElement('div');
        rangeFrom.className = 'range__from';

        let rangeFromNov = document.createElement('span');
        rangeFromNov.className = 'range__now-value';
        rangeFromNov.innerHTML  = rangeValueFrom;
        rangeFrom.append(rangeFromNov);

        let rangeTo = document.createElement('div');
        rangeTo.className = 'range__to';

        let rangeToNov = document.createElement('span');
        rangeToNov.className = 'range__now-value';
        rangeToNov.innerHTML=rangeValueTo;
        rangeTo.append(rangeToNov);

        rangeProgressBar.append(rangeFrom,rangeTo)
        rangeBorder.append(rangeProgressBar)
        rangeRange.append(rangeBorder)
        rangeSlider.append(rangeRange)
        elem.append(rangeSlider);
    }
};

view.createElements(document.querySelector('.range-here'), 5000, 10000);
console.log('sdds')

let model={
}
let controller={

}