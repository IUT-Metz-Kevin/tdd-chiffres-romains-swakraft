import { assertEquals, assertThrows } from "jsr:@std/assert";
import { romanNumeral } from "../src/app.ts";

Deno.test("cas avec 1000", () => {
    assertEquals(romanNumeral(1000), "M");
});

Deno.test("cas avec multiples de 1000", () => {
    assertEquals(romanNumeral(2000), "MM");
});