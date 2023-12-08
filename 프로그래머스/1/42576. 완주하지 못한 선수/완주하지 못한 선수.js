// function solution(participant, completion) {
//   const sortParticipant = participant.sort();
//   const sortCompletion = completion.sort();

//   for(let i = 0; i <= sortParticipant.length; i++) {
//     if(sortParticipant[i] !== sortCompletion[i]) {
//       return sortParticipant[i]
//     }
//   } 
// }

function solution(participant, completion) {
  const participantMap = new Map();

  participant.forEach((value) => {
    if (participantMap.has(value)) {
      participantMap.set(`${value}`, participantMap.get(`${value}`) + 1);
    } else {
      participantMap.set(value, 1);
    }
  });

  completion.forEach((value) => {
    participantMap.set(`${value}`, participantMap.get(`${value}`) - 1);
    if (participantMap.get(`${value}`) === 0) {
      participantMap.delete(`${value}`);
    }
  });

  return Array.from(participantMap)[0][0];
}