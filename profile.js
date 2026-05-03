// Task 1: Create the profile
const profile = [
    "Chris",
    47,
    true,
    "Missouri",
    ["comics", "drawing"]
];

// Task 2: Access and log details
console.log("Name:", profile[0]);
console.log("Second hobby:", profile[4][1]);

// Task 3: Modify profile
profile[1] = 48;
profile[4].push("gaming");

// Task 4: Log updated profile
console.log("Updated Profile:", profile);