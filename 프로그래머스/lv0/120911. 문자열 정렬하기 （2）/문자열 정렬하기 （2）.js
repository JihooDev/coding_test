function solution(my_string) {
    var result = my_string.toLocaleLowerCase().split("").sort();

    return result.join("");
}