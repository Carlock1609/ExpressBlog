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

- I set up markers Schema, The only thing i couldn't figure out is how to make it accept an imagefield.
    - For now leave it off, as long as I can receive a POST that has everything except image then i can come back to it
- Loop over markerSchema and for each object, plot the specific data to a marker on the map.



- LOOK into making our own API that has all the markers
    - We will use axios to make requests to our API to plot on the map


- Think about adding an Icon to the schema, This will let the User use a drop down to select which Icon they want to display when marked.
    - Dead bee Icon, Hornet Icon, Nest Icon, etc,.



WASHING.GOV WEBSITE
https://news.wsu.edu/2020/04/06/wsu-scientists-enlist-citizens-hunt-giant-bee-killing-hornet/

To report an Asian Giant Hornet sighting, contact the Washington State Department of Agriculture Pest Program at 1‑800‑443‑6684, pestprogram@agr.wa.gov or online at agr.wa.gov/hornets.
For questions about protecting honey bees from hornets, contact WSU Extension scientist Tim Lawrence at (360) 639-6061 or timothy.lawrence@wsu.edu.


**HOW TO CHECK AUTH OF USER 
context -
{campgrounds: allCampgrounds, currentUser: req.user}
ejs -
<% if(currentUser && campground.author.id.equals(currentUser._id)) { %>
