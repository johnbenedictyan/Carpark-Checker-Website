# SG Carparks
SG Carparks is the website for the motorist who thinks ahead. 
Tired of arriving at a carpark only to realise that it's full? 
Look no further, with SG Carparks you will be able to know which carparks are free!
## UX
List of User Stories
- As a motorist, I want to check of the carpark availabiliy around me, to choose the best available carpark.

## Features
### Existing Features
- Carpark Availability - Allows users to create their own recipes, by having them fill up a recipe creation form.
- Search for places - Allows users to update their own recipes, by having them fill up a recipe update form.
- Use current location - Allows users to delete their own recipes, with checks in place if they try to delete a recipe they did not create.

### Features Left to Implement
- Google Place searchs where the user can search for landmarks or well known places and the relevant information would appear. E.g. (A list of hotels around the user, when the user types in hotel into the search bar).

## Technologies Used
- [Boostrap](https://getbootstrap.com/)
    - The project uses **Boostrap** to create a mobile responsive and stylish webpage.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Axios](https://github.com/axios/axios/)
    - The project uses **Axios** to simplify AJAX calls.
- [Google Maps Api](https://developers.google.com/maps/documentation/)
    - The project uses **Axios** to show information to the users through the map.

## Testing
Manual Testing:

Interesting Bugs/Problems:
- The converting of the proprietary coordinate system that the Singapore government was using in their datasets via multiple external ajax call was taking too long. Therefore I pass the entire coordinate dataset as a JSON object to a local route in flask via AJAX and returned the convertered coordinates as the AJAX response to save load time.

## Deployment
On the development version, sensitive information is stored in an env.py that is not pushed to github.
Where as on the deployed version, these sensitive information are stored in the Heroku Config Vars

To run the app locally:
1. Open the app.py in the main directory.
2. Run this python script.
3. Click on the local host link address to open the app the web browser.

You can view the deployed version on [Heroku](https://tgc-ci-project-2.herokuapp.com/)
## Credits

### Content
- The dataset were taken from [data.gov.sg](https://data.gov.sg/developer)

### Media
- The photos used in this site were obtained from [Stock Snap](https://stocksnap.io/),[Pexels](https://www.pexels.com/),[Unsplash](https://unsplash.com/),[Pixabay](https://pixabay.com/),[FoodiesFeed](https://www.foodiesfeed.com/)

### Acknowledgements

- The SVY21 to WSG84 coordinate converter script was taken from [Github](https://gist.github.com/jovianlin/30b0fd93e2b835cb1e8d93bfa0e1e62f)

