def braceValid(str):
    braces=[]
    for letter in str:
        if letter =='(':
            braces.append(letter)
        elif braces==[] and letter==')':
            return False
        elif letter==')' and braces!=[]:
            braces.pop()
    if braces==[]:
        return True
    else:
        return False

print(braceValid('((())(()))'))
