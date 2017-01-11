<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Angular App</title>
	<link rel="stylesheet" href="${pageContext.request.contextPath }/resources/css/bootstrap.css">
	<script src="${pageContext.request.contextPath }/resources/js/jquery.js"></script>
	<script src="${pageContext.request.contextPath }/resources/js/bootstrap.js"></script>

</head>
<body>
	<h1> Welcome to Angular World! </h1>

	<nav class="breadcrumb">
		<a class="breadcrumb-item" href="${pageContext.request.contextPath }/stud"> Student CRUD Angular /</a>
		<a class="breadcrumb-item" href="${pageContext.request.contextPath }/currency"> Currency API /</a>
	</nav>

</body>
</html>
