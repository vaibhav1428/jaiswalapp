<?php 

	/* function langIn($msg=null)
		{
			$obj = &get_instance();
		
				if(isset($_COOKIE['language']))
					{
						$obj->lang->load($my_lang , $my_lang);
					} else {
						$obj->lang->load('english' , 'english');	
					}
						$newlang  = $obj->lang->line($msg);			
			return $newlang ;
		} */

	function gettime4db()
		{
			return date('Y-m-d h:i:s'); 	
		}
		
	function isselected($value1,$value2)
		{
			if($value2==$value1)
				{
					echo "selected='selected'";	
				}
		}
	function ischecked($value1,$value2)
		{
			if($value2==$value1)
				{
					echo "checked='checked'";	
				}
		}
		
		function checkrightobject($objectarray,$objectindex,$defaultvalue)
		{
			if(isset($objectarray->$objectindex))
				return filter_var($objectarray->$objectindex, FILTER_SANITIZE_STRING,FILTER_FLAG_ENCODE_LOW);
			return $defaultvalue;
		}	
		
		
		function pushnotifacation($token,$title,$message)
	    {
	      $ci    = &get_instance();
		    

		  $notification = "Jaiswal_Sarwarigya";
		  $url = "https://fcm.googleapis.com/fcm/send";
		  $serverKey = 'AAAAB40o9F0:APA91bEjdM5gJNEtKzMrohAnXHM59vXBnguJh1mTiLnbdFZLDokUyX2Qd_0Fh_5YqWkXt7Os2hkeuVezFMSBHHD6eV0BUgUkK_pPj9hyHcIIRBADpfVKROUoEx6zK9gSpMZdmG4MDjoU'; 
		  $headers = array();
		  $headers[] = 'Content-Type: application/json';
		  $headers[] = 'Authorization: key='. $serverKey;
		  $notification = array('title' =>$title , 'body' => $message, 'sound' => 'default', 'badge' => '1');
		  $arrayToSend = array('to' => $token, 'notification' => $notification,'priority'=>'high','content_available'=> true);

		  $json = json_encode($arrayToSend);
		  $ch = curl_init();
		  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		  curl_setopt($ch, CURLOPT_URL, $url);
		  curl_setopt($ch, CURLOPT_CUSTOMREQUEST,"POST");
		  curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
		  curl_setopt($ch, CURLOPT_HTTPHEADER,$headers);
		  $response = curl_exec($ch);			    
		  return $response;
		
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
?>