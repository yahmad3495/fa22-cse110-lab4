1. prices.length - 1 will get printed. Since i is of type var, it can be accessed from outside the for loop. The print statement happens after the loop finishes, and will print the final value of i.
2. The final value of discountedPrice will get printed after the loop finishes.
3. The final value of finalPrice will get printed once the loop finishes. This is going to be the last value in the discounted prices array.
4. The function returns an array. This array contains the discounted prices for all the items in the input `prices`.
5. An error will ocurr. I is defined using let, which limits its scope to only the for loop. Trying to access it outside of the loop will result in an error.
6. An error will ocurr. DiscountedPrice's scope is limited to the for loop, and cannot be accessed outisde of it.
7. No errors. It will print out the last discounted price in the array as finalPrice is defined using let in the same scope as the print statement.
8. No errors. It will return the array containing all of the discounted prices after the loop finishes.
9. An error will ocurr. I is limited to the scoope of the for loop, so it is not accessible outside of it.
10. No errors will ocurr: since length is defined as a const and never updated, it will not throw an error.
11. An error will ocurr. Since discounted is a const array, any attempt to update values in it will cause an error to be thrown. In the for loop since the discounted prices are being pushed, this counts as change and will cause an error.
12. Object Questions:\
    A. `student.name`\
    B. `student["Grad Year"]`\
    C. `student.greeting();`\
    D. `student['Favorite Teacher'].name;`\
    E. `student.courseLoad[0];`\
13. Arithmetic\
    A. '32': 2 is mapped to a string and then concattenated.\
    B. 1, since - has no string operations, it defaults to integer subtraction and converts '3' to an int and subtracts.\
    C. 3: converts null to int (0) and gets added to 3 (int).\
    D. '3null': '3' drives the string concattenation, and converts null to string.\
    E. 4: True gets casted to 1 and added to 4\
    F. 0: Both get casted to int and become 0, and are added.\
    G. '3undefined': Undefined gets casted to a string and concatenated to the end of 3.\
    H. NaN: Undefined is not a number is it not a valid subtraction\
14. Comparison\
    A. True - Obvious: 2 is both numerically and lexographically larger than 1.\
    B. False - lexographical comparison: 1 is alphabetically less than 2\
    C. True - Type conversion from '2' to 2.\
    D. False - Checks if same type, which is not the case.\
    E. False - true gets converted to 1 which != 2.\
    F. True - Boolean(2) is converted to a boolean true, which are equal.\
15. `==` refers to normal equality that allows JS to type cast and then check for equality. `===` checks that the data types are equivalent as well.\
17. modifyArray is called with [1, 2, 3] and callback = doSomething. Then for every element in the array, the variable callback (which holds doSomething) is called. This results in every element being doubled, and pushed onto the new array. The new array with doubled values is returned.\
19. `1 4 3 2` (all should be line seperated)