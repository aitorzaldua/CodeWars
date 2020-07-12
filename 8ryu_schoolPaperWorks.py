# Your classmates asked you to copy some paperwork for them. 
# You know that there are 'n' classmates and the paperwork has 'm' pages.
# Your task is to calculate how many blank pages do you need.
# Example:
# paperwork(5, 5) == 25
# Note: if n < 0 or m < 0 return 0!



def paperWork (n, m):
    if (n > 0 and m >0):
        a = n*m
        return (a)
    else:
        return (0)


   

print (paperWork(5, 5)) ##resultado 25
print (paperWork(5, 12)) ##resultado 60
print (paperWork(-5, 5)) ##resultado 0