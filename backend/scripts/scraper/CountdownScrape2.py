from random import randint
import time

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

# https://medium.com/ymedialabs-innovation/web-scraping-using-beautiful-soup-and-selenium-for-dynamic-page-2f8ad15efe25
def initializeDriver(url):
    options = webdriver.ChromeOptions()
    options.add_argument('--ignore-certificate-errors')
    options.add_argument('--incognito')
    driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    driver.get(url)
    time.sleep(2)
    return driver

def scraper(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    items = []
    items_selector = soup.find_all('div', class_='fs-product-card')
    for item_selector in items_selector:
        item_dollar = item_selector.find('span', class_='fs-price-lockup__dollars')
        if item_dollar is None:
            continue
        item_dollar_price = item_dollar.get_text()

        item_cents = item_selector.find('span', class_='fs-price-lockup__cents')
        item_cent_price = item_cents.get_text()
        
        item_name = item_selector.find('a')
        print(item_name['aria-label'])

        printstring = "item price: $" + str(item_dollar_price) + "." + str(item_cent_price)
        print(printstring)
        items.append(item_dollar_price)

def getNextPage2(page_source):
    soup = BeautifulSoup(page_source, 'lxml')
    buttons = soup.find_all('li', class_='fs-pagination__item')
    next_button = buttons[(len(buttons))-1]
    next_button_found = next_button.find('a', class_='btn btn--primary btn--large fs-pagination__btn fs-pagination__btn--next')
    return bool(next_button_found is not None)

def loopPages(url):
    counter = 2
    check = True
    URL = url
    while (check):
        driver = initializeDriver(URL)
        scraper(driver.page_source)
        check = getNextPage2(driver.page_source)
        driver.quit()
        URL = url
        URL += "&pg=" + str(counter)
        time.sleep(0.5)
        counter += 1

#def clickNextPage(driver):
#    next_buttons = driver.find_elements(By.CLASS_NAME, 'fs-pagination__item')
#    last = next_buttons[len(next_buttons)-1]
#    action = actions(driver)
#    action.moveToElement(last).perform()
    #next_button_found = last.find('a', class_='btn btn--primary btn--large fs-pagination__btn fs-pagination__btn--next')
    #driver.execute_script("arguments[0].click();", last)
#    last.click()
#    time.sleep(5)
#    return True

URLbase = "https://www.paknsave.co.nz/shop/category/fresh-foods-and-bakery"
URLbase2 = "https://www.paknsave.co.nz/shop/Search?q=bread"
URLbase3 = "https://www.paknsave.co.nz/shop/Search?q=baked%20beans"
URL2 = "https://www.paknsave.co.nz/shop/Search?q=baked%20beans&pg=1"

loopPages(URLbase2)
loopPages(URLbase3)




#main
#driver = initializeDriver(URL)

#page_source = driver.page_source
#scraper(page_source)

#driver.quit
#time.sleep(3)
#driver = initializeDriver(URL2)
#scraper(driver.page_source)
#driver.quit

#time.sleep(3)
#for x in range(len(next_buttons)):
#    print(x)
#    print(next_buttons[x])

#if next_buttons[1].is_displayed():
#    driver.execute_script("arguments[0].click();", next_buttons[1])
#time.sleep(4)
#driver.execute_script("arguments[0].click();", next_buttons[1])
#driver.execute_script("arguments[0].click();", more_buttons[x])
#driver.execute_script("arguments[0].click();", next_buttons[2])
#time.sleep(4)
#page_source=driver.page_source