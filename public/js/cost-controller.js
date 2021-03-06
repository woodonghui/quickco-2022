app.controller('costController', function ($scope, $http, Outlet, SaleRecord) {

    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth() + 1;

    $scope.years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
    $scope.months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    $scope.selection = {
        year: year,
        month: month
    }

    $scope.outlets;
    $scope.tables = {};

    function calculateCost(salerecords) {
        var totalincome = 0;
        var totalcost = 0;
        for (var i = 0; i < salerecords.length; i++) {
            var salerecord = salerecords[i];
            totalincome += salerecord.totalincome;
            for (var j = 0; j < salerecord.costRecords.length; j++) {
                var costRecord = salerecord.costRecords[j];
                if (!costRecord.excludeincosting) {
                    totalcost += costRecord.unitprice * costRecord.quantity * (1 + costRecord.gst);
                }
            }
        }
        // return totalcost / totalincome;
        return parseFloat((totalcost / totalincome).toFixed(4)) * 100;
        //console.log(salerecords, totalincome, totalcost);
    }

    function loadSaleRecords(outlet) {
        var dateofcurrentmonth = new Date($scope.selection.year, $scope.selection.month - 1);
        var dateofnextmonth = new Date($scope.selection.year, $scope.selection.month);

        SaleRecord.find({
            filter: {
                include: { costRecords: [{ product: ['supplier'] }] },
                where: { and: [{ outletid: outlet.id }, { date: { gt: dateofcurrentmonth } }, { date: { lt: dateofnextmonth } }] },
                order: 'date ASC'
            }
        }).$promise.then(function (records) {
            var cost = calculateCost(records);
            $scope.tables[outlet.name] = cost;
        });
    }

    var loadAllSaleRecords = function () {
        $scope.outlets = [];
        $scope.tables = {};
        Outlet.find().$promise.then(function (models) {
            $scope.outlets = models;
            for (var i = 0; i < models.length; i++) {
                var outlet = models[i];
                loadSaleRecords(outlet);
            }
        });
    }

    loadAllSaleRecords();

});
