import { assertEquals, assertThrows } from "jsr:@std/assert";
import { RomanToNumeral } from "../src/app.ts";

Deno.test("cas avec 1", () => {
    assertEquals(RomanToNumeral("I"), 1);
});

Deno.test("cas avec 2 et 3", () => {
    assertEquals(RomanToNumeral("II"), 2);
    assertEquals(RomanToNumeral("III"), 3);
});

Deno.test("cas avec 4", () => {
    assertEquals(RomanToNumeral("IV"), 4);
});

Deno.test("cas avec 5", () => {
    assertEquals(RomanToNumeral("V"), 5);
})

Deno.test("cas avec 6", () => {
    assertEquals(RomanToNumeral("VI"), 6);
})