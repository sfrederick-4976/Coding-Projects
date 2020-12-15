## CSCI 2201
## Lab Assignment 1
## Author: Shannon Frederick

import time

#Creates a list to check and turns it into a list
reference = "abcdefghijklmnopqrstuvwxyz 1234567890"

#Creates an input prompt asking the user to input a password of 5 characters length
print("Password must be 5 characters in length including lowercase, numbers and whitespace")
password = input("Please enter your password")

counter = 5                                         # Initialized the counter at 5 because the password is 5 in length

#Checks to ensure that the input coming in is 5 characters in length
while len(password) != 5:
    password = input("Password is not accepted.  Please enter valid password" )

password = password.lower()                         #Transfers password to all lowercase

start = time.time()
for char in password:                               #Cycles through all characters in the input
    for char1 in reference:                         #Cycles through all characters in the reference list
        if char != char1:                           #Checks whether the letter in the password is the same as the ref list
            counter += 1                            #Increases the counter by one if it is not the same
        else:
            print(char, end = '')
            end = time.time()
            break                                   #Breaks for loop if the characters are the same


runtime = end-start
print("")
print("Number of times tried: " + str(counter))
print(runtime)