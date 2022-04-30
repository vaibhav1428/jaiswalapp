<?php
		defined('BASEPATH') OR exit('No direct script access allowed');

	class WebService extends MY_Controller 
		{
			
			public function __construct()
				{
					parent::__construct();
						Header('Access-Control-Allow-Origin: *'); 
						Header('Access-Control-Allow-Headers: *'); 
						Header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');  
						$this->load->helper(array('form','language','url'));
						$this->load->model('WebServiceModel');

							if(isset($_COOKIE['language']))
								{
									$this->lang->load($_COOKIE['language']."_landing" , $_COOKIE['language']);
								} else {
									$this->lang->load('english_landing' , 'english');
								}   
				} 
				
				
				public function pushnotifacation()
				{
					echo $this->WebServiceModel->pushnotifacation();
				}
				public function GetOtp()
				{
					echo $this->WebServiceModel->GetOtp();
				}
				public function CheckOtp()
				{
					echo $this->WebServiceModel->CheckOtp();
				}	
				
				public function PreProfile()
				{
					echo $this->WebServiceModel->PreProfile();
				}	
				public function userdata()
				{
					echo $this->WebServiceModel->userdata();
				}
				
				
				
				public function ProfileDetails()
				{
					echo $this->WebServiceModel->ProfileDetails();
				}
				public function EditProfile()
				{
					echo $this->WebServiceModel->EditProfile();
				}
				//edit preprofile
				public function dataofPreprofile()
				{
					echo $this->WebServiceModel->dataofPreprofile();
				}
				//---------------------------
				public function alldirectory()
				{
					echo $this->WebServiceModel->alldirectory();
				}public function getcountry()
				{
					echo $this->WebServiceModel->getcountry();
				}
				public function getstate()
				{
					
					echo $this->WebServiceModel->getstate();
				}
				public function getcity()
				{
					
					echo $this->WebServiceModel->getcity();
				}
				public function Filterstate()
				{
					
					echo $this->WebServiceModel->Filterstate();
				}
				public function FilterCity()
				{
					
					echo $this->WebServiceModel->FilterCity();
				}
				
				public function allusers()
				{
					
					echo $this->WebServiceModel->allusers();
				}
				public function Create_Post()
				{
					
					echo $this->WebServiceModel->Create_Post();
				}
				public function UserDetails()
				{
					
					echo $this->WebServiceModel->UserDetails();
				}
				public function allPost()
				{
					
					echo $this->WebServiceModel->allPost();
				}
				
				public function all_people()
				{
					
					echo $this->WebServiceModel->all_people();
				}
				public function Search_family()
				{
					 
					echo $this->WebServiceModel->Search_family();
				}
				public function friend_req()
				{
					
					echo $this->WebServiceModel->friend_req();
				}
				public function get_Friendreq()
				{
					
					echo $this->WebServiceModel->get_Friendreq();
				}
				
				public function like_post()
				{
					
					echo $this->WebServiceModel->like_post();
				}
				public function get_LikedPost()
				{
					
					echo $this->WebServiceModel->get_LikedPost();
				}
				public function CountLikeComment()
				{
					
					echo $this->WebServiceModel->CountLikeComment();
				}
				public function Family_Req()
				{
					
					echo $this->WebServiceModel->Family_Req();
				}
				public function get_FamilyReq()
				{
					
					echo $this->WebServiceModel->get_FamilyReq(); 
				}
				public function get_events()
				{
					
					echo $this->WebServiceModel->get_events(); 
				}
				public function post_CommentPost() 
				{ 
					
					echo $this->WebServiceModel->post_CommentPost(); 
				}
				public function get_CommentPost()
				{
					
					echo $this->WebServiceModel->get_CommentPost(); 
				}
				public function heartlike_comment()
				{
					
					echo $this->WebServiceModel->heartlike_comment(); 
				}	
				
				public function get_notification() 
				{
					
					echo $this->WebServiceModel->get_notification(); 
				}
				public function request_notification()
				{
					
					echo $this->WebServiceModel->request_notification(); 
				}	
				public function accept_notification()
				{
					
					echo $this->WebServiceModel->accept_notification(); 
				}
				public function get_myfamily()
				{
					
					echo $this->WebServiceModel->get_myfamily();  
				}
				
				public function inst_token()
				{
					
					echo $this->WebServiceModel->inst_token();  
				}	
				
				
				public function get_gotra()
				{
					
					echo $this->WebServiceModel->get_gotra();  
				}
				public function metrimonialprofile()
				{
					
					echo $this->WebServiceModel->metrimonialprofile();  
				}	
				
				public function Get_matrimonial()
				{
					
					echo $this->WebServiceModel->Get_matrimonial();  
				}
				public function get_chatlist()
				{
					
					echo $this->WebServiceModel->get_chatlist();  
				}
				public function sql_sendmessage()
				{
					
					echo $this->WebServiceModel->sql_sendmessage();  
				}
				public function get_Allmsg()
				{
					
					echo $this->WebServiceModel->get_Allmsg();  
				} 
				
				public function msg_notification()
				{
					
					echo $this->WebServiceModel->msg_notification();  
				} 
				
				public function get_metrimonial()
				{
					
					echo $this->WebServiceModel->get_metrimonial();   
				} 
				
				public function get_detailsofMetrimony()
				{
					
					echo $this->WebServiceModel->get_detailsofMetrimony();   
				} 
				public function gameintrest()
				{
					
					echo $this->WebServiceModel->gameintrest();    
				}

				public function checkuserprof_metrominy()
				{
					
					echo $this->WebServiceModel->checkuserprof_metrominy();    
				} 
				public function get_lastfiltermetrimonial()
				{
					
					echo $this->WebServiceModel->get_lastfiltermetrimonial();    
				}

				public function createchatid()
				{
					
					echo $this->WebServiceModel->createchatid();    
				} 	
				
				public function getppoint()
				{
					
					echo $this->WebServiceModel->getppoint();    
				} 	
				
				public function sendchat()
				{
					
					echo $this->WebServiceModel->sendchat();    
				}	
				public function reciverseen()
				{
					
					echo $this->WebServiceModel->reciverseen();    
				} 
				
				public function allblooddoners()
				{
					
					echo $this->WebServiceModel->allblooddoners();    
				} 
				
				public function get_friends()
				{
					
					echo $this->WebServiceModel->get_friends();    
				} 
				
				public function check_friend()
				{
					
					echo $this->WebServiceModel->check_friend();    
				}  
				public function reportpost()
				{
					
					echo $this->WebServiceModel->reportpost();      
				}  
				public function create_shopedit()
				{
					
					echo $this->WebServiceModel->create_shopedit();       
				}  
					public function get_shopprofile()
				{
					
					echo $this->WebServiceModel->get_shopprofile();       
				} 

				public function get_shopcategory()
				{
					
					echo $this->WebServiceModel->get_shopcategory();       
				}  
				
			
				public function delete_shopprofile()
				{
					
					echo $this->WebServiceModel->delete_shopprofile();       
				}  
				
				public function all_business()
				{
					
					echo $this->WebServiceModel->all_business();       
				}
				
				public function get_postlikedperson()
				{
					
					echo $this->WebServiceModel->get_postlikedperson();       
				}  
			
				public function delete_postrequest()
				{					
					echo $this->WebServiceModel->delete_postrequest();       
				}  
				
				public function checkimage_upload()
				{					
					echo $this->WebServiceModel->checkimage_upload();        
				}  
				
				
		}
		
?>