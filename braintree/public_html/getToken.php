<?php require_once("../includes/braintree_init.php"); 
	$customer = null;
	$id = $_GET['id'];
	try{
		$customer = Braintree_Customer::find($id);
	}catch(Braintree_Exception_NotFound $e){
		$customer = Braintree_Customer::create(['id' => $id]);
	}
	
	echo(Braintree\ClientToken::generate([
    "customerId" => $_GET['id']
	]));
?>