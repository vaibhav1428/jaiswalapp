<!DOCTYPE html>
<html lang="en">
<head>
  
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title><?php echo $data['seo']['title']; ?></title>
  <link rel="icon" href="<?php echo site_url(); ?>icon.png" type="image/png" sizes="16x16">
	<meta name="description" content="<?php echo $data['seo']['metadescription']; ?>" />
	<meta name="summary" content="<?php echo $data['seo']['metadescription']; ?>" />
	<meta property="og:site_name" content="<?php echo WEBSITENAME; ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo $data['seo']['url']; ?>" />
	<meta property="og:title" content="<?php echo $data['seo']['metatitle']; ?>" />
	<meta property="og:description" content="<?php echo $data['seo']['metadescription']; ?>" />
	<meta property="og:image" content="<?php echo WEBSITEIMAGE; ?>" />

  <!-- Bootstrap Styles -->
  <link href="<?php echo base_url()."assets/front/" ?>css/bootstrap.css" rel="stylesheet">
  
  <!-- Styles -->
  <link href="<?php echo base_url()."assets/front/" ?>style.css" rel="stylesheet">
  
  <!-- Carousel Slider -->
  <link href="<?php echo base_url()."assets/front/" ?>css/owl-carousel.css" rel="stylesheet">
  
  <!-- CSS Animations -->
  <link href="<?php echo base_url()."assets/front/" ?>css/animate.min.css" rel="stylesheet">
  
  <!-- Google Fonts -->
  <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Lato:400,300,400italic,300italic,700,700italic,900' rel='stylesheet' type='text/css'>
  <link href='http://fonts.googleapis.com/css?family=Exo:400,300,600,500,400italic,700italic,800,900' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" id="switcher-css" type="text/css" href="<?php echo base_url()."assets/front/" ?>switcher/css/switcher.css" media="all" />
 <link rel="alternate stylesheet" type="text/css" href="<?php echo base_url()."assets/front/" ?>switcher/css/orange.css" title="orange" media="all" />
  <!-- SLIDER ROYAL CSS SETTINGS -->
  <link href="<?php echo base_url()."assets/front/" ?>royalslider/royalslider.css" rel="stylesheet">
  <link href="<?php echo base_url()."assets/front/" ?>royalslider/skins/default-inverted/rs-default-inverted.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="<?php echo base_url()."assets/front/"; ?>rs-plugin/css/settings.css" media="screen" />
	<style> 
		.hactive{ 
			background-color: #f7c221;
			color: #fff !important;
			-webkit-border-radius: 03px;
			-moz-border-radius: 03px;
			border-radius: 03px;
			} 
	</style>
	
	<script src="<?php echo base_url()."assets/front/" ?>js/jquery.js"></script>
	<script src="<?php echo base_url()."assets/front/" ?>js/bootstrap.min.js"></script>
	<script src="<?php echo base_url();?>/assets/commonargalon.js"></script>
	<link href="<?php echo base_url()."assets/front/" ?>custom.css" rel="stylesheet" />
</head>
<body>   



    <section class="jt-shadow clearfix">
		<div class="container">
			<div class="col-lg-12">
				<h1><?php echo lang('selleraccount'); ?></h1>
                <ul class="breadcrumb pull-right">
                    <li><a href="<?php echo site_url(); ?>"><?php echo lang('home'); ?></a></li>
                    <li><?php echo trim(lang('selleraccount')); ?></li>
                </ul> 
			</div>
		</div>
	</section>

	<section class="blog-wrapper">
    	<div class="container">
        	<div id="content" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="row">
                   <div class="col-md-4"></div>
                   <div class="col-md-4">
				   
				   <div>
				   <img src="<?php echo base_url().$jaiswaldata[0]['txt_site_logo'] ?>"  style="width:86%"/>
						<h3> <b> Welcome To <?php echo $jaiswaldata[0]['txt_meta_title'] ?>  </b> </h3>
				   
				   
				   </div>
				   
 						<div class="widget">
                        	<div class="title"> 
                            	<h3>Login Your Account</h3>   
                            </div>
                                <form method="POST" class="adminloginform" onsubmit="return loginme();">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                            <input maxlength="80" type="email" class="form-control" placeholder="Email" id="loginemail" name="email" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                                            <input maxlength="80" type="password" name="password" id="loginpassword" class="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <label> 
                                                <input type="checkbox" value="1" id="loginremember" /> Remember me
                                            </label>
                                        </div>
                                    </div>
									<p class="lead alert hideme adminmessage form-group"></p> 
                                    <div class="form-group">
                                    <button type="submit" id="submit" name="submit" class="btn btn-info">Sign in</button>
                                    </div>
                                </form>
                        </div><!-- end widget -->
					</div><!-- end col-md-6 -->
            	</div><!-- end row --> 
            </div><!-- end content -->
    	</div><!-- end container -->
    </section>
     
     
<input type="hidden" id="base_url_value" value="<?php echo base_url(); ?>" /> 

  <!-- Main Scripts-->
  <script src="<?php echo base_url()."assets/front/" ?>js/argalon.js"></script> 
  <script src="<?php echo base_url()."assets/front/" ?>js/menu.js"></script>
  <script src="<?php echo base_url()."assets/front/" ?>js/owl.carousel.min.js"></script>
  <script src="<?php echo base_url()."assets/front/" ?>js/jquery.parallax-1.1.3.js"></script>
  <script src="<?php echo base_url()."assets/front/" ?>js/jquery.simple-text-rotator.js"></script>
  <script src="<?php echo base_url()."assets/front/" ?>js/wow.min.js"></script>
  <script src="<?php echo base_url()."assets/front/" ?>js/custom.js"></script>
  
  <script src="<?php echo base_url()."assets/front/" ?>js/jquery.isotope.min.js"></script>
  <script src="<?php echo base_url()."assets/front/" ?>js/custom-portfolio-masonry.js"></script>

  <!-- SLIDER REVOLUTION 4.x SCRIPTS  -->
  <script type="text/javascript" src="<?php echo base_url()."assets/front/" ?>rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
  <script type="text/javascript" src="<?php echo base_url()."assets/front/" ?>rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
  <script type="text/javascript">
	var revapi;
	jQuery(document).ready(function() {
		revapi = jQuery('.tp-banner').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:500,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on"
		});
	});	//ready
  </script>
      
  <!-- Royal Slider script files -->
  <script src="<?php  echo base_url(); ?>assets/front/royalslider/jquery.easing-1.3.js"></script>
  <script src="<?php  echo base_url(); ?>assets/front/royalslider/jquery.royalslider.min.js"></script>
  
<link href="<?php echo base_url(); ?>assets/back/font-awesome/css/font-awesome.css" rel="stylesheet" />

</body>
</html>
