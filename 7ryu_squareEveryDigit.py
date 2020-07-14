# Welcome. In this kata, you are asked to square every digit of a number.
# For example, if we run 9119 through the function, 
# 811181 will come out, because 92 is 81 and 12 is 1.
# Note: The function accepts an integer and returns an integer


def squareDigits(num):
    
    digits = [int(d) for d in str(num)]

    squareDigits = [i**2 for i in digits]

    separator = ''

    joinDigits = ''.join(map(str,squareDigits))

    return (joinDigits)



print squareDigits (9119)
print squareDigits (22651)
print squareDigits  (12345)

