//회원가입창 버튼
const authbtn = document.querySelector('.auth-btn');

const authinput = document.getElementById('authnum');

const authokbtn = document.querySelector('.authok-btn');

const cancelbtn = document.querySelector('.cancel-btn');

authbtn.addEventListener('click',function(){
  alert('전화번호 인증 완료');
  authinput.disabled = false;
});

cancelbtn.addEventListener('click',function(event){
  alert('취소합니다');
})