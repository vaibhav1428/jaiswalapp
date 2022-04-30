
			
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
															<th style="text-align: center;">#</th>
															<th style="text-align: center;">Country</th>
															<th style="text-align: center;">State</th>
															<th style="text-align: center;">City</th>
															<th style="text-align: center;">Pincode</th>
															<th style="text-align: center;">Status</th>
															<th style="text-align: center;">Added_at</th>  
															<th style="text-align: center;">Updated_at</th>
															<th style="text-align: center;">Edit</th>
															<th style="text-align: center;">Delete</th>
															
													  </tr>  
												 </thead>  
												 <tbody>
												 <?php
												 print_r($result as $rslt);
												 $i = 0;
												 foreach($result as $res){ 
													?> 
													
													<tr>
													<td style="text-align: center;"><?php echo ++$i;  ?></td>
													
													</tr> 
												<?php } ?>
												
												 </tbody>  
											</table>  
									 </div>
                                </div>
                            </div>
			
<script>




<?php 
$this->load->view('admin/includes/footer.php');
?>