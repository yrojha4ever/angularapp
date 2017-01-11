<%@include file="header.jsp"%>
<script src="${pageContext.request.contextPath }/resources/js/app/studentApp.js"></script>

<nav class="breadcrumb">
    <a class="breadcrumb-item active" href="${pageContext.request.contextPath }/stud"> Student CRUD Angular /</a>
    <a class="breadcrumb-item " href="${pageContext.request.contextPath }/currency"> Currency API /</a>
</nav>

<div ng-app="studentApp">
    <div class="alert alert-success" role="alert"><h3> Student Rest CRUD with Angular </h3></div>

    <div ng-view></div>

    <%@ include file="templates.jsp" %>
</div>

<%@include file="footer.jsp"%>