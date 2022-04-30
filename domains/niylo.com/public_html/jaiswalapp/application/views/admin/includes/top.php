<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="<?php echo $data['seo']['metadescription']; ?>" />
	<meta name="summary" content="<?php echo $data['seo']['metadescription']; ?>" />
	<meta property="og:site_name" content="<?php echo WEBSITENAME; ?>" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="<?php echo $data['seo']['url']; ?>" />
	<meta property="og:title" content="<?php echo $data['seo']['metatitle']; ?>" />
	<meta property="og:description" content="<?php echo $data['seo']['metadescription']; ?>" />
	<meta property="og:image" content="<?php echo WEBSITEIMAGE; ?>" />
  
  
	<title><?php echo $data['seo']['title']; ?></title>
	
	<?php $jaiswaldata = $this->db->get('cms')->result_array(); ?>

	
	<link rel="icon" href="<?php echo base_url().$jaiswaldata[0]['txt_Favicon'] ?>" type="image/png" sizes="16x16">
    <link href="<?php  echo base_url()   ?>assets/adminFile/css/bootstrap.min.css" rel="stylesheet">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <!-- Toastr style -->
    <link href="<?php  echo base_url()   ?>assets/adminFile/css/plugins/toastr/toastr.min.css" rel="stylesheet">

    <!-- Gritter -->
    <link href="<?php  echo base_url()   ?>assets/adminFile/js/plugins/gritter/jquery.gritter.css" rel="stylesheet">

    <link href="<?php  echo base_url()   ?>assets/adminFile/css/animate.css" rel="stylesheet">
    <link href="<?php  echo base_url()   ?>assets/adminFile/css/style.css" rel="stylesheet">

	<link href="//cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css" rel="stylesheet">
	<link href="//cdn.datatables.net/buttons/2.1.0/css/buttons.dataTables.min.css" rel="stylesheet">
	<script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>


    <!-- Mainly scripts -->
    <!-- <script src="<?php  echo base_url()   ?>assets/adminFile/js/jquery-3.1.1.min.js"></script> -->
	<script src="//code.jquery.com/jquery-3.5.1.js"></script>
    <script src="<?php  echo base_url()   ?>assets/adminFile/js/popper.min.js"></script>
    <script src="<?php  echo base_url()   ?>assets/adminFile/js/bootstrap.js"></script>
    <script src="<?php  echo base_url()   ?>assets/adminFile/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="<?php  echo base_url()   ?>assets/adminFile/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
	

	
	
