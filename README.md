# SG Carparks
>SG Carparks is the website for the motorist who thinks ahead. 
>Tired of arriving at a carpark only to realise that it's full? 
>Look no further, with SG Carparks you will be able to know which carparks 
>are free!

## UX
User Stories:
1. **Myself** :
    - I wanted to create a website.
2. **Motorists(Users)** :
    - As a motorist, I want to check of the carpark availabiliy around me,
    to choose the best available carpark.

## Features
### Existing Features
1. Carpark Availability 
    - Allows Users to view the availabiliy of every carpark nationwide.
2. Search for places 
    - Allows Users to search for a location on the map and view the carpark 
    availabiliy of the carparks around that location.
3. Use current location
    - Allows Users to view their current location on the map and view the 
    carpark availabiliy of the carparks around their current location

### Features Left to Implement
1. Google Place Search 
    - Allows Users to search for landmarks or well known places and the 
    relevant information would appear. 
    E.g. (A list of hotels around the user's location, when the user types in 
    hotel into the search bar).

## Technologies Used
1. [Boostrap](https://getbootstrap.com/)
    - The project uses **Boostrap** to create a mobile responsive and 
    stylish webpage.
2. [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
3. [Axios](https://github.com/axios/axios/)
    - The project uses **Axios** to simplify AJAX calls.
4. [Google Maps API](https://developers.google.com/maps/documentation/)
    - The project uses **Google Maps** to show information to the users 
    through the map.

## Testing
User Stories:

Mobile Responsiveness:

Manual Testing:

Automated Testing (Jasmine):
- If you would like to see the results of the automated testing, you can 
preview in the sepc/javascripts/fixtures/index-fixture.html file.

Automated testing was done on these functions:

Interesting Bugs/Problems:
- The converting of the proprietary coordinate system that the Singapore
government was using in their datasets via multiple external ajax call 
was taking too long leading to an unpleasant user experience. 
Therefore I pass the entire coordinate dataset as a JSON object to a local route
in flask via AJAX and returned the convertered coordinates as the AJAX response 
to save load time. This ensured that the webpage would load relatively quickly
so as to enhance the user experience.

## Deployment
On the development version, sensitive information is stored in an env.py that 
is not pushed to github.
Where as on the deployed version, these sensitive information are stored in 
the Heroku Config Vars

To run the app locally:
1. Open the app.py in the main directory.
2. Run this python script.
3. Click on the local host link address to open the app the web browser.

You can view the deployed version on 
[Heroku](https://tgc-ci-project-2.herokuapp.com/)
## Credits

### Content
1. The datasets for the current carpark availabiliy as well as their general 
data were taken from:
    - [Data.gov.sg](https://data.gov.sg/developer)

### Media
1. The photos used in this site were obtained from:
    - [Pexels](https://www.pexels.com/)

### Acknowledgements
1. The SVY21 to WSG84 coordinate converter script was taken from this Github
repository:
    - [Jovian Lin's Github Repository](https://gist.github.com/jovianlin/30b0fd93e2b835cb1e8d93bfa0e1e62f)

