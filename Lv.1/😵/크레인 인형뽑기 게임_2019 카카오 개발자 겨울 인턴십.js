//!나의 코드
function solution(board, moves) { // ([[], []...], 크레인을 작동시킨 위치가 담긴 배열)
  let arr = []; // 잡은 인형을 담는 바구니
  // 뽑은 위치를 기억해 두는 것이 좋을 거 같아서..
  let spot;
  
  for(let i = 0; i < moves.length; i++) { 
    // moves[i]-1 번째 위치의 값 뽑기
    // 그 값이 0이 아닐 때 뽑아서 바구니에 넣기
    if(board[i][moves[i]-1] !== 0) {
        arr.push(board[i][moves[i]-1])
    // 그 값이 0일때는 그 다음 칸으로 넘어가기 ex) board[0][0]이 0이면 board[1][0] 확인
    } else if(board[i+1][moves[i]-1])
    
    // 뽑은 다음 그 위치를 기억해두기
  }
  
  
  // 또 같은 라인에서 뽑아야 할 때, 처음부터 0인지 확인하지 않고 spot + 1 위치부터 확인하기
  
  // 이 과정 중복 => 재귀로 풀자
  // arr를 확인하고, 
  // 중복되는 숫자를 만나면 count 2 를 하고 해당 숫자 삭제 
  // 그리고, 삭제된 배열을 다시 확인
  // 중복되는 숫자를 만나면 count 2 를 하고 해당 숫자 삭제
}