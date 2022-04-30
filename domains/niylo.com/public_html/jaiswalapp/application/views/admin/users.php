
<?php 
$this->load->view('admin/includes/header.php');
$this->load->view('admin/includes/sidebar.php');
$this->load->view('admin/includes/navbar.php');
?>


<style>
*
{
	transition: .5s all ease-in-out;
	-webkit-transition: .5s all ease-in-out;
	-moz-transition: .5s all ease-in-out;
	-ms-transition: .5s all ease-in-out;	
	-o-transition: .5s all ease-in-out;
}
.propic
{
	border: 2px solid #e2e2e2;
	margin-left: 400px;
    border-radius: 50%;
	height: 175px;
    width: 175px;
}
.propic:hover , .cover:hover
{
	box-shadow: 0 0 5px 5px #9f9f9f;
	-webkit-box-shadow: 0 0 10px 10px #9f9f9f;
	-moz-box-shadow: 0 0 10px 10px #9f9f9f;
	-ms-box-shadow: 0 0 10px 10px #9f9f9f;
	-o-box-shadow: 0 0 10px 10px #9f9f9f;
}

.nikk{
	margin-left: 250px;
    text-align: center;
}


[role="table"] {
  display: table;
  margin: 40px auto;
  width: min(600px, 95%);
  border-radius: 8px;
  border: 1px solid silver;
  border-top: 0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  box-sizing: border-box;
  font: 400 1.0625em/1 "Segoe UI","Roboto","Helvetica Neue",Arial, sans-serif;
  overflow: hidden;
}

[role="table"] > div[id] {
  display: table-caption;
  font-style: italic;
}

[role="table"] [role="row"] {
  display: table-row;
}

@media screen and (max-width:500px) {
  [role="table"] [role="row"] span+span {width: 28%;}
}

[role="table"] [role="cell"],
[role="table"] [role="columnheader"] {
  display: table-cell;
  padding: clamp(0.25em,4vw,1em);
  width: 20em;
}

[role="table"] [role="columnheader"] {
  background:#062006;
  color: #fafafa;
  border-bottom:3px solid black;
  font-weight: bold;
  border-bottom: thin solid #888;
  border-radius: 6px 6px 0 0;
}

[role="table"] h3 {margin-top: 0;}
/***  Color de fondo para las filas alternas (pares o impares)
[role="table"] [role="rowgroup"]:last-child [role="row"]:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.2);
}
***/
.gradient {
  border-radius: 0 0 6px 6px;
}

.vl {
  border-left: 6px solid green;
  height: 500px;
}

.fuzz{
	padding-top: 15px;
}
</style>


<div class="row wrapper border-bottom white-bg page-heading">
	<div class="col-lg-10">
		<h2><?php echo $data['seo']['name']  ?></h2>
		<ol class="breadcrumb">
			<li class="breadcrumb-item">
				<a href="index.html">Dashboard</a>
			</li>
			<li class="breadcrumb-item">
				<a>Users</a>
			</li>
			<li class="breadcrumb-item active">
				<strong><?php echo $data['seo']['name']  ?></strong>
			</li>
		</ol>
	</div>
</div>


<br>
<br>

<div class=" mt-3">
	<button class="btn btn-primary float-right" type="button" id="switcher" data-toggle="collapse"
		data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
		Add Users
	</button>
</div>
<br>
<br>

<div class="row">
	<div class="col-lg-12 col-md-12  col-sm-12 ">
		<div class="collapse mt-4" id="collapseExample">
			<div class="card card-body">
				<form action="<?php echo base_url("Informationajax/usersinst")  ?>" method="post" id="frmdata"
					class="insform">
					<input type="hidden" name="idforupdate" id="idforupdate">

					<div class="row">
						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="name">Name<span class="text-danger">*</span></label>
							<input type="text" class="form-control" id="name" aria-describedby="users_error"
								placeholder="Enter Name" name="name" required>
							<small id="name_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>

						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="email">Email<span class="text-danger">*</span></label>
							<input type="email" class="form-control" id="email" aria-describedby="users_error"
								placeholder="Enter Email" name="email" required>
							<small id="email_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="phone">Phone Number<span class="text-danger">*</span></label>
							<input type="text" class="form-control" id="phone" aria-describedby="users_error"
								placeholder="Enter Your Phone Number" name="phone" maxlength="10" required>
							<small id="phone_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>

						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="age">Age<span class="text-danger">*</span></label>
							<input type="number" class="form-control" id="age" aria-describedby="users_error"
								placeholder="Enter Age" name="age">
							<small id="age_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="bloodgroup">Blood Group</label>
							<select class="form-control" id="bloodgroup" aria-describedby="users_error"
								placeholder="Enter Blood Group" name="bloodgroup">
								<option selected disabled class="text-info"> Select bloodgroup type </option>
								<option value="A+"> A+ </option>
								<option value="A-"> A-</option>
								<option value="B+"> B+ </option>
								<option value="B-"> B- </option>
								<option value="O+"> O+ </option>
								<option value="O-"> O- </option>
								<option value="AB+"> AB+ </option>
								<option value="AB-"> AB- </option>

							</select>
						</div>

						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="address">Address<span class="text-danger">*</span></label>
							<input type="text" class="form-control" id="address" aria-describedby="users_error"
								placeholder="Enter Address" name="address">
							<small id="address_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>
					</div>

					<div class="row  ">
						<div class="form-group col-lg-4 col-md-4  col-sm-12">
							<label for="country">Country<span class="text-danger">*</span></label>
							<select class="form-control" id="country" name="country" onchange="getstate(this.value)">
								<option selected disabled>Enter Country</option>
								<?php  foreach($country as $coun){?>
								<option value="<?php  echo $coun['id']  ?>"><?php  echo $coun['country']  ?></option>
								<?php }?>
							</select>
						</div>
						<div class="form-group col-lg-4 col-md-4  col-sm-12">
							<label for="state">State<span class="text-danger">*</span></label>
							<select class="form-control" id="state" class="state" name="state"
								onchange="getcity(this.value)">
							</select>
						</div>
						<div class="form-group col-lg-4 col-md-4  col-sm-12">
							<label for="city">City<span class="text-danger">*</span></label>
							<select class="form-control" id="city" class="city" name="city">
							</select>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="dob">Date of Birth<span class="text-danger">*</span></label>
							<input type="date" class="form-control" id="dob" aria-describedby="users_error"
								placeholder="Enter Date of Birth" name="dob">
							<small id="dob_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>

						<div class="form-group col-lg-6 col-md-6  col-sm-6">
							<label for="name">Material Status<span class="text-danger">*</span></label>
							<select class="form-control" id="materialstatus" class="materialstatus"
								name="materialstatus">
								<option selected disabled class="text-info"> Select Material Status </option>
								<option value="Married"> Married </option>
								<option value="UnMarried">UnMarried </option>

							</select>
							<small id="material_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>
					</div>

					<div class="row">
						<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="educationlevel">Education Level<span class="text-danger">*</span></label>
							<select class="form-control" id="educationlevel" class="educationlevel"
								name="educationlevel">
								<option selected disabled class="text-info"> Select Education level </option>
								<option value="Educated"> Educated </option>
								<option value="Uneducated"> Uneducated </option>
							</select>

							<small id="eduction_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>

						<div class="form-group col-lg-12 col-md-12  col-sm-12">
							<label for="hobbies">Hobbies</label>
							<input type="text" class="form-control" id="hobbies" aria-describedby="users_error"
								placeholder="Enter Hobbies" name="hobbies">
						</div>
					</div>

					<div class="row">
						<div class="form-group col-lg-12 col-md-12 col-sm-12">
							<label for="jobstatus">Job Status<span class="text-danger">*</span></label>
							<select class="form-control" id="jobstatus" aria-describedby="users_error"
								placeholder="Enter Job Status" name="jobstatus">
								<option selected disabled class="text-info"> Select Job Status </option>
								<option value="employed"> employed </option>
								<option value="unemployeed"> unemployeed </option>
							</select>
							<small id="job_error" class="form-text text-danger" style="font-size: 0.8rem;"></small>
						</div>

						<div class="form-group col-lg-12 col-md-12 col-sm-12">
							<label for="profiletype">Profile type<span class="text-danger">*</span></label>
							<select class="form-control" id="profiletype" class="profiletype" name="profiletype">
								<option selected disabled class="text-info"> Select profiletype type </option>
								<option value="0"> private </option>
								<option value="1"> public </option>
								<option value="2"> business </option>
							</select>
							<small id="profiletype_error" class="form-text text-danger"
								style="font-size: 0.8rem;"></small>
						</div>
						<!------------>
						<div class=" col-lg-12 col-md-12  col-sm-12">
							<button type="button" class="btn btn-info" id="save"> save</button>
						</div>
					</div>
				</form>

			</div>
		</div>


	</div>



	<div class="col-12 mt-5 " id="mainView" style="margin-bottom:10%">
		<div class="card" style=" overflow: auto; ">

			<div class="card-body ">
				<table id="tblData" class="table table-striped overflow-auto" style="width:100%">
					<thead>
						<tr>
							<th style="text-align: center;">#</th>
							<th style="text-align: center;">name</th>
							<th style="text-align: center;">email</th>
							<th style="text-align: center;">phone number</th>
							<th style="text-align: center;">age</th>
							<th style="text-align: center;">blood group</th>
							<th style="text-align: center;">address</th>
							<th style="text-align: center;">country</th>
							<th style="text-align: center;">state</th>
							<th style="text-align: center;">city</th>
							<th style="text-align: center;">date of birth</th>
							<th style="text-align: center;">material status</th>
							<th style="text-align: center;">education level</th>
							<th style="text-align: center;">job status</th>
							<th style="text-align: center;">More Details</th>
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
								<?php 
													echo $res['name']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['email']  
													?>
							</td>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['phone']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['age']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['bloodgroup']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['address']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
								
								if(!empty($res['country_id'])){
									
								$data = $this->db->get_where('country',array('id='=>$res['country_id']))->result_array(); 
								echo $data[0]['country']  ;
									
								}
													?>
							</td>
							<td style="text-align: center;">
							
								<?php 
								if(!empty($res['state_id'])){
								$data = $this->db->get_where('state',array('id='=>$res['state_id']))->result_array();


								echo $data[0]['state'] ;
	
								}
								
								
								?>
							</td>
							<td style="text-align: center;">

								<?php
									if(!empty($res['city_id'])){

								$data = $this->db->get_where('city',array('id='=>$res['city_id']))->result_array(); echo $data[0]['city'] ;
								
									}
								?>
							</td>


							<td style="text-align: center;">
								<?php 
													echo $res['dob']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['materialstatus']  
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['educationlevel']   
													?>
							</td>
							<td style="text-align: center;">
								<?php 
													echo $res['jobstatus']   
													?>
							</td>
							<td>
							<!-- Button trigger modal -->
							<button type="button" onclick="getuser(<?php  echo $res['id']  ?>)" class="btn btn-primary" data-toggle="modal" data-target="#knowmore">
							  Know More
							</button>

								
							</td>

							
							<td>
								<button class="btn btn-info" onclick="editusers(<?php echo $res['id'] ?>)"> <i
										class="far fa-edit"></i>
								</button>
							</td>
							<!------deleterequest('ID WILL BE HERE ','DATABASE NAME ')------->
							<td style="text-align: center;">
								<button class="btn btn-danger"
									onclick="deleterequest(<?php echo $res['id'] ?>,'users')"><i
										class="far fa-trash-alt"></i>
								</button>

						</tr>
						<?php } ?>

					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>


 <div class="modal fade bd-example-modal-lg" id="knowmore" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" style="max-width:100%;    width: 70%;" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Virat Kohli</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  
	   <!-- <img src="https://niylo.com/jaiswalapp/assets/adminFile/img/boy1.jpg" alt="Cover_Photo" class="cover" /> <br />-->
        <img src="" class="propic" alt="Profile_picture" /><br><br>
	  
	  <div class="row">
       <div class="col-lg-6 col-md-6 col-sm-6  nikk">
	   
		<h1 style="font-family: Fantasy" class="cliname" ><strong> </strong></h1>
		<p style="font-family: serif; font-size: 20px" class="cliwork"></p>
	   </div>
	   </div>
	    <hr>
		
		<div role="rowgroup" class="gradient" style="padding-top: 15px; padding-bottom: 15px;">
		
 
    <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;" >
        Email
      </span>
	  <span role="cell" style="margin-left: 303px;" class="cliemail">
        
      </span>
    </div>
	<hr>
	
    <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Phone Number
      </span>
	  <span role="cell" style="margin-left: 245px;" class="cliphone">
 
      </span>
    </div>
	<hr>
	
    <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Age
      </span>
	  <span role="cell" style="margin-left: 315px;" class="cliage">
    
      </span>
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Blood Group
      </span>
	  <span role="cell" style="margin-left: 263px;" class="cliblood">
      
      </span>
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Address
      </span>
	  <span role="cell" style="margin-left: 288px;" class="cliaddress">
       
      </span>  
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Country
      </span>	  
	  <span role="cell" style="margin-left: 290px;" class="clicountry">
      India
      </span>
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        State
      </span>
	  <span role="cell" style="margin-left: 308px;" class="clistate">
       
      </span>  
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        City
      </span>
	  <span role="cell" style="margin-left: 318px;" class="clicity">
    
      </span>	  
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Date of Birth
      </span>
	  <span role="cell" style="margin-left: 265px;" class="clidob">
     
      </span>	  
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Material Status
      </span>
	  <span role="cell" style="margin-left: 252px;" class="climaterial">
     
      </span>
    </div>
	<hr>
	
	 <div role="row" class="fuzz">
      <span role="cell" style="margin-left: 200px;">
        Education Level
      </span>
	   <span role="cell" style="margin-left: 248px;" class="clieduction">
    
      </span>
    </div>
	<hr>
	
	 <div role="row" class="fuzz" style="padding-bottom: 15px;">
      <span role="cell" style="margin-left: 200px;">
        Job Status
      </span>
	  <span role="cell" style="margin-left: 282px;" class="clijob">
      
      </span> 
    </div>
	
  </div>
  </div>
  
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



<script>
	function getstate(id) {

		$('#state').html(" ");
		$.post('<?php echo base_url() ?>Informationajax/getstate?id=' + id,
			function (r) {
				var values = JSON.parse(r);

				$('#state').append('<option selected disabled> select state </option>');
				$.each(values.result, function (index, data) {
					$('#state').append('<option value="' + data['id'] + '"> ' + data['state'] + ' </option>');
				});
			});


	}

	function getcity(id) {

		$('#city').html(" ");
		$.post('<?php echo base_url() ?>Informationajax/getcity?id=' + id,
			function (r) {
				var values = JSON.parse(r);

				$('#city').append('<option selected disabled> select city </option>');
				$.each(values.result, function (index, data) {
					$('#city').append('<option value="' + data['id'] + '"> ' + data['city'] + ' </option>');
				});
			});


	}
	
	
	function getuser(id){
		
	$.post( '<?php echo base_url() ?>Informationajax/getuser?id='+id,
					  function(r){
						 var values = JSON.parse(r);
						
						 $('#state').append('<option selected disabled> select state </option>');
							$.each(values.result, function (index, data) {
							$('.propic').attr('src',data['profilepic']);	
							 $('.cliname').html(data['name']);
							 $('.cliwork').html(data['work']);
							 $('.cliemail').html(data['email']);
							 $('.cliphone').html('+91'+data['phone']);
							 $('.cliage').html(data['age']);
							 $('.cliblood').html(data['bloodgroup']);
							 $('.cliaddress').html(data['address']);
							 $('.clistate').html(data['state_id']);
							 $('.clicity').html(data['city_id']);
							 $('.clidob').html(data['dob']);
							 $('.climaterial').html(data['materialstatus']);
							 $('.clieduction').html(data['educationlevel']);
							 $('.clijob').html(data['jobstatus']);
							});
						});
	
	
}
</script>

<?php 
$this->load->view('admin/includes/footer.php');
?>