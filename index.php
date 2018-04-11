<!DOCTYPE html>
<html lang="es">
<head>
	<title>SMART SOLUTION SERVICE</title>
	<!-- Metas -->
	<meta charset="UTF-8">
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta name="author" content="COOL EXPRESS"/>
	<meta name="description" content="COOL EXPRESS"/>
	<meta name="author" content="COOL EXPRESS"/>
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<!-- Favicon -->
	<link rel="icon" type="image/png" href=""/>
	<!-- js -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="libs/plugins/login/vendor/animsition/js/animsition.min.js"></script>
	<script src="libs/plugins/login/vendor/bootstrap/js/popper.js"></script>
	<script src="libs/plugins/login/vendor/select2/select2.min.js"></script>
	<script>
		$(".selection-2").select2({
			minimumResultsForSearch: 20,
			dropdownParent: $('#dropDownSelect1')
		});
	</script>
	<script src="libs/plugins/login/vendor/daterangepicker/moment.min.js"></script>
	<script src="libs/plugins/login/vendor/daterangepicker/daterangepicker.js"></script>
	<script src="libs/plugins/login/vendor/countdowntime/countdowntime.js"></script>
	<script src="libs/plugins/login/js/main.js"></script>
	<!-- css -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/vendor/animate/animate.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/vendor/css-hamburgers/hamburgers.min.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/vendor/animsition/css/animsition.min.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/vendor/select2/select2.min.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/vendor/daterangepicker/daterangepicker.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/css/util.css">
	<link rel="stylesheet" type="text/css" href="libs/plugins/login/css/main.css">
	<!-- login -->
	<script src="js/login.js"></script>
</head>
<body>
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<form class="login100-form validate-form" id="login">
					<span class="login100-form-title p-b-34" style="height: 60px;">
						<div class="alert alert-danger text-center" id="warning-login" style="display: none;"></div>
					</span>
					<span class="login100-form-title p-b-34">
						Login
					</span>
					<div class="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
						<input type="text" class="input100" name="user" id="user" placeholder="User:">
						<span class="focus-input100"></span>
					</div>
					<div class="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
						<input type="password" class="input100" name="pass" id="pass" placeholder="Password:">
						<span class="focus-input100"></span>
					</div>
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Sign in
						</button>
					</div>
					<div class="w-full text-center p-t-27 p-b-239">
						<span class="txt1">
							Forgot
						</span>
						<a href="#" class="txt2">
							User / password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div id="dropDownSelect1"></div>
</body>
</html>
