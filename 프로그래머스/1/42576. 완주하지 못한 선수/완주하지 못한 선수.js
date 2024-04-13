function solution(participant, completion) {
    const participantMap = new Map();

    for (let i = 0; i < participant.length; i++) {
        if (participantMap.has(participant[i])) {
            participantMap.set(participant[i], participantMap.get(participant[i]) + 1);
        } else {
            participantMap.set(participant[i], 1);
        }
    }

    for (let i = 0; i < completion.length; i++) {
        if (participantMap.has(completion[i])) {
            participantMap.set(completion[i], participantMap.get(completion[i]) - 1)

            if (participantMap.get(completion[i]) === 0) {
                participantMap.delete(completion[i]);
            }
        };
    }

    const player = Array.from(participantMap)[0][0];

    return player;
}