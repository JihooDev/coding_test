function solution(my_string) {
    const value = my_string.split("");
    const rule = ["a", "e", "i", "o", "u"];

    return value.filter((v, i) => !rule.includes(v)).join('');
}