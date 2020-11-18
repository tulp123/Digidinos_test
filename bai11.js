//bind dữ liệu kiểu 1
var employee = {
    id: '01',
    name: 'Lê Phương Tú',
    showName: function (callbackFunction){
        callbackFunction();
    },
    render: function(){
        this.showName(function(){
            console.log(this);
            console.log(this.id);
            console.log(this.name);
        }.bind(this));
    }
}
employee.render();

//bind dữ liệu kiểu 2
var student = {
    showInformation: function(callbackFunction){
        callbackFunction();
    },
    render: function(){
        this.showInformation(function(args){
            console.log(this);
        }.bind(["02","Ngô Thanh Vân"]));
    }
};

student.render();
