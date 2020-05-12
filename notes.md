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
    - ***At a good point atm***

- Figure out how to click on the map and initialize a marker with a text
    - Maybe have the user click to get the lat/lng and then have them simply enter in text/file and submit
        - Instead of trying to figure out how to do it alll at the same time.

