# Redux State (Generalized)
## Reducers
```json
{
    "users": {},
    "projects": {},
    "project": {},
}
```
-------
> Now each reducer as a sample for the project
> -  **Etags** - used for caching data and not updating content unnecessarily
> -  **Pages** - used for saving current necessary data and knowing what page to load
> -  **Show** - used for filtering and sorting data in order not to rerender the object items
> -  **List** - used for holding the data, instead of arrays due to rerendering and rendering performance
-------

### Users
```json
"users": {
    "etag": "",
    "pages": Set [],
    "show": Set [],
    "list": {
        "me": {"id": 1, "name":"Jennifer"},
        "2": {"id": 2, "name": "Crystal"},
        "3": {"id": 3, "name": "Lori"},
        "4": {"id": 4, "name": "Leroy"}
    },
}
```
### Projects
```json
"projects": {
    "etag": "",
    "pages": Set [],
    "show": Set [],
    "list": {
        "1ab": {"id": "1ab", "title": "Designs", "count": 20, "color": "red"},
        "2ab": {"id": "2ab", "title": "Mockups", "count": 0, "color": "green"},
        "3ab": {"id": "3ab", "title": "Front End", "count": 3, "color": "blue"},
        "4ab": {"id": "4ab", "title": "Mobile", "count": 6, "color": "white"},
    }
}
```
### Project
```json
"project": {
    "id": "1ab", 
    "title": "Designs", 
    "count": 20, 
    "color": "red",
    "extras": "This is a special description"
}
```