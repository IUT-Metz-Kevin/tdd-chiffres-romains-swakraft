export function romanNumeral(value: number): string {
    let result = "";
    while (value >= 1000) {
        result += "M";
        value -= 1000;
    }

    return result
}