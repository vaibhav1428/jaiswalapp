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
				<h3>Your Post</h3>
			</div>	
		</div>
        <div class="clearfix"></div>

        <div class=" mt-3">
		<button class="btn btn-primary float-right" type="button" id="switcher" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Add Post</button>	
			</div>
			<br>
			<br>

    <div class="row">
        <div class="col-lg-12 col-md-12  col-sm-12 ">
					<div class="collapse mt-4" id="collapseExample">
						<div class="card card-body">
							<form method="post" action="<?php echo base_url("Informationajax/insertyourpost")  ?>" id="frmdata" class="yourpost_submit insform " style=" margin-bottom: 10%;" >
								
										
										<div class="row  ">	
											<div class="form-group col-lg-12 col-md-12  col-sm-12">
                                                <label>Title</label>
												<input type="text" id="txt_meta_title" name="txt_meta_title" class="form-control" value="<?php  echo $txt_meta_title  ?>">
                                            </div>
																	
											
											<div class="form-group col-lg-12 col-md-12  col-sm-12">
                                                <label>Description</label>
												<textarea id="txt_aboutus" class="form-control content" rows="10"  cols="80"  name="txt_aboutus" >
												<?php  echo $txt_aboutus  ?></textarea>
                                            </div>
											
											<div class="form-group col-lg-12 col-md-12  col-sm-12">									
												<span class="text-danger" style=" font-weight: bold; ">Upload Favicon </span>
                                                <div class="custom-file mb-3">
												  <input type="file" class="custom-file-input" id="txt_Favicon" name="txt_Favicon" onchange="readURLfavicon(this)">
												  <label class="custom-file-label" for="txt_Favicon">Choose file</label>
												</div>
                                            </div>								
								
								<div class=" col-lg-12 col-md-12  col-sm-12">
							<button  type="button" class="btn btn-primary" id="save"> save</button>
							</div>
							</div>
								<p class="alert servermessage" style="display:none;"></p>
							</form>
						</div>
					
			</div>
        </div>
    </div>
	
	<div class="col-12 mt-5 " id="mainView">
                                <div class="card">
									
									<div class="card-body "> 
											<table id="tblData" class="table table-striped overflow-auto" style="width:100%">  
												 <thead>  
													  <tr> 
															<th style="text-align: center;">#</th>
															<th style="text-align: center;">Title</th>
															<th style="text-align: center;">Description</th>
															<th style="text-align: center;">Favicon Image</th>
															<th style="text-align: center;">Status</th>
															<th style="text-align: center;">Added_at</th>  
															<th style="text-align: center;">Updated_at</th>
															<th style="text-align: center;">Edit</th>
															<th style="text-align: center;">Delete</th>
															
													  </tr>  
												 </thead>  
												 <tbody>
												 <?php
												 $i = 0;
												 foreach($result as $res){
													?> 
													
													<tr>
													<td style="text-align: center;"><?php echo ++$i;  ?></td>
													<td style="text-align: center;">
													<?php $data = $this->db->get_where('yourpost')->result_array(); echo $data[0]['txt_meta_title']  ?>
													</td>
													<td style="text-align: center;">
													<?php $data = $this->db->get_where('yourpost')->result_array(); echo $data[0]['txt_aboutus']  ?>
													</td>
													<td style="text-align: center;">
													<?php $data = $this->db->get_where('yourpost')->result_array(); echo $data[0]['txt_Favicon']  ?>
													</td>
													<td style="text-align: center;">
													<?php
													$style="";
													$text="";
													if($res['status']== 0 ){
													$style = "btn btn-danger";
													$text = "Inactive";
													}else{
													$style = "btn btn-success";
													$text = "Active";
													}?>
													<button class="<?php  echo $style  ?>" onclick="statuschange(<?php echo $res['id'] ?>,'yourpost')">  <?php  echo $text  ?>
													</button>
													</td>
													<td style="text-align: center;">
													<?php echo $res['added_at']  ?></td>
													<td style="text-align: center;">
													<?php echo $res['updated_at']  ?></td>
													<td style="text-align: center;">
													<button class="btn btn-info" onclick="edityourpost(<?php echo $res['id'] ?>)"> <i class="far fa-edit"></i>
													</button>
													</td>
													<td style="text-align: center;">
													<button class="btn btn-danger" onclick="deleterequest(<?php echo $res['id'] ?>,'yourpost')"><i class="far fa-trash-alt"></i>
													</button>
													 
													</tr> 
												<?php } ?>
												
												 </tbody>  
											</table>  
									 </div>
                                </div>
                            </div>
	
  </div>
</div>


<script>



$( document ).ready(function() {
			$.post( '<?php echo base_url() ?>Informationajax/edityourpost',
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
