<script type="text/ng-template" id="StudentTable.html">
	<button class="btn btn-info" data-ng-click="addStud()"><i class="fa fa-plus"></i>  Add</button>
	<div ui-grid="gridOptions" style="height:200"> </div>
</script>

<script type="text/ng-template" id="StudentForm.html">
<div style="margin-left:30px;">
	<h4><strong>{{status}} Student</strong></h4>
    <form name="studForm" ng-submit="save(studForm)" novalidate> <!-- novalidate prevents HTML5 validation -->
        <div class="form-group row">
            <label for="firstName" class="col-2 col-form-label">First Name</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="student.firstName" id="firstName" name="firstName" required>
				<div ng-show="studForm.$submitted || studForm.firstName.$touched"><span ng-show="studForm.firstName.$error.required" class="text-danger">First Name is Required.</span></div>
            </div>
        </div>
        <div class="form-group row">
            <label for="lastName" class="col-2 col-form-label">Last Name</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="student.lastName" id="lastName" name="lastName" required>
				<div ng-show="studForm.$submitted || studForm.lastName.$touched"><span ng-show="studForm.lastName.$error.required" class="text-danger">Last Name is Required.</span></div>
				<!--<div ng-class="{'has-error': studForm.$submitted && studForm.lastName.$invalid}">Last Name is Required.</div> -->
            </div>
        </div>
        <div class="form-group row">
            <label for="rollNo" class="col-2 col-form-label">Roll No</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="student.rollNo" id="rollNo" name="rollNo" only-digits>
            </div>
        </div>
        <div class="form-group row">
            <label for="collegeName" class="col-2 col-form-label">College Name</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="student.collegeName" id="collegeName" name="collegeName">
            </div>
        </div>
        <div class="form-group row">
            <label for="subject" class="col-2 col-form-label">Subject</label>
            <div class="col-10">
                <input class="form-control" type="text" ng-model="student.subject" id="subject" name="subject">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-10">
                <button type="submit" class="btn btn-primary">Save</button> <!--ng-disabled='userForm.$invalid' to disable button -->
                <button type="button" ng-click="cancel()" class="btn btn-danger">Cancel</button>
            </div>
        </div>
        <input type="hidden" ng-model="student.id" name="id"/>
    </form>
 <div>
</script>

<script type="text/ng-template" id="DeleteConfirmation.html">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Delete Student</h5>
        <button type="button" class="close" ng-click="cancel()" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Are you sure you want to <b>delete Record</b>?</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" ng-click="ok()">Accept</button>
			<button class="btn" ng-click="cancel()">Cancel</button>
      </div>
    </div>
</script>