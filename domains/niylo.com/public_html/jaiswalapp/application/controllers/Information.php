<?php
		defined('BASEPATH') OR exit('No direct script access allowed');

	class Information extends MY_Controller 
		{

			public function __construct()
				{
					parent::__construct();
						$this->load->helper(array('form','language','url'));
						$this->load->model('InformationModel');
							if(isset($_COOKIE['language']))
								{
									$this->lang->load($_COOKIE['language']."_landing" , $_COOKIE['language']);
								} else {
									$this->lang->load('english_landing' , 'english');
								}
				}
				
			public function index()  
				{
					
						$data = array();
					$seo  = array();
						$seo['url']				=	site_url("Information");
						$seo['title']			=	lang('Jaiswal sarwarigya')." - ".WEBSITENAME;
						$seo['metatitle']		=	lang('Jaiswal sarwarigya')." - ".WEBSITENAME;
						$seo['metadescription']	=	lang('Jaiswal sarwarigya')." - ".WEBSITENAME;
						$data['data']['seo']	=	$seo;
						$data['jaiswaldata'] = $this->db->get('cms')->result_array(); 
						$data['layout'] = $this->frontLayout($data);
						$this->load->view("front/dashboard.tpl" ,$data);

				} 
				
				
				

			public function login()
				{
					$data = array();
					$seo  = array();
					$checklogin	=	$this->InformationModel->checkloggedin();
						if($checklogin)
							{
								redirect("Information/dashboard?token=".md5(time()));	
							}
						$data['checklogin']		=	$checklogin;
						$seo['url']				=	site_url("Information");
						$seo['title']			=	lang('logintext')." - ".WEBSITENAME;
						$seo['metatitle']		=	lang('textmetatitle')." - ".WEBSITENAME;
						$seo['metadescription']	=	lang('textmetadescription')." - ".WEBSITENAME;
						$data['data']['seo']	=	$seo;
						$data['jaiswaldata'] = $this->db->get('cms')->result_array(); 
						$data['layout'] = $this->frontLayout($data);
						$this->load->view("login.tpl" ,$data);
				} 
				
				
				
				
				public function dashboard()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']		=	"dashboard";
						$seo['url']				=	site_url("admin/dashboard");
						$seo['title']			=	'Dashboard'." - ".WEBSITENAME;
						$seo['metatitle']		=	'Dashboard'." - ".WEBSITENAME;
						$seo['metadescription']	=	'Dashboard'." - ".WEBSITENAME;
							$data['data']['seo'] = $seo;
							$data['layout'] = $this->AdminLayout($data);
							$this->load->view("admin/dashboard.php" ,$data );
				} 
				
				public function users()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"master";
						$seo['url']				=	site_url("adminstrator/users");
						$seo['title']			=	"Users "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Users "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Users "." - ".WEBSITENAME;
						$seo['name']			=	"Users ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('users')->result_array();
						$data['country']    =  $this->db->get_where('country',array('status='=>'1'))->result_array();
						$data['layout'] = $this->AdminLayout($data);
						// print_r($data['result']);
						$this->load->view("admin/users.php" ,$data );
				} 
				
				public function cms()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"gs";
						$seo['url']				=	site_url("adminstrator/cms");
						$seo['title']			=	"CMS "." - ".WEBSITENAME;
						$seo['metatitle']		=	"CMS "." - ".WEBSITENAME;
						$seo['metadescription']	=	"CMS "." - ".WEBSITENAME;
						$seo['name']			=	"CMS ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('cms')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/cms.php" ,$data );
				} 
				
				public function notification()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"gs";
						$seo['url']				=	site_url("adminstrator/notification");
						$seo['title']			=	"Notification "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Notification "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Notification "." - ".WEBSITENAME;
						$seo['name']			=	"Notification ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('notification')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/notification.php" ,$data );
				} 
				
				public function yourpost()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"gs";
						$seo['url']				=	site_url("adminstrator/yourpost");
						$seo['title']			=	"YourPost "." - ".WEBSITENAME;
						$seo['metatitle']		=	"YourPost "." - ".WEBSITENAME;
						$seo['metadescription']	=	"YourPost "." - ".WEBSITENAME;
						$seo['name']			=	"YourPost ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('yourpost')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/yourpost.php" ,$data );
				} 
				
				public function event()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"gs";
						$seo['url']				=	site_url("adminstrator/event");
						$seo['title']			=	"Event "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Event "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Event "." - ".WEBSITENAME;
						$seo['name']			=	"Event ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('event')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/event.php" ,$data );
				} 
				
				public function country()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"master";
						$seo['url']				=	site_url("adminstrator/country");
						$seo['title']			=	"Country "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Country "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Country "." - ".WEBSITENAME;
						$seo['name']			=	"Country ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('country')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/country.php" ,$data );
				} 
				
				public function state()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"country";
						$seo['url']				=	site_url("adminstrator/state");
						$seo['title']			=	"State "." - ".WEBSITENAME;
						$seo['metatitle']		=	"State "." - ".WEBSITENAME;
						$seo['metadescription']	=	"State "." - ".WEBSITENAME;
						$seo['name']			=	"State ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('state')->result_array();
						$data['country']    =  $this->db->get_where('country',array('status='=>'1'))->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/state.php" ,$data );
				} 
				
				public function city()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"country";
						$seo['url']				=	site_url("adminstrator/city");
						$seo['title']			=	"City "." - ".WEBSITENAME;
						$seo['metatitle']		=	"City "." - ".WEBSITENAME;
						$seo['metadescription']	=	"City "." - ".WEBSITENAME;
						$seo['name']			=	"City ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('city')->result_array();
						$data['country']    =  $this->db->get_where('country',array('status='=>'1'))->result_array();
						$this->load->view("admin/city.php" ,$data );
				} 
				
				public function pincode()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"country";
						$seo['url']				=	site_url("adminstrator/pincode");
						$seo['title']			=	"Pincode "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Pincode "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Pincode "." - ".WEBSITENAME;
						$seo['name']			=	"Pincode";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('pincode')->result_array();
						$data['country']    =  $this->db->get_where('country',array('status='=>'1'))->result_array();
						$this->load->view("admin/pincode.php" ,$data );
				} 
				
				public function relation()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"master";
						$seo['url']				=	site_url("adminstrator/relation");
						$seo['title']			=	"Relation "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Relation "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Relation "." - ".WEBSITENAME;
						$seo['name']			=	"Relation ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('relation')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/relation.php" ,$data );
				} 
		
				
				public function religion()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"religion";
						$seo['url']				=	site_url("adminstrator/religion");
						$seo['title']			=	"Religion "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Religion "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Religion "." - ".WEBSITENAME;
						$seo['name']			=	"Religion ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('religion')->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/religion.php" ,$data );
				} 
				
				public function caste()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"religion";
						$seo['url']				=	site_url("adminstrator/religion");
						$seo['title']			=	"Caste "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Caste "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Caste "." - ".WEBSITENAME;
						$seo['name']			=	"Caste ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('caste')->result_array();
						$data['religion']    =  $this->db->get_where('religion',array('status='=>'1'))->result_array();
						$data['layout'] = $this->AdminLayout($data);
						$this->load->view("admin/caste.php" ,$data );
				} 

				public function surname()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"religion";
						$seo['url']				=	site_url("adminstrator/surname");
						$seo['title']			=	"Surname "." - ".WEBSITENAME;
						$seo['metatitle']		=	"Surname "." - ".WEBSITENAME;
						$seo['metadescription']	=	"Surname "." - ".WEBSITENAME;
						$seo['name']			=	"Surname ";
						$data['data']['seo'] = $seo;
						$data['result']    =  $this->db->get('surname')->result_array();
						$data['religion']    =  $this->db->get_where('religion',array('status='=>'1'))->result_array();
						$this->load->view("admin/surname.php" ,$data );
				} 
		

				public function reportpost()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"posts";
						$seo['url']				=	site_url("adminstrator/surname");
						$seo['title']			=	"ReportPost "." - ".WEBSITENAME;
						$seo['metatitle']		=	"ReportPost "." - ".WEBSITENAME;
						$seo['metadescription']	=	"ReportPost "." - ".WEBSITENAME;
						$seo['name']			=	"ReportPost ";
						$data['data']['seo'] 	= $seo;
													
						 $data['result']    =		$this->InformationModel->reportedpost(); 
						 $this->load->view("admin/reportpost.php" ,$data );
				} 
		
				public function BusinessProf()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"business";
						$seo['url']				=	site_url("adminstrator/surname");
						$seo['title']			=	"BusinessProfile "." - ".WEBSITENAME;
						$seo['metatitle']		=	"BusinessProfile "." - ".WEBSITENAME;
						$seo['metadescription']	=	"BusinessProfile "." - ".WEBSITENAME;
						$seo['name']			=	"BusinessProfile ";
						$data['data']['seo'] 	= $seo;
													
						 // $data['result']    =		$this->InformationModel->reportedpost(); 
						 $this->load->view("admin/BusinessProf.php" ,$data );
				} 
		
				public function subscrib()
				{
					$data = array();
					$seo  = array();
						$checklogin	=	$this->InformationModel->checkloggedin();
							if(!$checklogin)
								{
									redirect("information?token=invalid");	
								}
						$data['checklogin']		=	$checklogin;
						$data['active']			=	"subscrib";
						$seo['url']				=	site_url("adminstrator/surname");
						$seo['title']			=	"subscrib "." - ".WEBSITENAME;
						$seo['metatitle']		=	"subscrib "." - ".WEBSITENAME;
						$seo['metadescription']	=	"subscrib "." - ".WEBSITENAME;
						$seo['name']			=	"subscrib ";
						$data['data']['seo'] 	= $seo;
													
						 $data['result']    =$this->db->get_where('users',array('subscribtion'=>'1'))->result_array();;
 
						 $this->load->view("admin/subscrib.php" ,$data );
				} 
		

			public function logout()  
				{
					$this->session->sess_destroy();
					header("Location: ".base_url());
				}


			
				}
	
?>