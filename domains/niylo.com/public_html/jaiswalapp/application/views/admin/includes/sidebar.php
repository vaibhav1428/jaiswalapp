<?php $jaiswaldata = $this->db->get('cms')->result_array(); ?>
<div id="wrapper">
        <nav class="navbar-default navbar-static-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav metismenu" id="side-menu">
                    <li class="nav-header" style="display:flex;justify-content:center;">
                        <div class="dropdown profile-element">
                            <img alt="image"   src="<?php echo base_url().$jaiswaldata[0]['txt_site_logo'] ?>" style="width:72px"/>
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="block m-t-xs font-bold text-center"><?php echo  $jaiswaldata[0]['txt_meta_title']  ?></span>
                            </a>
                           
                        </div>
                        <div class="logo-element">
                            IN+
                        </div>
                    </li>
					
					
					
					<li class="<?php if($active =='dashboard'){ echo 'active'; }?>">
                        <a href="<?php echo base_url('Information/dashboard'); ?>"><i class="fas fa-tachometer-alt"></i> <span class="nav-label">Dashboard</span></a>
                    </li>
					
					<li class="<?php if($active =='gs'){ echo 'active'; }?>">
                        <a href="<?php echo base_url('adminstrator/cms')  ?>"><i class="fas fa-cogs"></i> <span class="nav-label">General Setting</span></a>
						
                    </li>

                    <li class="<?php if($active == 'master') { echo 'active'; }?>"  >
                        <a href="index.html"><i class="fas fa-asterisk"></i> <span class="nav-label">Master</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                          
							<li><a href="<?php echo base_url('adminstrator/users') ?>">Users</a></li>
                             <!-- <li><a href="<?php echo base_url('adminstrator/country')  ?>">Country</a></li> -->
							<li><a href="<?php echo base_url('adminstrator/state')  ?>">State</a></li>
                            <li><a href="<?php echo base_url('adminstrator/city')  ?>">City</a></li>
							 <li><a href="<?php echo base_url('adminstrator/pincode')  ?>">Pincode</a></li>
							  <!--<li><a href="<?php echo base_url('adminstrator/relation')  ?>">Relation</a></li>-->
                        </ul>
                    </li>
					
                    <li class="<?php if($active =='religion'){ echo 'active'; }?>">
                        <a href="index.html"><i class="fas fa-users"></i> <span class="nav-label">Community</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                          
							<li><a href="<?php echo base_url("adminstrator/religion")   ?>">Religion</a></li>
                            <li><a href="<?php echo base_url('adminstrator/caste')  ?>">Caste</a></li>
                            <li><a href="<?php echo base_url('adminstrator/surname')  ?>">Gotra</a></li>
                           
                        </ul>
                    </li>
					
                    <li class="<?php if($active =='posts'){ echo 'active'; }?>">
                        <a href="index.html"><i class="fas fa-blog"></i> <span class="nav-label">Post</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                          
							<li class="d-none"><a href="<?php echo base_url("adminstrator/yourpost") ?>">Your Post</a></li>
							<li><a href="<?php echo base_url("adminstrator/report-post") ?>">Reported Post</a></li>
                        </ul>
                    </li>
					
                    <li class="<?php if($active =='business'){ echo 'active'; }?>">
                        <a href="index.html"><i class="fas fa-business-time"></i> <span class="nav-label">Business </span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                          
						 <li><a href="<?php echo base_url('adminstrator/BusinessProf')  ?>">Business-Profile</a></li>
                        </ul>
                    </li>
					
                    <li>
                        <a href="index.html"><i class="fas fa-ring"></i> <span class="nav-label">Marriage</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                          <li><a href="<?php echo base_url('adminstrator/users') ?>">Users</a></li>
              
                        </ul>
                    </li>
					
					
                    <li class="<?php if($active =='subscrib'){ echo 'active'; }?>">
                        <a href="index.html"><i class="fas fa-money-bill-wave"></i> <span class="nav-label">Payment</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                       <li><a href="<?php echo base_url('adminstrator/subscrib') ?>">Subscibed user</a></li>
                        </ul>
                    </li>  
					
					
					<li>
                        <a href="index.html"><i class="fas fa-shoe-prints"></i> <span class="nav-label">Prestige point</span> <span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                          
							<li><a href="index.html">Your Post</a></li>
                            <li><a href="dashboard_2.html">Reported Post</a></li>
                            <li><a href="dashboard_3.html">----</a></li>
                        </ul>
                    </li>
					
					<li>
                        <a href="<?php echo base_url("adminstrator/notification")   ?>"><i class="fas fa-bell"></i> <span class="nav-label">Notification</span></a>
                    </li>
					
					<li>
                        <a href="<?php echo base_url("adminstrator/event")   ?>"><i class="fas fa-bell"></i> <span class="nav-label">Event</span></a>
                    </li>
					
                    
                </ul>

            </div>
			
			
			
			
        </nav>
		
		
		
		