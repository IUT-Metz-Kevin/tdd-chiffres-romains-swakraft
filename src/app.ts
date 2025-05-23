export function romanNumeral(value: number): string {
    let result = "";
    while (value >= 1000) {
        result += "M";
        value -= 1000;
    }

    while (value >= 500) {
        result += "D";
        value -= 500;
    }

    return result
}