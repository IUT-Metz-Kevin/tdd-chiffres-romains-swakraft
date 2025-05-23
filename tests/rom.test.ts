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