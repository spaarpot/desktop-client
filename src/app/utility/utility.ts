/**
 * Formats a euro amount into a consistent format.
 * @param amount The euro amount to format.
 */
export const formatMoney = (amount: number): string => {
    return `${amount.toFixed(2)} €`;
};
