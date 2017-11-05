function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Tyler Jones',
			handicap: 6,
			active:true,
            played:false,
            absent:false
		},{
			name: 'Tom Mann',
			handicap: 6,
			active:false,
			played:false,
            absent:true,
            planned:false
		},{
			name: 'Dustin Stauffer',
			handicap: 5,
			active:false,
			played:false,
            absent:false,
            planned:false
		},{
			name: 'Gary Stanton',
			handicap: 4,
			active:false,
			played:false,
            absent:false,
            planned:false
		},{
			name: 'Malcolm McRoberts',
			handicap: 4,
			active:false,
			played:false,
            absent:false,
            planned:false
		},{
			name: 'Janna Johnston',
			handicap: 3,
			active:false,
			played:false,
            absent:false,
            planned:false
		},{
			name: 'Karen Barrera',
			handicap: 3,
			active:false,
			played:false,
            absent:false,
            planned:false
		},{
			name: 'Rebecca Wickens',
			handicap: 2,
			active:false,
			played:false,
            absent:false,
            planned:false
		}
	];

	$scope.togglePlayed = function(s){
        if (!s.absent)
		    s.played = !s.played;
	};

	$scope.toggleAbsent = function(s){
		s.absent = !s.absent;
	};

	// Helper method for calculating the total handicap

    $scope.total = function(){

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.services, function(s){
            if (s.played){
                total+= s.handicap;
            }
        });

        return total;
    };	
    
    $scope.totalPlanned = function(){

        var total = 0;

        // Use the angular forEach helper method to
        // loop through the services array:

        angular.forEach($scope.services, function(s){
            if (s.planned){
                total+= s.handicap;
            }
        });

        return total;
    };
}
