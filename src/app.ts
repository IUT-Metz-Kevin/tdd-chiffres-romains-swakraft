export function romanNumeral(value: number): string {
    if (isNaN(value) || value <= 0 || value % 1 !== 0)  {
        throw new Error("Invalid value");
    }

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

    while(value >= 9) {
        result += "IX";
        value -= 9;
    }

    while (value >= 5) {
        result += "V";
        value -= 5;
    }

    while (value >= 4) {
        result += "IV";
        value -= 4;
    }

    while (value >= 1) {
        result += "I";
        value -= 1;
    }

    return result
}