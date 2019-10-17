#HlaoXiong	

#First programming assignment - convert pounds to other units of weight

#get input in pounds
#note that the input function always give a string 

IbsStr = input ("Enter the number of pounds: ")
Ibs = float(IbsStr) #Convert the string to a float

#compute other units of weight 
ozs = Ibs *16
tons = Ibs / 2000
grams = Ibs * 453.592
kilograms = Ibs * 0.453592

#output the results of the calculation
print() #print a blank line
print(Ibs, "pounds is the same as: ")
print(ozs, "ounces")
print(tons, "tons")
print(grams, "grams")
print(kilograms, "kilograms")
