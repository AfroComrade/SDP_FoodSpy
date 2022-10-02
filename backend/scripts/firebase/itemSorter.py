def sortProducts():
    productNames = []
    file = open("items.txt", 'r')
    productlines = file.readlines()
    file.close()

    for line in productlines:
        line = line[:len(line)-1]
        productNames.append(line)
    
    productNames.sort()

    file2 = open('./sortedProducts.txt', 'w')
    for line in productNames:
        file2.write(line + '\n')
    file2.close()

sortProducts()