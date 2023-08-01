function getSymbolByLocale(locale: string): string {
    return locale === 'USD' ? '$' : '?';
}

export function currency(price: number | undefined, locale: string): string {
    return price ? `${price} ${getSymbolByLocale(locale)}` : '-';
}
