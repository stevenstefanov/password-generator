# Password-Generator

## Project Description

This project is a simple password generator. The user has a series of options to select from between lowercase letters, uppercase letters, numbers, and/or special characters.

## Project Screenshot  

![Project Screenshot](assets/images/screenshot_stevenstefanov.png)
 
## Link to Deployed Project  

https://stevenstefanov.github.io/password-generator/

## What were the challenges?

One challenge faced was how to add the different password criteria options. They were selected to one string which would be randomized later. Another challenge was if the user's input for a password lengh was outside of the scope two times in a row and then the cancel button was pressed, the remaining criteria selections would pop up. This was solved by including prompts under the `if/else` statatements regarding the length and validity of input.

## What was updated?

The project's button was inoperable at the beginning. Functionality to the button was added which would trigger a series of prompts and alerts. These would eventually result in a password generating which met the user's criteria.

## Why did I decide to do this project?

This project was really interesting to develop. I really wanted to explore the different math functions involved, how `if/else` statements could be used to navigate user input, and `for loops` can be used in a very practical way.

## What I learned in the process?

I learned a lot more about computer logic and flow of code. It was really beneficial seeing how `if/else` statements work.

## What makes this project stand out?

This project is a great example of a simple yet very effective password generator.

## Usage

This is a single page website. Upon launch, the user is presented with a blank box and a button that will begin the password generating process. Once pressed, the user is prompted to type in a number between 8 and 128, indicating the desired length of a password. If the customer presses `Cancel`, the code sequence is interruped and the prompts end. If a number outside of that scope or another type of character is typed, an alert comes up that expresses the issue and the function starts over. If a qualifying entry is made, the user is prompted with the following four consecutive questions - does the user want the password to contain lowercase letters, uppercase letters, numbers, and special characters. If `Cancel` is pressed on any one of those prompts, those characters will be ommited from the final result. If all selections are rejected, an alert will pop up explaining that at least one selection must be made and the function begins over. If a numerical value within the range is input and at least one criteria is selected, the web browser will display a randomly generated password with the desired length and character criteria.

## Licence

Copyright (c) 2021 Steven Stefanov

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.