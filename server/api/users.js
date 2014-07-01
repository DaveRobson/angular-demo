//stubbed data normally gather from database
var userList = [
	{
		'userId': 1,
		'firstname': 'David',
		'lastname': 'Robson',
		'username': 'drobson',
		'email': 'david-demo@gmail.com'
	},
	{
		'userId': 2,
		'firstname': 'Laura',
		'lastname': 'Cassar',
		'username': 'lcassar',
		'email': 'laura-demo@gmail.com'
	}
]

var lastUserId = 2;

users =
{
	list: function(req, res)
	{
		res.json(userList);
	},
	read: function(req, res)
	{
		var userId = req.params.userId;

		var user = findUserById(userId);

		if(user !== 0)
		{
			res.json(user);
		}
		else
		{
			//user not found
			res.send(404, 'User not found!'); //dev only message
		}
	},
	create: function(req, res)
	{
		var newUser = req.body;
		var newUserId = lastUserId + 1; //create a new userId each time
		lastUserId = newUserId; //increment the id

		newUser.userId = newUserId;

		userList.push(newUser);

		res.send(true);
	},
	delete: function(req, res)
	{
		var userId = req.params.userId;

		var i = 0;

		for(var key in userList)
		{
			console.log(userId)
			if(userList[key].userId == userId)
			{
				userList.splice(i, 1);
				res.send(true);
				return;
			}

			i++;
		}

		res.send(404, 'User to delete not found!'); //dev only message
	},
	update: function(req, res)
	{
		var userId = req.params.userId;
		
		if(req.body.userId !== 'undefined')
		{
			for(var key in userList)
			{
				console.log('UserId for update: ' + userId)
				if(userList[key].userId == userId)
				{
					userList[key] = req.body;
					res.send(true);
					return;
				}
			}

			res.send(404, 'User to update not found!'); //dev only message
		}

		res.send(404, 'User to update update not found!'); //dev only message
	}

}

//Helper function to find a specific from the datasource
function findUserById(userId)
{
	for(var key in userList)
	{
		console.log(userId)
		if(userList[key].userId == userId)
		{
			return userList[key];
		}
	}

	return 0;
}


module.exports = users;