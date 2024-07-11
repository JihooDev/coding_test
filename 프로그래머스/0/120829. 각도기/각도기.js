function generateAngle(angle) {
    if(angle < 90) return 1;
    if(angle === 90) return 2;
    if(angle > 90 && angle < 180) return 3;
    
    return 4;
}

function solution(angle) {
    return generateAngle(angle);
}