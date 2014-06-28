/*
 * GET users listing.
 */

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
		'email': 'lcassar@gmail.com'
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

		for(var key in userList)
		{
			console.log(userId)
			if(userList[key].userId == userId)
			{
				res.json(userList[key]);
				return;
			}
		}

		//user not found
		res.send(404, 'Something broke!');
	},
	create: function(req, res)
	{
		res.send(404, 'Something broke!');
	},
	delete: function(req, res)
	{
		res.send(404, 'Something broke!');
	},
	update: function(req, res)
	{
		res.send(404, 'Something broke!');
	}

}


module.exports = users;