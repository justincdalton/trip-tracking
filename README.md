# Trip Tracking Report Generator

In approaching the problem statement I first conceptually broke it into the following logical steps:

1. Parse the report into an array of strings
2. Parse the strings into Driver and Trip objects
3. Assign the trips to the appropriate drivers (discarding the irrelevant ones)
4. Calculate the miles and average speed for each driver
5. Generate new report with the calculated results

I wanted each step to function independently of the others to create a clear separation of concerns and allow them to be tested, debugged, and even used individually.
