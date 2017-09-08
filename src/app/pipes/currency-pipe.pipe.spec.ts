import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {
    const pipe = new CurrencyPipe();

    it('should expose "formatMoney"', () => {
        expect(pipe).toBeTruthy();
    });

    it('should format negative values with leading minus', () => {
        expect(pipe.transform(-5)).toEqual('-5.00 €');
    });

    it('should format positive values with NO leading plus', () => {
        expect(pipe.transform(5)).toEqual('5.00 €');
    });
});
