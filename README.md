# workout_tracker_app

## PURPOSE: 
The purpose of this app is for users to track their exercises, calories, weight and their food intake. It will assist the user within their fitness journey and be able to store their information onto their device such as a laptop, ipad, and phone. 

## DATA Being used
Data will be categorized within tables and will be described to their relationships and fields within this readme file.

| SQL TABLE | DATA USED| RELATIONSHIP |
| - | - | - |
| `USERS` |  Users will sign up with an email, password, and starting weight| 
|`EXERCISE`| Users will be able to type an entry of name of exercise, reps, and sets| One user to Many exercise
|`CALORIES`| Users will be able to type and track their TDEE, calories burned, calories gained, and net calories |One user to Many calories
|`FOOD INTAKE`| Users will be able to use and track what foods they've consumed during the date with an automatic timestamp that takes place` | One user to Many food intake |

| SQL TABLE | FIELD |
| - | - |
| `Users` | Id |
| | First Name|
| | Last Name|
| | Email |
| | Password |
| | Weight |
| `Exercise` | Id |
| | User Id|
| | Exercise Entry | 
| | Min |
| | Exercise Sets |
| | Exercise Reps |
| `Calories` | Id|
| | User Id | 
| | Calories TDEE Entry |
| | Calories Burned Entry |
| | Calories Gained Entry |
| | Net Calories Entry |
| `Food Intake`| Id|
| | User Id|
| | Food Entry |
| | Date Entry |

