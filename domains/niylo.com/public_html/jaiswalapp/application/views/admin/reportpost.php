
			
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
			
			
			
			<div class=" mt-3" >
					<button class="btn btn-primary float-right d-none" type="button" id="switcher" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
						Add Pincode
					</button>	
			</div>
			<br>
			<br>
			
			
			<div class="row">
				<div class="col-lg-12 col-md-12  col-sm-12 ">
					<div class="collapse mt-4" id="collapseExample">
						<div class="card card-body">
						<form action="<?php echo base_url("Informationajax/pincodeinst")  ?>" method="post" id="frmdata" class="insform">
						<input type="hidden"  name="idforupdate" id="idforupdate"> 
						
						<div class="row  ">
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="country">Country<span class="text-danger">*</span></label>
							<select class="form-control" id="country" name="country" onchange="getstate(this.value)">
							<option selected disabled>Enter Country</option>
							<?php  foreach($country as $coun){?>
							<option value="<?php  echo $coun['id']  ?>"><?php  echo $coun['country']  ?></option> 
							<?php }?></select>
							</div> 
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="state">State<span class="text-danger">*</span></label>
							<select class="form-control" id="state" class="state" name="state" onchange="getcity(this.value)" >
							</select>
							</div> 
							
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="city">City<span class="text-danger">*</span></label>
							<select class="form-control" id="city" class="city" name="city" >
							</select>
							</div> 
							
							<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="pincode">Pincode
							<span class="text-danger">*</span></label>
							<input type="text" class="form-control" id="pincode"  placeholder="Enter pincode" name="pincode">
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
															<th style="text-align: center;">S.no.</th>
															<th style="text-align: center;">Image</th>
															<th style="text-align: center;">No.of Reports</th>
															<th style="text-align: center;">View Post</th>
															<th style="text-align: center;">Action</th>
															<th style="text-align: center;">Delete</th>
															
															
													  </tr>  
												 </thead>  
												 <tbody>
												 <?php
												 // print_r($result);
												 $i = 0;
												 foreach($result as $res){ 
													if(!empty($res['posturl'])){
													?> 
													
													<tr>
													<td style="text-align: center;"><?php echo ++$i;  ?></td>
													<td style="text-align: center;">
													<img src="	<?php echo $res['posturl']  ?>"
													alt="abc" style="width:50px ; height:auto" />
												
													</td>
													<td style="text-align: center;">
													<?php echo $res['userid']  ?>
													</td>
													<td style="text-align: center;">
													<button													
													onClick="v_Showpost('<?php echo $res['title']   ?>','<?php echo $res['posturl']   ?>')"
													class="btn btn-warning">
													View</button>													
													</td>
													<td style="text-align: center;">
													<button onclick="deleterequest(<?php echo $res['id'] ?>,'tbl_reportpost')"
													
													class="btn btn-primary">Accept</button>
													
													</td>
													<td style="text-align: center;">
													<button onclick="deleterequest(<?php echo $res['post_id'] ?>,'tbl_post')" class="btn btn-danger">Delete</button>
													
													</td>
													
													</tr> 
													<?php }
													} ?>
												
												 </tbody>  
											</table>  
									 </div>
                                </div>
                            </div>
							
							<!-- view model -->
						
						
							
							
							
						<div class="modal fade" id="ViewPostModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
					  <div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
						  <div class="modal-header">
							<h5 class="modal-title" id="exampleModalLongTitle">View Post</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							  <span aria-hidden="true">&times;</span>
							</button>
						  </div>
						  <div class="modal-body">
						  <img src="" alt="abc" id="posting" style="width:100%;height:auto"/>
						  
						  <h2>
						  Post Title
						  </h2>
						  <h4 id="posttitle" style="margin-top:5%; text-align:'center'">
						  
						  </h4>
						  </div>
						  <div class="modal-footer">
							<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						  </div>
						</div>
					  </div>
					</div>

						
						
						

<script>

function v_Showpost(title,url){
		$('#ViewPostModel').modal('toggle');
	$('#posttitle').text(title);
	$('#posting').attr('src', url);
	
	
	
}




</script>




<?php 
$this->load->view('admin/includes/footer.php');
?>