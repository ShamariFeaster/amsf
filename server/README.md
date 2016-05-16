added curl_setopt($ch, CURLOPT_SSLVERSION,6);
to vendor/sdk=core-php/PPHTTPConnection::execute()


Rest API Samples
===================


This sample project is a simple web app that you can explore to understand what the payment APIs can do for you. To try out the sample, run `composer update` from the samples folder and you are all set.


The sample comes pre-configured with a test account but in case you need to try them against your account, you must
   
   * Obtain your client id and client secret from the developer portal
   * Update the sdk_config.ini file with your new client id and secret.
   
   
If you are looking for a full fledged application that uses the new RESTful APIs, check out the Pizza store sample app at https://github.com/paypal/rest-api-sample-app-php   

<fb:login-button scope="public_profile,email" onlogin="structureJS.require('Facebook').checkLoginState();"></fb:login-button>