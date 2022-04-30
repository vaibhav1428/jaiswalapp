<?php 
$this->load->view('admin/includes/header.php');
$this->load->view('admin/includes/sidebar.php');
$this->load->view('admin/includes/navbar.php');
?>

<?php

$txt_meta_title  = $txt_aboutus = $txt_Favicon = "";


if(!empty($result)){

$txt_meta_title = $result[0]['txt_meta_title'];
$txt_aboutus = $result[0]['txt_aboutus'];
$txt_Favicon = $result[0]['txt_meta_title'];


}
?>


			<div class="right_col" role="main">
    <div class="">
		<div class="page-title">
			<div class="title_left col-lg-3">
				<h3>Notification</h3>
			</div>	
		</div>
        <div class="clearfix"></div>

    <div class="row">
        <div class="col-md-12 col-sm-12 ">
            <div class="x_panel">
				<div class="x_content">
					<div class="row">    
						<div class="col-md-12 col-sm-12">
							<form method="post" action="<?php echo base_url("Informationajax/insertnotification")  ?>" id="frmdata" class="notification_submit insform " style=" margin-bottom: 10%;" >
								
										
											
											<div class="form-group">
                                                <label>Title</label>
												<input type="text" id="txt_meta_title" name="txt_meta_title" class="form-control" placeholder="enter message title">
                                            </div>
																	
											
											<div class="form-group">
                                                <label>Description</label>
												<textarea id="txt_aboutus" class="form-control content" rows="10"  cols="80"  name="txt_aboutus" placeholder="enter your text">
												
												
												</textarea>
                                            </div>
											
											<!--div class="form-group">										
												<span class="text-danger" style=" font-weight: bold; ">Upload Favicon </span>
                                                <div class="custom-file mb-3">
												  <input type="file" class="custom-file-input" id="txt_Favicon" name="txt_Favicon" onchange="readURLfavicon(this)">
												  <label class="custom-file-label" for="txt_Favicon">Choose file</label>
												</div>
                                            </div-->								
								
								<div class="item form-group">
									<div class="col-md-6 col-sm-6">
										<button type="button"  id="imgsave" class="btn btn-success">Save</button>
									</div>
								</div>
								<p class="alert servermessage" style="display:none;"></p>
							</form>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
  </div>
</div>


<script>



$( document ).ready(function() {
			$.post( '<?php echo base_url() ?>Informationajax/editnotification',
					  function(r){
						 var values = JSON.parse(r);
						 
						 if (values.status == 1) {						
							$.each(values.result, function (index, data) {
								
								
								
								$('#preview-selected-favicon').attr('src', '<?php echo base_url()  ?>'+ data['txt_Favicon']);
								
							});
						}
						
						});
	
});

	
	
function readURLfavicon(input) {
		

	  if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.onload = function(e) {
			console.log(e.target.result);
		  $('#preview-selected-favicon').attr('src', e.target.result);
		}
		
		reader.readAsDataURL(input.files[0]);
	  }
	}


</script>

<script>

var $txt_aboutus = CKEDITOR.replace('txt_aboutus');
$txt_aboutus.on('change',function()
{
	$txt_aboutus.updateElement();    
});

</script>


<?php 
$this->load->view('admin/includes/footer.php');
?>
