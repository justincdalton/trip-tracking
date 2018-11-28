# Trip Tracking Report Generator

#### Running the Project

_Prerequisites_: The project requires node and npm to be installed.

Install dependencies:

```
npm install
```

Run the project:

```
npm start
```

Run the tests:

```
npm test
```

#### Thought Process

In approaching the problem statement I first conceptually broke it into the following logical steps:

1. Parse the report into an array of strings
2. Parse the strings into Driver and Trip objects
3. Assign the trips to the appropriate drivers (discarding the irrelevant ones)
4. Calculate the miles and average speed for each driver
5. Generate new report with the calculated results

I wanted each step to function independently of the others to create a clear separation of concerns and allow them to be tested, debugged, and even used individually.

I followed used factory functions to create the Driver and Trip instances because I felt it kept them simple and concise. I did include some of the parsing logic inside the Trip object which perhaps is not the most appropriate place for it, but it was a good way to break it out from the parseEntities module. This made it easier to isolate and test.

There are some places where the code could potentially be more efficient if we are dealing with a very large amount of data. For instance, I am iterating through the trips twice in the parseEntities module, but if we could assume that the Drivers are all place ahead of the Trips in the input file then this would not be necessary. Using a for loop instead of map and forEach functions could also speed things up on a large array. And finally, when generating the report file I could stream the array instead of exporting it as a single string, which would limit the amount of memory used.
