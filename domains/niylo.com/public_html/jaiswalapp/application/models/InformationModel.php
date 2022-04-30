<?php

	Class InformationModel extends CI_Model
		{
			
			
	
			public function checkpostinput($index)
				{
						$return = $this->input->post($index);
						$return = $this->security->xss_clean($return);
					return trim($return); 
				}
				
				

			public function checkgetinput($index)
				{
						$return = $this->input->get($index);
						$return = $this->security->xss_clean($return);
					return trim($return); 
				}
	
			public function checkloggedin()
				{
					if($this->session->userdata('token') && $this->session->userdata('username') && $this->session->userdata('logintype'))
						{
							$token			=	$this->session->userdata('token');
							$username		=	$this->session->userdata('username');
							$logintype		=	$this->session->userdata('logintype');
								if(trim($logintype)=="admin")
									{
										$temp = array();
											$temp['token']		=	base64_decode($token);
											$temp['username']	=	$username;
											$temp['logintype']	=	$logintype;
										return $temp;
									} else {
										return 0;
									}
						} else {
							return 0;
						}
				}
				
				
				
				
			function uploadimgfile($index,$folder="other",$prefix="other")
		{
          
			$target_dir  = FCPATH;  // try to put full physical path
			// identity accstatement address advtimg other 
			$uploadOk = 1;
			$senddata = array();
			$senddata['data'] = "NILL";
			$notallowed = array("php","js","css","html");  // defined here the extesion not to upload

			$shownotallowed = "PHP, JS, CSS, HTML fie is not allowed to upload.";

			$extension     =  explode(".",basename($_FILES[$index]["name"]));

			$extension     =   end($extension);
			$realfilnename   =   basename($_FILES[$index]["name"]);
			$datetofolder   =   date("Y/M/d");
			$datetofolder   =   strtolower($datetofolder);
			$checkdirectory =  $target_dir."$folder/$datetofolder";

			if (!file_exists($checkdirectory))
			{
				mkdir($checkdirectory, 0777, true);
			}
			$filnename   = "$folder/$datetofolder/$prefix".md5(time().rand()).".$extension";

			$target_file = $target_dir . $filnename;
			if (in_array($extension, $notallowed))
			{
				$uploadOk = 0;
				$senddata['status']  = 0;
				$senddata['message'] = $shownotallowed;
				return $senddata;
			}
			// Check file size
			if ($_FILES[$index]["size"] > 20971520)
			{
				$uploadOk = 0;
				$senddata['status']  = 0;
				$senddata['message'] = "Maximum File Upload size is 20MB.";
				return $senddata;
				// echo "Sorry, your file is too large.";
				// $uploadOk = 0;
			}

			// Check if $uploadOk is set to 0 by an error
			if ($uploadOk == 0)
			{
				$senddata['status']  = 0;
				$senddata['message'] = "<b>Sorry!</b> There was an error uploading your file.2";
				return $senddata;
				// echo "Sorry, your file was not uploaded.";
				// if everything is ok, try to upload file
			} else {
				if(move_uploaded_file($_FILES[$index]["tmp_name"], $target_file))
				{
					//echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
					$senddata['status']  = 1;
					$tempdata = array();
					$tempdata['name']   = $filnename;
					$tempdata['realname']  = $realfilnename;

					//exit();
					$senddata['data']  = $tempdata;

					$senddata['message'] = "File Uploaded successfully.";

					return $senddata;
				} else{
					// echo "Sorry, there was an error uploading your file.";
					$senddata['status']  = 0;
					$senddata['message'] = "<b>Sorry!</b> There was an error uploading your file.................";

					return $senddata;
				}
			}
		}
	
			public function dologin() 
				{	
					$data = array();
						$data['refresh'] = 0;
							$email 	   =  $this->checkpostinput('email');
							$password  =  $this->checkpostinput('password');
						
						if($email=="")
							{
								$data['status']		=	0;
								$data['message']	=	"email is not correct";
								return json_encode($data);
							}
						if($password=='')
							{
								$data['status']		=	0;
								$data['message']	=	"password is not correct";
								return json_encode($data); 
							}
						if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
							{
								$data['status']		=	0;
								$data['message']	=	"Invalid email format";
								return json_encode($data);
							}
						if(trim($email != "") && trim($password != ""))				
							{
									$password = md5($password);
									$this->db->select('`userid`,`username`,`email`,`lastlogin`');
									$this->db->from('admin');
									
									//	$where	=	
									
									$this->db->where('email',$email);
									$this->db->where('password',$password);
									$query	=	$this->db->get();
									$result =	$query->result();

								if(!empty($result))
									{
										$token 		= base64_encode($result[0]->userid); 
										$username 	= $result[0]->username;
										$logintype	= "admin";
											/* setting session data */
											$session = array(
																'token' 		=>	$token,
																'username'		=>	$username,
																'logintype' 	=>	$logintype
															);
												$this->session->set_userdata($session);
												$data['refresh']	=	1;
											/* setting session data */
										$data['status']		=	1;
										$data['message']	= 	" Login Succesfully.";
										return json_encode($data);
									} else {
										$data['status']		=	0;
										$data['message']	=	"Wrong Email or Password.";
										return json_encode($data);
									}
									
							} else {
									$data['status']		=	0;
									$data['message']	=	"Please check the entered details.";
								return json_encode($data);
							}
									$data['status']		=	0;
									$data['message']	=	"Something went Wrong.";
								return json_encode($data);
				}
				
				
				public function religioninst(){
				//	print_r($_POST);
					
					$Senddata            = array();
					$religion = $this->input->post('religion');
					$idforupdate = $this->input->post('idforupdate');
					
					if(empty($religion)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'religion is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['religion'] = $religion;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('religion', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('religion', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			public function requestdel(){
				
				//print_r($_GET);
				$id= $this->input->get('id');
				$tablename= $this->input->get('tablename');
				
				$this->db->where('id',$id);
				$this->db->delete($tablename);
				$result= 	$this->db->last_query();
				
				if(!empty($result)){
					
				$data['result'] = "success"; 
				$data['status'] = 1;
				$data['message'] = 'Data deleteed Successfully';
				
				}
				else{
				$data['result'] = "error";
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			public function statuschange(){
				$status = array();
				//print_r($_GET);
				$id= $this->input->get('id');
				$tablename= $this->input->get('tablename');
				
				$getstatus =  $this->db->get_where($tablename,array('id='=>$id))->result_array(); 
				if($getstatus[0]['status'] == 0){
					$status['status'] = 1;
				}
				if($getstatus[0]['status'] == 1){
					$status['status'] = 0;
				}
				$this->db->where('id',$id);
				$this->db->update($tablename,$status);
				$result= 	$this->db->last_query();
				
				if(!empty($result)){
					
				$data['result'] = "success"; 
				$data['status'] = 1;
				$data['message'] = 'status changed  Successfully';
				
				}
				else{
				$data['result'] = "error";
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			
			}
			
			public function editreligion(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('religion')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}
			
			
			public function countryinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					$country = $this->input->post('country');
					$idforupdate = $this->input->post('idforupdate');
					
					if(empty($country)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'country is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['country'] = $country;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('country', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('country', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}

			
			public function editcountry(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('country')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}
			
			
			
			public function stateinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					$country = $this->input->post('country');
					$state = $this->input->post('state');
					$idforupdate = $this->input->post('idforupdate');
					
					if(empty($country)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'country is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($state)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'state is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['country_id'] = $country;
				$insert['state'] = $state;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('state', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('state', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			public function getstate(){
	
				$id= $this->input->get('id');
				$this->db->where('country_id',$id);
				$result= 	$this->db->get('state')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'No Data Found';
				}	
					
				return json_encode($data);
					
			}
			
			
			public function editstate(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('state')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}

            	public function cityinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					 $country = $this->input->post('country');
					 $state = $this->input->post('state');
				
					$city = $this->input->post('city');
					$idforupdate = $this->input->post('idforupdate');
				
					
					if(empty($country)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'country is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($state)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'state is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($city)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'city is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['country_id'] = $country;
				$insert['state_id'] = $state;
				$insert['city'] = $city;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('city', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('city', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}

            public function editcity(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('city')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}

            public function relationinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					$relation = $this->input->post('relation');
					$idforupdate = $this->input->post('idforupdate');
					
					if(empty($relation)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'relation is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['relation'] = $relation;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('relation', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('relation', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}

			
			public function editrelation(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('relation')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}			
				
			
			public function editsurname(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('surname')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}
			
			
			public function editcaste(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('caste')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}			
				
				
			
			public function casteinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					$religion = $this->input->post('religion');
					$caste = $this->input->post('caste');
					$idforupdate = $this->input->post('idforupdate');
					
					if(empty($religion)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'religion is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($caste)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'caste is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['religion_id'] = $religion;
				$insert['caste'] = $caste;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('caste', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('caste', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			
			public function getcaste(){
	
				$id= $this->input->get('id');
				$this->db->where('religion_id',$id);
				$result= 	$this->db->get('caste')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'No Data Found';
				}	
					
				return json_encode($data);
					
			}
			
			
			
			public function surnameinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					$religion = $this->input->post('religion');
					$caste = $this->input->post('caste');
				
					$surname = $this->input->post('surname');
					$idforupdate = $this->input->post('idforupdate');
					
					if(empty($religion)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'religion is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($caste)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'caste is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($surname)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'surname is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['religion_id'] = $religion;
				$insert['caste_id'] = $caste;
				$insert['surname'] = $surname;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('surname', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('surname', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
            
			public function usersinst(){
				//	print_r($_POST);
					
					$Senddata = array();
				   $name = $this->input->post('name');
					$email = $this->input->post('email');
					$phone = $this->input->post('phone');
					$age = $this->input->post('age');
					$bloodgroup = $this->input->post('bloodgroup');
					$address = $this->input->post('address');
					$dob = $this->input->post('dob');
					$materialstatus = $this->input->post('materialstatus');
					$educationlevel = $this->input->post('educationlevel');
					$hobbies = $this->input->post('hobbies');
					 $profiletype = $this->input->post('profiletype');
				 $country = $this->input->post('country');
					 $state = $this->input->post('state');
   					 $city = $this->input->post('city');
					$idforupdate = $this->input->post('idforupdate');
			
					
					
					
					if(empty($name)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'name is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($email)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'email is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($phone)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'phone is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($age)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'age is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($bloodgroup)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'bloodgroup is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($address)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'address is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($dob)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'dob is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($materialstatus)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'materialstatus is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($educationlevel)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'educationlevel is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($hobbies)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'hobbies is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($jobstatus)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'jobstatus is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
					if(empty($country)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'country is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
				//	if(empty($state)){
				//		$Senddata['status']  = 0;
				//		$Senddata['message'] = 'state is mandatory!';
				//		echo (json_encode($Senddata));
				//		return;						
				//	}
				//	if(empty($city)){
				//		$Senddata['status']  = 0;
				//		$Senddata['message'] = 'city is mandatory!';
				//		echo (json_encode($Senddata));
				//		return;
						
				//	}
					
				
				$insert = 	array();
				$insert['name'] = $name;
				$insert['email'] = $email;
				$insert['phone'] = $phone;
				$insert['age'] = $age;
				$insert['bloodgroup'] = $bloodgroup;
				$insert['address'] = $address;
				$insert['dob'] = $dob;
				$insert['materialstatus'] = $materialstatus;
				$insert['educationlevel'] = $educationlevel;
				$insert['hobbies'] = $hobbies;
				$insert['jobstatus'] = $jobstatus;
				$insert['profiletype'] = $profiletype;
				$insert['country_id'] = $country;
				$insert['state_id'] = $state;
				$insert['city_id'] = $city;
			 
				 
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('users', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('users', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}

            public function editusers(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('users')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}	

            public function getuser(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id); 
				$result= 	$this->db->get('users')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'found user';
				
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}	

			public function getcity(){
	
				$id= $this->input->get('id');
				$this->db->where('state_id',$id);
				$result= 	$this->db->get('city')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'No Data Found';
				}	
					
				return json_encode($data);
					
			}			
			
			public function pincodeinst(){
				//	print_r($_POST);
					
					$Senddata = array();
					 $country = $this->input->post('country');
					 $state = $this->input->post('state');
					  $city = $this->input->post('city');
				
					$pincode = $this->input->post('pincode');
					$idforupdate = $this->input->post('idforupdate');
				
					
					if(empty($country)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'country is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($state)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'state is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					if(empty($city)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'city is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
					if(empty($pincode)){

						$Senddata['status']  = 0;
						$Senddata['message'] = 'pincode is mandatory!';
						echo (json_encode($Senddata));
						return;
						
					}
					
				
				$insert = 	array();
				$insert['country_id'] = $country;
				$insert['state_id'] = $state;
				$insert['city_id'] = $city;
				$insert['pincode'] = $pincode;
			
				
				if(empty($idforupdate)){
				$insert['added_at'] = date("Y-m-d h:i");
				$this->db->insert('pincode', $insert); 
				$result= 	$this->db->last_query();
				}
				else{
				$insert['updated_at'] = date("Y-m-d h:i");
				$this->db->where('id',$idforupdate);
				$this->db->update('pincode', $insert); 
				$result= 	$this->db->last_query();
				}
				
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}

            public function editpincode(){
	
				$id= $this->input->get('id');
				$this->db->where('id',$id);
				$result= 	$this->db->get('pincode')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}
			
			
			public function cmsinst(){
					// print_r($_POST);
					// print_r($_FILES['txt_site_logo']['name']); 
					// print_r($_FILES['txt_Favicon']['name']); 
					
					
					// exit();   
					
					
					
					$Senddata            = array();
					$txt_meta_title = $this->input->post('txt_meta_title');
					$txt_site_address = $this->input->post('txt_site_address');
					$txt_contact_number = $this->input->post('txt_contact_number');
					$txt_email_address = $this->input->post('txt_email_address');
					$url_linkedin = $this->input->post('url_linkedin');
					$url_google_plus = $this->input->post('url_google_plus');
					$url_facebook = $this->input->post('url_facebook');
					$url_whatsapp = $this->input->post('url_whatsapp');
					$url_instagram = $this->input->post('url_instagram');
					$url_twitter = $this->input->post('url_twitter');
					$url_youtube = $this->input->post('url_youtube');
					$txt_aboutus_title = $this->input->post('txt_aboutus_title');
					$txt_aboutus = $this->input->post('txt_aboutus');
					$txt_terms_and_condition = $this->input->post('txt_terms_and_condition');
					$txt_privacy_policy_title = $this->input->post('txt_privacy_policy_title');
					$txt_privacy_policy = $this->input->post('txt_privacy_policy');
					$txt_faq_title = $this->input->post('txt_faq_title');
					$txt_faq = $this->input->post('txt_faq');
					$how_it_works = $this->input->post('how_it_works');
					$user_agreement = $this->input->post('user_agreement');
					$cookies_policy = $this->input->post('cookies_policy');
					$idforupdate = $this->input->post('idforupdate');
				
					
					
				
				$insert = 	array();
				$insert['txt_meta_title'] = $txt_meta_title;
				$insert['txt_site_address'] = $txt_site_address;
				$insert['txt_contact_number'] = $txt_contact_number;
				$insert['txt_email_address'] = $txt_email_address;
				$insert['url_linkedin'] = $url_linkedin;
				$insert['url_google_plus'] = $url_google_plus;
				$insert['url_facebook'] = $url_facebook;
				$insert['url_whatsapp'] = $url_whatsapp;
				$insert['url_instagram'] = $url_instagram;
				$insert['url_twitter'] = $url_twitter;
				$insert['url_youtube'] = $url_youtube;
				$insert['txt_aboutus_title'] = $txt_aboutus_title;
				$insert['txt_aboutus'] = $txt_aboutus;
				$insert['txt_terms_and_condition'] = $txt_terms_and_condition;
				$insert['txt_privacy_policy_title'] = $txt_privacy_policy_title;
				$insert['txt_privacy_policy'] = $txt_privacy_policy;
				$insert['txt_faq_title'] = $txt_faq_title;
				$insert['txt_faq'] = $txt_faq;
				$insert['how_it_works'] = $how_it_works;
				$insert['user_agreement'] = $user_agreement;
				$insert['user_agreement'] = $user_agreement;
				$insert['cookies_policy'] = $cookies_policy;
				
				
				$res = $this->db->get_where('cms')->result_array();
				
				
				if(empty($res)){				
					
							$txt_site_logo_check = $this->uploadimgfile("txt_site_logo",$folder="images/cms/",$prefix="cms_logo_");	
							$txt_Favicon_check = $this->uploadimgfile("txt_Favicon",$folder="images/cms/",$prefix="cms_favicon_");	
							$txt_site_logo = $txt_site_logo_check['data']['name'];		
							$txt_Favicon = $txt_Favicon_check['data']['name'];
							$insert['txt_site_logo'] = $txt_site_logo;
							$insert['txt_Favicon'] = $txt_Favicon;
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->insert('cms', $insert); 
							$result= 	$this->db->last_query(); 					
							
							
						}
				else{		
						if(!empty($_FILES['txt_site_logo']['name'])){
								$txt_site_logo_check = $this->uploadimgfile("txt_site_logo",$folder="images/cms/",$prefix="cms_logo_");	
								$txt_site_logo = $txt_site_logo_check['data']['name'];	
								$insert['txt_site_logo'] = $txt_site_logo;
						
						}
						else{
								$insert['txt_site_logo'] = $res[0]['txt_site_logo'];
							
						}
						
						if(!empty($_FILES['txt_Favicon']['name'])){
							$txt_Favicon_check = $this->uploadimgfile("txt_Favicon",$folder="images/cms/",$prefix="cms_favicon_");	
							$txt_Favicon = $txt_Favicon_check['data']['name'];
								$insert['txt_Favicon'] = $txt_Favicon;
					
						}
						else{
							$insert['txt_Favicon'] = $res[0]['txt_Favicon'];							
						}
						
						
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->update('cms', $insert); 
							$result= 	$this->db->last_query();														
					
				}
						
						
				
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			
            public function editcms(){
	
				$result= 	$this->db->get('cms')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}
			
			
			
		  public function notificationinst(){
					
					$Senddata            = array();
					$txt_meta_title = $this->input->post('txt_meta_title');
					$txt_aboutus = $this->input->post('txt_aboutus');
					$idforupdate = $this->input->post('idforupdate');					
				
				$insert = 	array();
				$insert['txt_meta_title'] = $txt_meta_title;
				$insert['txt_aboutus'] = $txt_aboutus;
						
				$res = $this->db->get_where('notification')->result_array();
				
				
				if(empty($res)){										
							$txt_Favicon_check = $this->uploadimgfile("txt_Favicon",$folder="images/notification/",$prefix="notification_favicon_");		
							$txt_Favicon = $txt_Favicon_check['data']['name'];
							$insert['txt_Favicon'] = $txt_Favicon;
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->insert('notification', $insert); 
							$result= 	$this->db->last_query(); 					
							
							
						}
				else{					
							$insert['txt_Favicon'] = $res[0]['txt_Favicon'];
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->update('notification', $insert); 
							$result= 	$this->db->last_query();														
					
				}			
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			
            public function editnotification(){
	
				$result= 	$this->db->get('notification')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}	
			
			
			public function yourpostinst(){
					
					$Senddata            = array();
					$txt_meta_title = $this->input->post('txt_meta_title');
					$txt_aboutus = $this->input->post('txt_aboutus');
					$idforupdate = $this->input->post('idforupdate');					
				
				$insert = 	array();
				$insert['txt_meta_title'] = $txt_meta_title;
				$insert['txt_aboutus'] = $txt_aboutus;
						
				$res = $this->db->get_where('yourpost')->result_array();
				
				
				if(empty($res)){										
							$txt_Favicon_check = $this->uploadimgfile("txt_Favicon",$folder="images/yourpost/",$prefix="yourpost_favicon_");		
							$txt_Favicon = $txt_Favicon_check['data']['name'];
							$insert['txt_Favicon'] = $txt_Favicon;
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->insert('yourpost', $insert); 
							$result= 	$this->db->last_query(); 					
							
							
						}
				else{					
							$insert['txt_Favicon'] = $res[0]['txt_Favicon'];
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->update('yourpost', $insert); 
							$result= 	$this->db->last_query();														
					
				}			
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			  public function edityourpost(){
	
				$result= 	$this->db->get('yourpost')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			}	
			
			public function eventinst(){
					
					$Senddata            = array();
					$txt_title = $this->input->post('txt_title');
					$txt_meta_title = $this->input->post('txt_meta_title');
					$txt_aboutus = $this->input->post('txt_aboutus');
					$txt_link = $this->input->post('txt_link');
					$idforupdate = $this->input->post('idforupdate');					
				
				$insert = 	array();
				$insert['txt_title'] = $txt_title;
				$insert['txt_meta_title'] = $txt_meta_title;
				$insert['txt_aboutus'] = $txt_aboutus;				
				$insert['txt_link'] = $txt_link;
						
				$res = $this->db->get_where('event')->result_array();
				
				
				if(empty($res)){																	
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->insert('event', $insert); 
							$result = $this->db->last_query(); 												
						}
				else{					
							$insert['added_at'] = date("Y-m-d h:i");
							$this->db->update('event', $insert); 
							$result= 	$this->db->last_query();														
					
				}			
				
				if(!empty($result)){
					
				$data['result'] = $result; 
				$data['status'] = 1;
				$data['message'] = 'Data Inserted Successfully';
				
				}
				else{
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';

				}	
					
				return json_encode($data);
					
			}
			
			
            public function editevent(){
	
				$result= 	$this->db->get('event')->result_array();
				if(!empty($result)){
				$data['result'] = $result; 
				$data['status'] = 1;
				}
				else{
				$data['result'] = array();
				$data['status'] = 0;
				$data['message'] = 'Something Went Wrong, Please Try Againn Later!!';
				}	
					
				return json_encode($data);
					
			} 
			
			public function reportedpost(){
										$this->db->select('tbl_post.* ,tbl_reportpost.*');
										$this->db->from('tbl_reportpost');  
										$this->db->join('tbl_post', 'tbl_post.post_id=tbl_reportpost.postid', 'left');				
					$result= 			$this->db->get()->result_array(); 			
					
				return $result;
					
			}
			
		

			
			
			
			
		
				
		}

?>