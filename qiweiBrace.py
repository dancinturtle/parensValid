def braceValid2(str):
    braces=[]
    braceDic={')':'(','}':'{',']':'['}
    for letter in str:
        if letter in ('(','[','{'):
            braces.append(letter)
        elif letter in braceDic:
            if braces[-1]==braceDic[letter]:
                braces.pop()
            else:
                return False
    print(braces)
    if braces==[]:
        return True
    else:
        return False

print(braceValid2('((((()))))'))
print(braceValid2('{{}}(([{}])){}[]'))
