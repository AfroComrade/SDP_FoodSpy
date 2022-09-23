from random import randint
import ScraperCommit

from bs4 import BeautifulSoup
from selenium import webdriver
import pickle
from webdriver_manager.chrome import ChromeDriverManager

# https://medium.com/ymedialabs-innovation/web-scraping-using-beautiful-soup-and-selenium-for-dynamic-page-2f8ad15efe25
def initializeDriver(url):
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    driver.get(url)
    #cookies = pickle.load(open("./cookies.pkl", "rb"))
    #for cookie in cookies:
    #    driver.add_cookie(cookie)
    #time.sleep(2)
    return driver

def scraper(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    items = []
    items_selector = soup.find_all('div', class_='fs-product-card')
    for item_selector in items_selector:
        product = {}
        item_dollar = item_selector.find('span', class_='fs-price-lockup__dollars')
        if item_dollar is None:
            continue
        item_dollar_price = item_dollar.get_text()

        item_cents = item_selector.find('span', class_='fs-price-lockup__cents')
        item_cent_price = item_cents.get_text()

        item_imageURL = item_selector.find('div', class_="fs-product-card__product-image")['data-src-s']
        
        item_name = item_selector.find('a')
        item_name = item_name['aria-label']
        item_price = str(item_dollar_price) + "." + str(item_cent_price)
        item_location = "newworld"

        product = dict({"product": item_name, "price": item_price, "imageURL": item_imageURL, "location": item_location})
        items.append(product)
    return items


def getNextPage2(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    buttons = soup.find_all('li', class_='fs-pagination__item')
    next_button = buttons[(len(buttons))-1]
    next_button_found = next_button.find('a', class_='btn btn--primary btn--large fs-pagination__btn fs-pagination__btn--next')
    return bool(next_button_found is not None)

def loopPages(url):
    items = []
    counter = 2
    check = True
    URL = url
    while (check):
        driver = initializeDriver(URL)
        items = scraper(driver.page_source)
        print("committing" + URL)
        commitItems(items)
        check = getNextPage2(driver.page_source)
        driver.quit()
        URL = url
        URL += "?pg=" + str(counter)
        #time.sleep(0.5)
        counter += 1
    return items

def commitItems(items):
    print(items)
    # Open the items.txt to retrieve all the items we currently have listed
    file = open('../firebase/items.txt', 'r')
    productlines = file.readlines()
    file.close()
    productnames = []
    for line in productlines:
        name = line[:len(line)-1]
        productnames.append(name)

    # Add the items to our product list
    for item in items:
        productnames.append(item['product'])
    
    # Remove Duplicates & sort
    productnames = list(dict.fromkeys(productnames))
    productnames.sort()
    file = open('../firebase/items.txt', 'w')
    # Save the items in
    for line in productnames:
        file.write(line + '\n')
    file.close()

    #Save into fitebase
    ScraperCommit.firebaseCommit(items)


ScraperCommit.firebaseInitialize()
file = open('./newworld.txt', 'r')
paknsaveURLS = file.readlines()
file.close()
items = []
for line in paknsaveURLS:
    items = loopPages(line[:len(line)-1])