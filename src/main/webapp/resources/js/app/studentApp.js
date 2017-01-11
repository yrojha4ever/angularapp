angular.module("studentApp",['ui.bootstrap','ui.grid', 'ngRoute','restangular','ui-notification']);

/*---------Constant ----------*/
angular.module("studentApp")
.constant('AppConstants', {
	'API_URL':'http://localhost:8080/angularapp/api/stud/'
});

/* ---------Config/route provider/Restangular ----------*/
angular.module("studentApp")
.config(
    function($routeProvider, RestangularProvider, AppConstants) {
        RestangularProvider.setDefaultHeaders({
            'Content-Type': 'application/json'
        });
        RestangularProvider.setBaseUrl(AppConstants.API_URL);
        $routeProvider.when('/', {
            controller: 'StudentTableCtrl',
            templateUrl: 'StudentTable.html',
            resolve: {
            	studentRecords : function(StudentService){
            		return StudentService.getAll(); /*promises*/
            	}
            }
        }).when('/create', {
            controller: 'StudentFormCtrl',
            templateUrl: 'StudentForm.html',
            resolve: {
            	studData: function(){
            		return {"id":0};
            	}
            }
        }).when('/edit/:id', {
            controller: 'StudentFormCtrl',
            templateUrl: 'StudentForm.html',
            resolve : {
            	studData: function(StudentService, $route){
            		return StudentService.get($route.current.params.id);
            	}
        
            }
        }).otherwise({
            redirectTo: '/'
        });
});

/* ---------Controller ----------*/
angular.module("studentApp")
.controller("StudentTableCtrl", function($scope, $location, $uibModal, uiGridConstants, studentRecords, Notification){
	
	$scope.documents = studentRecords;
	$scope.gridOptions = {
		data : 'documents',
    	enablePaging : true,
    	showFooter : true,
    	showFilter : true,
    	columnDefs: [
         			{name : 'id'},
        			{name : 'Name', cellTemplate : '<div>{{row.entity.firstName}}, {{row.entity.lastName}}</div>'},
        			{name : 'rollNo'},
        			{name : 'collegeName'},
        			{name : 'subject'},
        			{name : 'Action',
        				cellTemplate:'<div><button class="btn btn-info" data-ng-click="grid.appScope.editRow(row,row.entity)"><i class="fa fa-pencil-square-o"></i> Edit</button>'+
        							 '<button class="btn btn-danger" data-ng-click="grid.appScope.deleteRow(row,row.entity)"><i class="fa fa-times"></i> Delete</button><div>'}
        	    ],
    	multiSelect:false,
        onRegisterApi: function( gridApi ) {
            $scope.grid1Api = gridApi;
        }
	};
	
	$scope.addStud = function(){
		$location.path('/create');
	};
	
	$scope.editRow = function(row) {
		$location.path('/edit/'+row.entity.id);
    }
	
	$scope.deleteRow = function(row){
		$uibModal.open({
			templateUrl:'DeleteConfirmation.html',
			controller: 'DeleteModalCtrl',
			resolve:{
				row : function(){
					return row;
				}
			}
		});
	};
})

.controller('DeleteModalCtrl', function($scope, $uibModal, $uibModalInstance, $location, Restangular, row, StudentService, Notification){
		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		};

		$scope.ok = function() {
			StudentService.remove(row.entity.id).then(function(result){
				Notification.error('Information Deleted!');
				$uibModalInstance.dismiss('cancel');
				$location.path('/#');
			});
		};
})

.controller("StudentFormCtrl", function($scope, $location, studData, StudentService, Notification){
	$scope.status= (studData.id > 0)?"EDIT":"CREATE";
	$scope.student = studData;
	$scope.cancel = function() {
		$location.path('/');
	};
	$scope.save = function(studForm){
		if(!studForm.$valid){
			return;
		}
		StudentService.save($scope.student).then(function(result){
			Notification.success('Information Saved!');
			$location.path('/');
		});
	};
	
});

/*---------Service ----------*/
angular.module("studentApp")
.service('StudentService', function(Restangular){
	return {
		getAll: getAll,
		get:get,
		remove:remove,
		save:save
	};
	
	function getAll(){
		return Restangular.all('getAll').getList();
	}
	
	function get(id){
		return Restangular.one(id + '/get').get();
	}
	
	function remove(id){
		return Restangular.one(id+'/delete').remove();
	}
	function save(studData){
		return Restangular.all('/save').post(studData);
	}
	
});

/*---------Directive ----------*/
angular.module("studentApp")
.directive('onlyDigits', function() {
    var link = function (scope, element, attr, ctrl) {
        var inputValue = function(val) {
            if (val) {
                var digits = val.replace(/[^0-9]/g, '');

                if (digits !== val) {
                    ctrl.$setViewValue(digits);
                    ctrl.$render();
                }
                return parseInt(digits, 10);
            }
            return undefined;
        };
        ctrl.$parsers.push(inputValue);
    };
    return {
        require: 'ngModel',
        restrict: 'A',
        link: link
    };
});
