/** 
* @jest-environment jsdom
*/

const { test, expect } = require("@jest/globals");
const { game, playGame } = require("../script"); 
const { beforeAll } = require("jest-circus");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});


describe("game object contains correct keys", () => {
    test("level key exists", () => {
        expect("level" in game).toBe(true);
    });
    test("correctAnswers key exists", () => {
        expect("correctAnswers" in game).toBe(true);
    });
    test("incorrectAnswers key exists", () => {
        expect("incorrectAnswers" in game).toBe(true);
    });
    test("questionCount key exists", () => {
        expect("questionCount" in game).toBe(true);
    });
    test("playerAnswer key exists", () => {
        expect("playerAnswer" in game).toBe(true);
    });
    test("animals key exists", () => {
        expect("animals" in game).toBe(true);
    });
    test("currentAnimal key exists", () => {
        expect("currentAnimal" in game).toBe(true);
    });
    test("muted key exists", () => {
        expect("muted" in game).toBe(true);
    });
});

describe ("playGame works correctly", () => {
    beforeAll(() => {
        game.correctAnswers = 7;
        game.incorrectAnswers = 2;
        game.questionCount = 9;
        playGame();
    });
    test("should set correctAnswers to 0", () => {
        expect(game.correctAnswers).toEqual(0);
    });
    test("should set incorrectAnswers to 0", () => {
        expect(game.incorrectAnswers).toEqual(0);
    });
    test("should set questionCount to 0", () => {
        expect(game.questionCount).toEqual(0);
    });
});


