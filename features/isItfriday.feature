Feature:Sign Up for Sales Force

Rule: If not already registered need to Sign In
Scenario:SignUp
Given We are on SalesForce HomePage

When  User tries to LogIn

And   Users proceeds to SignUp
        
        | firstName  | Carl                    | 
        | lastName   | Jung                    |
        | companyName| Volvo                   |
        | jobTitle   | Designer                |
        | jobRole    | Architect               |
        |relationship| Non-Customer / Prospect |
        | countryName| PK                      |
        | state      | AL                      |
        | workPhone  | 0345258125              |
        | companySize|21-200 employees         |

Then I have successfuly signed Up,after that a video is played