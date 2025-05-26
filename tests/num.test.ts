import { assertEquals, assertThrows } from "jsr:@std/assert";
import { RomanToNumeral } from "../src/app.ts";

Deno.test("cas avec 1", () => {
    assertEquals(RomanToNumeral("I"), 1);
});