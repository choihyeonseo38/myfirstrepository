        /*var vs let vs const*/
        function compareVariable(){
            let num1 = 10;
            const num2 = 30;

            //const num2;
            num1 =20;//먼저 들어간 값을 빼고 이 값을 넣는것
            alert('num2 :' + num);
        }
        /* ID 란에 입력된 값을 팝업창에 띄우기 */
        function popid() {
            let userid = document.getElementById('txt_id').value;
            if (!userid){
                /*document.getElementById('txt_id').value == ""*/
                alert('아이디를 입력해주세요');
            }
            else{
                alert(userid);
            }
           
        }

        /* 나만의 함수 만들고, 버튼 클릭하면 호출하기 */
        function myfunction() {
            alert('1');
            alert('2');
            alert('3');
        }