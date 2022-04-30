var BASE_VALUE = $('#BASE_VALUE').val();
	
        $("#save").click(function (event) {
			
				var method = $(".insform").attr('method');
				var action = $(".insform").attr('action'); 
				event.preventDefault();
                $.ajax({
                type: 'POST',
                url: action,
                data: $("#frmdata").serialize(),
					processdata:false,
					cache: false,
					success: function (r) {
                    var values = JSON.parse(r); 
					
					if(values.status == 1 ){
							swal({
					  title: "Good job!",
					  text: values.message,
					  icon: "success",
					  button: "Let's Go",
					}).then(()=>{
						
						location.reload();
						document.getElementById("frmdata").reset();
							
					});
					}
					if(values.status == 0){
						swal("oops!", values.message, "error");
					
					
                    }
				}
            });



       });
	     


		$("#imgsave").on('click',function(){			
		
			var method = $(".insform").attr('method');
			var action = $(".insform").attr('action'); 
			  var formData = new FormData($("#frmdata")[0]);;
			$.ajax({
				type: 'POST',
				url: action,
				data:formData,
				processData:false,
				contentType:false,
				cache:false,
				async:false,
				success:function(r){
					var values = JSON.parse(r);
					if(values.status == 1 ){
							swal({
					  title: "Good job!",
					  text: values.message,
					  icon: "success",
					  button: "Let's Go",
					}).then(()=>{
						
						location.reload();
						document.getElementById("frmdata").reset();
							
					});
					}
					if(values.status == 0){
						swal("oops!", values.message, "error");
					
					
                    }
					
					
				}
			});
				 
		})
		
		
		
		
			
			function deleterequest(id,tablemname){
				
				swal({
			  title: "Are you sure?",
			  text: "Once deleted, you will not be able to recover this imaginary file!",
			  icon: "warning",
			  buttons: true,
			  dangerMode: true,
				})
			  	.then((willDelete) => {
				  if (willDelete) {
					  $.post( BASE_VALUE+'Informationajax/requestdel?id='+id +'&tablename='+tablemname,
					  function(r){
						  var values = JSON.parse(r);
							swal(values.message, {
							icon: values.result,
							}).then(function() {
									 $("#txt_add_category").val('');
											$("#tblData").load(location.href + " #tblData");
											document.getElementById("frmdata").reset();
											location.reload();
								});
						});
					
				  } else {
					swal("Your  file is safe!");
				  }
			});
				
				
					
			}
			
			
			
function statuschange(id,tablemname){
		
		 $.post( BASE_VALUE+'Informationajax/statuschange?id='+id +'&tablename='+tablemname,
					  function(r){
						  var values = JSON.parse(r);
							swal(values.message, {
							icon: values.result,
							}).then(function() {
											$("#tblData").load(location.href + " #tblData");
											document.getElementById("frmdata").reset();
											
								});
						});
		
		
        }