<?php

	Class WebServiceModel extends CI_Model
		{
				function pushnotifacation($token,$title,$message)   
					{ 	

					  $url = "https://exp.host/--/api/v2/push/send";				 
					  $headers = array();
					  $headers[] = 'Content-Type: application/json'; 
					  $arrayToSend = array('to' => $token,'title' =>$title , 'body' => $message , 'sound' => 'default', 'badge' => '1');

					  $json = json_encode($arrayToSend);
					  $ch = curl_init();
					  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
					  curl_setopt($ch, CURLOPT_URL, $url);
					  curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
					  curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
					  curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
					  $response = curl_exec($ch);			    
					   echo  $response;					  					  
					  // return $response;					  					  
					
					 } 
					 
					 
					 function pratishthapoint($userid,$point)   
					{ 	

					    $this->db->where('userid',$userid);						
						$myaccount = $this->db->get('tbl_ppoint')->result_array();
						
						if(empty($myaccount)){
							$insert['userid']=$userid;
							$insert['point']=$point;							
							$this->db->insert('tbl_ppoint',$insert);						
							
						}
						else{
							
														
							$update['userid']=$userid;
							$update['point']=trim((int)$myaccount[0]['point'] + $point);	
							
								$this->db->where('userid',$userid);	
							$this->db->update('tbl_ppoint',$update);			
								
						}
						
					
					} 	 
					 
					 
				public function GetOtp(){ 
		
						$data 			= 	array(); 
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$phoneno			=	checkrightobject($obj,"phoneno",0);
						 $six_digit_random_number = random_int(100000, 999999);

							if(empty($phoneno)){
							$Senddata['status']  = 0;
							$Senddata['message'] = 'please Enter Phone No';
							echo (json_encode($Senddata));
							return;
							}
						
						$insert['phoneno'] = $phoneno;
						$insert['opt'] = $six_digit_random_number;
						$insert['sended_at'] = date("Y-m-d h:i");

							
						$this->db->where('phoneno',$phoneno);
						$checkuser  = $this->db->get('tbl_otp')->result_array();  
						
						$result = "";
						
						if(!empty($checkuser)){
							
										$this->db->where('phoneno',$phoneno);
							$result = 	$this->db->update('tbl_otp', $insert); 						
							
						}
						else{
							$result = $this->db->insert('tbl_otp', $insert); 	
							
						}		 
						 
						
						if(!empty($result)){
						$data['result'] = $phoneno; 
						$data['status'] = 1;
						$data['message'] 	= 	"Otp Send successfully";
						$data['otp'] 	= 	$six_digit_random_number;
						
						}
						else{
						$data['result'] = array();
						$data['status'] = 0;
						$data['message'] = 'No Data Found';
						$data['otp'] 	= 	"";
						}	
							
						return json_encode($data);
					
				}

				public function CheckOtp(){  
		
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$phoneno			=	checkrightobject($obj,"phoneno",0);
						$otp			=	checkrightobject($obj,"otp",0);
						$result = "";
						
						
						$this->db->where('phoneno',$phoneno);
						$checkuser  = $this->db->get('tbl_otp')->result_array(); 
						
					
						
						$result = "";
						
						if(!empty($checkuser[0]['opt'] == $otp )){
								$result = true;					
							
						}
							
						
						
						if(!empty($result)){
						$data['result'] = $result; 
						$data['status'] = 1;
						$data['message'] 	= 	"Login successfully";
						}
						else{
						$data['result'] = array();
						$data['status'] = 0;
						$data['message'] = 'You Have Entered Wrong Otp' ;
						}	
							
						return json_encode($data);
					
				}	 

			public function PreProfile()
				{ 
					$profilepic = "";
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); } 
						$profilepic			=	checkrightobject($obj,"profilepic",0); 							
						$name			=	checkrightobject($obj,"name",0); 	
						$email			=	checkrightobject($obj,"email",0); 	
						$age			=	checkrightobject($obj,"age",0); 	
						$dob			=	checkrightobject($obj,"dob",0); 	
						$materialstatus			=	checkrightobject($obj,"materialstatus",0); 	
						$educationstatus		=	checkrightobject($obj,"educationstatus",0); 	
						$jobstatus			=	checkrightobject($obj,"jobstatus",0); 							
						$phoneno			=	checkrightobject($obj,"phoneno",0); 	
						$bloodgroup			=	checkrightobject($obj,"bloodgroup",0); 	
						$address			=	checkrightobject($obj,"address",0); 	
						$country			=	checkrightobject($obj,"country",0); 	
						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 	
						$metrimonyshare			=	checkrightobject($obj,"metrimonyshare",0); 	
						$directoryshare			=	checkrightobject($obj,"directoryshare",0); 	
						$work			=	checkrightobject($obj,"work",0); 	
						$gender			=	checkrightobject($obj,"gender",0); 	
						
						
						$insert  = array();
						$Senddata  = array();  
						
						
						if(empty($name)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again name';
						echo (json_encode($Senddata));
						return;
						}	
						if(empty($phoneno)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again phoneno';
						echo (json_encode($Senddata));
						return;
						}	
						  
						// if(empty($state)){
						// $Senddata['status']  = 0;
						// $Senddata['message'] = 'State Is menditoey';
						// echo (json_encode($Senddata));
						// return;
						// }	
						// if(empty($city)){
						// $Senddata['status']  = 0;
						// $Senddata['message'] = 'City Is menditoey';
						// echo (json_encode($Senddata));
						// return;
						// }		
						
						if(empty($dob)){ 
						$Senddata['status']  = 0;
						$Senddata['message'] = 'dob is mandetory!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						if(empty($age)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'age is manditory';
						echo (json_encode($Senddata));
						return;
						}						

						if(empty($gender)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'gender is mandetory!';;
						echo (json_encode($Senddata));
						return;
						}						
						 
						  
						
						
						
						$insertid = ""; 
						$insert['name'] = strtoupper($name);
						$insert['email'] = $email;
						$insert['dob'] = $dob;
						$insert['materialstatus'] = $materialstatus;
						$insert['educationlevel'] = $educationstatus; 
						$insert['jobstatus'] = $jobstatus; 
						$insert['phone'] = $phoneno;
						$insert['age'] = $age; 
						$insert['bloodgroup'] = $bloodgroup;  
						$insert['address'] = $address; 
						$insert['country_id'] = $country; 
						$insert['state_id'] = $state; 
						$insert['city_id'] = $city;  
						$insert['directoryshare'] = $directoryshare;  
						$insert['metrimonyshare'] = $metrimonyshare;  
						$insert['work'] = $work;  
						$insert['gender'] = $gender;  
						$insert['added_at'] = date("Y-m-d h:i");  
												
						
						
						if(!empty($profilepic)){
						$insert['profilepic'] = $profilepic;
						}
						
						
						$this->db->where('phone',$phoneno);
						$checkphone = $this->db->get('users')->result_array();  
						 
						if(!empty($checkphone)){ 
									$this->db->where('phone',$phoneno);
									$this->db->update('users', $insert); 
						}
						else{
							if(empty($profilepic)){
							$Senddata['status']  = 0;
							$Senddata['message'] = 'profilepic is mandetory!';
							echo (json_encode($Senddata));
							return;
							}
							$this->db->insert('users', $insert); 
							$insert_id = $this->db->insert_id();
							$this->pratishthapoint($insert_id,5);
						}	
						
									
						$getdatares="";	
						
						if( !empty( $phoneno) ){
						$getdatares = 	$this->db->get_where('users',array('phone='=>$phoneno))->result_array();
						
						 $userid = $getdatares[0]['id'];
						
						
						
						}
						
							if(!empty($phoneno)){ 
		
									$data['status'] = 1;
									$data['message'] = 'Data Added Successfully!';
									$data['userid'] = $userid;
									
									return json_encode($data);	
							}else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
				}
				
				
				
				public function metrimonialprofile(){
					
					
					
					
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$phoneno			=	checkrightobject($obj,"phoneno",0); 
						$Weight			=	checkrightobject($obj,"Weight",0); 
						$about			=	checkrightobject($obj,"about",0); 
						$gotra			=	checkrightobject($obj,"gotra",0); 
						$height			=	checkrightobject($obj,"height",0); 
						$pob			=	checkrightobject($obj,"pob",0); 
						$rashi			=	checkrightobject($obj,"rashi",0); 
						$skinclr			=	checkrightobject($obj,"skinclr",0); 
						$tob			=	checkrightobject($obj,"tob",0); 
						$img1			=	checkrightobject($obj,"img1",0); 
						$img2			=	checkrightobject($obj,"img2",0); 
						$img3			=	checkrightobject($obj,"img3",0); 
						
						
						$getdatares = 	$this->db->get_where('users',array('phone='=>$phoneno))->result_array();  
						
						$id = $phoneno ;
						
						
						
						
						if(empty($phoneno)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again phoneno';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						
						
						
						if(empty($Weight)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again Weight';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						
						
						if(empty($about)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again about';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						
						
						
						
						
						if(empty($gotra)){
						$Senddata['status']  = 0; 
						$Senddata['message'] = 'Something went Wrong please go back and try again gotra';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						if(empty($height)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again age';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						if(empty($pob)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again age';
						echo (json_encode($Senddata));
						return;
						}	
						if(empty($rashi)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again age';
						echo (json_encode($Senddata));
						return;
						}	
						if(empty($skinclr)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again age';
						echo (json_encode($Senddata));
						return;
						}	
						if(empty($tob)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again age';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						$insert = array(); 
						
						
						
							$insert['id'] = $id;  
							$insert['Weight'] = $Weight;  
							$insert['about'] = $about;   
							$insert['gotra'] = $gotra;  
							$insert['height'] = $height;  
							$insert['pob'] = $pob;  
							$insert['rashi'] = $rashi;  
							$insert['skinclr'] = $skinclr;  
							$insert['tob'] = $tob;  
							$insert['img1'] = $img1;  
							$insert['img2'] = $img2;  
							$insert['img3'] = $img3;  
							
							
							$checkuser = 	$this->db->get_where('tbl_MatrimonialProfile',array('id='=>$id))->result_array(); 
							$result = "";
							
							
							if(empty($checkuser)){
								
								$result = $this->db->insert('tbl_MatrimonialProfile',$insert);
								
							}
							else{
											$this->db->where('id',$id);
								$result = 	$this->db->update('tbl_MatrimonialProfile', $insert); 
								
								
							}
						
							if(!empty($result)){ 
		
									$data['status'] = 1;
									$data['message'] = ' Successfully!';
									
									return json_encode($data);	
							}else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}				
						
					
					
					
					
					
				}
				
				
				public function Get_matrimonial()
				{
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }					
						$phoneno			=	checkrightobject($obj,"phoneno",0); 
						
						
						
						$getdatares = 	$this->db->get_where('tbl_MatrimonialProfile',array('id='=>$phoneno))->result_array(); 
						


							if(!empty($getdatares)){
		
									$data['status'] = 1;
									$data['result'] = $getdatares;
									$data['message'] = 'data inserted successfully successfully!';
									return json_encode($data);	
							}else{
									$data['status'] = 0;
									$data['result'] = "";
									$data['message'] = 'Something went wrong';
									return json_encode($data); 
							}						
						
						
				}
				
				
				public function userdata()
				{
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$phone			=	checkrightobject($obj,"phone",0); 
						
						
						
						// $getdatares = 	$this->db->get_where('users',array('phone='=>$phone))->result_array();
							$this->db->select('users.* ,state.state ,city.city');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left');
									$this->db->join('city', 'city.id=users.city_id', 'left');
									$this->db->where('users.phone',$phone);
						$getdatares = $this->db->get()->result_array();  
						


							if(!empty($getdatares)){
		
									$data['status'] = 1;
									$data['result'] = $getdatares;
									$data['message'] = 'data inserted successfully successfully!';
									return json_encode($data);	
							}else{
									$data['status'] = 0;
									$data['result'] = "";
									$data['message'] = 'Something went wrong';
									return json_encode($data); 
							}						
						
						
				}
			
				public function Search_family()
				{
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$name			=	checkrightobject($obj,"name",0); 
						$userid			=	checkrightobject($obj,"userid",0);  
						
						
										$this->db->like('name', $name );
						$getdatares = 	$this->db->select('id,name,profilepic')->get('users')->result_array();
						
						
						foreach($getdatares as $key => $val) {
						  if($val['id'] == $userid){						
							array_splice($getdatares, $key, 1);   
						  } 
					   }
						
						
						


							if(!empty($getdatares)){
		
									$data['status'] = 1;
									$data['result'] = $getdatares;
									$data['message'] = 'data inserted successfully successfully!';
									return json_encode($data);	
							}else{
									$data['status'] = 0;
									$data['result'] = $getdatares;
									$data['message'] = 'Something went wrong';
									return json_encode($data); 
							}						
						
						
				}
				
				
		
				
				public function alldirectory()
				{
						
					
					$result = $this->db->get('users')->result_array();
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = '';
									return json_encode($data);	
							} 
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				}	
				
				public function get_gotra()
				{
						
					
					$result = [];
					$i = 1;
					
					$allgotra= $this->db->get('surname')->result_array();
				
					
					foreach($allgotra as $key=>$ag){
						
						
						
						$result[$key]['label'] = $ag['surname'];
						$result[$key]['value'] = $ag['surname'];
						$result[$key]['key'] = $i;
						
						
						$i++;
						
					}
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = '';
									return json_encode($data);	
							} 
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				}
				
				
				public function allPost()
				{ 
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$lastid				=	checkrightobject($obj,"lastid",0); 
						$type				=	checkrightobject($obj,"type",0); 
						$userid				=	checkrightobject($obj,"userid",0); 
						$nextdata=$lastid+1;
						$upto=$lastid+4;
						
						 if($type == 2){ 
							 
							 $this->db->where('tbl_post.user_id',$userid);			    	 
							 
						}
					
									$this->db->select('tbl_post.*,users.profilepic,users.name,users.state_id,users.city_id,state.state ,city.city'); 
									$this->db->from('tbl_post');
									$this->db->join('users', 'tbl_post.user_id = users.id', 'left');
									$this->db->join('state', 'state.id=users.state_id', 'left');
									$this->db->join('city', 'city.id=users.city_id', 'left');
									$this->db->order_by("tbl_post.post_id", "DESC");
						$myresult =	$this->db->get()->result_array();  
						
						
						$lastdataary = count($myresult);
						
						
						
						if($lastid == 0 ){
						$result   =  array_slice($myresult, 0, 3);
						}
						else{
							
							if($upto > $lastdataary){
								$result   =  array_slice($myresult, $nextdata, $upto);
									
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = 'You have reached max';
									return json_encode($data);	
								
							}
							else{    
								$result   =  array_slice($myresult, $nextdata, $upto);
								
								
							}
					
							
						}						
					
					
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = '';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				} 
				
				
				 
				 
				public function all_people()
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }  
						$userid			=	checkrightobject($obj,"userid",0);
						$username			=	checkrightobject($obj,"username",0);
						
					$result="";		
					$arrykey = "";					
					 
					
									$this->db->select('users.* ,state.state ,city.city');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left');
									$this->db->join('city', 'city.id=users.city_id', 'left');
									if(!empty($username)){										
									$this->db->like('users.name',$username);
									}
						$result = $this->db->get()->result_array();  
					
				
					
						foreach ($result as $key => $val) {
						  if($val['id'] == $userid){
							$arrykey = $key; 
							array_splice($result, $arrykey, 1);  
						  }
					   }
					   
					   
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = "";
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;
									$data['result'] = [];
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				}
				
				
				
				public function UserDetails() 
				{
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$id			=	checkrightobject($obj,"id",0);
						
						
						
						
									$this->db->select('users.* ,state.state ,city.city');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left');
									$this->db->join('city', 'city.id=users.city_id', 'left');
									$this->db->where('users.id',$id);
						$result = $this->db->get()->result_array(); 
					
							// foreach($result as $key1 => $res){ 
							// $this->db->where('id',$res['state_id']);
							// $nust = 	$this->db->get('state')->result_array();
							// $result [$key]['state'] 	 = $nust[0]['state']; 
							
							// }							
							
							// foreach($result as $key1 => $res){
									// $this->db->where('id',$res['city_id']);
									// $nust = 	$this->db->get('city')->result_array();
									// $result [$key]['city'] 	 = $nust[0]['city'];
									
							// }
							
							
							$playstorelink = $this->db->get('tbl_detailsall')->result_array(); 
							
							
							if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = 'Welcome Back'; 
									$data['link'] = $playstorelink; 
									return json_encode($data);	
							}
							
							
							
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				}	
				
				public function allusers() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 
						$filteruser			=	checkrightobject($obj,"filteruser",0); 
						
						

						
						$data['filterstae'] = [$state,$city] ;  
						
						
						if(!empty($state)){
							 $this->db->where('city.state_id',$state);
							 
								
						}

						if(!empty($city)){
							$this->db->where('city.id',$city);				   
								
						}	
						
						if(!empty($filteruser)){
							$this->db->like('users.name',$filteruser,'both'); 				   
								
						}		
 
 

									$this->db->select('users.* ,state.state ,city.city');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left'); 
									$this->db->join('city', 'city.id=users.city_id', 'left');
									$this->db->where('users.directoryshare','1');	
						$result = $this->db->get()->result_array(); 			
 						

										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['message'] = 'Something went wrong';      
									return json_encode($data);
							}
					
					
				}
				
				  
				public function allblooddoners() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 
						$filteruser			=	checkrightobject($obj,"filteruser",0); 
						$blood			=	checkrightobject($obj,"blood",0); 
						
						

						
						$data['filterstae'] = [$state,$city] ;  
						
						
						if(!empty($state)){
							 $this->db->where('city.state_id',$state);
							 
								
						}

						if(!empty($city)){
							$this->db->where('city.id',$city);				   
								
						}	

						if(!empty($blood)){
							$this->db->where('users.bloodgroup',$blood);				   
								
						}	 
						
						if(!empty($filteruser)){
							$this->db->like('users.name',$filteruser,'both'); 				   
								
						}		
 
 

									$this->db->select('users.* ,state.state ,city.city');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left'); 
									$this->db->join('city', 'city.id=users.city_id', 'left');
						$result = $this->db->get()->result_array(); 			
 						

										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['message'] = 'Something went wrong';      
									return json_encode($data);
							}
					
					
				}
				
				 
				
				public function getcountry(){
	
				// $id= $this->input->get('id');
				// $this->db->where('state_id',$id);
					$result= 	$this->db->get('country')->result_array();
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
				
				public function getstate(){
					
	
						
					$data 			= 	array(); 
						$data['status'] 	= 	0; 
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$countryid			=	checkrightobject($obj,"countryid",0); 
						
					
								$this->db->where('country_id',$countryid);
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
			
			
				public function Filterstate(){
					
	
						
					$data 			= 	array();
						$data['status'] 	= 	0; 
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$countryid			=	checkrightobject($obj,"countryid",0); 
						
					
								$this->db->where('country_id',$countryid);
					$result= 	$this->db->get('state')->result_array(); 
					
					$filterarr = array();
					$i = 0 ;
					
					foreach($result as $key => $res){
						$filterarr[$key]["label"] = $res['state'];    
						$filterarr[$key]["value"]= $res['id'];  						
						$filterarr[$key]["key"] = ++$i;
							
					}
					
					
					
					if(!empty($result)){
					$data['result'] = $filterarr; 
					$data['status'] = 1;
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found';
					}	 
						
					return json_encode($data);
					
			}
			
			
				public function getcity(){
					
	
						
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$countryid			=	checkrightobject($obj,"countryid",0); 
						$stateid			=	checkrightobject($obj,"stateid",0); 
						
						
						
					
								$this->db->where('country_id',$countryid);
								$this->db->where('state_id',$stateid);
					$result= 	$this->db->get('city')->result_array();
					if(!empty($result)){ 
					$data['result'] = $result; 
					$data['status'] = 1;
						$data['message'] = 'Data Found';
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found';
					}	 
						
					return json_encode($data);
					
			}
			
				public function FilterCity(){ 
					
	
						
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$countryid			=	checkrightobject($obj,"countryid",0); 
						$stateid			=	checkrightobject($obj,"stateid",0); 
						
						
						
					
								$this->db->where('country_id',$countryid);
								$this->db->where('state_id',$stateid);
					$result= 	$this->db->get('city')->result_array();
					$i = 0; 
					
					
					$filterarr = array();
					
					foreach($result as $key => $res){
						$filterarr[$key]["key"] = $res['city'];
						$filterarr[$key]["value"]= $res['id'];
						$filterarr[$key]["label"] = $res['city'];
						 
						
						
					}
					if(!empty($filterarr)){ 
					$data['result'] = $filterarr;   
					$data['status'] = 1;
						$data['message'] = 'Data Found';
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found';
					}	 
						
					return json_encode($data);
					
			}
			
			public function Create_Post(){   
				
					
		
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$title			=	$obj->title; 
						$type			=	checkrightobject($obj,"type",0); 
						$posturl			=	checkrightobject($obj,"posturl",0); 
						$userid			=	checkrightobject($obj,"userid",0); 
						
						
						
					date_default_timezone_set('Asia/Kolkata');

						if(empty($type)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'type!!!Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'userid!!! Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						if(empty($posturl)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'posturl!!!! posturl  is mandetory!'; 
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();		
						$insert['title']     = trim($title);		
						$insert['type']	        = $type	;	
						$insert['posturl']	    = $posturl;	
						$insert['user_id']	    = $userid;	
						$insert['time']	    =  date("h:i");	
						$insert['posted_at'] = date("d-m-y");

  
					 
					$result = 	$this->db->insert('tbl_post', $insert);  
					
					$this->pratishthapoint($userid,2);  
						
					
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Data Instered Succesfully';
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'Something went wrong';
					}	 
						
					return json_encode($data);
			}	
			
			public function friend_req(){   
				
					
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						echo $userid			=	checkrightobject($obj,"userid",0); 
						echo $firendid			=	checkrightobject($obj,"firendid",0); 
						date_default_timezone_set('Asia/Kolkata');

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($firendid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();			
						$insert['userid']	        = $userid	;	
						$insert['firendid']	    = $firendid;	
						$insert['sended_at'] = date("Y-m-d h:i");		

									$this->db->where('userid',$userid);
									$this->db->where('firendid',$firendid);
						$checking =	$this->db->get('tbl_Friendreq')->result_array();
						
						$result = '';
						
						if(empty($checking)){
							$result = 	$this->db->insert('tbl_Friendreq', $insert);  	
							
							if(!empty($result)){				
								
										
										$gettoken = $this->db->get_where('tbl_token',array('user_id='=>$firendid))->result_array();
										$title = $this->db->get_where('users',array('id='=>$userid))->result_array();
										if(!empty($gettoken)){									
									
										$token =   $gettoken[0]['token'];	
										$message = $title[0]['name'] . " is Send You Friend Request ";
										$this->pushnotifacation($token,$title[0]['name'],$message); 
										
										}
										
							}
							
						$data['message'] = 'request Sended Succesfully';

						
						}
						else{
							
									$this->db->where('userid',$userid);
									$this->db->where('firendid',$firendid);
						$result =	$this->db->delete('tbl_Friendreq');
						$data['message'] = 'request Canceled Succesfully';
								
						}	
					
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'SRequest Sended Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
				
					}	  
						
					return json_encode($data);
			}	
			
			
			public function Family_Req(){   
				
					
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						echo $userid			=	checkrightobject($obj,"userid",0); 
						echo $firendid			=	checkrightobject($obj,"firendid",0); 
						echo $relation			=	checkrightobject($obj,"relation",0); 
						date_default_timezone_set('Asia/Kolkata');

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($firendid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						

						$insert = array();			
						$insert['userid']	        = $userid	;	
						$insert['firendid']	    = $firendid;	
						$insert['relation']	    = $relation;	
						$insert['sended_at'] = date("Y-m-d h:i");		 

									$this->db->where('userid',$userid);
									$this->db->where('firendid',$firendid);
						$checking =	$this->db->get('tbl_Familyreq')->result_array();
						
						$result = '';
						
						if(empty($checking)){
							$result = 	$this->db->insert('tbl_Familyreq', $insert);  
							$data['message'] = ' Succesfully';								
						}
						else{
							
									$this->db->where('userid',$userid);
									$this->db->where('firendid',$firendid);
						$result =	$this->db->delete('tbl_Familyreq');
									$data['message'] = 'Canceled Succesfully';
						}



												
					
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'SRequest Sended Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
				
					}	 
						
					return json_encode($data);
			}	
			
			
			public function like_post(){   
				
					
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
							$userid			=	checkrightobject($obj,"userid",0); 
							$postid			=	checkrightobject($obj,"postid",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						
						
						$insert = array();			
						$insert['userid']	        = $userid	;	
						$insert['postid']	    = $postid;	
						$insert['liked_at'] = date("Y-m-d h:i");		

									$this->db->where('userid',$userid);
									$this->db->where('postid',$postid);
						$checking =	$this->db->get('tbl_like_post')->result_array();
						
						$result = '';
						
						if(empty($checking)){
						$result = 	$this->db->insert('tbl_like_post', $insert);  							
						}
						else{
							
									$this->db->where('userid',$userid);
									$this->db->where('postid',$postid);
						$result =	$this->db->delete('tbl_like_post');
								
						}	
							
						
						if(!empty($result)){
						$noti = array();			
						$noti['noti_userid']	    = $userid	;	
						$noti['noti_postid']	    = $postid;	
						$noti['noti_time']	    	= date('h:i');	
						$noti['noti_status'] 		= "Liked Your Post";	 	

									$this->db->where('noti_userid',$userid);
									$this->db->where('noti_postid',$postid);
						$notichecking =	$this->db->get('tbl_notification')->result_array();					
						$notiresult = '';
						
						if(empty($notichecking)){
						$notiresult = 	$this->db->insert('tbl_notification', $noti);  	 
						$data['message'] = 'Succesfully';	
							$this->pratishthapoint($userid,5);						
						}
						else{
							
									$this->db->where('noti_userid',$userid);
									$this->db->where('noti_postid',$postid);
						$notiresult =	$this->db->delete('tbl_notification');
						$data['message'] = 'Canceled Succesfully';
								
						}	
						}
						
						
						
						if($data['message'] == 'Succesfully'){
							
							
						
						$getpostuder = $this->db->get_where('tbl_post',array('post_id ='=>$postid))->result_array();
						if(!empty($getpostuder)){
							
							$gettoken = $this->db->get_where('tbl_token',array('user_id='=>$getpostuder[0]['user_id']))->result_array();
							$title = $this->db->get_where('users',array('id='=>$getpostuder[0]['user_id']))->result_array();
							
							if(!empty($gettoken)){	
							$token =   $gettoken[0]['token'];	
							$message = $title[0]['name'] . " is liked your ";
							 $this->pushnotifacation($token,$title[0]['name'],$message);
							}
							
						}
						
							
						}
						
						
									
						
						
						
						
						
					
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Request Sended Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
				
					}	 
						
					return json_encode($data);
			}	
			
			public function inst_token(){   
				
						$data 			= 	array(); 
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						
						 $user_id			=	checkrightobject($obj,"user_id",0); 
						 $token			=	checkrightobject($obj,"token",0); 


						$insert = array();			
						$insert['user_id']	        = $user_id	;	
						$insert['token']	    	= $token;		

									$this->db->where('user_id',$user_id);
						$checking =	$this->db->get('tbl_token')->result_array();
						
						$result = '';
						
						if(empty($checking)){
						$result = 	$this->db->insert('tbl_token', $insert);  							
						}
						else{
							
									$this->db->where('user_id',$user_id); 
						$result =	$this->db->update('tbl_token',$insert);
								
						}	
							
							
						
						
					
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Request Sended Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
				
					}	 
						
					return json_encode($data);
			}	

			
			
			public function get_Friendreq(){   
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						 $userid			=	checkrightobject($obj,"userid",0); 
						 $firendid			=	checkrightobject($obj,"firendid",0); 

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($firendid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();				

									$this->db->where('userid',$userid);
									$this->db->where('firendid',$firendid);
						$result =	$this->db->get('tbl_Friendreq')->result_array();
						
						
					
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}			
			
			
			public function check_friend(){    
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						 $userid			=	checkrightobject($obj,"userid",0); 
						 $firendid			=	checkrightobject($obj,"firendid",0); 

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($firendid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();				

										$this->db->where('userid',$userid);
										$this->db->where('firendid',$firendid);
							$result  = 	$this->db->get('tbl_Friend')->result_array();
							
							if(empty($result)){
								
								
											$this->db->where('firendid',$userid);
										$this->db->where('userid',$firendid);
							$result = 	$this->db->get('tbl_Friend')->result_array();				
							
							
							}
						
						
					
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}			
						
			
			public function get_FamilyReq(){   
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						 $userid			=	checkrightobject($obj,"userid",0); 
						 $firendid			=	checkrightobject($obj,"firendid",0); 

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($firendid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();				

									$this->db->where('userid',$userid);
									$this->db->where('firendid',$firendid);
						$result =	$this->db->get('tbl_Familyreq')->result_array();
						
						
					
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}			
						
			
			public function get_LikedPost(){    
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						 $userid			=	checkrightobject($obj,"userid",0); 
						 $postid			=	checkrightobject($obj,"postid",0); 

						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();			
						$insert['userid']	      = $userid	;	
						$insert['postid']	    = $postid;		

									$this->db->where('userid',$userid);
									$this->db->where('postid',$postid);
						$result =	$this->db->get('tbl_like_post')->result_array(); 
						
						
					
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}
			
			public function get_postlikedperson(){  				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						 $postid			=	checkrightobject($obj,"postid",0); 
						 
						if(empty($postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						

						$insert = array();			
									$this->db->select('users.id,users.profilepic,users.name,tbl_like_post.*');	
									$this->db->where('tbl_like_post.postid',$postid);
									$this->db->join('users', 'users.id = tbl_like_post.userid', 'left');
						$result =	$this->db->get('tbl_like_post')->result_array(); 
						
						
		 
							
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}
			
			
			public function CountLikeComment(){    
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$postid			=	checkrightobject($obj,"postid",0); 

			
						
						if(empty($postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}

						$insert = array();					

									$this->db->where('postid',$postid);
						$countdta =	$this->db->get('tbl_like_post')->result_array();
						$result = count($countdta);
						
						
						
						$this->db->where('comment_postid',$postid);
						$countdta2 =	$this->db->get('tbl_comments')->result_array();
						$comment = count($countdta2);
						
						
						
						
					
					if(!empty($result)){  
					$data['like'] = $result;   
					$data['comment'] = $comment;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['like'] =  $result; 
					$data['comment'] =  $comment;
					$data['status'] = 0; 
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}	
			
			
			
			
				public function get_events()
				{ 
					
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 
						
						

						
						$data['filterstae'] = [$state,$city] ;
						
						
							
					
					 $this->db->select('tbl_events.* ,state.state ,city.city');
					$this->db->from('tbl_events');  
					$this->db->join('state', 'state.id=tbl_events.event_state', 'left');
					$this->db->join('city', 'city.id=tbl_events.event_city', 'left');
					// $this->db->where('c.album_id',$id);
					if(!empty($state)){
							 $this->db->where('tbl_events.event_state',$state);
							 
					}

					if(!empty($city)){
						$this->db->where('tbl_events.event_city',$city);				 
								
					}
					
					$this->db->order_by('tbl_events.event_date','DESC');          
					$result = $this->db->get()->result_array(); 				
				
					
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = '';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				} 
				
				
				
				public function post_CommentPost()
				{ 
					
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$comment_postid			=	checkrightobject($obj,"comment_postid",0); 	
						$comment_userid			=	checkrightobject($obj,"comment_userid",0); 
						$comment_text			=	checkrightobject($obj,"comment_text",0); 	
						
						
							if(empty($comment_postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($comment_userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}


						if(empty($comment_text)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						

						$insert = array();	

							$insert['comment_postid'] = $comment_postid;
							$insert['comment_userid'] = $comment_userid;
							$insert['comment_text'] = $comment_text;
							$insert['comment_date'] = date("Y-m-d");
							$insert['comment_time'] = date("h:i"); 
							

					$insertcmt = 	$this->db->insert('tbl_comments', $insert);  
					
					$result = "";
					
					
					
					
					
					
					if(!empty($insertcmt)){
								
								  $this->db->where('comment_postid',$comment_postid);
						$result = $this->db->get('tbl_comments')->result_array();
						
							
					}
					
					
					
					if(empty($result)){
							$noti = array();			
							$noti['noti_userid']	    = $comment_userid	;	
							$noti['noti_postid']	    = $comment_postid;	
							$noti['noti_time']	    	= date('h:i');
							$noti['noti_status'] 		= "Comment On Your Post";		

										$this->db->where('noti_userid',$userid);
										$this->db->where('noti_postid',$firendid);
							$notichecking =	$this->db->get('tbl_notification')->result_array();					
							$notiresult = '';
							
							if(empty($notichecking)){
							$notiresult = 	$this->db->insert('tbl_notification', $noti);  	
							$data['message'] = ' Succesfully';							
							}
							else{
								
										$this->db->where('noti_userid',$userid);
										$this->db->where('noti_postid',$firendid);
							$notiresult =	$this->db->delete('tbl_notification');
							$data['message'] = 'Canceled Succesfully';
									
							}	
						}
						
						
							
					
					
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = '';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				} 
				
				
				
				public function get_CommentPost()  
				{ 
					
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$comment_postid			=	checkrightobject($obj,"comment_postid",0); 	
						
							if(empty($comment_postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
								
								$this->db->select('tbl_comments.*,users.profilepic,users.name');
								$this->db->from('tbl_comments');
								$this->db->join('users', 'tbl_comments.comment_userid = users.id', 'left');
								$this->db->where('comment_postid',$comment_postid);
						$result = $this->db->get()->result_array();		
				
							
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result;
									$data['message'] = '';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;
									$data['message'] = 'Something went wrong';
									return json_encode($data);
							}
					
					
				} 
				
			
				
				
			public function heartlike_comment(){   
				
					
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$comment_id			=	checkrightobject($obj,"comment_id",0); 
						$comment_postid			=	checkrightobject($obj,"comment_postid",0); 
						$userid			=	checkrightobject($obj,"userid",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						if(empty($comment_id)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($comment_postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						$this->db->where('comment_id',$comment_id);
						$getpost = $this->db->get('tbl_comments')->result_array();				
						$insert = array();	
						$result = array();	
						
					
						
						
						if(empty($getpost[0]['comment_likedbyuser'])){
								$insert['comment_likedbyuser'] = json_encode($userid);	
							$result = 	$this->db->update('tbl_comments', $insert);  	
							$data['message'] = ' Succesfully';							
						}
						else{
							$insert['comment_likedbyuser'] = array_merge($getpost[0]['comment_likedbyuser'],$userid);	
							$result = 	$this->db->insert('tbl_comments', $insert);  	
							$data['message'] = ' Succesfully';							
								
						}	
						
						
						
						
					
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'SRequest Sended Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
				
					}	 
						
					return json_encode($data);
			}
			
			
			public function get_notification(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$userid			=	checkrightobject($obj,"userid",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						$result = array();
						$newres ;
						$resmydta ;
						$lastdata ;

						
									$this->db->where('user_id',$userid);							
									$this->db->order_by("post_id ", "DESC");
						$result = $this->db->get('tbl_post')->result_array();					
						
						
						if(!empty($result)){
							
								foreach($result as $key1 => $respost){								
											$this->db->where('noti_postid',$respost['post_id']);
								$newres = $this->db->get('tbl_notification')->result_array();
								
								foreach($newres as $key2 => $nrs){
									
									
									if(!empty($nrs)){
									
											$this->db->where('id',$nrs['noti_userid']);
									$newusr  =$this->db->get('users')->result_array();
								
								
										$newres[$key2]['profilepic'] = $newusr[0]['profilepic'];
										$newres[$key2]['name'] = $newusr[0]['name'];
										$newres[$key2]['posturl'] = $result[$key1]['posturl'];
								
								
									}
										
							
								} 
								
									
								
								
								if(!empty($newres)){
									
									$resmydta[$key1] = $newres;
								}	
							
							}
						}	
					$mydata = [];
					if(!empty($resmydta)){
						foreach($resmydta as $k1 => $rd){
							foreach($rd as $k2=>$r){
								
								$mydata[] = $r;
								
							}
							
							
							
						}  
						

					
						
					}
						
					
					if(!empty($result)){ 
					$data['result'] = $mydata;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
					$data['length'] = ''; 
				
					}	 
						
					return json_encode($data);
			}
			
			
			
			
			public function request_notification(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$userid			=	checkrightobject($obj,"userid",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						$res1 = array();		
						$res2 = array();		
						$time = array();		


								 $this->db->where('firendid',$userid);				
					$res1 = 	$this->db->get('tbl_Familyreq')->result_array();
					
					
								 $this->db->where('firendid',$userid);				
					$res2 = 	$this->db->get('tbl_Friendreq')->result_array();
					
					
					
					
					$result = array_merge($res1, $res2);
					
					
				 foreach($result as $ky=> $res){
								$this->db->where('id',$res['userid']);				
					$newuser = 	$this->db->get('users')->result_array();
					
					$result[$ky]['profilepic'] = $newuser[0]['profilepic'];
					$result[$ky]['name'] = $newuser[0]['name'];
					 
					 
					 
				 }
					
					
						
							
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			
		
			
			public function accept_notification(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						  $userid			=	checkrightobject($obj,"userid",0); 
						  $frndid			=	checkrightobject($obj,"frndid",0); 
						$relation			=	checkrightobject($obj,"relation",0); 
						  $status			=	checkrightobject($obj,"status",0);   	

						
						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($userid)){
						$Senddata['status']  = 0; 
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						 
						if(empty($frndid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						
						if($status == 1){
							$insert = array();	

							$insert['userid'] = $userid;
							$insert['firendid'] = $frndid;							
							$insert['sended_at'] = date("Y-m-d h:i");
							
							
							if($relation == 'no'){	
								
							        $this->db->insert('tbl_Friend',$insert); 
							$res1=  $this->db->last_query();
							if(!empty($res1)){
										$this->db->where('userid',$userid);
										$this->db->where('firendid',$frndid);
										$this->db->delete('tbl_Friendreq');						
							$result =   "Completed";
							}						
								
							}
							else{		
								
									$insert['relation'] = $relation;	
									$this->db->insert('tbl_Family',$insert); 
								$res1=  $this->db->last_query()	;						

							if(!empty($res1)){
										$this->db->where('userid',$userid);
										$this->db->where('firendid',$frndid);
										$this->db->delete('tbl_Familyreq');
								$result =   "Completed";
								
							}							
								
							}
							
							
							
							
						}
						if($status == 0){
							if($relation == 0){
										$this->db->where('userid',$userid);
										$this->db->where('firendid',$frndid);
										$this->db->delete('tbl_Friendreq');
								$result =   "Completed";
								
							}
							else{
								
										$this->db->where('userid',$userid);
										$this->db->where('firendid',$frndid); 
										$this->db->delete('tbl_Familyreq');
									$result =   "Completed";
								
							}
							
							
						}
						
					
					
						
							
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			
			
			
			
			
			public function get_myfamily(){    
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$userid			=	checkrightobject($obj,"userid",0); 

			
						
						if(empty($userid)){   
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 

						$insert = array();					 

									$this->db->where('userid',$userid);
									$this->db->or_where('firendid',$userid);
						$result =	$this->db->get('tbl_Family')->result_array();
						
						
						foreach($result as $key => $res){
							if($userid != $res['firendid']){
								
								
								$this->db->where('id',$res['firendid']);				
							$newuser = 	$this->db->get('users')->result_array();
							
							
							
							foreach($newuser as $key1 => $res){ 
							$this->db->where('id',$res['state_id']);
							$nust = 	$this->db->get('state')->result_array();
							$result [$key]['state_id'] 	 = $nust[0]['state']; 
							
							}
							
							
							foreach($newuser as $key1 => $res){
									$this->db->where('id',$res['city_id']);
									$nust = 	$this->db->get('city')->result_array();
									$result [$key]['city_id'] 	 = $nust[0]['city'];
									
							}
							
							$result[$key]['profilepic'] = $newuser[0]['profilepic'];
							$result[$key]['name'] = $newuser[0]['name'];
							
							}
							
							else{
								
										$this->db->where('id',$res['userid']);				
							$newuser = 	$this->db->get('users')->result_array();
							
							$result[$key]['profilepic'] = $newuser[0]['profilepic'];
							$result[$key]['name'] = $newuser[0]['name'];
								
								
							foreach($newuser as $key1 => $res){ 
							$this->db->where('id',$res['state_id']);
							$nust = 	$this->db->get('state')->result_array();
							$result [$key]['state_id'] 	 = $nust[0]['state']; 
							
							}
							
							
							foreach($newuser as $key1 => $res){
									$this->db->where('id',$res['city_id']);
									$nust = 	$this->db->get('city')->result_array();
									$result [$key]['city_id'] 	 = $nust[0]['city'];
									
							}
								 
							
							}
							
							
						}	
					
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
				
					}
					else{
					$data['result'] =  1;
					$data['status'] = 0; 
					$data['message'] = 'unloaded';  
					}	 
						
					return json_encode($data);
			}	
			
			
			
			public function get_friends(){    
				
				
						$data 			= 	array();  
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$userid			=	checkrightobject($obj,"userid",0); 

			
						
						if(empty($userid)){   
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 

						$insert = array();					 

									$this->db->where('userid',$userid);
									$this->db->or_where('firendid',$userid);
						$result =	$this->db->get('tbl_Friend')->result_array();
						
						
						foreach($result as $key => $res){
							if($userid != $res['firendid']){
								
								
								$this->db->where('id',$res['firendid']);				
							$newuser = 	$this->db->get('users')->result_array();
							
							
							
							foreach($newuser as $key1 => $res){ 
							$this->db->where('id',$res['state_id']);
							$nust = 	$this->db->get('state')->result_array();
							$result [$key]['state_id'] 	 = $nust[0]['state']; 
							
							}
							
							
							foreach($newuser as $key1 => $res){
									$this->db->where('id',$res['city_id']);
									$nust = 	$this->db->get('city')->result_array();
									$result [$key]['city_id'] 	 = $nust[0]['city'];
									
							}
							
							$result[$key]['profilepic'] = $newuser[0]['profilepic'];
							$result[$key]['name'] = $newuser[0]['name'];
							
							}
							
							else{
								
										$this->db->where('id',$res['userid']);				
							$newuser = 	$this->db->get('users')->result_array();
							
							$result[$key]['profilepic'] = $newuser[0]['profilepic'];
							$result[$key]['name'] = $newuser[0]['name'];
								
								
							foreach($newuser as $key1 => $res){ 
							$this->db->where('id',$res['state_id']);
							$nust = 	$this->db->get('state')->result_array();
							$result [$key]['state_id'] 	 = $nust[0]['state']; 
							
							}
							
							
							foreach($newuser as $key1 => $res){
									$this->db->where('id',$res['city_id']);
									$nust = 	$this->db->get('city')->result_array();
									$result [$key]['city_id'] 	 = $nust[0]['city'];
									
							}
								 
							
							}
							
							
						}	  
					
					if(!empty($result)){  
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'loaded';
					$data['total'] = count($result); 
				
					}
					else{
					$data['result'] =  1;
					$data['status'] = 0; 
					$data['message'] = 'unloaded'; 
					$data['total'] = 0; 					
					}	 
						
					return json_encode($data);
			}	
			
			
				
			public function get_chatlist(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$userid			=	checkrightobject($obj,"userid",0); 						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						 
						
						$res1 = array();		
						$res2 = array();		
						$time = array();	 	


								 $this->db->where('id_two',$userid);									 
					$res1 = 	$this->db->get('tbl_chat')->result_array();			
					
								 $this->db->where('id_one',$userid);				
					$res2 = 	$this->db->get('tbl_chat')->result_array();
					
					
					
					
					
					
					$result = array_merge($res1, $res2);
					
					
					
					
				 foreach($result as $ky=> $res){
					 
					 if($res['id_one'] == $userid){
								$this->db->where('id',$res['id_two']);				
						 
					 }
					 if($res['id_two'] == $userid){
								$this->db->where('id',$res['id_one']);				
						 
					 }
					 
					$newuser = 	$this->db->get('users')->result_array();
					
					$result[$ky]['profilepic'] = $newuser[0]['profilepic'];
					$result[$ky]['name'] = $newuser[0]['name'];
					$result[$ky]['reciverid'] = $newuser[0]['id'];
					 
					 
					 
				 }
				 
					
						
							
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			//i have to work here
			
				
			public function sql_sendmessage(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$sender			=	checkrightobject($obj,"sender",0); 
						$reciver			=	checkrightobject($obj,"reciver",0); 
						$msg			=	checkrightobject($obj,"msg",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($sender)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
						if(empty($reciver)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
						
						if(empty($msg)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						}
						
						
						
						$res1 = array();		
						$res2 = array();		
						$time = array();	 	
						$insert = array();	 	
						$eminst = array();	 	
						$result = array();	


										$this->db->where('chatid','chat'.$sender.$reciver); 
										$this->db->or_where('chatid','chat'.$reciver.$sender);										 
							$res2 = 	$this->db->get('tbl_chat')->result_array();		
													


					
					
					if(empty($res2)){
						$eminst['id_one'] = $sender;
						$eminst['id_one'] = $reciver;
						$eminst['chatid'] = base64_encode("chat".$sender.$reciver);
						$eminst['added_at'] = date("Y-m-d h:i");
						
						$result = $this->db->insert('tbl_chat',$eminst);							
						
					}
					

						
							
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			
			
		
		
		
			
			public function  get_Allmsg(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$sender			=	checkrightobject($obj,"sender",0); 
						$reciver			=	checkrightobject($obj,"reciver",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($sender)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
						if(empty($reciver)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
						
						
						$res1 = array();		
						$res2 = array();						 	
						$result = array();	 	
						
						
					
										$this->db->where('chatid','chat'.$sender.$reciver); 
										$this->db->or_where('chatid','chat'.$reciver.$sender);										 
							$result= 	$this->db->get('tbl_chat')->result_array();		
							
				
							
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			
			
			
			public function  createchatid(){     
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$sender			=	checkrightobject($obj,"sender",0); 
						$reciver			=	checkrightobject($obj,"reciver",0); 
						
						date_default_timezone_set('Asia/Kolkata');

						 
						if(empty($sender)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
						if(empty($reciver)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
											 	
						$result = array();	
						$insert = array();	
						$getchatid = array();	


								$insert['id_one']= $sender; 
								$insert['id_two']= $reciver; 
								$insert['chatid']= 'chat'.$sender.$reciver; 			
						
																		 
							$result= 	$this->db->insert('tbl_chat',$insert);	
							
							
							if(!empty($result)){	
										$this->db->where('chatid','chat'.$sender.$reciver); 							 
							$getchatid= 	$this->db->get('tbl_chat')->result_array();					
								
								
							}
							


				
							
							
				
							
					if(!empty($result)){ 
					$data['result'] = $getchatid;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			
			
			
			
			
			public function  msg_notification(){   
				
					 
					date_default_timezone_set('Asia/Kolkata');
						$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
						$reciver			=	checkrightobject($obj,"reciver",0); 
						$msg			=	checkrightobject($obj,"msg",0); 
						
						date_default_timezone_set('Asia/Kolkata');
						$result = "";
						
						
						if(empty($reciver)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Somethig went  Wrong Please Close the app and restart!';
						echo (json_encode($Senddata));
						return;
						} 
						
										
						$gettoken = $this->db->get_where('tbl_token',array('user_id='=>$reciver))->result_array();
						$title = $this->db->get_where('users',array('id='=>$reciver))->result_array();
						
						
						if(!empty($gettoken)){									
									
						$token =   $gettoken[0]['token'];	
						$this->pushnotifacation($token,$title[0]['name'],$msg); 
						$result = $reciver;
						}
										
										
							
					if(!empty($result)){ 
					$data['result'] = $result;   
					$data['status'] = 1;
					$data['message'] = 'Successfully' ; 
				
					}
					else{
					$data['result'] = array();
					$data['status'] = 0;
					$data['message'] = 'No Data Found' ; 
				
					}	 
						
					return json_encode($data);
			}
			
			
			public function get_metrimonial()
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 
						$userid			=	checkrightobject($obj,"userid",0); 
						
						

						
						$data['filterstae'] = [$state,$city] ;  
						
						
						if(!empty($state)){
							 $this->db->where('city.state_id',$state); 
							 
								
						}

						if(!empty($city)){
							$this->db->where('city.id',$city);				   
								
						}		

 
									$this->db->where('users.metrimonyshare',1); 		
									$this->db->select('users.* ,state.state ,city.city');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left'); 
									$this->db->join('city', 'city.id=users.city_id', 'left');
						$result = $this->db->get()->result_array(); 

						// foreach ($result as $key => $val) {
						  // if($val['id'] == $userid){						
							// array_splice($result, $key, 1);   
						  // } 
					   // }

						

					    
 						

										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['message'] = 'Something went wrong';      
									return json_encode($data);
							}
					
					
				}
				
			
			public function get_lastfiltermetrimonial()
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 
						$userid			=	checkrightobject($obj,"userid",0); 
						$to			=	checkrightobject($obj,"to",0); 
						$from			=	checkrightobject($obj,"from",0); 
						$gotra			=	checkrightobject($obj,"gotra",0); 
						$color			=	checkrightobject($obj,"color",0); 
						$rashi			=	checkrightobject($obj,"rashi",0); 
						$gender			=	checkrightobject($obj,"gender",0); 
					
						
						

						
						$data['filterstae'] = [$state,$city] ;  
						
						
						if(!empty($state)){
							 $this->db->where('city.state_id',$state); 
							 
								
						}

						if(!empty($city)){
							$this->db->where('city.id',$city);				   
								
						} 
						
						if(!empty($gotra)){
							$this->db->where('tbl_MatrimonialProfile.gotra',$gotra);				   
								
						}
						
						if(!empty($color)){
							$this->db->where('tbl_MatrimonialProfile.skinclr',$color);				   
								
						}	
						
						if(!empty($rashi)){
							$this->db->where('tbl_MatrimonialProfile.rashi',$rashi);				   
								
						}						
						
						if(!empty($to)){
							$this->db->where('users.age <=',$to);				   
								
						}	 
						
						if(!empty($from)){
							$this->db->where('users.age >=',$from);				   
								
						} 
						
						if(!empty($gender)){ 
							$this->db->where('users.gender',$gender);				   
								
						} 
		

 
									$this->db->where('users.metrimonyshare',1); 		
									$this->db->select('users.* ,state.state ,city.city,tbl_MatrimonialProfile.*');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left'); 
									$this->db->join('city', 'city.id=users.city_id', 'left');
									$this->db->join('tbl_MatrimonialProfile', 'tbl_MatrimonialProfile.id=users.phone', 'left');
						$result = $this->db->get()->result_array(); 
 
						// foreach ($result as $key => $val) {
						  // if($val['id'] == $userid){						
							// array_splice($result, $key, 1);   
						  // } 
					   // }

						

					    
 						

										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['message'] = 'Something went wrong';      
									return json_encode($data);
							}
					
					
				}
			 
		
		
		
			public function get_detailsofMetrimony()
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$phoneno			=	checkrightobject($obj,"phoneno",0);  
						
						

						
						
						if(!empty($phoneno)){
							 $this->db->where('users.phone',$phoneno); 
							 
								
						}
						
									
									$this->db->select('users.* ,state.state ,city.city,tbl_MatrimonialProfile.*');
									$this->db->from('users');  
									$this->db->join('state', 'state.id=users.state_id', 'left'); 
									$this->db->join('city', 'city.id=users.city_id', 'left');
									$this->db->join('tbl_MatrimonialProfile', 'tbl_MatrimonialProfile.id=users.phone', 'left');
						$result = $this->db->get()->result_array(); 
						
						
						
									$this->db->where('id',$phoneno);
						$rescheck = $this->db->get('tbl_MatrimonialProfile')->result_array();

						
										
					if(!empty($rescheck)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'User has not updated his profile';       
									return json_encode($data);
							}
					
					
				}
				
				
				
			public function gameintrest() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$userid			=	checkrightobject($obj,"userid",0);  
						$gameid			=	checkrightobject($obj,"gameid",0);  
						$type			=	checkrightobject($obj,"type",0);  
						$result = "";
						
						
						
						if($type == 0){
							
							$this->db->where('userid',$userid);
							$this->db->where('gameid',$gameid);
							
							$result = $this->db->get('tbl_gameintrest')->result_array(); 					
							
							
						}
						
						
						if($type == 1){
						
						$insert['userid'] = $userid;
						$insert['gameid'] = $gameid;
						
						
						$this->db->insert('tbl_gameintrest',$insert); 
						$result = $this->db->last_query();
						
						}
						
										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Your request is subbimeted'; 
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'something went wrong'; 									
									return json_encode($data);
							}
					
					
				}
				
				
			 	
			public function checkuserprof_metrominy() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$userid			=	checkrightobject($obj,"userid",0);  
						
						
							$this->db->where('id',$userid);
							$result = $this->db->get('tbl_MatrimonialProfile')->result_array(); 					
							
						
						
						
										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Your request is subbimeted'; 
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'something went wrong'; 									
									return json_encode($data);
							}
					
					
				}
			 
			 	
			public function getppoint() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$userid			=	checkrightobject($obj,"userid",0);  
						
						
							$this->db->where('userid',$userid);
							$result = $this->db->get('tbl_ppoint')->result_array(); 					
							
						
						
						
										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Your request is subbimeted'; 
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'something went wrong'; 									
									return json_encode($data);
							}
					
					
				}
			 
		
		 	
			public function sendchat() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$sender			=	checkrightobject($obj,"sender",0);  
						$reciver			=	checkrightobject($obj,"reciver",0);  
						$message			=	checkrightobject($obj,"message",0);  
						$chatid			=	checkrightobject($obj,"chatid",0);  
						
						
						$insert['sender']=$sender;
						$insert['reciver']=$reciver;
						$insert['message']=$message;
						$insert['sender_seen']=1;
						$insert['reciver_seen']=0;	
						$insert['chatid']=$chatid;	
						
						$result =array();
						
						$resdata = $this->db>insert('tbl_allchats',$insert);
						
						if(!empty($resdata)){					
									  $this->db->where('chatid',$chatid);
							$result = $this->db->get('tbl_allchats')->result_array(); 					
									  
						}	

						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Your chat subbimeted'; 
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'something went wrong'; 									
									return json_encode($data);
							}
					
					
				}
				
				
				
			 
		public function reciverseen() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
 
						$reciver			=	checkrightobject($obj,"reciver",0);  
						$chatid			=	checkrightobject($obj,"chatid",0);  
						


						$insert['reciver_seen']=1;	
	
						
								     $this->db->where('reciver',$reciver);
									  $this->db->where('chatid',$chatid);
						$result = $this->db>insert('tbl_allchats',$insert);
						
					

						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'reciver hyave seen'; 
									return json_encode($data);	 
							}
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'something went wrong'; 									
									return json_encode($data);
							}
					
					
				}
			 	
				
			 
		public function reportpost() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
 
						$postid			=	checkrightobject($obj,"postid",0);  
						$userid			=	checkrightobject($obj,"userid",0);  
						
						$result = "";
						


								     $this->db->where('postid',$postid);  
									  $this->db->where('userid',$userid);
						$check  = $this->db->get('tbl_reportpost')->result_array();
						
						
						
						if(empty($check)){
							$insert['postid'] = $postid;						
							$insert['userid'] = $userid;			

						$result = 	$this->db->insert('tbl_reportpost' ,$insert);						
						}
						
						if(!empty($check)){
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'you have already reported for this post';								
									return json_encode($data);
						}
						
					

						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Reported successfully'; 
									return json_encode($data);	 
							}
							
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'you have already reported for this post';								
									return json_encode($data);
							}
					
					
				}	

				
				
		public function get_shopprofile() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
 
						$id			=	checkrightobject($obj,"id",0);  
										
												
									$this->db->select('tbl_shopprofile.* ,tbl_shopcategory.*');
									$this->db->from('tbl_shopprofile');  
									$this->db->join('tbl_shopcategory', 'tbl_shopcategory.cat_id = tbl_shopprofile.category', 'left');
									$this->db->where('tbl_shopprofile.id',$id);									
						$result = $this->db->get()->result_array(); 
						
						
						foreach($result as $key => $res){

									$this->db->where('id',$res['state']);
							$stn =  $this->db->get('state')->result_array()	;
							
							$result[$key]['statename'] = $stn[0]['state'];							
						}
						
						
						
						foreach($result as $key2 => $res){
							
							$stn = $this->db->get_where('city',array('id='=>$res['city']))->result_array();
							$result[$key2]['cityname'] = $stn[0]['city'];	
							
						} 
							
					

						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Reported successfully'; 
									return json_encode($data);	 
							}
							
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'you have already reported for this post';								
									return json_encode($data);
							}
					
					
				}
							
					
				
		public function delete_shopprofile() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }
 
						$id			=	checkrightobject($obj,"id",0);  
						$shopid			=	checkrightobject($obj,"shopid",0);  
						
						
									$this->db->where('id',$id);
									$this->db->where('shopid',$shopid);											
						$result =	$this->db->delete('tbl_shopprofile');
						
						
						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Reported successfully'; 
									return json_encode($data);	 
							}
							
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'you have already reported for this post';								
									return json_encode($data);
							}
					
					
				}
							
				
		public function get_shopcategory() 
				{
						
									
						$result = $this->db->get('tbl_shopcategory')->result_array(); 
						
						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'Reported successfully'; 
									return json_encode($data);	 
							}
							
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'you have already reported for this post';								
									return json_encode($data);
							}
					
					
				}
				
				
			 	 
		public function create_shopedit() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again laters!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); } 
 
						
						     $id	=	checkrightobject($obj,"id",0); 
						     $shopnumber	=	checkrightobject($obj,"shopnumber",0);   
						     $city	=	checkrightobject($obj,"city",0); 
						     $friopen	=	checkrightobject($obj,"friopen",0); 
						     $friopentime	=	checkrightobject($obj,"friopentime",0); 
						     $frishopopen	=	checkrightobject($obj,"frishopopen",0); 
						     $monclosetime	=	checkrightobject($obj,"monclosetime",0); 
						     $monopen	=	checkrightobject($obj,"monopen",0); 
						     $monopentime	=	checkrightobject($obj,"monopentime",0); 
						     $satopen	=	checkrightobject($obj,"satopen",0); 
						     $setshopclose	=	checkrightobject($obj,"setshopclose",0); 
						     $setshopopen	=	checkrightobject($obj,"setshopopen",0); 
						     $shopdesc	=	checkrightobject($obj,"shopdesc",0); 
						     $shopfblink	=	checkrightobject($obj,"shopfblink",0); 
						     $shopinstalink	=	checkrightobject($obj,"shopinstalink",0); 
						     $shoplocation	=	checkrightobject($obj,"shoplocation",0); 
						     $shopname	=	checkrightobject($obj,"shopname",0); 
						     $state	=	checkrightobject($obj,"state",0); 
						     $sunopen	=	checkrightobject($obj,"sunopen",0); 
						     $sunshopclose	=	checkrightobject($obj,"sunshopclose",0); 
						     $sunshopopen	=	checkrightobject($obj,"sunshopopen",0); 
						     $thusclosetime	=	checkrightobject($obj,"thusclosetime",0); 
						     $thusopen	=	checkrightobject($obj,"thusopen",0); 
						     $thusopentime	=	checkrightobject($obj,"thusopentime",0); 
						     $tueclosetime	=	checkrightobject($obj,"tueclosetime",0); 
						     $tueopen	=	checkrightobject($obj,"tueopen",0); 
						     $tueopentime	=	checkrightobject($obj,"tueopentime",0); 
						     $webopen	=	checkrightobject($obj,"webopen",0); 
						     $webopentime	=	checkrightobject($obj,"webopentime",0); 
						     $wedclosetime	=	checkrightobject($obj,"wedclosetime",0); 
						     $category	=	checkrightobject($obj,"category",0); 
						     $shopimg	=	checkrightobject($obj,"shopimg",0); 
						     $whatsappno	=	checkrightobject($obj,"whatsappno",0); 
							 
						 
						
						$result = "";
						$insert = [];
						
						$insert['id'] = $id ; 
						$insert['city'] = $city ; 
						$insert['friopen'] = $friopen ; 
						$insert['friopentime'] = $friopentime ; 
						$insert['frishopopen'] = $frishopopen ; 
						$insert['monclosetime'] = $monclosetime ; 
						$insert['monopen'] = $monopen ; 
						$insert['monopentime'] = $monopentime ; 
						$insert['satopen'] = $satopen ; 
						$insert['setshopclose'] = $setshopclose ; 
						$insert['setshopopen'] = $setshopopen ; 
						$insert['shopdesc'] = $shopdesc ; 
						$insert['shopfblink'] = $shopfblink ; 
						$insert['shopinstalink'] = $shopinstalink ; 
						$insert['shoplocation'] = $shoplocation ; 
						$insert['shopname'] = $shopname ; 
						$insert['state'] = $state ; 
						$insert['sunopen'] = $sunopen ; 
						$insert['sunshopclose'] = $sunshopclose ; 
						$insert['sunshopopen'] = $sunshopopen ; 
						$insert['thusclosetime'] = $thusclosetime ; 
						$insert['thusopen'] = $thusopen ; 
						$insert['thusopentime'] = $thusopentime ; 
						$insert['tueclosetime'] = $tueclosetime ; 
						$insert['tueopen'] = $tueopen ; 
						$insert['tueopentime'] = $tueopentime ; 
						$insert['webopen'] = $webopen ; 
						$insert['webopentime'] = $webopentime ; 
						$insert['wedclosetime'] = $wedclosetime ; 
						$insert['shopimg'] = $shopimg ; 
						$insert['category'] = $category ; 
						$insert['whatsappno'] = $whatsappno ; 
						
						
						
						
						
							if(empty($shopnumber)){								
											
							$result =$this->db->insert('tbl_shopprofile',$insert);					
																
							}
							else{								
										$this->db->where('id',$id);
										$this->db->where('shopid',$shopnumber); 
							$result =$this->db->update('tbl_shopprofile',$insert);
							
							} 
						
						 
					

						if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'created  successfully'; 
									return json_encode($data);	 
							}
							
							else{
									$data['status'] = 0;  
									$data['result'] = ''; 
									$data['message'] = 'something went wrong!!';								
									return json_encode($data);
							}
					   
					
				}
				 
				
				
				
				public function all_business() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$state			=	checkrightobject($obj,"state",0); 	
						$city			=	checkrightobject($obj,"city",0); 
						$filteruser			=	checkrightobject($obj,"filteruser",0); 
						
						

						
						$data['filterstae'] = [$state,$city] ;  
						
						
						if(!empty($state)){
							 $this->db->where('tbl_shopprofile.state',$state);
							 
								
						}

						if(!empty($city)){
							$this->db->where('tbl_shopprofile.city',$city);				   
								
						}	
						
						if(!empty($filteruser)){
							$this->db->like('tbl_shopprofile.shopname',$filteruser,'both'); 				   
								
						}		
 
 

									$this->db->select('tbl_shopprofile.* ,state.state ,city.city');
									$this->db->from('tbl_shopprofile');  
									$this->db->join('state', 'state.id=tbl_shopprofile.state', 'left'); 
									$this->db->join('city', 'city.id=tbl_shopprofile.city', 'left');	
						$result = $this->db->get()->result_array(); 
						
						
							
						foreach($result as $key => $res){

									$this->db->where('cat_id',$res['category']);
							$stn =  $this->db->get('tbl_shopcategory')->result_array()	;
							
							$result[$key]['categoryname'] = $stn[0]['eng_shop_category'];							
						}
						
						
					


						
 						

										
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['message'] = 'Something went wrong';      
									return json_encode($data);
							}
					
					
				}
				
			 
		
		
				public function delete_postrequest() 
				{
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	file_get_contents('php://input');
						$obj				=	json_decode($json);
						if(empty($obj)) { return (json_encode($data)); }

						$userid			=	checkrightobject($obj,"userid",0); 	
						$postid			=	checkrightobject($obj,"postid",0); 
						
						
						
						if(empty($userid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again name';
						echo (json_encode($Senddata));
						return;
						}	
						
						
						if(empty($postid)){
						$Senddata['status']  = 0;
						$Senddata['message'] = 'Something went Wrong please go back and try again name';
						echo (json_encode($Senddata));
						return;
						}	
						
						
								  $this->db->where('user_id',$userid);
								  $this->db->where('post_id',$postid);
						$result = $this->db->delete('tbl_post');
											
					if(!empty($result)){
		
									$data['status'] = 1;
									$data['result'] = $result; 
									$data['message'] = 'found data';
									return json_encode($data);	
							}
							else{
									$data['status'] = 0;  
									$data['message'] = 'Something went wrong';      
									return json_encode($data);
							}
					
					
				}
				
				public function checkimage_upload(){	 	
					
					$data 			= 	array();
						$data['status'] 	= 	0;
						$data['data'] 		= 	"";
						$data['message'] 	= 	"Something went wrong, Please try again later!";
						$json   			= 	 file_get_contents('php://input');
						$obj				=	json_decode($json, true);
						
						
						  $email = $obj['image'];
						  
						  print_r($email['_parts'][0][1]);
						


				}					
			  
		
		
		
			
			
			
				
				
				
				
				
				
				
				


			
			
				
			 			 

	
		}
		
?>