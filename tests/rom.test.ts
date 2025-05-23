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