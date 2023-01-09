function timeWord(digits) {
    const time = digits.split(":");
    let timePhrase = "";

    if (time[0] === "00" && time[1] === "00") {
        return "midnight";
    }

    if (time[0] === "12" && time[1] === "00") {
        return "noon";
    }
    let hours = hourWords[time[0]];
    let minutes = time[1].split("");

    timePhrase += hours + " ";

    if (time[1] >= "10" && time[1] <= "19") {
        timePhrase += minuteTens[time[1]] + " ";
    }
    else {
        timePhrase += `${minuteFirst[minutes[0]]} ${minuteSecond[minutes[1]]} `
    }

    if (hours < "12") {
        timePhrase += "am";
    }
    else {
        timePhrase += "pm";
    }

    return timePhrase;

}

//get word with hourWords[key]
const hourWords = {
    "00": "twelve",
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "one",
    "14": "two",
    "15": "three",
    "16": "four",
    "17": "five",
    "18": "six",
    "19": "seven",
    "20": "eight",
    "21": "nine",
    "22": "ten",
    "23": "eleven"
}

const minuteFirst = {
    "0": "oh",
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
}

const minuteSecond = {
    "01": "one",
    "02": "two",
    "03": "three",
    "04": "four",
    "05": "five",
    "06": "six",
    "07": "seven",
    "08": "eight",
    "09": "nine",
}

const minuteTens = {
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen",
}

module.exports = timeWord;