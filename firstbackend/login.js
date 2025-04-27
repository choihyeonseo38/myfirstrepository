            /*id란에 입력된 값을 팝업창에 띄우기*/
            function compareVariable(){
                let num1 = 10;

                alert('num1 :'+ num1);
            }
            /*id란에 입력된 값을 팝업창에 띄우기*/
            function popid(){
                let userid = document.getElementById('txt_id').value;
                if(!userid){
                    alert('아이디를 입력해주세요');
                }
                else{
                    alert(userid);
                }
            }
            /* 나만의 함수 만들고, 버튼 클릭하면 호출하기*/
            function myfunction(){
                alert('1');
                alert('2');
                alert('3');
            }