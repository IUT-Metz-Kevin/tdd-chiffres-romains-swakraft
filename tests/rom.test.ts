import { assertEquals, assertThrows } from "jsr:@std/assert";
import { numeralToRoman } from "../src/app.ts";

Deno.test("cas avec 1000", () => {
    assertEquals(numeralToRoman(1000), "M");
});

Deno.test("cas avec multiples de 1000", () => {
    assertEquals(numeralToRoman(2000), "MM");
    assertEquals(numeralToRoman(5000), "MMMMM");
});

Deno.test("cas avec 500", () => {
    assertEquals(numeralToRoman(500), "D");
});

Deno.test("Combo 1000 et 500", () => {
    assertEquals(numeralToRoman(2500), "MMD");
    assertEquals(numeralToRoman(1500), "MD");
});

Deno.test("cas avec 100", () => {
    assertEquals(numeralToRoman(100), "C");
});

Deno.test("cas avec multiples 100", () => {
    assertEquals(numeralToRoman(300), "CCC");
});

Deno.test("cas avec 500 et 100", () => {
    assertEquals(numeralToRoman(600), "DC");
    assertEquals(numeralToRoman(800), "DCCC");
});

Deno.test("cas avec 1000, 500 et 100", () => {
    assertEquals(numeralToRoman(1600), "MDC");
    assertEquals(numeralToRoman(2800), "MMDCCC");
});

Deno.test("cas avec 50", () => {
    assertEquals(numeralToRoman(50), "L");
});

Deno.test("cas avec 1000, 500, 100 et 50", () => {
    assertEquals(numeralToRoman(1650), "MDCL");
    assertEquals(numeralToRoman(2850), "MMDCCCL");
});

Deno.test("cas avec 10", () => {
    assertEquals(numeralToRoman(10), "X");
});

Deno.test("cas avec multiples de 10", () => {
    assertEquals(numeralToRoman(30), "XXX");
});

Deno.test("cas avec 1000, 500, 100, 50 et 10", () => {
    assertEquals(numeralToRoman(1660), "MDCLX");
    assertEquals(numeralToRoman(2880), "MMDCCCLXXX");
});

Deno.test("cas avec 5", () => {
    assertEquals(numeralToRoman(5), "V");
});

Deno.test("cas avec 1000, 500, 100, 50, 10 et 5", () => {
    assertEquals(numeralToRoman(1665), "MDCLXV");
    assertEquals(numeralToRoman(2885), "MMDCCCLXXXV");
});

Deno.test("cas avec 4", () => {
    assertEquals(numeralToRoman(4), "IV");
});

Deno.test("cas avec 1000, 500, 100, 50, 10, 5 et 4", () => {
    assertEquals(numeralToRoman(1664), "MDCLXIV");
    assertEquals(numeralToRoman(2884), "MMDCCCLXXXIV");
})

Deno.test("cas avec 1", () => {
    assertEquals(numeralToRoman(1), "I");
});

Deno.test("cas avec mutiples de 1", () => {
    assertEquals(numeralToRoman(3), "III");
});

Deno.test("cas avec 1000, 500, 100, 50, 10, 5, et 1", () => {
    assertEquals(numeralToRoman(1667), "MDCLXVII");
    assertEquals(numeralToRoman(2886), "MMDCCCLXXXVI");
})

Deno.test("cas spécial avec 10*n-1", () => {
    assertEquals(numeralToRoman(19), "XIX");
    assertEquals(numeralToRoman(29), "XXIX");
    assertEquals(numeralToRoman(39), "XXXIX");
    assertEquals(numeralToRoman(69), "LXIX");
})

Deno.test("cas avec 0", () => {
    assertThrows(() => {
        numeralToRoman(0);
    })
})

Deno.test("cas avec chiffre négatif", () => {
    assertThrows(() => {
        numeralToRoman(-5);
    })
})

Deno.test("cas avec chiffre non entier", () => {
    assertThrows(() => {
        numeralToRoman(5.7);
    })
})

Deno.test("cas avec chiffre spcial", () => {
    assertThrows(() => {
        numeralToRoman(Infinity);
    });
    assertThrows(() => {
        numeralToRoman(NaN);
    })
})