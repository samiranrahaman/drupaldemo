
  mainApp.controller("HelloController",function($scope){
		  $scope.x={};
		   $scope.x.title='Samiran rahaman@!';
		  });
         
		 
         mainApp.controller('studentController', function($scope) {
            $scope.student = {
               firstName: "Mahesh",
               lastName: "Parashar",
			   fees:500,
             
			 subjects:[
                  {name:'Physics',marks:70},
                  {name:'Chemistry',marks:80},
                  {name:'Math',marks:65}
               ],
               
               fullName: function() {
                  var studentObject;
                  studentObject = $scope.student;
                  return studentObject.firstName + " " + studentObject.lastName;
               }
            };
         }); 
		 
		  mainApp.controller('studentController2', function($scope) {
            $scope.reset = function(){
               $scope.firstName = "Mahesh";
               $scope.lastName = "Parashar";
               $scope.email = "MaheshParashar@tutorialspoint.com";
            }
            
            $scope.reset();
         });
		 
		 mainApp.controller('myCtrl', function($scope, $http) {
				$http({
					method : "GET",
					url : "welcome.htm"
				}).then(function mySucces(response) {
					$scope.myWelcome = response.data;
				}, function myError(response) {
					$scope.myWelcome = response.statusText;
				});
			});
