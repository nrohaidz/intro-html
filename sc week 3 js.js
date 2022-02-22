<!DOCTYPE html>
<html lang="en">
	<head>
	<title>Parcel Sandbox</title>
	<meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather Wireframe</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="src/styles.css" />
	</head>
	<body>
	<br />
	<div class="container">
		<div class="card">
		<form>
			<input type="text" placeholder="Search Weather Engine"/>
			<button type="button" class="btn btn-outline-primary"> 🔍</button>
			<button type="button2" class="btn btn-light"> F/C°</button>
		</form>
		<div class="card-body">
			<h3>Current Weather in... </h3>
			<h4> Perth, Western Australia 🏖 
			</h4>
			<section class="currenttemp1">
				<p> High: 40°C </p>
				<section class="currenttemp2">
					<p> Low: 28°C </p>
					<div class="alert alert-danger">
						🚒 High Fire Risk Alert! 🔥 <a href="#" class="alert-link" Fire Ban Rules</a> 
					</div>
					<div class="container mt-3">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>Day</th>
									<th>Max</th>
									<th>Min</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Sunday</td>
									<td>30°C</td>
									<td>25°C</td>
								</tr>
								<tr>
									<td>Monday</td>
									<td>35°C</td>
									<td>28°C</td>
								</tr>
								<tr>
									<td>Tuesday</td>
									<td>33°C</td>
									<td>26°C</td>
								</tr>
								<tr>
									<td>Wednesday</td>
									<td>37°C</td>
									<td>27°C</td>
								</tr>
					</div>
				</div>

<body>
	<div id="app"></div>

	<script src="src/index.js">
	</script>
</body>

</html>