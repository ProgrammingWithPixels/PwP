INSTRUCTIONS
You are employed by a local provider of heavy rail passenger services called ModelOff Trains (“MOT”). 
You have been provided 5 weekdays of data on train performance and need to conduct analysis on the 
data for senior management at MOT. There are three parts to the required analysis:  
Part 1) Create a full schedule of all 840 data points that MOT collect daily (questions 14 - 15). 
Part 2) Clean up the data provided from the MOT systems (of the actual time) into a form usable for 
analysis 
(questions 16 - 19). 
Part 3) Answer certain questions put to you by MOT senior management (questions 20 - 24). 
It is recommended that you read the questions for all parts before beginning your modeling. 
 
BACKGROUND 
The rail network has 3 lines. These are the Blue line (3 stations), Red line (6 stations) and Yellow line 
(5 stations). All stations feed a central transport hub known as ‘H’. Travel occurs in both directions with 
two sets of tracks per line (one track inbound, one track outbound). Travel towards ‘H’ is referred to as 
Inbound and traffic away from it as Outbound. The rail network is shown in the diagram.
 
SCHEDULE 
The weekday schedule for all three lines is provided below (and is contained in the provided Excel 
workbook). 
There are four periods each day when service is provided (AM, Mid, PM and Evening). The frequency 
within each period is provided. For example, for the Red Inbound AM service, the first train departs M at 
7am and runs every 20 minutes. Therefore services will depart M at 7:00am, 7:20am, 7:40am, 8:00am, 
8:20am and 8:40am. The first Mid service departs at 9:00am. 
The times listed are the scheduled departure times from each station (with the exception of the last stop 
on each line, which is the scheduled arrival time). 
 
Red - Inbound
Frequency (mins)     M        L        K        J        I        H
20                   7:00 AM  7:10 AM  7:17 AM  7:23 AM  7:29 AM  7:33 AM
30                   9:00 AM  9:10 AM  9:17 AM  9:23 AM  9:29 AM  9:33 AM
40                   5:00 PM  5:10 PM  5:17 PM  5:23 PM  5:29 PM  5:33 PM
60                   7:00 PM  7:10 PM  7:17 PM  7:23 PM  7:29 PM  7:33 PM
Final service       11:00 PM 11:10 PM 11:17 PM 11:23 PM 11:29 PM 11:33 PM

Red - Outbound
Frequency (mins)     H        I        J        K        L        M
40                   7:00 AM  7:04 AM  7:10 AM  7:16 AM  7:23 AM  7:33 AM
30                   9:00 AM  9:04 AM  9:10 AM  9:16 AM  9:23 AM  9:33 AM
40                   5:00 PM  5:04 PM  5:10 PM  5:16 PM  5:23 PM  5:33 PM
60                   7:00 PM  7:04 PM  7:10 PM  7:16 PM  7:23 PM  7:33 PM
Final service       11:00 PM 11:04 PM 11:10 PM 11:16 PM 11:23 PM 11:33 PM

Yellow - Inbound
Frequency (mins)     Z        Y        X        W        H
20                   7:00 AM  7:12 AM  7:20 AM  7:25 AM  7:28 AM
30                   9:00 AM  9:12 AM  9:20 AM  9:25 AM  9:28 AM
40                   5:00 PM  5:12 PM  5:20 PM  5:25 PM  5:28 PM
60                   7:00 PM  7:12 PM  7:20 PM  7:25 PM  7:28 PM
Final service       11:00 PM 11:12 PM 11:20 PM 11:25 PM 11:28 PM

Yellow - Outbound
Frequency (mins)     H        W        X        Y        Z
40                   7:00 AM  7:03 AM  7:08 AM  7:16 AM  7:28 AM
30                   9:00 AM  9:03 AM  9:08 AM  9:16 AM  9:28 AM
40                   5:00 PM  5:03 PM  5:08 PM  5:16 PM  5:28 PM
60                   7:00 PM  7:03 PM  7:08 PM  7:16 PM  7:28 PM
Final service       11:00 PM 11:03 PM 11:08 PM 11:16 PM 11:28 PM

Blue - Inbound
Frequency (mins)     A        B        H
20                   7:00 AM  7:08 AM  7:24 AM
30                   9:00 AM  9:08 AM  9:24 AM
40                   5:00 PM  5:08 PM  5:24 PM
60                   7:00 PM  7:08 PM  7:24 PM
Final service       11:00 PM 11:08 PM 11:24 PM

Blue - Outbound
Frequency (mins)     H        B        A
40                   7:00 AM  7:08 AM  7:24 AM
30                   9:00 AM  9:08 AM  9:24 AM
20                   5:00 PM  5:08 PM  5:24 PM
60                   7:00 PM  7:08 PM  7:24 PM
Final service       11:00 PM 11:08 PM 11:24 PM
 
PART 1 – FULL TRAIN SCHEDULE (QUESTIONS 14 – 15) 
Based on the schedule information provided, complete a full list of all 840 stops scheduled to occur in one 
day. 
 
PART 2 – CLEANING THE DATA (QUESTIONS 16 – 19) 
Data has been provided for 5 weekdays (a total of 4,200 data points). Unfortunately, there are a variety of 
data input methods that can be used and as such the data needs to be put into a standardized format for 
meaningful analysis to be completed. Each data point is a single cell and contains three fields that must 
be extracted. These are: 
1) Date. Between 6 and 10 November inclusive. There are two date formats used: for example, 
6 November will be shown as either 6-Nov or 6/Nov. 
2) Time. The actual departure time (or arrival time for the last stop on the line). This is always expressed 
in the same format and includes AM/PM. 
3) Station code. This consists of three letters showing the line, direction of travel and the station the 
departure/arrival occurs at (using the first letter of each). 
For example, a departure on the Red line on the Inbound direction from station K would have the 3 
letter code RIK. Sometimes there are additional characters in this code (i.e. RIK or R:I:K or R-I-K or 
R/I/K).  
Additionally, these three fields can occur in any order. There is always a single space separating each of 
the fields. 
PART 3 – ANALYZING THE DATA (QUESTIONS 20 – 24) 
Once the data is cleaned up, you can compare it against the schedule you calculated in Part 1 to answer 
these questions.  
 
For Questions 14-18, 20-22, select your answer from a multiple choice list. 
For Questions 19, 23- 24, you are required to type in your answer. 

 
