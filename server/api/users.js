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
			res.send(404, 'Something broke!');
		}


	},
	create: function(req, res)
	{
		res.send(404, 'Something broke!');
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

		res.send(404, 'Something broke!');
	},
	update: function(req, res)
	{
		var userId = req.params.userId;
		
		console.log('update');

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

		res.send(404, 'Something broke!');
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