class View {
    constructor(props){
        let {
            elem,
            minVal= 100,
            maxVal=500,
            toVal=minVal,
            fromVal=maxVal,
            step= 100,
            isGorizontal= true,
            isInterval= true,
            isShowVal= true,
        }= props;

        this.elem = elem;
        this.minVal = minVal;
        this.maxVal=maxVal;
        this.toVal=toVal;
        this.fromVal=fromVal;
        this.step= step;
        this.isGorizontal= isGorizontal;
        this.isInterval= isInterval;
        this.isShowVal= isShowVal;
        createElements(document.querySelector('.range-here'), 5000, 10000, '₽')
    }
    createElements (elem,rangeValueFrom,rangeValueTo, units){
        let rangeSlider = document.createElement('div');
        rangeSlider.className = 'range';
        let rangeValue = document.createElement('p');
        rangeValue.className = 'range__value';
        rangeValue.innerHTML=rangeValueFrom+units+' - ' + rangeValueTo+units;
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
        rangeFromNov.innerHTML  = rangeValueFrom+units;
        rangeFrom.append(rangeFromNov);

        let rangeTo = document.createElement('div');
        rangeTo.className = 'range__to';

        let rangeToNov = document.createElement('span');
        rangeToNov.className = 'range__now-value';
        rangeToNov.innerHTML=rangeValueTo+units;
        rangeTo.append(rangeToNov);

        rangeProgressBar.append(rangeFrom,rangeTo)
        rangeBorder.append(rangeProgressBar)
        rangeRange.append(rangeBorder)
        rangeSlider.append(rangeRange)
        elem.append(rangeSlider);
    }
}
