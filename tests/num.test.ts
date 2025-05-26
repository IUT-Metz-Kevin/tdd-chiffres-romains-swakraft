import { assertEquals, assertThrows } from "jsr:@std/assert";
import { RomanToNumeral } from "../src/app.ts";

Deno.test("cas avec 1", () => {
    assertEquals(RomanToNumeral("I"), 1);
});

Deno.test("cas avec 2 et 3", () => {
    assertEquals(RomanToNumeral("II"), 2);
    assertEquals(RomanToNumeral("III"), 3);
});