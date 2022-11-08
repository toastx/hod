pragma solidity ^0.8.7;

contract KYC{
	address public Admin;
	
	enum Application {Pending, Approved, Rejected }
    enum Gender { Male, Female }

	struct UserDetail {
		uint userId;
		Application application;
		uint age;
		Gender gender;
		string permanentAddress;
        string district;
        string state;
        uint pinCode;
		string datahash;  
		address createdBy;
		uint createdAt;
	}

	mapping (address => UserDetail) public userDetails;
	mapping (uint => address) public userIds;

	event ApprovedUser(address _approvedUser);
    event RejectedUser(address _rejectedUser);
    
    function addNewUser(address _userAddress, uint _userId, uint _age, Gender _g, string memory _pAddress, string memory _district, string memory _state, uint _pinCode,string memory _datahash) internal returns (bool success) {
		userIds[_userId] = _userAddress;
		userDetails[_userAddress] = UserDetail(_userId, Application.Pending, _age, _g, _pAddress,_district,_state,_pinCode,_datahash, msg.sender, block.timestamp);
		return true;
	}
	function getUserDetails(address  _userAddress)public view returns (uint, Application, uint, Gender, string memory,string memory,string memory, uint) {
		UserDetail storage user = userDetails[_userAddress];
		return (user.userId, user.application, user.age, user.gender, user.permanentAddress,user.district,user.state,user.pinCode);
	}

	function approveUser(address _approvedUser) private  returns (bool success) {
	  require(userDetails[_approvedUser].createdBy != msg.sender);
		userDetails[_approvedUser].application = Application.Approved;
		userIds[userDetails[_approvedUser].userId] = _approvedUser;
		emit ApprovedUser(_approvedUser);
		return true;
	}
    function rejectUser(address _rejectedUser) private returns (bool success) {
	  require(userDetails[_rejectedUser].createdBy != msg.sender);
		userDetails[_rejectedUser].application = Application.Rejected;
		userIds[userDetails[_rejectedUser].userId] = _rejectedUser;
		emit RejectedUser(_rejectedUser);
		return true;
	}
}

	