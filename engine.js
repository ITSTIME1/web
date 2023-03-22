var player = function(){
    // is_sample 불리언
	var is_sample = false;
	var save_interval = 100000;
	var record_time = 0;
	var is_save = true;
	var is_next = false;
	var save_call_back = function(){};
	var first_time = true;
	
	var player_handle = function(){
		var iframe = $("#content_frame");
		iframe.attr({
			'src': content_url,
			'width': sizeX,
			'height': sizeY
		});
		
		//창크기 변환
		window.resizeTo(sizeX+40,sizeY+150);
		
		//출석체크바인드
        // 출석체크 함수
		$("#btn_check").on('click', function(e){
	        e.preventDefault();
	        if(window.confirm("수강체크는 강의를 다 듣고 마지막에 클릭하시면 됩니다.\n수강체크를 하시겠습니까?")){
	        	$("#btn_next").removeClass('off').addClass('on');
                player.save();
	        }
	    });
	    
	    if(is_sample) player.save();
	    if(!is_sample && first_time) player.save();
	};
	
	var save_handle = function(){
        // 
		var d = new Date();
		var n = d.getTime();
		first_time = false;
		
        // is_save 가 true 이고 is_sample 이 true 가 아니면!
        // ajax 통신
        // var is_save = true
        // var is_sample = true
		if(is_save && !is_sample) {
			$.ajax({
				method:'GET',
				cache:false,
				data:$('#check_form').serialize(),
				url:"./update.php",
				success:function(r){
                    // 결과가 studied 라면 is_next = true
                    // 버튼이 열린다.
					if(r.result == "studied"){
						is_next = true;
						$("#btn_next").removeClass('off').addClass('on');
					}
					//alert(r.pass);
					
				}
			});
		} else {
			save_call_back();
		}
		
	};
	
	var clock_print = function(){
		var min = parseInt(studytime / 60);
		var sec = studytime % 60;
		
		if( min < 10 ) min = "0" + min;
    	if( sec < 10 ) sec = "0" + sec;
		
		$("#minutes").val(min);
		$("#seconds").val(sec);
		
		if(studytime > 0) studytime -= 1;
	};
	
	var next_limit_handle = function(){
		if(is_sample || is_studied){
			$("#btn_next").addClass('on');
		}
		
		$("#btn_next").on('click', function(e){
			e.preventDefault();
			
			var url = $(this).attr('href');
			if(is_sample || is_next || is_exec == '1' ){
				save_call_back = function(){
					location.href = url;
				};
				save_call_back();opener.location.reload();
				save_handle();
			} else {
				alert("바쁘시더라도 끝까지 수강해주세요.");	
			}
		});
	};
	
	var clock_handle = function(){
		clock_print();
		
		var clock = setInterval(function(){
			clock_print();
			
			if(is_sample){
				is_next = true;
				is_studied = false;
				
				$("#btn_next").addClass('on');
			} else {
				if(studytime == (limittime-1) || studytime == 0){
					is_next = true;
					is_studied = false;
					
					$("#btn_next").addClass('on');
				}
				
				if(studytime == 0){
					is_save = false;
					clearInterval(clock);
					
					setTimeout(function(){	
						$("#minutes").val("00");
						$("#seconds").val("00");
					}, 1000);
				}
			}
			
			
		}, 1000);
	};
	
	var auto_save_handle = function(){
		save_handle();
		
		var clock = setInterval(function(){
			if(is_next){
				is_save = true;
				clearInterval(clock);				
			}
			save_handle();    		
		}, save_interval);
	};
	
	return {
		init : function(is_sampled){			
			if(is_sampled){
				is_sample = true;
			}
			
			player_handle();
			next_limit_handle();
			auto_save_handle();
		},
		save : function(){
			save_handle();
		}
	}
}();
