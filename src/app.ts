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

    while (value >= 100) {
        result += "C";
        value -= 100;
    }

    while (value >= 50) {
        result += "L";
        value -= 50;
    }

    while (value >= 10) {
        result += "X";
        value -= 10;
    }

    return result
}