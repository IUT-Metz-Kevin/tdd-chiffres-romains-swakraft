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

Deno.test("cas avec 7", () => {
    assertEquals(RomanToNumeral("VII"), 7);
})

Deno.test("cas avec 8", () => {
    assertEquals(RomanToNumeral("VIII"), 8);
})

Deno.test("cas avec 9", () => {
    assertEquals(RomanToNumeral("IX"), 9);
})

Deno.test("cas avec 10", () => {
    assertEquals(RomanToNumeral("X"), 10);
})

Deno.test("cas avec multiples de 10", () => {
    assertEquals(RomanToNumeral("XX"), 20);
    assertEquals(RomanToNumeral("XXXX"), 40);
})

Deno.test("ok on balance la sauce", () => {
    assertEquals(RomanToNumeral("XII"), 12);
    assertEquals(RomanToNumeral("XXIV"), 24);
})

Deno.test("cas avec 50", () => {
    assertEquals(RomanToNumeral("L"), 50);
})

Deno.test("cas divers avec 50 et autres", () => {
    assertEquals(RomanToNumeral("LXIII"), 63);
})

Deno.test("cas avec 100", () => {
    assertEquals(RomanToNumeral("C"), 100);
})

Deno.test("cas avec mutiples de 100", () => {
    assertEquals(RomanToNumeral("C"), 100);
    assertEquals(RomanToNumeral("CCC"), 300);
})