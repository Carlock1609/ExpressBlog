<!-- MONGODB Syntax Queries -->
show dbs -> MurderBeeTracjer
show collections -> users
db.users.find({username: 'name'}) -> *all users that match the filter in a query set*
db.users.find({username: 'name'})[0] -> first user object in queryset
db.users.find({username: 'name})[0].password -> users password