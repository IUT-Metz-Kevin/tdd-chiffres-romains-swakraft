import { assertEquals, assertThrows } from "jsr:@std/assert";
import { romanNumeral } from "../src/app.ts";

Deno.test("cas avec 1000", () => {
    assertEquals(romanNumeral(1000), "M");
});

Deno.test("cas avec multiples de 1000", () => {
    assertEquals(romanNumeral(2000), "MM");
    assertEquals(romanNumeral(5000), "MMMMM");
});

Deno.test("cas avec 500", () => {
    assertEquals(romanNumeral(500), "D");
});

Deno.test("Combo 1000 et 500", () => {
    assertEquals(romanNumeral(2500), "MMD");
    assertEquals(romanNumeral(1500), "MD");
});

Deno.test("cas avec 100", () => {
    assertEquals(romanNumeral(100), "C");
});

Deno.test("cas avec multiples 100", () => {
    assertEquals(romanNumeral(300), "CCC");
});

Deno.test("cas avec 500 et 100", () => {
    assertEquals(romanNumeral(600), "DC");
    assertEquals(romanNumeral(800), "DCCC");
});

Deno.test("cas avec 1000, 500 et 100", () => {
    assertEquals(romanNumeral(1600), "MDC");
    assertEquals(romanNumeral(2800), "MMDCCC");
});

Deno.test("cas avec 50", () => {
    assertEquals(romanNumeral(50), "L");
});

Deno.test("cas avec 1000, 500, 100 et 50", () => {
    assertEquals(romanNumeral(1650), "MDCL");
    assertEquals(romanNumeral(2850), "MMDCCCL");
});

Deno.test("cas avec 10", () => {
    assertEquals(romanNumeral(10), "X");
});

Deno.test("cas avec multiples de 10", () => {
    assertEquals(romanNumeral(30), "XXX");
});

Deno.test("cas avec 1000, 500, 100, 50 et 10", () => {
    assertEquals(romanNumeral(1660), "MDCLX");
    assertEquals(romanNumeral(2880), "MMDCCCLXXX");
});

Deno.test("cas avec 5", () => {
    assertEquals(romanNumeral(5), "V");
});

Deno.test("cas avec 1000, 500, 100, 50, 10 et 5", () => {
    assertEquals(romanNumeral(1665), "MDCLXV");
    assertEquals(romanNumeral(2885), "MMDCCCLXXXV");
});

Deno.test("cas avec 4", () => {
    assertEquals(romanNumeral(4), "IV");
});

Deno.test("cas avec 1000, 500, 100, 50, 10, 5 et 4", () => {
    assertEquals(romanNumeral(1664), "MDCLXIV");
    assertEquals(romanNumeral(2884), "MMDCCCLXXXIV");
})

Deno.test("cas avec 1", () => {
    assertEquals(romanNumeral(1), "I");
});

Deno.test("cas avec mutiples de 1", () => {
    assertEquals(romanNumeral(3), "III");
});

Deno.test("cas avec 1000, 500, 100, 50, 10, 5, et 1", () => {
    assertEquals(romanNumeral(1667), "MDCLXVII");
    assertEquals(romanNumeral(2886), "MMDCCCLXXXVI");
})

Deno.test("cas spécial avec 10*n-1", () => {
    assertEquals(romanNumeral(19), "XIX");
    assertEquals(romanNumeral(29), "XXIX");
    assertEquals(romanNumeral(39), "XXXIX");
    assertEquals(romanNumeral(69), "LXIX");
})

Deno.test("cas avec 0", () => {
    assertThrows(() => {
        romanNumeral(0);
    })
})

Deno.test("cas avec chiffre négatif", () => {
    assertThrows(() => {
        romanNumeral(-5);
    })
})

Deno.test("cas avec chiffre non entier", () => {
    assertThrows(() => {
        romanNumeral(5.7);
    })
})

Deno.test("cas avec chiffre spcial", () => {
    assertThrows(() => {
        romanNumeral(Infinity);
    });
    assertThrows(() => {
        romanNumeral(NaN);
    })
})