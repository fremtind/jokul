/**
 * MIT License
 *
 * Copyright (c) 2019 Ivar Nilsen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
// https://github.com/ivarni/ninno

const K1_FACTORS = [3, 7, 6, 1, 8, 9, 4, 5, 2];
const K2_FACTORS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

const getChecksumDigit = (fnr: string, factors: number[]) => {
    const sum =
        11 -
        (Array.from(fnr.substring(0, factors.length)).reduce(
            (_sum, digit, i) => _sum + Number(digit) * factors[i],
            0,
        ) %
            11);
    return sum === 11 ? 0 : sum;
};

export const getChecksumDigits = (fnr: string) => {
    const k1 = getChecksumDigit(fnr, K1_FACTORS);
    return [k1, getChecksumDigit(fnr + k1, K2_FACTORS)];
};

/**
 * Sjekker om verdien validerer som et gyldig fødselsnummer.
 * @param value Verdien som skal valideres
 * @returns Om verdien er et gyldig fødselsnummer
 */
export const isValidFodselsnummer = (value: string): boolean => {
    if (!value || value.length !== 11 || value === "00000000000") {
        return false;
    }

    if (Number(value.charAt(9)) !== getChecksumDigit(value, K1_FACTORS)) {
        return false;
    }

    return Number(value.charAt(10)) === getChecksumDigit(value, K2_FACTORS);
};
