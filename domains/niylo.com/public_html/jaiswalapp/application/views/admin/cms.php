

<?php 
$this->load->view('admin/includes/header.php');
$this->load->view('admin/includes/sidebar.php');
$this->load->view('admin/includes/navbar.php');
?>




<?php

$txt_meta_title = $txt_site_address = $txt_contact_number = $txt_email_address=$url_linkedin = $url_google_plus = $url_facebook = $url_whatsapp = $url_instagram = $url_twitter  = $url_youtube =$txt_aboutus_title = $txt_aboutus = $txt_terms_and_condition = $txt_privacy_policy_title = $txt_privacy_policy = $txt_faq_title = $txt_faq = $how_it_works = $user_agreement = $cookies_policy =
$txt_site_logo = $txt_Favicon = "";


if(!empty($result)){

$txt_meta_title = $result[0]['txt_meta_title'];
$txt_site_address = $result[0]['txt_site_address'];
$txt_contact_number = $result[0]['txt_contact_number'];
$txt_email_address = $result[0]['txt_email_address'];
$url_linkedin = $result[0]['url_linkedin'];
$url_google_plus = $result[0]['url_google_plus'];
$url_facebook = $result[0]['url_facebook'];
$url_whatsapp = $result[0]['url_whatsapp'];
$url_instagram = $result[0]['url_instagram'];
$url_twitter = $result[0]['url_twitter'];
$url_youtube = $result[0]['url_youtube'];
$txt_aboutus_title = $result[0]['txt_aboutus_title']; 
$txt_aboutus = $result[0]['txt_aboutus'];
$txt_terms_and_condition = $result[0]['txt_terms_and_condition'];
$txt_privacy_policy_title = $result[0]['txt_privacy_policy_title'];
$txt_privacy_policy = $result[0]['txt_privacy_policy'];
$txt_faq_title = $result[0]['txt_faq_title'];
$txt_faq = $result[0]['txt_faq'];
$how_it_works = $result[0]['how_it_works'];
$user_agreement = $result[0]['user_agreement'];
$cookies_policy = $result[0]['cookies_policy'];
$txt_site_logo = $result[0]['txt_site_logo'];
$txt_Favicon = $result[0]['txt_meta_title'];


}







?>



<div class="right_col" role="main">
    <div class="">
		<div class="page-title">
			<div class="title_left col-lg-3">
				<h3>General Setting</h3>
			</div>	
		</div>
        <div class="clearfix"></div>

    <div class="row">
        <div class="col-md-12 col-sm-12 ">
            <div class="x_panel">
				<div class="x_content">
					<div class="row">    
						<div class="col-md-12 col-sm-12">
							<form method="post" action="<?php echo base_url("Informationajax/insertcms")  ?>" id="frmdata" class="cms_submit insform " style=" margin-bottom: 10%;" >
								
											<div class="form-group">
												
												
												<div class="form-group" id="">
													 <img style=" width: 100px; " id="preview_selected" src="" alt="your image" />
												</div>
												<span class="text-danger" style=" font-weight: bold; ">Upload Main Logo (200x92) </span>
                                                <div class="custom-file mb-3">
												  <input type="file" class="custom-file-input" id="txt_site_logo" name="txt_site_logo" onchange="readURLlogo(this)">
												  <label class="custom-file-label" for="txt_site_logo">Choose file</label>
												</div>
												
                                            </div>
											
											<div class="form-group">
											
												
												<div class="form-group" id="">
													 <img style=" width: 100px; " id="preview-selected-favicon" src="" alt="your image" />
												</div>
												<span class="text-danger" style=" font-weight: bold; ">Upload Favicon </span>
                                                <div class="custom-file mb-3">
												  <input type="file" class="custom-file-input" id="txt_Favicon" name="txt_Favicon" onchange="readURLfavicon(this)">
												  <label class="custom-file-label" for="txt_Favicon">Choose file</label>
												</div>
                                            </div>
											<div class="form-group">
                                                <label>Meta Title</label>
												<input type="text" id="txt_meta_title" name="txt_meta_title" class="form-control" value="<?php  echo $txt_meta_title  ?>">
                                            </div>
											<div class="form-group">
                                                <label>Site Address</label>
												<input type="text" id="txt_site_address" name="txt_site_address" class="form-control" value="<?php  echo $txt_site_address  ?>">
                                            </div>
											<div class="form-group">
                                                <label>Contact number</label>
												<input type="text" id="txt_contact_number" name="txt_contact_number" class="form-control" value="<?php  echo $txt_contact_number  ?>">
                                            </div>
											<div class="form-group">
                                                <label>Email Address</label>
												<input type="text" id="txt_email_address" name="txt_email_address" class="form-control" value="<?php  echo $txt_email_address  ?>">
                                            </div>
											<div class="row d-none">
												<div class="form-group col-md-6">
													<label>Linkedin</label>
													<input type="text" id="url_linkedin" name="url_linkedin" class="form-control" value="<?php  echo $url_linkedin  ?>">
												</div>
												<div class="form-group col-md-6">
													<label>Goggle +</label>
													<input type="text" id="url_google_plus" name="url_google_plus" class="form-control" value="<?php  echo $url_google_plus  ?>">
												</div>
                                            </div>
											<div class="row">
												<div class="form-group col-md-6">
													<label>Facebook</label>
													<input type="text" id="url_facebook" name="url_facebook" class="form-control" value="<?php  echo $url_facebook  ?>">
												</div>
												<div class="form-group col-md-6">
													<label>Whatsapp</label>
													<input type="text" id="url_whatsapp" name="url_whatsapp" class="form-control" value="<?php  echo $url_whatsapp  ?>">
												</div>
                                            </div>
											<div class="row">
												<div class="form-group col-md-4">
													<label>Instagram</label>
													<input type="text" id="url_instagram" name="url_instagram" class="form-control" value="<?php  echo $url_instagram  ?>">
												</div>
												<div class="form-group col-md-4">
													<label>Twitter</label>
													<input type="text" id="url_twitter" name="url_twitter" class="form-control" value="<?php  echo $url_twitter  ?>">
												</div>
												<div class="form-group col-md-4">
													<label>Youtube</label>
													<input type="text" id="url_youtube" name="url_youtube" class="form-control" value="<?php  echo $url_youtube  ?>">
												</div>
                                            </div>
											
											<div class="form-group">
                                                <label>About US Title</label>
												<textarea id="txt_aboutus_title" class="form-control content" rows="10"  cols="80"  name="txt_aboutus_title" >
												<?php  echo $txt_aboutus_title  ?></textarea>
                                            </div>											
											
											<div class="form-group">
                                                <label>About US Description</label>
												<textarea id="txt_aboutus" class="form-control content" rows="10"  cols="80"  name="txt_aboutus" >
												<?php  echo $txt_aboutus  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>Terms and condition</label>
												<textarea  id="txt_terms_and_condition" name="txt_terms_and_condition" class="form-control content">
												<?php  echo $txt_terms_and_condition  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>Privacy policy Title</label>
												<textarea  id="txt_privacy_policy_title" name="txt_privacy_policy_title" class="form-control content">
												<?php  echo $txt_privacy_policy_title  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>Privacy policy Description</label>
												<textarea  id="txt_privacy_policy" name="txt_privacy_policy" class="form-control content">
												<?php  echo $txt_privacy_policy  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>FAQ Title</label>
												<textarea  id="txt_faq_title" name="txt_faq_title" class="form-control content">
												<?php  echo $txt_faq_title  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>FAQ Description</label>
												<textarea  id="txt_faq" name="txt_faq" class="form-control content">
												<?php  echo $txt_faq  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>How does it works ?</label>
												<textarea  id="how_it_works" name="how_it_works" class="form-control content">
												<?php  echo $how_it_works  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>User Agreement</label>
												<textarea  id="user_agreement" name="user_agreement" class="form-control content">
												<?php  echo $user_agreement  ?></textarea>
                                            </div>
											
											<div class="form-group">
                                                <label>Cookies Policy</label>
												<textarea  id="cookies_policy" name="cookies_policy" class="form-control content">
												<?php  echo $cookies_policy  ?></textarea>
                                            </div>
											
								
								
								<div class="item form-group">
									<div class="col-md-6 col-sm-6">
										<button type="button"  id="imgsave" class="btn btn-success">Save Changes</button>
									</div>
								</div>
								<p class="alert servermessage" style="display:none;"></p>
							</form>
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
  </div>
</div>



<script>



$( document ).ready(function() {
			$.post( '<?php echo base_url() ?>Informationajax/editcms',
					  function(r){
						 var values = JSON.parse(r);
						 
						 if (values.status == 1) {						
							$.each(values.result, function (index, data) {
								
								
								$('#preview_selected').attr('src', '<?php echo base_url()  ?>'+ data['txt_site_logo']);
								$('#preview-selected-favicon').attr('src', '<?php echo base_url()  ?>'+ data['txt_Favicon']);
								// $('#txt_meta_title').val(data['txt_meta_title']);
								// $('#cookies_policy').val(data['cookies_policy']);
								// $('#how_it_works').val(data['how_it_works']);
								// $('#txt_aboutus').val(data['txt_aboutus']);
								// $('#txt_aboutus_title').val(data['txt_aboutus_title']);
								// $('#txt_contact_number').val(data['txt_contact_number']);
								// $('#txt_email_address').val(data['txt_email_address']);
								// $('#txt_faq').val(data['txt_faq']);
								// $('#txt_faq_title').val(data['txt_faq_title']);								
								// $('#txt_privacy_policy').val(data['txt_privacy_policy']);
								// $('#txt_privacy_policy_title').val(data['txt_privacy_policy_title']);
								// $('#txt_site_address').val(data['txt_site_address']);
								// $('#txt_terms_and_condition').val(data['txt_terms_and_condition']);
								// $('#url_facebook').val(data['url_facebook']);
								// $('#url_google_plus').val(data['url_google_plus']);
								// $('#url_instagram').val(data['url_instagram']);
								// $('#url_linkedin').val(data['url_linkedin']);
								// $('#url_twitter').val(data['url_twitter']);
								// $('#url_whatsapp').val(data['url_whatsapp']);
								// $('#url_youtube').val(data['url_whatsapp']);
								// $('#user_agreement').val(data['url_whatsapp']); 
								
							});
						}
						
						});
	
});

					

function readURLlogo(input) {
		

	  if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.onload = function(e) {
			console.log(e.target.result);
		  $('#preview_selected').attr('src', e.target.result);
		}
		
		reader.readAsDataURL(input.files[0]);
	  }
	}
	
	
function readURLfavicon(input) {
		

	  if (input.files && input.files[0]) {
		var reader = new FileReader();
		
		reader.onload = function(e) {
			console.log(e.target.result);
		  $('#preview-selected-favicon').attr('src', e.target.result);
		}
		
		reader.readAsDataURL(input.files[0]);
	  }
	}


</script>

<script>
var $txt_aboutus_title = CKEDITOR.replace('txt_aboutus_title');
$txt_aboutus_title.on('change',function()
{
	$txt_aboutus_title.updateElement();    
});
var $txt_aboutus = CKEDITOR.replace('txt_aboutus');
$txt_aboutus.on('change',function()
{
	$txt_aboutus.updateElement();    
});
var $txt_terms_and_condition = CKEDITOR.replace('txt_terms_and_condition');
$txt_terms_and_condition.on('change',function()
{
	$txt_terms_and_condition.updateElement();    
});
var $txt_privacy_policy_title = CKEDITOR.replace('txt_privacy_policy_title');
$txt_privacy_policy_title.on('change',function()
{
	$txt_privacy_policy_title.updateElement();    
});
var $txt_privacy_policy = CKEDITOR.replace('txt_privacy_policy');
$txt_privacy_policy.on('change',function()
{
	$txt_privacy_policy.updateElement();    
});
var $txt_faq_title = CKEDITOR.replace('txt_faq_title');
$txt_faq_title.on('change',function()
{
	$txt_faq_title.updateElement();    
});
var $txt_faq = CKEDITOR.replace('txt_faq');
$txt_faq.on('change',function()
{
	$txt_faq.updateElement();    
});
var $user_agreement = CKEDITOR.replace('user_agreement');
$user_agreement.on('change',function()
{
	$user_agreement.updateElement();    
});
var $cookies_policy = CKEDITOR.replace('cookies_policy');
$cookies_policy.on('change',function()
{
	$cookies_policy.updateElement();    
});
var $how_it_works = CKEDITOR.replace('how_it_works');
$how_it_works.on('change',function()
{
	$how_it_works.updateElement();    
});
</script>


<?php 
$this->load->view('admin/includes/footer.php');
?>