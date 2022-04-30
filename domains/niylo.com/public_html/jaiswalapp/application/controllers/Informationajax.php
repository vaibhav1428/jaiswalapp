<?php
		defined('BASEPATH') OR exit('No direct script access allowed');

	class Informationajax extends MY_Controller 
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
					
			public function dologin()
				{
					echo $this->InformationModel->dologin();
				}
				
				#------------------------------cms---------------------------	
				
				public function insertcms()
				{
					echo $this->InformationModel->cmsinst();
				}
			
				public function editcms()
				{
					echo $this->InformationModel->editcms();
				}
				
				#------------------------------notification---------------------------	
				
				public function insertnotification()
				{
					echo $this->InformationModel->notificationinst();
				}
			
				public function editnotification()
				{
					echo $this->InformationModel->editnotification();
				}
				
				#------------------------------yourpost---------------------------	
				
				public function insertyourpost()
				{
					echo $this->InformationModel->yourpostinst();
				}
			
				public function edityourpost()
				{
					echo $this->InformationModel->edityourpost();
				}
				
				#------------------------------event---------------------------	
				
				public function insertevent()
				{
					echo $this->InformationModel->eventinst();
				}
			
				public function editevent()
				{
					echo $this->InformationModel->editevent();
				}
				
				
				#----------------------religion --------------------------------
			public function religioninst()
				{
					echo $this->InformationModel->religioninst();
				}
			public function requestdel()
			{
				echo $this->InformationModel->requestdel();
			}
			public function statuschange()
			{
				echo $this->InformationModel->statuschange();
			}
			public function editreligion()
			{
				echo $this->InformationModel->editreligion();
			}
			
			
			#---------------------------caste---------------------------
			
			
			
			public function casteinst()
				{
					echo $this->InformationModel->casteinst();
				}
			public function editcaste()
				{
					echo $this->InformationModel->editcaste();
				}
				
			#-------------------------------surname---------------------
			
			public function getcaste()
				{
					echo $this->InformationModel->getcaste();
				}
			public function surnameinst()
				{
					echo $this->InformationModel->surnameinst();
				}
			public function editsurname()
				{
					echo $this->InformationModel->editsurname();
				}
			
				
			#------------------------------country---------------------------	
				
				public function countryinst()
				{
					echo $this->InformationModel->countryinst();
				}
			
				public function editcountry()
				{
					echo $this->InformationModel->editcountry();
				}
				
					#---------------------------state---------------------------			
			
			public function stateinst()
				{
					echo $this->InformationModel->stateinst();
				}
			public function editstate()
				{
					echo $this->InformationModel->editstate();
				}
				
		#-------------------------------city---------------------
			
			public function getstate()
				{
					echo $this->InformationModel->getstate();
				}
			public function cityinst()
				{
					echo $this->InformationModel->cityinst();
				}
			public function editcity()
				{
					echo $this->InformationModel->editcity();
				}
				
				
	#-------------------------------pincode---------------------

			public function pincodeinst()
				{
					echo $this->InformationModel->pincodeinst();
				}
			public function editpincode()
				{
					echo $this->InformationModel->editpincode();
				}
	#------------------------------relation---------------------------	
				
				public function relationinst()
				{
					echo $this->InformationModel->relationinst();
				}
			
				public function editrelation()
				{
					echo $this->InformationModel->editrelation();
				}
				
			
			#------------------------------users---------------------------	
				
				public function getcity()
				{
					echo $this->InformationModel->getcity();
				}
				
				public function usersinst()
				{
					echo $this->InformationModel->usersinst();
				}
				
			
				public function editusers()
				{
					echo $this->InformationModel->editusers();
				}
				
				public function getuser()
				{
					echo $this->InformationModel->getuser();
				}
				
		}
		
?>