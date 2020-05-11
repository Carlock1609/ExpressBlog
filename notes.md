<!-- MONGODB Syntax Queries -->
show dbs -> MurderBeeTracjer
show collections -> users
db.users.find({username: 'name'}) -> *all users that match the filter in a query set*
db.users.find({username: 'name'})[0] -> first user object in queryset
db.users.find({username: 'name})[0].password -> users password



<!-- TODO LIST -->
- Set up basic user model.
    - Use Oauth to sign in and vericate, just like CLIQUE
- Display Map even though user is not logged in.
    - Dont display option to mark on map

- Make navbar button animations on Pencode