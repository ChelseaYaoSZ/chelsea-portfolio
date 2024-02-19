Dog API Documentation

Endpoint: /api/dog


Overview:

The Dog API provides a JSON-formatted data set featuring a collection of cute dog sentences paired with images of Westie dogs. This API is ideal for applications requiring dog-related content, particularly for those focusing on West Highland White Terriers (Westies).


Data Format:

The API returns data in JSON format. Each entry in the JSON array represents a unique dog-themed item, consisting of an ID, a text (cute dog sentence), and a URL pointing to an image of a Westie dog.


JSON Structure:

Here is an example of the JSON structure returned by the Dog API:
[
    {
        "id": 1,
        "text": "It's a Baaaall !!!",
        "url": "https://www.shunziyao.com/api/images/ball.png"
    },
    ...
]

Each object in the array contains the following fields:

id: A unique identifier for the entry.
text: A cute or funny sentence related to dogs.
url: A direct link to an image of a Westie dog that corresponds to the text.


Usage Example:

To fetch all the dog items from the API, you can use a simple HTTP GET request. Here's an example using JavaScript's Fetch API:
fetch('https://www.shunziyao.com/api/dogs')
  .then(response => response.json())
  .then(data => console.log(data));
