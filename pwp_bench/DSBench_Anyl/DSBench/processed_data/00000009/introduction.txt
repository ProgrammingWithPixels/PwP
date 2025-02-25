INTRODUCTION
The provided workbook includes the SOWPODS list of 267,752 English language words (the meaning of 
SOWPODS is not important for the question, but it relates to a popular word-based board game).  This 
List is the source of allowed words for the purpose of this Section. 
TASK 
Your task is to build a model that has the following functions: 
When supplied with 
i) An input string of 7 letters (e.g. F I N A N C E) or an input string of 6 letters and a wildcard;
ii) a value for N equal to 5, 6, 7 representing the length of the words; and
iii) a value for X (a positive integer)
your model should be able to identify: 
1) How many unique words of length N from the List can be made using the input letters. (For clarity, the 
order of the letters can be rearranged, and each input letter can only be used once per word.  So, if 
FINANCE was the input string and N is 5, INANE (2 N’s) is allowed but FENCE (2 E’s) is not. Also, 
count INANE once only, not twice.); 
2) For a given value of X, the Xth word in an alphabetical sorted list of the words found in (1); 
3) Which word from those found in (1) scores the highest amount of points when placed in its optimal 
spot on the Board (details on next page).  If more than one word scores the maximum, give the word 
that would appear first in an alphabetical list of the highest scoring words; and 
4) The score achieved from the optimal placement of the word in (3) above. 
 
ASSESSMENT 
After 60 minutes of development time, you will be given an answer sheet containing a list of 15 input 
strings each with its N value and its X value, and space to write your answers.  You will then have an 
additional 20 minutes to continue work and to find and write down the values for items (1) to (4) above for 
each of the 15 input strings, for a total of 60 answers.  All answers are worth 1 mark each.  An example 
Question and its correct answers are provided on the next page to help you self-assess your model. 
To make the questions more challenging, instead of 7 regular letters, input strings 11 to 15 will contain 
6 letters followed by one wildcard (denoted by a question mark “?”).  The wildcard can be used as any 
of the 26 letters when finding words from the List, and can be used as different letters for different words.  
For example, if the input string is “NUMBER?” and N is 5, both RERUN and UNDER are allowed.  In the 
scoring, the wildcard character will have the same points value as the letter it represents.  Also, there is no 
distinction between RERUN and RERUN.  Count that word once only. 
ADDITIONAL RESOURCES AND DEVELOPMENT HINTS 
The provided workbook includes the worksheet ‘Permutation’ which contains all 5,040 permutations of 
ways to list the digits 1 through 7.  You may find this useful. 
Development Hint: Save often, and avoid double-clicking on the fill-handle box (the small square at the 
bottom right of a selected range) in order to apply a formula down a column containing tens of thousands 
of rows.  Doing so has a tendency to freeze Excel.  Use a different method to apply a formula to very large 
amounts of cells at once. 

SCORING AND THE ‘BOARD’ 
Each letter (A to Z) has been assigned a points value (from 1 to 10), and the wildcard will share the points 
value of the letter it represents.  The points per letter can be found on the ‘Scoring’ worksheet of the 
provided workbook. 
The Board is a 1 * 13 array of squares, with each square having a multiplier value of 1, 2 or 3.  A word 
may be placed on the Board with 1 letter per 1 square starting in any position on the Board, provided that: 
i) The placement runs continuously from left to right;
ii) The middle square (#7) is always occupied;
iii) The whole word is placed and final letter does not extend past the end of the Board.
 
The ‘Scoring’ worksheet shows an example.  An image of that example is shown.
 
 
EXAMPLE QUESTION 
This is the format that each of the 15 cases on the Question and Answer sheet will have, to be provided 
after 60 minutes of development time.  The underlined values are the answers that you will need to give. 

Question #    Input string    N (word length)    Value of X
16 (Example)  FINANCE         6                  3

# of words
7                              Xth word in list
                                ENCINA

Highest Scoring Word
FIANCE                         Highest Score
                               22
