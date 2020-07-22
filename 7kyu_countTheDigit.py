# Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
# Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of
# digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...)
# the function taking n and d as parameters and returning this count.

#Examples:

# n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
# We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.


def nb_dig(n, d):
    my_range = range (0, n+1)
    list_square = []

    print (my_range)

    for k in my_range:

        square = k**2
        list_square.append (square)

    joinDigits = ''.join(map(str,list_square))

    count = 0

    for x in joinDigits:

        if x == str(d):
            count = count +1

    print (list_square)
    print (joinDigits)

    return (count)

print (nb_dig(25, 1))
