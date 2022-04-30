
<div class="footer">
                <div class="float-right">
                   Developed & Designed BY <strong>Flamenest Technologies</strong> 
                </div>
                <div>
                    <strong>Copyright</strong>©<?php echo date("Y") ?>-<?php echo date("Y")+1 ?>
                </div>
            </div>
</div>
    </div>
	
	
	<input type="hidden"  id="BASE_VALUE" value="<?php echo base_url() ?>"  >
    <?php
$this->load->view('admin/includes/buttom.php');
?>

	<script src="//cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
	<script src="//cdn.datatables.net/buttons/2.1.0/js/dataTables.buttons.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
	<script src="//cdn.datatables.net/buttons/2.1.0/js/buttons.html5.min.js"></script>
	<script src="//cdn.datatables.net/buttons/2.1.0/js/buttons.print.min.js"></script>	
	

    <script>
	
	
			$(document).ready(function() {
			$('#tblData').DataTable( {
				dom: 'Bfrtip',
				buttons: [ {
                extend: 'pdfHtml5',
                orientation: 'landscape',
                pageSize: 'LEGAL'
            },
			 {
			extend: 'print',
			text: 'PRINT',
			titleAttr: 'Imprimir',
			columns: ':not(.select-checkbox)',
			orientation: 'landscape'
		},{
            extend: 'excelHtml5',
            customize: function( xlsx ) {
                var sheet = xlsx.xl.worksheets['sheet1.xml'];
 
                $('row c[r^="C"]', sheet).attr( 's', '2' );
            }
        }  
				]
				
				
			} );
		} );
	
		$(document).keypress(
		  function(event){
			if (event.which == '13') {
			  event.preventDefault();
			}
		});
		// $(document).ready( function () {
			// $('#tblData').DataTable();
		// } );
		

        // $(document).ready(function () {
            // setTimeout(function () {
                // toastr.options = {
                    // closeButton: true,
                    // progressBar: true,
                    // showMethod: 'slideDown',
                    // timeOut: 2000
                // };
                // toastr.success("<h4>Welcome To  Jaiswal_App</h4>");

            // }, 800);
        // });
 </script>
</body>

</html>