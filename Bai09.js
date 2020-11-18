//try-catch base
var n = 9;
try{
	if (n %2 === 0) {
		console.log(" n la so chan");
	}else{
		throw(e);
	}
} catch (e){
	console.log(" la so le");
} finally{
    console.log('Kết thúc khối try-catch');
}

//Use throw error message
var text = 'Hallo world';

try {
    if(text !== 'Hello world'){
        throw new Error('Bạn đã nhập sai');
    }
} catch (error) {
        console.log(e.message);
} finally {
    console.log("Kết thúc");
}

//function thông báo lỗi
function UserError (){
    this.throwLogin = function(){
        throw new Error ('Tên đăng nhập không đúng');
    }
}
var username = 'tule';
try {
    if(username !== 'username'){
        var UserError = new UserError();
        UserError.throwLogin();
    }
} catch (error) {
        console.log(e.message);
}
