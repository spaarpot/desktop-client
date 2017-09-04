import { formatMoney } from './utility';

describe('Utility Functions', () => {
    describe('formatMoney', () => {
        it('should expose "formatMoney"', () => {
            expect(formatMoney).toBeTruthy();
        });

        it('should format negative values with leading minus', () => {
            expect(formatMoney(-5)).toEqual('-5.00 €');
        });

        it('should format positive values with NO leading plus', () => {
            expect(formatMoney(5)).toEqual('5.00 €');
        });
    });
});
