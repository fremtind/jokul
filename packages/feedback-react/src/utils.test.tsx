import { FeedbackOption, FeedbackValue } from "./types";
import {
    getLabel,
    getRawFeedbackValue,
    getRawFeedbackValues,
    hasLabel,
    hasPrompt,
    isFeedbackValue,
    transformToValuePair,
} from "./utils";

const mockFeedbackValue = 2;
const mockFeedbackValues = [1, 2, 3, 4, 5] as FeedbackValue[];
const mockFeedbackOptionWithLabel = { value: 1 as FeedbackValue, label: "ikke i det hele tatt" };
const mockFeedbackOptionWithPrompt = { value: 2 as FeedbackValue, prompt: "hvordan går det?" };
const mockFeedbackOption = { value: 3 as FeedbackValue, label: "nøytral", prompt: "hva skjer?" };
const mockMixedFeedbackValuesAndOptions = [mockFeedbackOptionWithLabel, mockFeedbackOptionWithPrompt, 3, 4] as (
    | FeedbackValue
    | FeedbackOption
)[];

describe("Feedback utils", () => {
    describe(`${hasLabel.name}`, () => {
        it("should return false when FeedbackValue is sent", () => {
            expect(hasLabel(mockFeedbackValue as FeedbackValue)).toBeFalsy();
        });

        it("should return false when label is excluded in FeedbackOption", () => {
            expect(hasLabel(mockFeedbackOptionWithPrompt as FeedbackOption)).toBeFalsy();
        });

        it("should return true when label is included in FeedbackOption", () => {
            expect(hasLabel(mockFeedbackOptionWithLabel as FeedbackOption)).toBeTruthy();
        });

        it("should return true when both label and prompt is included in FeedbackOption", () => {
            expect(hasPrompt(mockFeedbackOption as FeedbackOption)).toBeTruthy();
        });
    });

    describe(`${hasPrompt.name}`, () => {
        it("should return false when FeedbackValue", () => {
            expect(hasPrompt(mockFeedbackValue as FeedbackValue)).toBeFalsy();
        });

        it("should return false when prompt is excluded in FeedbackOption", () => {
            expect(hasPrompt(mockFeedbackOptionWithLabel as FeedbackOption)).toBeFalsy();
        });

        it("should return true when prompt is included in FeedbackOption", () => {
            expect(hasPrompt(mockFeedbackOptionWithPrompt as FeedbackOption)).toBeTruthy();
        });

        it("should return true when both label and prompt is included in FeedbackOption", () => {
            expect(hasPrompt(mockFeedbackOption as FeedbackOption)).toBeTruthy();
        });
    });

    describe(`${getLabel.name}`, () => {
        it("should return raw value as string when label is FeedbackValue ", () => {
            expect(getLabel(mockFeedbackValue)).toBe(`${mockFeedbackValue}`);
        });

        it("should return raw value as string when label is excluded in FeedbackOption", () => {
            expect(getLabel(mockFeedbackOptionWithPrompt)).toBe(`${mockFeedbackOptionWithPrompt.value}`);
        });

        it("should return label when label is included in FeedbackOption", () => {
            expect(getLabel(mockFeedbackOptionWithLabel)).toBe(mockFeedbackOptionWithLabel.label);
        });
    });

    describe(`${getRawFeedbackValue.name}`, () => {
        it("should return 2 when FeedbackValue", () => {
            expect(getRawFeedbackValue(mockFeedbackValue)).toBe(2);
        });

        it("should return 3 when FeedbackOption", () => {
            expect(getRawFeedbackValue(mockFeedbackOption)).toBe(3);
        });
    });

    describe(`${getRawFeedbackValues.name}`, () => {
        it("should return raw values when input is array of FeedbackValue", () => {
            expect(getRawFeedbackValues(mockFeedbackValues)).toEqual(mockFeedbackValues);
        });
        it("should return raw values when input is array of FeedbackOption", () => {
            expect(getRawFeedbackValues([mockFeedbackOptionWithLabel, mockFeedbackOptionWithPrompt])).toEqual([1, 2]);
        });
        it("should return raw values when input is array of FeedbackValue/FeedbackOption ", () => {
            expect(getRawFeedbackValues(mockMixedFeedbackValuesAndOptions)).toEqual([1, 2, 3, 4]);
        });
    });

    describe(`${isFeedbackValue.name}`, () => {
        it("should return false for FeedbackOption", () => {
            expect(isFeedbackValue(mockFeedbackOption)).toBeFalsy();
        });

        it("should return false for undefined", () => {
            // @ts-expect-error one does not simply true
            expect(isFeedbackValue(undefined)).toBeFalsy();
        });

        it("should return false for null", () => {
            // @ts-expect-error hurr durr?
            expect(isFeedbackValue(null)).toBeFalsy();
        });

        it("should retun true for FeedbackValue", () => {
            expect(isFeedbackValue(mockFeedbackValue)).toBeTruthy();
        });
    });

    describe(`${transformToValuePair.name}`, () => {
        it("should return label and value when input is FeedbackValue", () => {
            expect(transformToValuePair(mockFeedbackValue)).toEqual({ label: "2", value: 2 });
        });
        it("should return label and value when input is FeedbackOption without label", () => {
            expect(transformToValuePair(mockFeedbackOptionWithPrompt)).toEqual({ label: "2", value: 2 });
        });

        it("should return label and value when input is FeedbackOption with label", () => {
            expect(transformToValuePair(mockFeedbackOptionWithLabel)).toEqual({
                label: "ikke i det hele tatt",
                value: 1,
            });
            expect(transformToValuePair(mockFeedbackOption)).toEqual({ label: "nøytral", value: 3 });
        });
    });
});
