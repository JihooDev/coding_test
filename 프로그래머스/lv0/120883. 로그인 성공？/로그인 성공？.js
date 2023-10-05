function solution(id_pw, db) {
      let result = 'fail';

      db.forEach(data => {
          if(data[0] === id_pw[0] && data[1] === id_pw[1]) return result = 'login';
          if(data[0] === id_pw[0] && data[1] !== id_pw[1]) return result = 'wrong pw'
      })

      return result;
}