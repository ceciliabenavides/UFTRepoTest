'Sample script
Print "Hello World"

'**** EXERCISE 1 *****
' 1. Open browser and navigate to advantageonlineshipping
SystemUtil.Run "chrome.exe", "http://advantageonlineshopping.com/#/" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link 2")_;_script infofile_;_ZIP::ssf3.xml_;_
Print "Navigate to AdvantageOnlineShopping.com"

'Go to a Category
Browser("Advantage Shopping_2").Page("Advantage Shopping").Link("SpeakersCategoryTxt").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Print "Select Speakers"

'Select a Product
Browser("Advantage Shopping_2").Page("Advantage Shopping").Image("fetchImage?image_id=4100").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Print "Select a Speaker"

'Click on + icon to increase the qty
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebElement("PlusIcon").Click
Print "Increase qty"

'Go to Car
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("save_to_cart").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Print "Add to Cart"

'Checkout
Browser("Advantage Shopping_2").Page("Advantage Shopping").WebButton("check_out_btn").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Print "Click on CheckOut"

'Close Browser
SystemUtil.CloseProcessByName("chrome.exe")




