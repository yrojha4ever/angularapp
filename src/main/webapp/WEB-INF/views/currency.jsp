<%@include file="header.jsp"%>
<script src="${pageContext.request.contextPath }/resources/js/app/currencyApp.js"></script>

<nav class="breadcrumb">
    <a class="breadcrumb-item" href="${pageContext.request.contextPath }/stud"> Student CRUD Angular /</a>
    <a class="breadcrumb-item active" href="${pageContext.request.contextPath }/currency"> Currency API /</a>
</nav>

<div ng-app="currencyRateApp" ng-controller="CurrencyController">
    <div class="alert alert-success" role="alert">
        <h3> Angular Currency Module </h3>
    </div>

    <!--filter: orderBy is used here-->
    <div ng-repeat="baseCurrency in baseCurrencies | orderBy" class="row clearfix" style="float:left">
        <currency-rate base="baseCurrency"></currency-rate>
    </div>

    <%@ include file="templates.jsp" %>
</div>

<%@include file="footer.jsp"%>