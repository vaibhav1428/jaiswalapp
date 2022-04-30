
			
<?php 
$this->load->view('admin/includes/header.php');
$this->load->view('admin/includes/sidebar.php');
$this->load->view('admin/includes/navbar.php');
?>


			<div class="row wrapper border-bottom white-bg page-heading">
                <div class="col-lg-10">
                    <h2><?php echo $data['seo']['name']  ?></h2>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a>Community</a>
                        </li>
                        <li class="breadcrumb-item active">
                            <strong><?php echo $data['seo']['name']  ?></strong>
                        </li>
                    </ol>
                </div>
            </div>
			
			
			
			<div class=" mt-3">
					<button class="btn btn-primary float-right" type="button" id="switcher" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						Add Gotra
					</button>	
			</div>
			<br>
			<br>
			
			
			<div class="row">
				<div class="col-lg-12 col-md-12  col-sm-12 ">
					<div class="collapse mt-4" id="collapseExample">
						<div class="card card-body">
						<form action="<?php echo base_url("Informationajax/surnameinst")  ?>" method="post" id="frmdata" class="insform">
						<input type="hidden"  name="idforupdate" id="idforupdate"> 
						
						<div class="row  ">
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="religion">Religion<span class="text-danger">*</span></label>
							<select class="form-control" id="religion" name="religion" onchange="getcaste(this.value)">
							<option selected disabled>Enter Religion</option>
							<?php  foreach($religion as $re){?>
							<option value="<?php  echo $re['id']  ?>"><?php  echo $re['religion']  ?></option> 
							<?php }?></select>
							</div> 
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="caste">Caste<span class="text-danger">*</span></label>
							<select class="form-control" id="caste" class="caste" name="caste" >
							</select>
							</div> 
							
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="surname">Gotra
							<span class="text-danger">*</span></label>
							<input type="text" class="form-control" id="surname"  placeholder="Enter Gotra" name="surname">
							</div>
							
							<div class=" col-lg-12 col-md-12  col-sm-12">
							<button  type="button" class="btn btn-primary" id="save"> save</button>
							</div>
						</div>
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
															<th style="text-align: center;">Religion</th>
															<th style="text-align: center;">caste</th>
															<th style="text-align: center;">Gotra</th>
															<th style="text-align: center;">status</th>
															<th style="text-align: center;">added_at</th>  
															<th style="text-align: center;">updated_at</th>
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
													<?php $data = $this->db->get_where('religion',array('id='=>$res['religion_id']))->result_array(); echo $data[0]['religion']  ?>
													</td>
													<td style="text-align: center;">
													<?php $data = $this->db->get_where('caste',array('id='=>$res['caste_id']))->result_array(); echo $data[0]['caste'] ?>
													</td>
													<td style="text-align: center;">
													<?php  echo $res['surname'] ?>
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
													<button class="<?php  echo $style  ?>" onclick="statuschange(<?php echo $res['id'] ?>,'caste')">  <?php  echo $text  ?>
													</button>
													</td>
													<td style="text-align: center;">
													<?php echo $res['added_at']  ?></td>
													<td style="text-align: center;">
													<?php echo $res['updated_at']  ?></td>
													<td style="text-align: center;">
													<button class="btn btn-info" onclick="editsurname(<?php echo $res['id'] ?>)"> <i class="far fa-edit"></i>
													</button>
													</td>
													<td style="text-align: center;">
													<button class="btn btn-danger" onclick="deleterequest(<?php echo $res['id'] ?>,'surname')"><i class="far fa-trash-alt"></i>
													</button>
													 
													</tr> 
												<?php } ?>
												
												 </tbody>  
											</table>  
									 </div>
                                </div>
                            </div>
			
<script>
function getcaste(id){
	
	$('#caste').html(" ");
 $.post( '<?php echo base_url() ?>Informationajax/getcaste?id='+id,
					  function(r){
						 var values = JSON.parse(r);
						
						 $('#caste').append('<option selected disabled> select caste </option>');
							$.each(values.result, function (index, data) {
							 $('#caste').append('<option value="'+ data['id']+'"> '+ data['caste']+' </option>');
							});
						});
	
	
}

</script>


<?php 
$this->load->view('admin/includes/footer.php');
?>